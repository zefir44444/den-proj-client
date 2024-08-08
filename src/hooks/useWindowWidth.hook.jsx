import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    //   console.log(`Current window width: ${window.innerWidth}`);
    };

    window.addEventListener('resize', handleResize);
    // console.log(`Initial window width: ${window.innerWidth}`);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export default useWindowWidth;
