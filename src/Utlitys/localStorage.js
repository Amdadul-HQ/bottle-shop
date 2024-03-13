const getCartStore = () => {
    const storeCart = localStorage.getItem('cart')
    if(storeCart){
        const saveCart = JSON.parse(storeCart)
        return saveCart;
    }
    return [];
}


const addToLocalStorage = id =>{

    const cart = getCartStore()
    cart.push(id)

    saveToLocalStorage(cart)
}
const saveToLocalStorage = cart => {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart',cartString);
}

const removeFromLocalStorage = (id) => {
    const saveCart = getCartStore()

    const remaning = saveCart.filter( cartId => cartId !== id );

    saveToLocalStorage(remaning)

}



export {addToLocalStorage,getCartStore,removeFromLocalStorage}