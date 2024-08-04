
import React, { FC, useCallback, useRef, useEffect } from 'react';
import Crossword, { CrosswordImperative, ThemeProvider } from 'react-crossword';
import data, { getWord } from "./data";
import "./style.scss";


type nameCrossProps = {
  className?: string;
  onSelect: (name: string) => void;
}

const NameCross: FC<nameCrossProps> = ({ onSelect }) => {
  const crossword = useRef<CrosswordImperative>(null);
  const fillAllAnswers = useCallback(() => {
    crossword.current?.fillAllAnswers();
  }, []);

  useEffect(() => {
    const inputs = document.querySelectorAll('.crossword input');
    inputs.forEach((input) => {
      input.setAttribute('disabled', 'true');
    });
  }, []);


  useEffect(() => {
    fillAllAnswers();
  }, []);

  return (
    <div className="crossword">
      <ThemeProvider theme={ {
        focusBackground: '#ffe6e6',
        highlightBackground: '#e6e6e6',
      } }
      >
        <Crossword
          ref={ crossword }
          data={ data }
          onCellSelected={ (
            direction, number, row, col,
          ) => {
            number && onSelect(getWord(direction, number));
          } }
        />
      </ThemeProvider>
    </div>
  );
}


export default NameCross;