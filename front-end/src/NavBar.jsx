import { Link } from "react-router-dom"
import ThemeToggle from "./components/ThemeToggle"
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import useUser from "./useUser";

export default function NavBar() {

    const { user, isLoading } = useUser();
    const navigate = useNavigate();

    return (
        <nav className="bg-slate-200 dark:bg-slate-800 transition-colors duration-200">
            <ul className="flex justify-center items-center">
                <li className="p-2 text-slate-800 dark:text-white" ><Link to='/'>Home</Link></li>
                <li className="p-2 text-slate-800 dark:text-white" ><Link to='/about'>About</Link></li>
                <li className="p-2 text-slate-800 dark:text-white" ><Link to='/articles'>Articles</Link></li>
                {isLoading ? <li>Loading...</li> : (
                    <>
                        {user && (
                            <li className="p-2 text-slate-800 dark:text-white" >
                                <p>logged in as {user.email}</p>
                            </li>)}
                    </>)}
                <li className="p-2 text-slate-800 dark:text-white" >
                    {user ? <button onClick={() => signOut(getAuth())}>Sign Out</button> : <button onClick={() => navigate('/login')}>Sign In</button>}
                </li>
                <li className="p-2"><ThemeToggle /></li>
            </ul>
        </nav>
    )
}