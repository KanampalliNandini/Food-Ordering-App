import { Link } from "react-router-dom";
import {LOGO_URL}  from "../utils/constants";
import { useState ,useEffect,useContext} from "react";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";
const Header=()=>{
    const [btnName,setBtnName]=useState("Login")
    const {loggedInUser}=useContext(UserContext);
    const cartItems=useSelector((store)=>store.cart.items);
    
    // useEffect(()=>{console.log("useEffect is called")},[])
    return <div className="flex justify-between border border-solid black h-[160px] shadow-md my-0">
        <div className="logo">
        <img  className="w-[150px]" src="https://img.freepik.com/premium-vector/food-logo-design-with-leaf-creative-concept-premium-vector_526458-2675.jpg?semt=ais_hybrid&w=740"/>
        </div>
        <div className="items-center">
            <ul className="flex p-10 m-10">
                <li className="px-4"><Link to="/">Home </Link></li>
                <li className="px-4"><Link to="/about">About us</Link></li>
                <li className="px-4"><Link to="/contact">Contact us</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4"> <Link to="/cart">Cart({cartItems.length})</Link> </li>
                <button className="px-4 flex justify-center"  onClick={()=>{setBtnName(btnName==="Login"?"LogOut":"Login")}}>{btnName}</button>
                <li className="px-4 font-bold bg-purple-700 rounded-full flex items-center justify-center w-9 h-9 ">{loggedInUser}</li>
            </ul>

        </div>
    </div>
   
}
export default Header;