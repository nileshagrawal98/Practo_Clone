// import logo from './logo.svg';
// import logo from './logo.svg';
import './App.css';



import { Route, Routes } from 'react-router-dom';
import { Medicines } from './components/Medicines';
import { Acne } from './components/Acne';
import { Body } from './components/Body';

import { ProductsDetails } from "./components/ProductsDetails"
import { Cart } from './components/Cart';






function App() {
  return (
    <div className="App">


      <Routes>

        <Route path="/" element={<Medicines />}></Route>

        <Route path="/acne" element={<Acne />}></Route>

        <Route path="/body" element={<Body />}></Route>

        <Route path="/:type/:userid" element={<ProductsDetails />}></Route>

        <Route path="/cart" element={<Cart />}></Route>




        <Route path="*" element={<div>404 page not found</div>}></Route>



      </Routes>


    </div>
  );
}

export default App;

