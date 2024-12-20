import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function CreateAccountPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    async function createAccount() {
        if (password !== confirmPassword) {
            setError('Password and Confirm Password do not match!')
            return;
        }
        try {
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            <div className="flex flex-col items-center h-screen">
                <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Create Account</h1>
                {error && <p className="text-red-500">{error}</p>}
                <input className="mt-2 block bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-md" placeholder="Your Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="mt-2 block bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-md" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <input className="mt-2 block bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-md" placeholder="Confirm Password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <button className="mt-2 text-slate-600 hover:text-slate-800 bg-slate-200 rounded-md px-2 py-1 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700" onClick={createAccount}>Create Account</button>
                <Link className="text-slate-600 hover:text-slate-800 rounded-md px-2 py-1 dark:text-slate-300 hover:underline" to='/login'>Already have an account? Login here.</Link>
            </div>
        </>
    );
}