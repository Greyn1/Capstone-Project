import { Routes, Route } from 'react-router-dom';
import Navigation from './Routes/Navigation';
import Home from './Routes/Home';

const Shop = () => {
  return <h1>I am the Shop Page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index={true} element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
