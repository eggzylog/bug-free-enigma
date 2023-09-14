import { Route, Routes } from 'react-router-dom';
import data from './data/elements.json';
import PeriodicTable from './pages/PeriodicTable';
import ElementInfoPage from './pages/ElementInfoPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<PeriodicTable />} />

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
