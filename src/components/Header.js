import { useState } from "react"
import { Link } from "react-router-dom"

export const Header = ()=>{
    const [title,setTitle] = useState("Food Village")
    const [ loggedIn,setLoggedIn] = useState(true)
    return <>
        
        <div className="header">
        <div className="logo">
        <img className="app-logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmaaj1dqXMUKLbNAjVKYq6OhtCmAuWEKIjg&s" alt="Logo"></img>

        </div>
        
        <div className="nav-items">
             <ul>
                <li>
             <Link to = "/home">  Home</Link>
                </li>
                <li>
             <Link to="/about">   About Us</Link>
                </li>
                <li>
            <Link to="/contact">   Contact Us</Link> 
                </li>
                <li>
                <Link to = "/cart">Cart</Link>
                </li>
              
             </ul>
        </div>

        <div className="log">
            {(loggedIn===true)?<button onClick={()=>setLoggedIn(false)}>logout</button>:<button onClick={()=> setLoggedIn(true)}>login</button>}
        </div>

        </div>
        </>
}