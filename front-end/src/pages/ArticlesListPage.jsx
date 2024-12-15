import ArticlesList from "../ArticlesList";
import articles from "../article-content";

export default function ArticlesListPage() {
  return (
    <>
      <h1 className="mt-10 text-3xl font-bold text-slate-800 dark:text-white">Articles</h1>
      <ArticlesList articles={articles} />
    </>
  )
}
