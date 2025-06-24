import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_URL } from "../utils/constants.js"; 
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu=()=>{
const[showIndex,setShowIndex]=useState(null);

const {resId}=useParams();
const resInfo=useRestaurantMenu(resId);
if(resInfo===null )
  {
    return (<Shimmer/>);
  }

 
  const {
    name,
    totalRatingsString,
    costForTwoMessage,
    cloudinaryImageId,
    cuisines = [],
    areaName,
    sla = {},
  id} = resInfo?.cards?.[2]?.card?.card?.info || {};
const itemCards =
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card.itemCards || [] ;
const categories= resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (cat) => cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

return (
  
<div className="text-center">
    <h1 className="font-bold text-2xl  p-2">{name}</h1> 
  <div className=" inline-block border border-solid rounded-2xl w-[500px] h-[105px] shadow-[10px_10px_10px_rgba(0,0,0,0.2),-10px_10px_11px_rgba(0,0,0,0.1)] text-left" >
   <div className="space-x-1 text-sm font-bold ml-3 mt-1 ">
         <h4 className="inline-flex items-center ">
        <span className="  w-3.5 h-3.5 rounded-full bg-green-700 flex items-center justify-center text-white text-[10.5px]  ">★</span>
         <span> ({totalRatingsString})</span> 
         <span className="text-lg">•</span> 
         <span>{costForTwoMessage}</span>
         </h4>
    </div>
    <div className="ml-3">
          <h5 className="text-orange-500 text-sm font-semibold">  {Array.isArray(cuisines) ? cuisines.join(", ") : ""}</h5>
          <h5><span className="text-black font-bold text-[11px]">Outlet</span> <span className="text-gray-400 text-sm">{areaName}</span> </h5>
          <h5 className="font-bold text-[11px] ">{sla.minDeliveryTime}-{sla.maxDeliveryTime} mins</h5>
    
    </div>
  </div>
  <div >
     {/* categories accordians */}
     
     {categories.map((category,index)=><RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
     showIndex={index===showIndex?true:false}
     setShowIndex={()=>setShowIndex(index)}
     />)}
    
  </div>
</div>
  

);

};
export default RestaurantMenu;