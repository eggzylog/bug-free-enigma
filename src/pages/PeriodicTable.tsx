// packages
import { useState } from 'react';
import { Link } from 'react-router-dom';

// data / apis
import data from '../data/elements.json';

// other pages
import HoveredElement from './HoveredElement';

const PeriodicTable = () => {
  // states and hooks
  const [hoveredElement, setHoveredElement] = useState<ElementInfoType | null>(
    null
  );

  // functions
  const handleMouseOver = (element: ElementInfoType) => {
    setHoveredElement(element);
  };

  const handleMouseOut = () => {
    setHoveredElement(null);
  };

  return (
    <div className='p-4'>
      <h1 className='text-center text-2xl font-bold'>
        Periodic Table of Elements
      </h1>

      <div className='periodic-table'>
        {data.elements.map((element) => (
          <Link
            to={`/${element.name}`}
            key={element.name}
            className='element justify-center'
            style={{
              gridRow: element.ypos,
              gridColumn: element.xpos,
            }}
            onMouseOver={() => handleMouseOver(element)}
            onMouseOut={handleMouseOut}
          >
            <strong>{element.symbol}</strong>
            <small className='number'>{element.number}</small>
            <small className='name'>{element.name}</small>
          </Link>
        ))}

        {/* hovered element */}
        <div className='row-start-1 row-span-3 col-start-3 col-span-10'>
          {hoveredElement && <HoveredElement element={hoveredElement} />}
        </div>
      </div>
    </div>
  );
};

export default PeriodicTable;
