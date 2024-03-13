import { addToLocalStorage, getCartStore, removeFromLocalStorage } from "../../Utlitys/localStorage"
import { useEffect } from "react"
import { useState } from "react"
import Bottle from "../Bottle/Bottle"
import './Bottles.css'
import Cart from "../Cart/Cart"


const Bottles = () => {

    const [bottles,setBottles] = useState([])
    const [cart,setCart] = useState([])
    
    useEffect( () =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[] )


    const addToCartList = (bottle,id) => {
        const newCartList = [...cart,bottle];
        if(!(cart.includes(bottle))){
            setCart(newCartList);
        addToLocalStorage(id)
        }
    }

    const removeToCartList = (id) => {

        const remaingiCart = cart.filter( bottle => bottle.id !== id )

        setCart(remaingiCart)

        
        removeFromLocalStorage(id)
    }

    useEffect( () => {
        const storeCart = getCartStore()
        const cartBottles = []
        for(let id of storeCart){

           const bottle =  bottles.find( bottle => bottle.id === id)
           if(bottle){
            cartBottles.push(bottle)
           }
        }
        setCart(cartBottles)
    },[bottles])

    return (

        <div>
            <h1>Welcome to Bottles Shop</h1>
            <p>Total : {bottles.length}</p>
            <div>
                <h2>Cart : {cart.length} </h2>
                <div className="Bottles-grid">
                    {
                        cart.map( cart => <Cart key={cart.id} removeToCartList={removeToCartList} cart={cart} ></Cart>)
                    }
                </div>
            </div>
            <div className="Bottles-grid">
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} addToCartList={addToCartList} ></Bottle>)
            }
            </div>
        </div>
    )



}


export default Bottles