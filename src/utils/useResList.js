import {useEffect,useState} from "react";
import { RES_URL } from "./constants";
const useResList=()=>{
    const [listOfRestaurant,setListOfRestaurant]=useState([]);

    useEffect(()=>{fetchData()},[]);
    const fetchData=async ()=>{
     const data=await fetch(RES_URL);
    const json=await data.json();
    setListOfRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredListOfRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
   };
   return listOfRestaurant;
} 
export default useResList;