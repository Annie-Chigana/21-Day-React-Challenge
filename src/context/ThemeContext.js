import React, { createContext, useState, useEffect} from 'react';


//create a context with default value
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    //initialising local state, use a default value
    const storedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(storedTheme || 'light');

    //update local storage for theme changes
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    //toggle function for theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
};
