import { useParams, useLoaderData } from 'react-router-dom'; //access the URL parameters of the current route.
import articles from '../article-content';
import axios from 'axios';
import CommentList from './CommentList';
import { useState } from 'react';

export default function ArticlePage() {
  const { name } = useParams(); // destructure the name from the useParams hook
  const { upvotes, comments } = useLoaderData();
  const [upvotesCount, setUpvotesCount] = useState(upvotes);

  const article = articles.find(a => a.name === name);

  async function onUpvoteClicked() {
    const response = await axios.post('/api/articles/' + name + '/upvote');
    const updatedArticleData = response.data;
    setUpvotesCount(updatedArticleData.upvotes);
  }

  return (<>
    <h1 className="mt-10 text-3xl font-bold text-slate-800 dark:text-white">{article.title}</h1>
    <button className="mt-2 text-slate-600 hover:text-slate-800 bg-slate-200 rounded-md px-2 py-1 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300" onClick={onUpvoteClicked}>Upvote</button>
    <p className="mt-2 text-slate-600 dark:text-slate-300">This article has {upvotesCount} upvotes!</p>
    {article.content.map((p, index) => <p key={index} className="mt-2 text-slate-600 dark:text-slate-300">{p}</p>)}
    <CommentList comments={comments} />
  </>
  )
}

export async function loader({ params }) {
  const response = await axios.get('/api/articles/' + params.name);
  const { upvotes, comments } = response.data;
  return { upvotes, comments };
}