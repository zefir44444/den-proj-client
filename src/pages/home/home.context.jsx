// home.context.js
import React from 'react';
import img1 from '../../assets/images/hero/1.jpg';
import img2 from '../../assets/images/hero/2.jpg';
import img3 from '../../assets/images/hero/3.jpg';
import img4 from '../../assets/images/hero/4.jpg';
import img5 from '../../assets/images/hero/5.jpg';
import img6 from '../../assets/images/hero/6.jpg';
import img7 from '../../assets/images/hero/7.jpg';
import img8 from '../../assets/images/hero/8.jpg';
import img9 from '../../assets/images/hero/9.jpg';

const columnLargeText = 'Apartment renovation in Finland';
const teamDescriptionText =
  "Have you decided to make a renovation? Our specialists are at your service! Affordable prices and top-level quality of work - that's about us! You just need to leave a request on the website, we will take care of the rest";

const columnLargeTextBottom = 'Discover Our Renovation Solutions';
const columnDescriptionText =
  'To accurately indicate how much the finishing costs, a measuring technologist will come to you. He will assess the condition of the home, calculate the cost of preparatory work, and select construction and finishing materials together with you. After this, you will know exactly the cost of repairing each square meter. The repair assessment service is free.';

const heroImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const HomePageContext = React.createContext({
  columnLargeText,
  teamDescriptionText,
  columnLargeTextBottom,
  columnDescriptionText,
  heroImages,
});

export const HomePageProvider = ({ children }) => {
  return (
    <HomePageContext.Provider
      value={{
        columnLargeText,
        teamDescriptionText,
        columnLargeTextBottom,
        columnDescriptionText,
        heroImages,
      }}>
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageContext;
