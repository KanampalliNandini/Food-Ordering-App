import { useEffect,useState } from "react"

const useOnlineStatus=()=>{  
    
    const [onlineStaus,setOnlieStatus]=useState(true)
    useEffect(()=>{
        window.addEventListener("online",()=> {setOnlieStatus(true)});
        window.addEventListener("offline",()=> {setOnlieStatus(false)});
    }
    
 
    ,[])
    return onlineStaus;
}
export default useOnlineStatus;
