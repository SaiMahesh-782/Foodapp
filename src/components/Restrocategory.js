
import { useState } from "react"
import ItemList from "./ItemList"



const Restrocategory=({data})=>{
   

    const [showItems,setShowItems]=useState(false)
    const dropdown=()=>{
        setShowItems(!showItems)
    }
    return(
        <>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-6 ">
            <div className="flex justify-between ">
            <span className="font-bold">{data.title}[{data.itemCards.length}]</span>
            <count  span className="cursor-pointer" onClick={dropdown}>
                
            {showItems ? "🔼" : "🔽"}</count>
        </div>
        <div>
       { showItems&&<ItemList items={data.itemCards}/>}
        </div>
        </div>
        </>
    )
}
export default Restrocategory