import { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/elements.json';
import categories from '../data/categories';
import ToggleButton from '../components/ToggleButton';
import HoveredElement from './HoveredElement';

const PeriodicTable = () => {
  const [hoveredElement, setHoveredElement] = useState<ElementInfoType | null>(
    null
  );

  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(
    null
  );

  // FUNCTIONS
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

  return (
    <div className='wrapper'>
      <ToggleButton />

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

        <div className='row-start-1 row-span-3 col-start-3 col-span-10'>
          {hoveredElement && <HoveredElement element={hoveredElement} />}
        </div>
      </div>
    </div>
  );
};

export default PeriodicTable;
