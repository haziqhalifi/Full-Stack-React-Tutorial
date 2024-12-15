import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700"
        >
            {darkMode ? '🌞' : '🌙'}
        </button>
    );
} 