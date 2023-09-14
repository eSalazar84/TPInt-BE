import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home'
import './App.css'
import LoadInvtry from './pages/LoadInvtry';
import AllProducts from './pages/AllProducts';
import Ferreteria from './pages/HardwareStore';
import NotFound from './components/Not_Found';
import Tranquera from './pages/FarmGate';
import RopaTrabajo from './pages/Workwear';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/loadInvtry' element={<LoadInvtry />} />
          <Route exact path='/allProducts' element={<AllProducts />} />
          <Route exact path='/ferreteria' element={<Ferreteria />} />
          <Route exact path='*' element={<NotFound />} />
          <Route exact path='/tranquera' element={<Tranquera />} />
          <Route exact path='ropaTrabajo' element={<RopaTrabajo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
