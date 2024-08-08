import React from 'react';

export const BtnComponent = ({ btnType = 'default', ...props }) => {
  switch (btnType) {
    case 'wide':
      return <BtnWide {...props} />;

    case 'wide-outline':
      return <BtnWideOutline {...props} />;

    default:
      return <BtnDefault {...props} />;
  }
};

const BtnDefault = ({
  btnWidth = '120px',
  btnHeight = '48px',
  btnPaddingX = '24px',
  btnPaddingY = '8px',
  btnFontSize = '16px',
  btnText = 'Default',
}) => {
  return (
    <div
      style={{
        width: btnWidth,
        height: btnHeight,
        padding: `${btnPaddingY} ${btnPaddingX}`,
        fontSize: btnFontSize,
      }}
      className={`btn flex
                  bg-light-primary1 dark:bg-dark-primary1
                  text-dark-foreground
                  hover:bg-dark-background dark:hover:bg-dark-background
                  border-light-primary1 border-2 dark:border-dark-primary1
                  transition-all duration-200 ease-linear
                  rounded-3xl cursor-pointer items-center`}
      role="button">
      <span className="text-center w-full">{btnText}</span>
    </div>
  );
};

const BtnWide = ({ btnText = 'DefaultWide', className = '' }) => {
  // console.log(className);
  return (
    <div
      className={`btn flex ${className} font-bold
                  bg-light-primary1 dark:bg-light-primary1
                  text-dark-foreground
                  hover:bg-light-primary2 dark:hover:bg-light-primary2
                  border-light-primary1 dark:border-light-primary2
                  transition-all duration-200 ease-linear
                  rounded-3xl cursor-pointer items-center h-11 px-2 text-base`}
      role="button">
      <span className="text-center w-full">{btnText}</span>
    </div>
  );
};

const BtnWideOutline = ({ btnText = 'DefaultWide', className}) => {
  return (
    <div
      className={`btn flex ${className} font-bold
                 text-light-primary1 hover:text-dark-foreground
                  hover:bg-light-primary2 dark:hover:bg-light-primary2
                  border-light-primary1 border-2 dark:border-light-primary2
                  transition-color duration-200 ease-linear
                  rounded-3xl cursor-pointer items-center h-11 px-2 text-base`}
      role="button">
      <span className="text-center w-full">{btnText}</span>
    </div>
  );
};
