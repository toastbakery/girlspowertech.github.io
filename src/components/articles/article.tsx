import React, { FC, PropsWithChildren } from 'react';
import { useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './style.scss';
import ImgRenderer from './renderer/imgRenderer';
import LinkRenderer from './renderer/aRenderer';
import { TocItem } from './utils';

interface ArticleProps {
  content: string;
}

interface TableOfContentsProps {
  toc: TocItem[];
}



export const TableOfContent: FC<TableOfContentsProps> = ({ toc }) => {

  const { pathname } = useLocation();

  return (
    <nav className="toc">
      <h2>目录</h2>
      <ul>
        { toc.map((item) => (
          <li key={ item.id } style={ {
            margin: `${ Math.max(5 - item.level, 0) * 7 }px 0 ${ Math.max(5 - item.level, 0) * 7 }px ${ (item.level - 1) * 12 }px`,
          } }>
            <a href={ `#${ pathname }#${ item.id }` }>{ item.title }</a>
          </li>
        )) }
      </ul>
    </nav>
  );
};


const Heading: FC<PropsWithChildren<{ level: number }>> = ({ level, children }) => {
  const HeadingTag = `h${ level }` as keyof JSX.IntrinsicElements;
  if (!children) {
    return <HeadingTag />;
  }
  return <HeadingTag id={ encodeURIComponent(children.toString()) }>{ children }</HeadingTag>;
}

const Article: React.FC<ArticleProps> = ({ content }) => {

  return (
    <div className="article">
      <div className="article-content">
        <ReactMarkdown
          remarkPlugins={ [remarkGfm] }
          components={ {
            a: LinkRenderer,
            img: ImgRenderer,
            h1: ({ children }) => <Heading level={ 1 }>{ children }</Heading>,
            h2: ({ children }) => <Heading level={ 2 }>{ children }</Heading>,
            h3: ({ children }) => <Heading level={ 3 }>{ children }</Heading>,
            h4: ({ children }) => <Heading level={ 4 }>{ children }</Heading>,
            h5: ({ children }) => <Heading level={ 5 }>{ children }</Heading>,
            h6: ({ children }) => <Heading level={ 6 }>{ children }</Heading>,
          } }
        >
          { content }
        </ReactMarkdown>
      </div>
    </div >
  );
};

export default Article;
