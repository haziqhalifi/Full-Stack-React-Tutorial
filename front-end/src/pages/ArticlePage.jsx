import { useParams } from 'react-router-dom'; //access the URL parameters of the current route.
import articles from '../article-content';

export default function ArticlePage() {
  const { name } = useParams(); // destructure the name from the useParams hook

  const article = articles.find(a => a.name === name);
  return (<>
    <h1>{article.title}</h1>
    {article.content.map(p => <p key={p}>{p}</p>)}
  </>
  )
}