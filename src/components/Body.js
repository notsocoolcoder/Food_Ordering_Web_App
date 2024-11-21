import { useEffect, useState } from "react"
import { RestaurantCard } from "./RestaurantCard"
import { Link } from "react-router-dom"
import Shimmer from "./Shimmer"


export const Body = ()=>{
  const [filteredRestaurants,setFilteredRestaurants] = useState([])
  const [allRestaurants,setAllRestaurants] = useState([])
  const [searchText,setSearchText] = useState("")
  const handleSearch = ()=>{
      const filteredData = allRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
     setFilteredRestaurants(filteredData);

  
}
   useEffect(()=>{
        getRestaurants()
        console.log("use effect")
   },[])

   async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9366968&lng=77.6237947&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json)
    
    setAllRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   
  }

 console.log("bof\dy render")

  
    return filteredRestaurants.length===0?<Shimmer></Shimmer>: (
      
        <div className="body">
        <div className="search">
        <input type="text" className="searchBox" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value)
        }}/>
            <button className="filter" onClick={handleSearch}>search</button>
        </div>
        <div className="restaurant-container">
        
        {
          filteredRestaurants.map(restaurant => <Link style={{ textDecoration: 'none', color: 'black' }} to = {"/restaurant/"+ restaurant.info.id}><RestaurantCard resData={restaurant}></RestaurantCard></Link>) 
        }
       
        </div>

        </div>
    )
}