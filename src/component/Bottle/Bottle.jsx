import './Bottle.css'

const Bottle = ({bottle,addToCartList}) => {

    const {name,img,price,seller,id} = bottle

    return(
        <div className='bottle-conteinar'>
            <h3>Bottle Name : {name}</h3>
            <div>
                <img className='img' src={img} alt="" />
            </div>
            <h4>Brand Name : {seller}</h4>
            <h2>Price: ${price}</h2>
            <button onClick={() => addToCartList(bottle,id)}>Buy Now</button>
        </div>
    )
}


export default Bottle