import { useDispatch } from "react-redux";
import { Swiggy_Image } from "../Constant";
import { addItem } from "../utils/CardSlice";

const ItemList = ({ items }) => {
  const dispatch=useDispatch()
  const dispatchaction=(item)=>{
dispatch(addItem(item))

  }
  return (
    <>
      <ul>
        {items.map((item) => (
          <div key={item.card.info.id} className="m-4 p-2 border-gray-200 border-b-2 flex items-center justify-space-between">
            <div className="w-40 flex-grow text-left">
              <span className="mb-1">{item.card.info.name}</span>
              <br />
              <span className="mb-1">₹{ item.card.info.price ?item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            <div>
                <div className="absolute">
            <button className="bg-white text-green-600 my-12 px-2 py-1 rounded"
             onClick={()=>dispatchaction(item)}>Add +</button>
            </div>
              <img className="h-20 w-20" src={Swiggy_Image + item.card.info.imageId} alt="" />
              
            </div>

          </div>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
