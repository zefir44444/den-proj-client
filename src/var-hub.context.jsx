import React, { useState, useContext, useEffect } from 'react';

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('isDarkTheme');
    return savedTheme !== null ? JSON.parse(savedTheme) : false;
};

const vars = {
    isDarkTheme:getInitialTheme(),
};

export const Varhub = React.createContext();

const Store = ({ children }) => {
    const [appVars, setVars] = useState(vars);

    useEffect(() => {
        localStorage.setItem('isDarkTheme', JSON.stringify(appVars.isDarkTheme));
    }, [appVars.isDarkTheme]);

    return (
        <Varhub.Provider value={[appVars, setVars]}>{children}</Varhub.Provider>
    )
}

export default Store;