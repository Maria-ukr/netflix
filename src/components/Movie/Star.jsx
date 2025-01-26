const Star = (props) => {
  return (
    <svg
      width='30'
      height='28'
      viewBox='0 0 30 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d="M15 0L10.45 9.22L0.280029 10.69L7.64003 17.87L5.90003 28L15 23.22L24.1 28L22.36 17.87L29.72 10.7L19.55 9.22L15 0Z"
        stroke='#fff'
        filter='drop-shadow(0 0 3px #FFEA2B)'
      />
    </svg>
  );
};

export default Star;
