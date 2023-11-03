import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Container/Home/Home';
import Sale from './Container/Sale/Sale';
import Navbar from './Container/Navbar/Navbar';
import Footer from './Container/Footer/Footer';
import { ContextApi } from './ContextApi';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import these
// import ProductDetailCard from './Components/ProductDetailCard';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BottomNavbar from './Container/Navbar/BottomNavbar';
import PaymentPage from './Container/Payment/PaymentPage';
import Messenger from './Components/Messenger';
import Signup from './Container/SignUp/Signup';
import PostProduct from './Container/ProductCRUD/PostProduct';
import ProductList from './Container/ProductCRUD/DeleteProducts';

const queryClient = new QueryClient(); // Create a new QueryClient instance

const App = () => {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}> {/* Provide the QueryClient */}
          <ContextApi>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sale' element={<Sale />} />
              <Route path='/payment' element={<PaymentPage />} />
              <Route path='/messages' element={<Messenger />} />
              <Route path='/sign' element={<Signup />} />
              <Route path='/postproduct' element={<PostProduct />} />
              <Route path='/manageproducts' element={<ProductList />} />
            </Routes>
            <Footer />
          </ContextApi>
          <BottomNavbar />
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
