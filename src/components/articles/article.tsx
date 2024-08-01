import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import useArticle from '@/hooks/useArticle';
import './style.scss';
import ImgRenderer from './imgRenderer';

interface ArticleProps {
  filename: string;
}

type LinkRendererProps = {
  href?: string;
  children?: React.ReactNode;
};



function LinkRenderer(props: LinkRendererProps) {
  return (
    <a href={ props.href } target="_blank" rel="noreferrer">
      { props.children }
    </a>
  );
}

const Article: React.FC<ArticleProps> = ({ filename }) => {
  const content = useArticle(filename);

  return (
    <div className="article">
      <ReactMarkdown remarkPlugins={ [remarkGfm] } components={ {
        a: LinkRenderer,
        img: ImgRenderer
      } }>
        { content }
      </ReactMarkdown>
    </div>
  );
};

export default Article;
