import { useContext, useEffect, useState } from 'react';
import './App.css';
import { NavComponent } from './components/nav/nav.component';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/home.page';
import { Varhub } from './var-hub.context';
import { FooterComponent } from './components/footer/footer.component';

function App() {
  const [vars, setVars] = useContext(Varhub);

  useEffect(() => {
    // Update the background color of the >> body << based on the theme
    if (vars.isDarkTheme) {
      document.body.style.backgroundColor = '#27284E'; // Dark background color
    } else {
      document.body.style.backgroundColor = '#FFFFFF'; // Light background color
    }
  }, [vars.isDarkTheme]); // Only re-run the effect if vars.isDarkTheme changes

  return (
    <div className={`${vars.isDarkTheme ? 'dark' : ''} flex flex-col min-h-screen`}>
      <div>
        <NavComponent />
      </div>
      <main className='flex flex-grow'>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
