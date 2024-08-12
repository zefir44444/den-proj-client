import React from 'react';

export default function Nav({ currentLanguage, changeLanguage, translations }) {
  return (
    <nav>
      <a href="/">{translations.home}</a> | 
      <a href="/goodbye">{translations.goodbye}</a> | 
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('fi')}>FI</button>
    </nav>
  );
}