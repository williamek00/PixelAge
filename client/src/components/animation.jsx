import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = () => {
    const lottieRef = useRef(null);

    const playAnimation = () => {
      lottieRef.current.play();
    };
  
    return (
      <div>
        <Lottie
          ref={lottieRef}
          options={animationOptions}
          style={{ width: '300px', height: '300px' }}
        />
        <button onClick={playAnimation}>Play Animation</button>
      </div>
    );
};

export default LottieAnimation;
