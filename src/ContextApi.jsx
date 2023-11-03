import React, { createContext, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Api from './Auth';
import Cookies from 'cookies-js';
import Navbar from './Container/Navbar/Navbar';
// Create a context for your store
const StoreApi = createContext();

// Create a custom context provider
const ContextApi = ({ children }) => {
    // Define initial states
    const [search, setSearch] = useState("")
    const setSearchUpdate = (data) => {
        setSearch(data)
    }
    const [loggedInUser, setLogIn] = useState({
        id: 1,
        name: "admin",
        email: "iraheelnasir@gmail.com",
        address: "Pindi"
    });
    const [orderData, setOrderData] = useState({
        user: loggedInUser,
        totalprice: 0,
        eachproductdetail: [],
        address: loggedInUser.address,
    })
    const setOrderCartData = (data) => {
        setOrderData({
            user: loggedInUser.id,
            username: loggedInUser.name,
            totalprice: data.totalPrice,
            eachproductdetail: data.products,
            address: loggedInUser.address
        })
    }
    const setFinalOrder = (data) => {
        setOrderData({
            user: loggedInUser.id,
            username: loggedInUser.name,
            totalprice: data.totalPrice,
            eachproductdetail: data.products,
            address: data.address,
        })
    }
    const [cart, setCart] = useState([]);

    const [detailCard, setDetailCard] = useState({
        id: 0,
        name: "",
        price: "",
        description: "",
        image: "",
        totalLikes: 0,     // Set the totalLikes field
        likes: [],
        reviews: [],
    });

    // Function to set data for the detailCard
    const setDetailCardData = (data) => {
        // Calculate the total likes by counting the likes in the likes_received array
        const totalLikes = data.likes_received.length;
        setDetailCard({
            id: data.id,
            name: data.name,
            price: data.price,
            image: data.image,
            description: data.description,
            likes: data.likes_received, // Keep the likes_received array
            totalLikes: totalLikes,     // Set the totalLikes field
            reviews: data.reviews_received,
        });
    };

    const [products, setProducts] = useState([]); // Initialize products as an empty array

    // Function to fetch sale products
    const fetchSaleProducts = async () => {
        try {
            const response = await Api.get('/products/');
            setProducts(response.data);
            Cookies.set('authtoken', "f67d124a8e2a6add622d7d4d0817c1138e8a3a42");
            return response.data;
        } catch (error) {
            console.log(error)
            throw new Error('Error fetching sale products');
        }
    };

    const { data: saleProduct, isLoading, isError } = useQuery('saleProducts', fetchSaleProducts);
    const queryClient = useQueryClient(); // Get the queryClient

    const handleRefresh = () => {
        queryClient.invalidateQueries('saleProducts'); // Invalidate and refetch the query
    };

    if (isLoading) {
        return (
            <>
                <Navbar />
                <div className="spinner-grow  " style={{ width: "3rem", height: "3rem", marginLeft: "45vw", marginTop: "40vh" }} role="status">
                    <span className="visually-hidden " style={{ marginTop: "40%", marginLeft: "50vw" }}>Loading...</span>
                </div>
            </>
        )
    }

    if (isError) {
        console.log(isError)
        return <div>Error fetching sale products</div>;
    }

    // Provide the context values to the components
    return (
        <StoreApi.Provider value={{
            cart, setCart, saleProduct, setDetailCardData, detailCard, products, loggedInUser, handleRefresh
            , setOrderCartData, orderData, setFinalOrder, search, setSearchUpdate
        }}>
            {children}
        </StoreApi.Provider>
    );
};

export { ContextApi, StoreApi };

