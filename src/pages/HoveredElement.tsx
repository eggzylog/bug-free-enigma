const Element: React.FC<ElementType> = ({ element }) => {
  const {
    backgroundColor,
    symbol,
    name,
    category,
    atomic_mass,
    electron_configuration,
    electron_affinity,
  } = element;

  return (
    <div
      className='element rounded-md shadow-xl text-sm text-white'
      style={{ backgroundColor: `${backgroundColor}CC` }}
    >
      <div className='flex gap-2 p-4'>
        <div className='w-16 h-16 p-2 border rounded-md flex justify-center items-center'>
          <span className='text-3xl'>{symbol}</span>
        </div>
        <div>
          <p>
            Name: <b>{name}</b>
          </p>
          <p>
            Category: <b>{category}</b>
          </p>
          <p>
            Atomic Mass: <b>{atomic_mass}</b>
          </p>
          <p>
            Electron Configuration: <b>{electron_configuration}</b>
          </p>
          <p>
            Electron Affinity:{' '}
            <b>{electron_affinity ? electron_affinity : 'N/A'}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Element;
