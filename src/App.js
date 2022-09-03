import Nav from './component/Nav'
import Footer from './component/Footer'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './component/SignUp';
import PrivateComponent from './component/PrivateComponent';
import Login from './component/login';
import ProductList from './component/ProductList';
import AddProduct from './component/AddProduct';
import UpdateProduct from './component/UpdateProduct';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/logout" element={<h1>logout</h1>} />
            <Route path="/profile" element={<h1>Profile</h1>} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
