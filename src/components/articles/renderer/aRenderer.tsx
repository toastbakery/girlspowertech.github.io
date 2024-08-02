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

export default LinkRenderer;
