import { useParams, useLoaderData } from 'react-router-dom'; //access the URL parameters of the current route.
import articles from '../article-content';
import axios from 'axios';
import CommentList from './CommentList';
import { useState } from 'react';
import AddCommentForm from '../AddCommentForm';

export default function ArticlePage() {
  const { name } = useParams(); // destructure the name from the useParams hook
  const { upvotes: initialUpvotes, comments: initialComments } = useLoaderData();
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [comments, setComments] = useState(initialComments);

  const article = articles.find(a => a.name === name);

  async function onUpvoteClicked() {
    const response = await axios.post('/api/articles/' + name + '/upvote');
    const updatedArticleData = response.data;
    setUpvotes(updatedArticleData.upvotes);
  }

  async function onAddComment(nameText, commentText) {
    const response = await axios.post('/api/articles/' + name + '/comments', {
      postedBy: nameText,
      text: commentText,
    });
    const updatedArticleData = response.data;
    setComments(updatedArticleData.comments);
  }

  return (<>
    <h1 className="mt-10 text-3xl font-bold text-slate-800 dark:text-white">{article.title}</h1>
    <button className="mt-2 text-slate-600 hover:text-slate-800 bg-slate-200 rounded-md px-2 py-1 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300" onClick={onUpvoteClicked}>Upvote</button>
    <p className="mt-2 text-slate-600 dark:text-slate-300">This article has {upvotes} upvotes!</p>
    {article.content.map((p, index) => <p key={index} className="mt-2 text-slate-600 dark:text-slate-300">{p}</p>)}
    <AddCommentForm onAddComment={onAddComment} />
    <CommentList comments={comments} />
  </>
  )
}

export async function loader({ params }) {
  const response = await axios.get('/api/articles/' + params.name);
  const { upvotes, comments } = response.data;
  return { upvotes, comments };
}