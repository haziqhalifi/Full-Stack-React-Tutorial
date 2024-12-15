import { Link } from "react-router-dom"

export default function ArticlesList({ articles }) {
    return (
        <>
            {articles.map(a => (
                <Link to={'/articles/' + a.name}>
                    <h3 className="mt-4 text-xl font-bold text-slate-800 dark:text-white">{a.title}</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">{a.content[0].substring(0, 150)}</p>
                </Link>
            ))}
        </>
    )
}