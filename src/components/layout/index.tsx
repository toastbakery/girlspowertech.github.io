import React from 'react';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Switch from '@/components/switch';

type layoutProps = {
  header?: React.ReactNode;
  content: React.ReactNode;
  aside?: React.ReactNode;
}

const Layout: React.FC<layoutProps> = ({ header, content, aside }) => {
  return (
    <>
      { header || <Header /> }
      <main>
        <article>
          { content }
        </article>
        <aside>
          { aside || <>
            <Switch />
            <Nav />  </> }
        </aside>
      </main>
    </>
  );
};

export default Layout;
