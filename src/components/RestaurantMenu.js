import {useEffect,useState} from "react"
import { useParams } from "react-router"
import Shimmer from "./Shimmer"
const RestaurantMenu = ()=>{
    const [resMenu,setResMenu] = useState([])
    const { resId } = useParams()
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu= async()=>{
         const menu = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9366968&lng=77.6237947&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
         const data = await menu.json()

         console.log(data);
         setResMenu(data)
    }

    if(resMenu.length==0)return <Shimmer></Shimmer>

    const {name,costForTwoMessage,avgRatingString,cuisines} = resMenu.data?.cards[2]?.card?.card?.info
    const cards = resMenu.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
return <>
<div>
    <h1>{name}</h1>
    <h2>{avgRatingString}</h2>
    <h3> {cuisines.join(",")}</h3>
    <h3>{costForTwoMessage}</h3>
    </div>

    <div>
     {cards.map(resCard=>{
        const { title,itemCards } = resCard.card?.card;
        console.log(itemCards)

        return <>
            <h1>{title}</h1>
            <ul>
            { itemCards?.map(item=>(<li> {item.card.info.name} - ₹{(item.card.info.price || 0) / 100}</li>))}
            </ul>
        </>
     })}
    </div>

</>
    }

export default RestaurantMenu