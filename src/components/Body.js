import React, { useState, useEffect } from 'react';
import Card from "./Card";
import { API } from '../Constant';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnline from './UseOnline';

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const online = useOnline();

  useEffect(() => {
    fetchRestaurant();
  }, []);

  if (!online) {
    return <h1 className="text-red-500">Please check your internet connection</h1>;
  }

  async function fetchRestaurant() {
    try {
      const data = await fetch(API);
      const json = await data.json();

      function getRestaurantInformation() {
        for (let i = 0; i < json?.data?.cards.length; i++) {
          let correctData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (correctData !== undefined) {
            console.log(correctData)
            return correctData;
          }
        }
        return [];
      }

      const resData = getRestaurantInformation();
      setRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleFilterClick = () => {
    const filteredRestro = restaurants.filter(
      (res) => res.info.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredRestaurants(filteredRestro);
  };

  return (
    <>
      <div className="text-center py-6">
        <input
          className="p-2 border border-gray-300 "
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search the restaurant"
        />
        <button
          className=" px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={handleFilterClick}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 hover:tra      ">
        {isLoading ? (
          <Shimmer />
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link key={restaurant.info.id}
          to ={"/restaurent/"+restaurant.info.id}> <Card {...restaurant.info} /></Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
