import React from 'react';
import './SaleCard.scss'; // Make sure the path is correct
import { useDrag } from 'react-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
// import { StoreApi } from '../ContextApi';

const SaleCard = ({ props, onIncrement, onDecrement, quantityInCart, onClickCart }) => {
    // const { setDetailCardData, saleProduct } = useContext(StoreApi);
    const [{ isDragging }, drag] = useDrag({
        type: 'CARD',
        item: { props },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div className={`nft ${isDragging ? "" : ""}`} ref={drag} >
            <div className="main" data-bs-toggle="modal" data-bs-target="#exampleModal" >
            <img className="tokenImage" src={`/media/${props.image}`} alt="" />
                <h2>{props.name}</h2>
                <p style={{ margin: "0", marginTop: "3px" }} className='card-desc' >Click to see detail</p>
                <div className="price">
                    <p>{props.price} PKR</p>
                </div>
<button onClick={()=>console.log(props.image)}>Show</button>


            </div>
            {quantityInCart >= 1 ? (
                <div className='d-flex justify-center align-center'>
                    <div >
                        <FontAwesomeIcon
                            icon={faPlusCircle}
                            onClick={() => onIncrement(props.id)}
                            fontSize={"25px"}
                            color="green"
                        />
                    </div>
                    <p style={{ margin: "0 8px", color: "black" }}>{quantityInCart}</p>
                    <div>
                        <FontAwesomeIcon
                            icon={faMinusCircle}
                            onClick={() => onDecrement(props.id)}
                            fontSize={"25px"}
                            color="red"

                        />
                    </div>
                </div>
            ) : (
                <button onClick={onClickCart} className="btn btn-danger w-100 m-0">
                    Buy Now
                </button>
            )}
        </div>
    );
};

export default SaleCard;
