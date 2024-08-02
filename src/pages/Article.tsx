import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Article, TableOfContent } from '@/components/articles';
import Layout from '@/components/layout';
import data from '@/components/articles/data.json';
import useArticle from '@/hooks/useArticle';
import { parseMarkdownHeadings } from '@/components/articles/utils';
import Nav from '@/components/nav';


const getAnchor = (hash: string) => {
  const lastHash = hash.split('#').pop()!;
  return lastHash;
}


const ArticleWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const content = useArticle(`./docs/${ id }.md`!);

  // get the last one hash after the article is loaded

  useEffect(() => {
    if (window.location.hash) {
      const id = getAnchor(window.location.hash);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        })
      }
    }
  }, [window.location.hash]);


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
