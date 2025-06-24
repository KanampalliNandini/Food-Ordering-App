import {useState} from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showIndex,setShowIndex})=>{
   
     const handleClick=()=>{setShowIndex();}
    return (
        <div>
            {/* accordian header and body */}
           
            <div className="w-[500px]  mx-auto my-6 bg-gray-50 shadow-lg p-4  rounded-md" >
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                <span className="text-gray-400 text-lg" >⯆</span>
                </div>
               {showIndex && <ItemList items={data.itemCards}/>}
                
            </div>
            
            
        </div>
    )
}
export default RestaurantCategory;
