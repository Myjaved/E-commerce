import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponents from './components/PrivateComponents';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponents/>}>
          <Route path="/" element={<ProductList/>} />
          <Route path="/add" element={<AddProduct/>} />
          <Route path="/update/:id" element={<UpdateProduct/>} />
          <Route path="/logout" element={<h1>Logout component</h1>} />
          <Route path="/profile" element={<h1>Profile component</h1>} />
          </Route>

          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>} />
          
        </Routes>
      </BrowserRouter>


      <Footer />
    </>
  );
}

export default App;
