  import React from 'react';
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Home from './Container/Home/Home';
  import Sale from './Container/Sale/Sale';
  import Navbar from './Container/Navbar/Navbar';
  import Footer from './Container/Footer/Footer';
  import { ContextApi } from './ContextApi';
  import { QueryClient, QueryClientProvider } from 'react-query'; // Import these

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
              </Routes>
              <Footer />
            </ContextApi>
          </QueryClientProvider>
        </BrowserRouter>
      </>
    );
  }

  export default App;
