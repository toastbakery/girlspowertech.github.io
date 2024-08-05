import React, { Fragment, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { articles } from "@/components/articles";
import Envelope from "@/components/envelope";
import Layout from "@/components/layout";

// tag selector component
const TagSelector: React.FC<{
  allTags: string[];
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
}> = ({ allTags, selectedTag, setSelectedTag }) => (
  <div className="tag-selector">
    <button
      onClick={() => setSelectedTag(null)}
      className={selectedTag === null ? "active" : ""}
    >
      All
    </button>
    {allTags.map((tag) => (
      <button
        key={tag}
        onClick={() => setSelectedTag(tag)}
        className={selectedTag === tag ? "active" : ""}
      >
        {tag}
      </button>
    ))}
  </div>
);

const ArticleList: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  // get all unique tags
  const allTags = useMemo(() => {
    const tags = articles.flatMap((article) => article.tags);
    return Array.from(new Set(tags));
  }, []);

  // Filter articles
  const filteredArticles = useMemo(() => {
    if (!selectedTag) return articles;
    return articles.filter((article) => article.tags.includes(selectedTag));
  }, [selectedTag]);

  const List = () => (
    <div className="article-list">
      {filteredArticles.map((article, idx) => (
        <Fragment key={idx}>
          <Envelope
            key={idx}
            {...article}
            onClick={() => navigate(`/articles/${article.id}`)}
          />
        </Fragment>
      ))}
    </div>
  );

  return (
    <Layout
      content={
        <div className="article-page">
          <TagSelector
            allTags={allTags}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
          <List />
        </div>
      }
    />
  );
};
export default ArticleList;
