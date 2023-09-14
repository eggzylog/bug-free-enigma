// packages
import { Link } from 'react-router-dom';

// data / apis
import categories from '../data/categories';

// components
import ElementDisplay from '../components/ElementDisplay';

const ElementInfo: React.FC<ElementType> = ({ element }) => {
  const {
    number,
    symbol,
    atomic_mass,
    name,
    category,
    electron_configuration,
    appearance,
    color,
    boil,
    density,
    electron_affinity,
    melt,
    molar_heat,
    summary,
    discovered_by,
    source,
  } = element;

  return (
    <div className='px-12 py-6'>
      <Link to='/' className='btn-link'>
        Back
      </Link>

      <div className='p-4'>
        <div className='element-info-card'>
          <div
            className='element-card'
            style={{ backgroundColor: categories[category], color: 'white' }}
          >
            <small>{number}</small>
            <span className='text-base md:text-4xl'>{symbol}</span>
            <small>{atomic_mass}</small>
          </div>

          <div
            className='rounded-lg shadow-md'
            style={{ backgroundColor: categories[category], color: 'white' }}
          >
            <div className='p-4'>
              <h2 className='text-2xl font-bold'>{name}</h2>
              <ElementDisplay title='Category' info={category} />
              <ElementDisplay title='Atomic Number' info={number} />
              <ElementDisplay title='Atomic Mass' info={atomic_mass} />
              <ElementDisplay
                title='Electron Configuration'
                info={electron_configuration}
              />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-12 gap-4'>
          <div className='element-properties'>
            <h2 className='text-2xl'>Properties:</h2>
            <ElementDisplay title='Appearance' info={appearance} />
            <ElementDisplay title='Color' info={color} />
            <ElementDisplay title='Boiling Point' info={boil} />
            <ElementDisplay title='Density' info={density} />
            <ElementDisplay
              title='Electron Affinity'
              info={electron_affinity}
            />
            <ElementDisplay title='Melting Point' info={melt} />
            <ElementDisplay title='Molar Heat' info={molar_heat} />
          </div>
          <div className='element-summary'>
            <h2 className='text-2xl'>Summary:</h2>
            <p>{summary}</p>
            <p className='my-2'>
              Discovered by: <i>{discovered_by}</i>
            </p>
            <h5>
              <Link
                to={source}
                target='_blank'
                className='underline text-blue-600'
                title={`${name} WikiPedia Page`}
              >
                Read More
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementInfo;
