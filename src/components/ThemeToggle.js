"use client"; 
 
import { useTheme } from "@/context/ThemeContext"; 
 
 
export default function ThemeToggle() { 
 
    const { dark, setDark } = useTheme(); 
 
 
    return ( 
 
        <button 
            onClick={() => setDark(!dark)} 
            className="px-3 py-2 rounded-lg bg-indigo-600 text-white " 
        > 
 
            {dark ? "☀️ Light" : "🌙 Dark"} 
 
 
        </button> 
 
    ) 
 
}