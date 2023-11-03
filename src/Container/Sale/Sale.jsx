import React, { useContext, useEffect, useState } from 'react'
import "./Sale.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faGift, faHandshakeAlt, faHome, faIdBadge, faMessage, faMinusCircle, faPlusCircle, faShop, faUserGroup, } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import SaleCard from '../../Components/SaleCard'
import { useDrop } from 'react-dnd'
import { StoreApi } from '../../ContextApi'
import ImageCarousel from '../../Components/ImageCarousel'
import { images } from "../../Data.js"
import SaleBar from '../../Components/SaleBar'
import ProductDetailCard from '../../Components/ProductDetailCard'
import { faDropbox } from '@fortawesome/free-brands-svg-icons'

const Sale = () => {

  const { cart, setCart, saleProduct, setDetailCardData, loggedInUser, setOrderCartData, orderData, search } = useContext(StoreApi);

  // Parse the cartItems from localStorage or initialize as an empty array
  const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cartItems')) || [];

  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);
  const getQuantityInCart = (productId) => {
    const itemInCart = cartItems.find((item) => item.id === productId);
    return itemInCart ? itemInCart.quantity : 0;
  };
  const [filteredProducts, setFilteredProducts] = useState(saleProduct)
  useEffect(() => {
    setFilteredProducts(saleProduct)
  }, [])
  const fproduct = filteredProducts.filter((e) => e.name === search)
  useEffect(() => {
    if (search) {
      const filtered = saleProduct.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      // If the search value is empty, reset to the initial saleProduct
      setFilteredProducts(saleProduct);
    }
  }, [search, saleProduct]);
  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        item.quantity += 1;
      }
      return item;
    });

    setCartItems(updatedCart);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        item.quantity -= 1;
        if (item.quantity < 1) {
          item.quantity = 0; // Ensure quantity is not negative
        }
      }
      return item;
    });

    setCartItems(updatedCart);
  };

  const handleAddToCart = (itemProps) => {
    const itemIndex = cartItems.findIndex((item) => item.id === itemProps.id);

    if (itemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      const newItem = {
        id: itemProps.id,
        name: itemProps.name,
        price: parseFloat(itemProps.price),
        quantity: 1,
        img: itemProps.image
      };
      setCartItems([...cartItems, newItem]);
    }
  };
  const [totalPrice, setTotal] = useState(0)
  useEffect(() => {
    const totalPrice = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0); // Start with a total of 0

    setTotal(totalPrice);
  }, [cartItems]);

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          return null;
        }
      }
      return item;
    });

    setCartItems(updatedCart.filter((item) => item !== null));
  };

  useEffect(() => {
    // Store the updated cartItems in localStorage whenever it changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const newObj = {
      user: loggedInUser,
      totalPrice: totalPrice,
      products: cartItems,
    }

    setOrderCartData(newObj)
    setCart(cartItems);
  }, [cartItems, setCart]);



  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: (item, monitor) => {
      if (item && item.props) {
        handleAddToCart(item.props); // Add item.props to the cart when dropped
      }
    },
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  });
  const isActive = canDrop && isOver;
  const move = useNavigate()
  const handleCheckout = () => {
    console.log(orderData)
    const newObj = {
      user: loggedInUser,
      totalPrice: totalPrice,
      products: cartItems,
    }
    setOrderCartData(newObj)
    move("/payment")
  }
  return (

    <>
      <section className="sale-header ">
        <ImageCarousel images={images} />
      </section>




      <ProductDetailCard />
      <SaleBar />
      <section className="sale-main">
        <section className="sale-section-1">
          <div className='sale-left-1'>
            <Link to={"/"}>
              <FontAwesomeIcon icon={faHome} id='sale-left-link-icon' />
              <p id='sale-left-link-text'>
                Home
              </p>
            </Link>
            <Link to={"/rewards"}>
              <FontAwesomeIcon icon={faGift} id='sale-left-link-icon' />
              <p id='sale-left-link-text'>
                Rewards
              </p>
            </Link>
            <Link to={"/sale"} style={{ backgroundColor: " gainsboro" }}>
              <FontAwesomeIcon icon={faShop} id='sale-left-link-icon' />
              <p id='sale-left-link-text' >
                Marketplace
              </p>
            </Link>

            <Link to={"/home"}>
              <FontAwesomeIcon icon={faUserGroup} id='sale-left-link-icon' />
              <p id='sale-left-link-text'>
                About Us
              </p>
            </Link>
            <Link to={"/customersupport"}>
              <FontAwesomeIcon icon={faContactBook} id='sale-left-link-icon' />
              <p id='sale-left-link-text'>
                Support
              </p>
            </Link>

            <hr />


            <Link to={"/home"}>
              <FontAwesomeIcon icon={faHandshakeAlt} id='sale-left-link-icon' />
              <p id='sale-left-link-text'>
                Help
              </p>
            </Link>
            <Link to={"/home"}>
              <FontAwesomeIcon icon={faMessage} id='sale-left-link-icon' />
              <p id='sale-left-link-text'>
                Contact
              </p>
            </Link>
            <Link to={"/home"}>
              <FontAwesomeIcon icon={faIdBadge} id='sale-left-link-icon' />
              <p id='sale-left-link-text'>
                Profile
              </p>
            </Link>
          </div>

        </section>

        <section className="sale-section-2">
          <div className='sale-cards-holder'>
            {filteredProducts.map((e) => (
              <div key={e.id} onClick={() => setDetailCardData(e)}>
                <SaleCard
                  props={e}
                  onIncrement={handleIncreaseQuantity}
                  onDecrement={handleDecreaseQuantity}
                  quantityInCart={getQuantityInCart(e.id)}
                  onClickCart={() => handleAddToCart(e)}
                />
              </div>
            ))}
          </div>

        </section>

        <section className="sale-section-3 float-right" ref={drop} style={{ backgroundColor: isActive ? 'skyblue' : 'white', }}>
          <div className='sale-cart-container'>

            <p>
              <FontAwesomeIcon icon={faDropbox} />Drop here
            </p>

            <button className='btn btn-success m-1 ' onClick={handleCheckout}>Checkout</button>
            <button className='btn btn-outline-primary m-1 '>Total Price : {totalPrice}</button>
            {cartItems.map((item, index) => (
              <div key={item.id} className="m-1 p-2 mb-3 cart-items">
                <div className="row g-0">
                  <div className="card-body" >
                    <div style={{ display: "flex" }}>
                      <div id='item-pic' style={{ width: "max-content", boxShadow: ' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}>

                        <img src={`${item.img}`} width={"60px"} alt="" />
                      </div>
                      <p className='cart-price' style={{ background: "none", textAlign: "left", marginLeft: "2px" }}>
                        {item.price} Rs.  <br />
                        {item.name}


                      </p>
                    </div>
                    <div className="" role="group" aria-label="Cart controls">
                      <div className='cart-button'>
                        <div>
                          <FontAwesomeIcon icon={faPlusCircle} onClick={() => handleIncreaseQuantity(item.id)} fontSize={"25px"} color='green' id='plus' />
                        </div>

                        <div>
                          {item.quantity}
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faMinusCircle} onClick={() => handleRemoveFromCart(item.id)} fontSize={"25px"} color='red' id='minus' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>



        </section>

        <div className="offcanvas offcanvas-end" tabIndex="-1 " id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header " style={{ backgroundColor: "#f7b58c" }}>
            <h5 id="offcanvasRightLabel" style={{ margin: "auto", fontSize: "25px", fontWeight: "700", color: "white" }}>Your Cart</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" color='white' style={{ color: "white" }} aria-label="Close"></button>
          </div>
          <div className="offcanvas-body d-flex flex-column " >
            {cartItems.map((item, index) => (
              <div key={index} className="m-1 p-2 mb-3 cart-items" >
                <div className="row g-0">
                  <div className="card-body" >
                    <div style={{ display: "flex" }}>
                      <div id='item-pic' style={{ width: "max-content", boxShadow: ' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}>

                        <img src={item.img} width={"60px"} alt="" />
                      </div>
                      <p className='cart-price' style={{ background: "none", textAlign: "left", marginLeft: "2px" }}>
                        {item.price} Rs.  <br />
                        {item.name}


                      </p>
                    </div>
                    <div className="" role="group" aria-label="Cart controls">
                      <div className='cart-button'>
                        <div>
                          <FontAwesomeIcon icon={faPlusCircle} onClick={() => handleIncreaseQuantity(item.id)} fontSize={"25px"} color='green' id='plus' />
                        </div>

                        <div>
                          {item.quantity}
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faMinusCircle} onClick={() => handleRemoveFromCart(item.id)} fontSize={"25px"} color='red' id='minus' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='d-flex' style={{ backgroundColor: "#05355e", width: "100%", }}>
            <p style={{ margin: "auto", fontSize: "20px", color: "white", fontWeight: "700" }}>
              Total:  {totalPrice}Rs.
            </p>

            <button className='btn  mx-auto m-1 ' style={{ fontSize: "22px", borderRadius: "40px", background: "#f1533b", color: "white" }} >
              Checkout Your Order
            </button>
          </div>
        </div>

      </section>

    </>
  )
}

export default Sale