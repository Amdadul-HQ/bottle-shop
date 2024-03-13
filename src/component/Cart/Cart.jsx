import './Cart.css'
import PropTypes from 'prop-types'

const Cart = ({cart,removeToCartList}) => {
    const {id,name,price,img} = cart;

    return (
        <div className="Cart-conteiner">
            <img className='cart-img' src={img} alt="" />
            <h3>Bottle Name : {name}</h3>
            <h3>Price : ${price}</h3>
            <button onClick={() => removeToCartList(id)} >Remove</button>
        </div>
    )
}



export default Cart