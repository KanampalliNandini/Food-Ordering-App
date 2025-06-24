import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard=({resData})=>
   
{
    const {loggedInUser}=useContext(UserContext);
    const {name,cloudinaryImageId,cuisines,avgRatingString,sla}=resData?.info;
    return (
    <div className="res-card rounded-lg w-[250px] h-[295px] bg-gray-100 m-1 p-1  hover:bg-gray-200">
        <img  className="res-img w-[249px] h-[150px] rounded-lg" src={CDN_URL +cloudinaryImageId }/>
        
        <h3 className="font-bold py-2 text-xl">{name}</h3>
        <h5 className="text-sm">{"★ "+avgRatingString+" "+sla.slaString}</h5>
        <h5 className="text-sm py-1">{cuisines.join(", ")}</h5>
       
    </div>
    );
};
export default RestaurantCard;
//Higher Order Component
//input ---RestaurantCard==>RestaurantCardPromoted
export const withPromotedLable=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white rounded m-0.5 p-0.5">Promoted</label>
                <RestaurantCard {...props}/>
                

            </div>
        )
        
    }
}


