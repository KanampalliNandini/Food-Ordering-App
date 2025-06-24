import { useState ,useEffect} from "react";
import RestaurantCard,{withPromotedLable} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { RES_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=()=> {
     const onlineStatus=useOnlineStatus();
    const [searchText,setSearchText]=useState("");
    const [listOfRestaurant,setListOfRestaurant]=useState([]);
    const RestaurantCardPromoted=withPromotedLable(RestaurantCard);
   
    const[filteredListOfRestaurant,setfilteredListOfRestaurant]=useState([]);
    const fetchData=async ()=>{
     const data=await fetch(RES_URL);
    const json=await data.json();
    setListOfRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredListOfRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
   };
    useEffect(()=>{fetchData()},[]);
    
   if(onlineStatus===false)
   {
    return <h1>Hey Looks Like Something Wrong!!!!.........Please  check your internet connection</h1>;
   }
  
   //rendering on the basis of condition is condition rendering
   if(listOfRestaurant.length===0)
     {
        return <Shimmer/>
     }

     
    return listOfRestaurant.length===0 ?(<Shimmer/>):(<div className="body">
        <div className="filter flex   items-center my-0" >
            <div className="search m-1 p-1"> 
                <input className="searchbox border border-s-orange-950 border-black px-1 mx-1 w-[500] rounded" type="text" placeholder="Search for restaurants and food" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className="searchbtn m-1 px-2.5 mx-0.5 py-0.5 bg-slate-300 rounded-lg " onClick={()=>{setfilteredListOfRestaurant(listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())))}} >search</button>
            </div>
            <div className="mx-4 px-8 my-1 py-1 flex items-center">
                <button className="filter-btn  bg-slate-300 m-2 p-2  ml-[205px] rounded-md" onClick={
                ()=>{const filteredRestaurant=listOfRestaurant.filter(
                    (res)=>res.info.avgRatingString>4.2
                )
                setfilteredListOfRestaurant(filteredRestaurant);
                
                   }
                   
                }>
            Top Rated Restaurants
            </button>
            </div>

        
            </div>
        <div className="flex flex-wrap  ">
            {filteredListOfRestaurant.map((res)=>{ return<Link  className="nodecoration" key={res.info.id } to={"/restaurant/"+res.info.id}>
            {
                res.info.isOpen?<RestaurantCardPromoted resData={res}/>:<RestaurantCard resData={res} />

            }
              </Link>
            
            })}
           
            
        </div>
    </div>);
}
export default Body;