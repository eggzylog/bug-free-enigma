const Element: React.FC<ElementType> = ({ element }) => {
  return (
    <div className='element rounded-md shadow-md'>
      <div className='flex gap-2 p-2'>
        <div className='w-16 h-16 p-2 border rounded-md flex justify-center items-center'>
          <span className='text-3xl'>{element.symbol}</span>
        </div>
        <div>
          <p>
            Name: <b>{element.name}</b>
          </p>
          <p>
            Atomic Mass: <b>{element.atomic_mass}</b>
          </p>
          <p>
            Density: <b>{element.density}</b>
          </p>
          <p>
            Electron Configuration: <b>{element.electron_configuration}</b>
          </p>
          <p>
            Electron Affinity:{' '}
            <b>
              {element.electron_affinity ? element.electron_affinity : 'N/A'}
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Element;
