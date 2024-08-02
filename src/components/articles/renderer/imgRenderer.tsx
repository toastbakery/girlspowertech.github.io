import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

type ImgRendererProps = {
  src?: string;
  alt?: string;
};

const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return document.getElementById('portal') ? (
    createPortal(children, document.getElementById('portal')!)
  ) : (
    <>{ children }</>
  );
}

const ImgRenderer: React.FC<ImgRendererProps> = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <>
      <img src={ src } alt={ alt } onClick={ toggleModal } style={ { cursor: 'pointer' } } />
      <Portal >
        <AnimatePresence>
          { isOpen && (
            <motion.div
              initial={ { opacity: 0 } }
              animate={ { opacity: 1 } }
              exit={ { opacity: 0 } }
              transition={ { duration: 0.2 } }
              style={ {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
              } }
              onClick={ toggleModal }
              onKeyDown={ handleKeyDown }
              tabIndex={ 0 }
            >
              <motion.img
                src={ src }
                alt={ alt }
                initial={ { scale: 0.5 } }
                animate={ { scale: 1 } }
                exit={ { scale: 0.5 } }
                transition={ { duration: 0.2 } }
                style={ {
                  maxWidth: '90%',
                  maxHeight: '90%',
                  objectFit: 'contain',
                } }
                onClick={ (e: React.MouseEvent) => {
                  e.stopPropagation();
                  setIsOpen(false);
                } }
              />
            </motion.div>
          ) }
        </AnimatePresence>
      </Portal>
    </>
  );
};

export default ImgRenderer;
