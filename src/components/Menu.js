import { useEffect, useState } from "react";
import { swiggy_menu_api_URL } from "../Constant";
import { useParams } from "react-router-dom";
import Restrocategory from "./Restrocategory";


const Menu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const { id } = useParams();
  const[showIndex,setshowIndex]=useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const getMenu = async () => {
      try {
        console.log({ id });
        const data = await fetch(swiggy_menu_api_URL + id);
        const json = await data.json();
        console.log(json.data);
        setRestaurantMenu(json.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
        // Handle error (e.g., set an error state)
      }
    };

    getMenu(); // Invoke the getMenu function

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  

  

  if (!restaurantMenu || restaurantMenu.length === 0) {
    return <h1>Loading</h1>;
  }

  const firstCard = restaurantMenu.cards && restaurantMenu.cards[0];
  const cardInfo = firstCard && firstCard.card && firstCard.card.card && firstCard.card.card.info;
  const { name } = cardInfo || {};
  const itemCards =
    restaurantMenu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    ) || [];

  console.log(itemCards);

  return (
    <>
      <div className="text-center ">
        <div className="font-bold text-2xl my-5">{name}</div>

        <p className="m-2 ">
          {itemCards.map((category,index) => (
            <Restrocategory data={category.card.card}
            showItems={index===showIndex? true: false}
            setshowIndex={() => setshowIndex((prevIndex) => (prevIndex === index ? !prevIndex : index))} />
           
          ))}
        </p>
     
      </div>
    </>
  );
};

export default Menu;
