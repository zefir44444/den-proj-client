// home.context.js
import React from 'react';

const headingBig = 'Transform Your Home with Our Renovation Services';
const cardText =
  'Let us help you bring your dream home to life. Our team of experienced professionals is dedicated to providing high-quality renovation services tailored to your needs.';

const hoveredFront =
  'rotate-2 shadow-2xl bg-dark-background text-dark-foreground dark:bg-light-accent1 dark:text-light-foreground';
const defaultFront =
  'rotate-1 bg-light-accent1 text-dark-background dark:bg-light-accent2 dark:text-light-foreground';
const hoveredBack =
  '-rotate-3 shadow-2xl bg-light-accent2 dark:bg-light-accent2 h-[80%]';
const defaultBack =
  '-rotate-1 bg-light-accent2 dark:bg-light-accent1 h-[80%]';

const PromoteCardContext = React.createContext({
  headingBig,
  cardText,
  hoveredFront,
  defaultFront,
  hoveredBack,
  defaultBack,
});

export const CardComponentProvider = ({ children }) => {
  return (
    <PromoteCardContext.Provider
      value={{
        headingBig,
        cardText,
        hoveredFront,
        defaultFront,
        hoveredBack,
        defaultBack,
      }}>
      {children}
    </PromoteCardContext.Provider>
  );
};

export default PromoteCardContext;
