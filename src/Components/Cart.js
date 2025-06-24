import { useDispatch, useSelector } from "react-redux";
import ItemList from "../Components/ItemList";
import {clearCart} from "../utils/cartSlice"
const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    
    return (

   <div className="text-center m-4 p-4 ">
        <h1 className="font-bold m-auto">Cart</h1>
        <div> 
            <button onClick={handleClearCart} className=" p-1 m-1 rounded text-white bg-black">Clear Cart</button>
           
           {cartItems.length===0 && <h1>Cart is Empty.Add Items to cart</h1>}
           < ItemList items={cartItems}/>
        </div>
       
    </div>)
};
export default Cart;
