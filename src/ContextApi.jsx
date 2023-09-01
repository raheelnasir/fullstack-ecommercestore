import React, { createContext, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Api from './Auth';

const StoreApi = createContext();

const ContextApi = ({ children }) => {
    const [cart, setCart] = useState({
        items: [],
        totalPrice: 0,
    });

    const fetchSaleProducts = async () => {
        try {
            const response = await Api.get('/products/');
            return response.data;
        } catch (error) {
            throw new Error('Error fetching sale products');
        }
    };

    const { data: saleProduct, isLoading, isError } = useQuery('saleProducts', fetchSaleProducts);
    const queryClient = useQueryClient(); // Get the queryClient

    const handleRefresh = () => {
        queryClient.invalidateQueries('saleProducts'); // Invalidate and refetch the query
    };

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (isError) {
    //     return <div>Error fetching sale products</div>;
    // }

    // Now you have the saleProduct data available in the `saleProduct` variable.
    console.log(saleProduct)
    return (
        <StoreApi.Provider value={{ cart, setCart, saleProduct }}>
            {children}
        </StoreApi.Provider>
    );
};

export { ContextApi, StoreApi };
