import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Article, TableOfContent } from '@/components/articles';
import Layout from '@/components/layout';
import data from '@/components/articles/data.json';
import useArticle from '@/hooks/useArticle';
import { parseMarkdownHeadings } from '@/components/articles/utils';
import Nav from '@/components/nav';

const ArticleWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const content = useArticle(`./docs/${ id }.md`!);

  useEffect(() => {
    document.title = data.find((article) => article.id === id)?.title || 'Article Not Found';
  }, [id]);

  const toc = useMemo(() => parseMarkdownHeadings(content), [content]);

  return <Layout content={ <Article content={ content } /> }
    aside={
      <>
        <Nav />
        <TableOfContent toc={ toc } />
      </>
    }
  />;
};


export default ArticleWrapper;
