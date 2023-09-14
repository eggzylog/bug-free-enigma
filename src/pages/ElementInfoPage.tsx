// packages
import { Link } from 'react-router-dom';

// components
import ElementDisplay from '../components/ElementDisplay';

const ElementInfo: React.FC<ElementType> = ({ element }) => {
  return (
    <div className='px-12 py-6 '>
      <Link to='/' className='underline text-blue-500 text-xl'>
        Back
      </Link>

      <div className='flex flex-col md:flex-row gap-1 md:gap-8 mt-4 items-center'>
        <div className='w-20 h-20 md:w-32 md:h-32 p-2 border rounded-md flex flex-col gap-0 md:gap-3 justify-center items-center bg-green-600 text-white'>
          <small>{element.number}</small>
          <span className='text-base md:text-4xl'>{element.symbol}</span>
          <small>{element.atomic_mass}</small>
        </div>

        <div className='rounded-lg shadow-md'>
          <div className='p-4'>
            <h2 className='text-2xl font-bold'>{element.name}</h2>
            <ElementDisplay title='Category' info={element.category} />
            <ElementDisplay title='Atomic Number' info={element.number} />
            <ElementDisplay title='Atomic Mass' info={element.atomic_mass} />
            <ElementDisplay
              title='Electron Configuration'
              info={element.electron_configuration}
            />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-full md:col-span-4 rounded-lg shadow-md p-4'>
          <h2 className='text-2xl mt-4'>Properties:</h2>
          <ElementDisplay title='Appearance' info={element.appearance} />
          <ElementDisplay title='Color' info={element.color} />
          <ElementDisplay title='Boiling Point' info={element.boil} />
          <ElementDisplay title='Density' info={element.density} />
          <ElementDisplay
            title='Electron Affinity'
            info={element.electron_affinity}
          />
          <ElementDisplay title='Melting Point' info={element.melt} />
          <ElementDisplay title='Molar Heat' info={element.molar_heat} />
        </div>
        <div className='col-span-full md:col-span-8 rounded-lg shadow-md p-4'>
          <h2 className='text-2xl mt-4'>Summary:</h2>
          <p>{element.summary}</p>
          <p className='my-2'>
            Discovered by: <i>{element.discovered_by}</i>
          </p>
          <h5>
            <Link
              to={element.source}
              target='_blank'
              className='underline text-blue-600'
              title={`${element.name} WikiPedia Page`}
            >
              Read More
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ElementInfo;
