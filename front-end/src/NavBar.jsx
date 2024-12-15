import { Link } from "react-router-dom"
import ThemeToggle from "./components/ThemeToggle"

export default function NavBar() {
    return (
        <nav className="bg-slate-200 dark:bg-slate-800 transition-colors duration-200">
            <ul className="flex justify-center items-center">
                <li className="p-2 text-slate-800 dark:text-white" ><Link to='/'>Home</Link></li>
                <li className="p-2 text-slate-800 dark:text-white" ><Link to='/about'>About</Link></li>
                <li className="p-2 text-slate-800 dark:text-white" ><Link to='/articles'>Articles</Link></li>
                <li className="p-2"><ThemeToggle /></li>
            </ul>
        </nav>
    )
}