import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '@/components/articles';
import Layout from '@/components/layout';
import data from '@/components/articles/data.json';

const ArticleWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const filepath = `./docs/${ id }.md`;

  useEffect(() => {
    document.title = data.find((article) => article.id === id)?.title || 'Article Not Found';
  }, [id]);

  return <Layout content={ <Article filename={ filepath! } /> } />;
};


export default ArticleWrapper;
