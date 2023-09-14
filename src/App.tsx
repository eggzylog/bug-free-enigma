// packages
import { Route, Routes } from 'react-router-dom';

// data / apis
import data from './data/elements.json';

// pages
import PeriodicTable from './pages/PeriodicTable';
import ElementInfoPage from './pages/ElementInfoPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<PeriodicTable />} />

      {/* custom [dynamic] route for each element */}
      {data.elements.map((element) => (
        <Route
          key={element.number}
          path={element.name}
          element={<ElementInfoPage element={element} />}
        />
      ))}
    </Routes>
  );
};

export default App;
