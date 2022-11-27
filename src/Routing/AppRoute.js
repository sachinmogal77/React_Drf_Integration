import { NavLink, Route, Routes } from "react-router-dom"
import About from "../MyComponents/About";
import Details from "../MyComponents/Details";
import EditProfile from "../MyComponents/EditProfile";
import Home from "../MyComponents/Home";
import Profile from "../MyComponents/Profile";

const AppRoute=()=>{
    return(
        <>
           
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <NavLink className="nav-link" to="/home">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to="/profile">Profile</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to="/details">Details</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/details" element={<Details/>}></Route>
                <Route path="/editProfile/:pid" element={<EditProfile/>}></Route>
            </Routes>
        </>
    )
}
export default AppRoute;
