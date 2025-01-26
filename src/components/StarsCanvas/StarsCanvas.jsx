import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import styles from './StarsCanvas.module.scss';

function getPoint() {
  const u = Math.random();
  const v = Math.random();
  const theta = u * 2.0 * Math.PI;
  const phi = Math.acos(2.0 * v - 1.0);
  const r = Math.cbrt(Math.random());
  const sinTheta = Math.sin(theta);
  const cosTheta = Math.cos(theta);
  const sinPhi = Math.sin(phi);
  const cosPhi = Math.cos(phi);
  return {
    x: r * sinPhi * cosTheta,
    y: r * sinPhi * sinTheta,
    z: r * cosPhi,
  };
}

const Stars = () => {
  const ref = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 }); // Цільове обертання
  const smoothRotation = useRef({ x: 0, y: 0 }); // Плавне обертання

  // Генерація геометрії зірок
  const pointsGeometry = new THREE.BufferGeometry();
  const vertices = [];
  for (let i = 0; i < 10000; i++) {
    const point = getPoint();
    vertices.push(point.x * 4, point.y * 4, point.z * 4);
  }
  pointsGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  // Матеріал для зірок
  const pointsMaterial = new THREE.PointsMaterial({
    size: 0.01,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.8,
    color: 0xffffff,
  });

  // Відслідковуємо рух миші
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      targetRotation.current = { x: y * 0.1, y: x * 0.1 }; // Задаємо цільові значення
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Анімація руху
  useFrame(() => {
    if (ref.current) {
      const time = performance.now() * 0.0001;
      const rotationSpeed = 0.1;
      ref.current.rotation.y = time * rotationSpeed;
      // Плавне інтерполювання між поточним і цільовим обертанням
      smoothRotation.current.x +=
        (targetRotation.current.x - smoothRotation.current.x) * 0.05;
      smoothRotation.current.y +=
        (targetRotation.current.y - smoothRotation.current.y) * 0.05;

      ref.current.rotation.x = smoothRotation.current.x;
      ref.current.rotation.y += smoothRotation.current.y;
    }
  });

  return (
    <points ref={ref} geometry={pointsGeometry} material={pointsMaterial} />
  );
};

const StarsCanvas = () => {
  return (
    <Canvas className={styles.canvas} style={{position: 'absolute'}}>
        <PerspectiveCamera position={[0, 0, 8]} />
        <Stars />
    </Canvas>
  );
};
export default StarsCanvas;
// camera={{position: [2, 2, 2]}}
