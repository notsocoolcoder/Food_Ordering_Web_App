export const RestaurantCard = (props)=>{
    const{ resData }= props

    const { name,cuisines,costForTwo,deliveryTime,avgRating }=resData?.info
    return (
        <div className="res-card">
        <div>
           <img className="res-image"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}></img>
           </div>
           <div>
           <h3>{name}</h3>
           <h4>{cuisines}</h4>
           <h4>{costForTwo}</h4>
           <h4>{deliveryTime}</h4>
           <h4>{avgRating}</h4>
           </div>
          
        </div>
    )
}
