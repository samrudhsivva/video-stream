import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
    const selector = useSelector((store)=> store.app.isMenuOpen);

    //Early Return
    if(!selector){
        return null;
    }
    return (
        <div className="w-48 p-5 shadow-lg">
          <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
            <li>Explore</li>
            <li>Trending</li>
            <li>Subscriptions</li>
            <li>Library</li>
          </ul>
          
          <h3 className="font-bold py-5">Watch Later</h3>
          <ul>
            <li>Music</li>
            <li>Shorts</li>
            <li>Gaming</li>
            <li>Movies</li>
            <li>Documentaries</li>
            <li>Podcasts</li>
            <li>News</li>
            <li>Science</li>
          </ul>
          
          <h3 className="font-bold py-5">Subscriptions</h3>
          <ul>
            <li>Music</li>
            <li>Shorts</li>
            <li>Gaming</li>
            <li>Movies</li>
            <li>Tech Reviews</li>
            <li>Cooking Shows</li>
            <li>Travel Vlogs</li>
            <li>Fitness</li>
          </ul>
          
          <h3 className="font-bold py-5">Categories</h3>
          <ul>
            <li>Technology</li>
            <li>Education</li>
            <li>Entertainment</li>
            <li>Health & Wellness</li>
            <li>Comedy</li>
            <li>Sports</li>
            <li>Fashion & Beauty</li>
            <li>DIY & Crafts</li>
          </ul>
          
          <h3 className="font-bold py-5">Settings</h3>
          <ul>
            <li>Account</li>
            <li>Privacy</li>
            <li>Notifications</li>
            <li>Language</li>
            <li>Help</li>
            <li>About</li>
            <li>Terms & Conditions</li>
            <li>Feedback</li>
          </ul>
        </div>
      )
      
  
}

export default SideBar