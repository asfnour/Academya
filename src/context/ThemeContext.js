"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect
} from "react";


const ThemeContext = createContext();


export function ThemeProvider({ children }) {

    const [dark, setDark] = useState(false);
    const [isThemeLoaded, setIsThemeLoaded] = useState(false);


    // Load saved theme
    useEffect(() => {

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            setDark(true);
        } else {
            setDark(false);
        }

        setIsThemeLoaded(true);

    }, []);


    // Apply theme
    useEffect(() => {

        if (!isThemeLoaded) return;

        document.documentElement.classList.toggle(
            "dark",
            dark
        );

        localStorage.setItem(
            "theme",
            dark ? "dark" : "light"
        );

    }, [dark, isThemeLoaded]);


    return (

        <ThemeContext.Provider
            value={{
                dark,
                setDark,
                isThemeLoaded
            }}
        >

            {children}

        </ThemeContext.Provider>

    );

}


export function useTheme() {
    return useContext(ThemeContext);
}