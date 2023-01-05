import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from './components/spinner/Spinner';

const Home = lazy(() => import('./Routes/Home'));
const Shop = lazy(() => import('./Routes/Shop'));
const Checkout = lazy(() => import('./Routes/Checkout'));
const Navigation = lazy(() => import('./Routes/Navigation'));
const Authentication = lazy(() => import('./Routes/Authentication'));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index={true} element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
