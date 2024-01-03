
import ItemList from "./ItemList"

const Restrocategory=({data,showItems,setshowIndex})=>{
   
    const dropdown=()=>{
        setshowIndex()
    }
    return(
        <>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-6 cursor-pointer " >
            <div className="flex justify-between " onClick={dropdown}>
            <span className="font-bold">{data.title}[{data.itemCards.length}]</span>
            <count  span className="cursor-pointer" >
                
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