import React, { useMemo, FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import useArticle from '@/hooks/useArticle';
import './style.scss';
import ImgRenderer from './renderer/imgRenderer';
import LinkRenderer from './renderer/aRenderer';
import { TocItem, parseMarkdownHeadings } from './utils';

interface ArticleProps {
  content: string;
}

interface TableOfContentsProps {
  toc: TocItem[];
}


export const TableOfContent: FC<TableOfContentsProps> = ({ toc }) => {
  return (
    <nav className="toc">
      <h2>目录</h2>
      <ul>
        { toc.map((item) => (
          <li key={ item.id } style={ {
            margin: `${ Math.max(5 - item.level, 0) * 7 }px 0 ${ Math.max(5 - item.level, 0) * 7 }px ${ (item.level - 1) * 12 }px`,
          } }>
            <a href={ `#${ item.id }` }>{ item.title }</a>
          </li>
        )) }
      </ul>
    </nav>
  );
};


const Article: React.FC<ArticleProps> = ({ content }) => {

  return (
    <div className="article">
      <div className="article-content">
        <ReactMarkdown
          remarkPlugins={ [remarkGfm] }
          components={ {
            a: LinkRenderer,
            img: ImgRenderer,
          } }
        >
          { content }
        </ReactMarkdown>
      </div>
    </div >
  );
};

export default Article;
