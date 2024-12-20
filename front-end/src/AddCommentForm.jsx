import {
    useState

} from "react";
export default function AddCommentForm({ onAddComment }) {

    const [nameText, setNameText] = useState('');
    const [commentText, setCommentText] = useState('');
    return (
        <div className="mt-10 flex flex-col items-center">
            <h3 className="mt-4 text-2xl font-bold text-slate-800 dark:text-white">Add a comment</h3>
            <label className="mt-2 block text-slate-600 dark:text-slate-300">
                Name:
                <input className="mt-2 block bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-md" type="text" value={nameText} onChange={e => setNameText(e.target.value)} />
            </label>
            <label className="mt-2 block text-slate-600 dark:text-slate-300">
                Comment:
                <textarea className="mt-2 block bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-md" value={commentText} onChange={e => setCommentText(e.target.value)} />
            </label>
            <button className="mt-2 text-slate-600 hover:text-slate-800 bg-slate-200 rounded-md px-2 py-1 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700" onClick={() => {
                onAddComment(nameText, commentText);
                setNameText('');
                setCommentText('');
            }}>Add Comment</button>
        </div>
    )

}