// packages
import { useState } from 'react';
import { Link } from 'react-router-dom';

// data / apis
import data from '../data/elements.json';
import categories from '../data/categories';

// other pages
import HoveredElement from './HoveredElement';

const PeriodicTable = () => {
  // states and hooks
  const [hoveredElement, setHoveredElement] = useState<ElementInfoType | null>(
    null
  );

  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(
    null
  );

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

  return (
    <div className='p-4'>
      <h1 className='text-center text-2xl font-bold'>
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
