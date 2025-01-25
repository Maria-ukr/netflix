import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const MovingText  = ({ text, position, speed, color='black', fontSize='16px' }) => {
    const ref = useRef();

    useFrame(() => {
        if (ref.current.position.x < position.x) {
            ref.current.position.x += speed;
        }
    });

    return (
        <Text
            ref={ref}
            color={color}
            fontSize={fontSize}
            maxWidth={200}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign="left"
            anchorX="left"
            anchorY="middle"
            position={position}
        >
            {text}
        </Text>
    );
};

export default MovingText 