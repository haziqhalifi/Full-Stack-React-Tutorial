import { useParams } from 'react-router-dom'; //access the URL parameters of the current route.
import articles from '../article-content';

export default function ArticlePage() {
  const { name } = useParams(); // destructure the name from the useParams hook

  const article = articles.find(a => a.name === name);
  return (<>
    <h1 className="mt-10 text-3xl font-bold text-slate-800 dark:text-white">{article.title}</h1>
    {article.content.map((p, index) => <p key={index} className="mt-2 text-slate-600 dark:text-slate-300">{p}</p>)}
  </>
  )
}
