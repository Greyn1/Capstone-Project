import { Routes, Route } from 'react-router-dom';
import Navigation from './Routes/Navigation';
import Home from './Routes/Home';
import Shop from './Routes/Shop';
import Authentication from './Routes/Authentication';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index={true} element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
