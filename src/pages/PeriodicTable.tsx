// packages
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// custom hooks
import { useTheme } from '../hooks/useTheme';

// data / apis
import data from '../data/elements.json';
import categories from '../data/categories';

// other pages
import HoveredElement from './HoveredElement';

// assets
import light from '../assets/images/light-mode-toggle-icon.svg';
import dark from '../assets/images/dark-mode-toggle-icon.svg';

const PeriodicTable = () => {
  // states and hooks
  const [hoveredElement, setHoveredElement] = useState<ElementInfoType | null>(
    null
  );

  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(
    null
  );

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // functions
  const handleMouseOver = (element: ElementInfoType) => {
    setHoveredElement({
      ...element,
      backgroundColor: categories[element.category],
    });
    setHighlightedCategory(element.category);
  };

  const handleMouseOut = () => {
    setHoveredElement(null);
    setHighlightedCategory(null);
  };

  const toggleSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='p-4 md:px-12 md:py-6 bg-slate-100 dark:bg-slate-600 h-screen'>
      <button
        type='button'
        onClick={toggleSwitch}
        className='fixed z-10 right-2 top-2 w-16 p-1 rounded-md'
      >
        {theme === 'dark' ? (
          <img src={dark} alt='Dark Mode' />
        ) : (
          <img src={light} alt='Light Mode' />
        )}
      </button>

      <h1 className='text-center text-2xl font-bold dark:text-white'>
        Periodic Table of Elements
      </h1>

      <div className='periodic-table'>
        {data.elements.map((element) => {
          const { name, ypos, xpos, category, symbol, number } = element;

          return (
            <Link
              to={`/${name}`}
              key={name}
              className='element justify-center'
              style={{
                gridRow: ypos,
                gridColumn: xpos,
                backgroundColor:
                  highlightedCategory === category ? categories[category] : '',
                color: highlightedCategory === category ? 'white' : '',
              }}
              onMouseOver={() => handleMouseOver(element)}
              onMouseOut={handleMouseOut}
            >
              <strong>{symbol}</strong>
              <small className='number'>{number}</small>
              <small className='name'>{name}</small>
            </Link>
          );
        })}

        {/* hovered element */}
        <div className='row-start-1 row-span-3 col-start-3 col-span-10'>
          {hoveredElement && <HoveredElement element={hoveredElement} />}
        </div>
      </div>
    </div>
  );
};

export default PeriodicTable;
