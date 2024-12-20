import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    async function logIn() {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            <div className="flex flex-col items-center h-screen">
                <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Login</h1>
                {error && <p>{error}</p>}
                <input className="mt-2 block bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-md" placeholder="Your Email Address" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="mt-2 block bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-md" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className="mt-2 text-slate-600 hover:text-slate-800 bg-slate-200 rounded-md px-2 py-1 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700" onClick={logIn}>Log In</button>
                <Link className="text-slate-600 hover:text-slate-800 rounded-md px-2 py-1 dark:text-slate-300 hover:underline" to='/create-account'>Don't have an account? Create one here.</Link>
            </div>
        </>
    );
}