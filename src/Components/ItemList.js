
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList=({items})=>{
    const dispatch=useDispatch(); 
    const handleAddItem=(item)=> dispatch(addItem(item))
   
    
   
    return (
        <div className="" >
            <div >
                {items?.map((item)=>
              <div key={item.card.info.id} className="p-2 m-2 border-[#e7e5e5] border-b-2  text-left flex items-center"> 
                
                  <div className="w-[600px] pr-4">
                     <div className="py-0"> 
                        <span className="font-bold text-gray-700 text-[15px]">{item.card.info.name}</span><br></br>
                        <span className="text-[12px] font-semibold">₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                     </div>
                     <p className="text-[10px] text-gray-500 ">{item.card.info.description}</p>
                  </div>
                  <div className="w-[160px] flex items-center ">
                       <img src={CDN_URL+item.card.info.imageId} className="w-[125px] h-[90px] rounded-xl mr-3 my-1 transform transition-transform duration-300 hover:scale-105 "></img>
                       <div className="absolute mx-2.5 my-0 p-0">
                            <button className="text-green-500 text-sm font-bold border border-black rounded-md px-3 p-1 mt-[66px] bg-white  hover:bg-slate-600 transform transition-transform duration-300 hover:scale-105"
                            onClick={()=>handleAddItem(item)}>Add+</button>
                        </div>
                  </div>
              </div>
                
                
                )}
            </div>
            
        </div>
    )
}
export default ItemList ;