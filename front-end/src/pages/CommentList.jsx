export default function CommentList({ comments }) {
    return (
        <>
            <h3 className="mt-4 text-2xl font-bold text-slate-800 dark:text-white">Comments:</h3>
            {comments.map(comment => (
                <div key={comment.text}>
                    <h4 className="mt-4 text-xl font-bold text-slate-800 dark:text-white">{comment.postedBy}</h4>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">{comment.text}</p>
                </div>
            ))}
        </>
    )
}