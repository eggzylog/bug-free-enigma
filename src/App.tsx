import data from './data/elements.json';

const App = () => {
  return (
    <div className='m-4'>
      <h1 className='text-center text-2xl font-bold'>
        Periodic Table of Elements
      </h1>
      <div className='periodic-table'>
        {data.elements.map((element) => (
          <div
            key={element.name}
            className='element justify-center'
            style={{
              gridRow: element.ypos,
              gridColumn: element.xpos,
            }}
          >
            <strong>{element.symbol}</strong>
            <small className='number'>{element.number}</small>
            <small className='name'>{element.name}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
