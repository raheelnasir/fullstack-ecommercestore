import React, { useContext, useState } from 'react'
import "./Sale.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faGift, faHandshakeAlt, faHome, faIdBadge, faMessage, faSearch, faShop, faUserGroup, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import img from "../img/backblue.jpg"
import SaleCard from '../../Components/SaleCard'
import { useDrop } from 'react-dnd'
import { StoreApi } from '../../ContextApi'
import ImageCarousel from '../../Components/ImageCarousel'
import { images } from "../../Data.js"
import RotatingCards from '../../Components/RotatingCards'
import RotatingCardsRTC from '../../Components/RotatingCards'
import CardSlider from '../../Components/RotatingCards'
import CategoryCard from '../../Components/CategoryCard'

const Sale = () => {

  const { cart, setCart, saleProduct } = useContext(StoreApi)
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = item => {
    //   const itemIndex = cartItems.findIndex(e => e.id === item.id);

    //   if (itemIndex !== -1) {
    //     const updatedCart = [...cartItems];
    //     updatedCart[itemIndex].quantity += 1;
    //   } else {
    //     setCartItems([...cartItems, { ...item, quantity: 1 }]);
    //   }
    // }

    // const handleRemoveFromCart = item => {
    //   const itemIndex = cartItems.findIndex(e => e.id === item.id);
    //   if (itemIndex !== -1) {
    //     const updatedCart = [...cartItems];
    //     if (updatedCart[itemIndex].quantity > 1) {
    //       updatedCart[itemIndex].quantity -= 1;
    //     } else {
    //       updatedCart.splice(itemIndex, 1);
    //     }
    //   }
  }
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: item => {
      handleAddToCart(item.data); // Add item to the cart when dropped
    },
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  });
  const isActive = canDrop && isOver;
  const items = [

    images[0],

    images[1],
    images[0],

    // Add more items as needed
  ];
  return (

    <>
      <section className="sale-header ">
        <ImageCarousel images={images} />
      </section>

      <section id='sale-affilate' style={{ display: "flex", flexDirection: "column", position: "relative", height: "50vh" }}>
        <h1 id='sale-head-2'>Affilate Products</h1>
        <CardSlider cards={items} />

      </section>

      <section className="sale-catagory">
        <CategoryCard />
      </section>

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
                Customer Support
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
          <div className='sale-search-container'>




            <div className='sale-cards-holder' >
              <SaleCard />
              <SaleCard />
              <SaleCard />
              <SaleCard />
              <SaleCard />
              <SaleCard />

            </div>

          </div>

        </section>

        <section className="sale-section-3" ref={drop}
          style={{
            backgroundColor: isActive ? 'skyblue' : 'white',
          }}>

          <p>
            Drop here
          </p>
          <h2>Cart</h2>
          {cartItems.map((item, index) => (
            <div key={index}>
              {item.name} - ${item.price}
            </div>
          ))}
        </section>

      </section>
    </>
  )
}

export default Sale