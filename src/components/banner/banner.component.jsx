import React from 'react';
import './banner.style.css';

const BannerComponent = ({ speed = 30, images, isReverse = false }) => {
  return (
    <div className="scroll__inner h-[400px]">
      <div className="scroll__wrapper">
        <SectionsCmp speed={speed} images={images} isReverse={isReverse}/>
      </div>
    </div>
  );
};
export default BannerComponent;

const SectionsCmp = ({speed, images, isReverse}) => {
  return (
    <>
      <section className={isReverse ? 'scroll__section_reverse' : 'scroll__section'} style={{ '--speed': `${speed}s` }}>
        {images.map((image, index) => (
          <div className="image" key={index}>
            <img src={image} alt={index} />
          </div>
        ))}
      </section>
      <section className={isReverse ? 'scroll__section_reverse' : 'scroll__section'} style={{ '--speed': `${speed}s` }}>
        {images.map((image, index) => (
          <div className="image" key={index}>
            <img src={image} alt={index} />
          </div>
        ))}
      </section>
    </>
  );
};
