import React, { useContext, useEffect, useState } from 'react';
import './Payment.css';
import { StoreApi } from '../../ContextApi';
import { useNavigate } from 'react-router-dom';
import img from '../img/home-head.gif';
import Api from '../../Auth';
import 'bootstrap/dist/css/bootstrap.css';

const PaymentPage = () => {
    const cartItemsFromLocalStorage =
        JSON.parse(localStorage.getItem('cartItems')) || [];

    const { orderData, setCartOrderData, setFinalOrder } = useContext(StoreApi);
    const [address, setAddress] = useState(orderData.address || '');
    const handleChange = (e) => {
        e.preventDefault();
        setAddress(e.target.value);
    };

    useEffect(() => {
        setFinalOrder(address);
    }, [address]);

    const [newObj, setNewObj] = useState({
        user: orderData.user,
        username: orderData.username,
        totalprice: orderData.totalprice,
        eachproductdetail: cartItemsFromLocalStorage,
        address: orderData.address || '', // Initialize with an empty string
    });

    useEffect(() => {
        setNewObj({
            user: orderData.user,
            username: orderData.username,
            totalprice: orderData.totalprice,
            address: orderData.address || '', // Initialize with an empty string
            eachproductdetail: cartItemsFromLocalStorage,
        });
    }, [orderData]);

    const move = useNavigate();

    useEffect(() => {
        if (orderData && orderData.totalprice === 0) {
            move('/sale');
        }
    }, [orderData]);

    const performOrder = async () => {
        console.log(newObj)

        console.log(newObj);
        try {
            const res = await Api.post('/orders/post/', newObj);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section className="payment-main" style={{ overflow: 'hidden' }}>
                <div className="payment-detail">
                    <h2 className="mx-auto" style={{ fontWeight: '900', fontSize: '35px', color: '#ff4646' }}>
                        Order Detail
                    </h2>

                    <p>Name</p>
                    <input type="text" readOnly className="form-control-plaintext" value={orderData.username || ''} />

                    <p>Total Price</p>
                    <input type="text" id="floatingInputDisabled" readOnly className="form-control-plaintext" value={orderData.totalprice || 0} />

                    <p>Payment Method</p>
                    <input type="text" readOnly className="form-control-plaintext" value="Cash On Delivery" />

                    <p>Address</p>
                    <input
                        type="text"
                        id="payment-address"
                        placeholder="Address"
                        value={address}
                        onChange={handleChange}
                    />

                    <button className="" id="order-button" onClick={performOrder}>
                        Order Now
                    </button>
                </div>
                <div id="animation">
                    <img src={img} alt="" />
                </div>
            </section>
        </>
    );
};

export default PaymentPage;
