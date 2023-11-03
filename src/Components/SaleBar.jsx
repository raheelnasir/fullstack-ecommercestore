import React, { useContext } from 'react'
import "./SaleBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from "../Container/img/DreamShaper_v7_e_commerce_store_logo_modern_logo_store_artisti_0-removebg-preview.png"
import { StoreApi } from '../ContextApi'
const SaleBar = () => {
    const { search, setSearchUpdate } = useContext(StoreApi)
    return (
        <>
            <section className="sale-nav">
                <img src={logo} id='logo' alt="" />
                <h1>Balti</h1>
                <div className="sale-search-bar">
                    <input type="text" value={search} onChange={(e) => setSearchUpdate(e.target.value)} />
                    <FontAwesomeIcon icon={faSearch} id='search-icon' />
                </div>
                <FontAwesomeIcon icon={faCartShopping} id='cart-icon' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
            </section>
        </>
    )
}

export default SaleBar