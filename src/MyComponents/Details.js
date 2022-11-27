import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Details=()=>{

            useEffect(()=>{
                getAllprofileData()
            },[])
        const[Profiles,setProfiles] = useState([])

    async function getAllprofileData(){
        const allProfile = await axios.get("http://127.0.0.1:8000/api/pf/")
        console.log(allProfile.data)
        setProfiles(allProfile.data)
    }
    return(
        <>
        
            <h1 className="text-info">This Is Detail Component</h1>
    <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First_Name</th>
      <th scope="col">Last_Name</th>
      <th scope="col">Profile_Pic</th>
      <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">Gender</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody className="table-info">
    {
        Profiles.map(prof=>{
            return(
            
                    <tr key={prof.id}>
                    <th scope="row">{prof.id}</th>
                        <td>{prof.first_name}</td>
                        <td>{prof.last_name}</td>
                        <td><img src={prof.profile_pic} height="20%" width="20%"/></td>
                        <td>{prof.address}</td>
                        <td>{prof.city}</td>
                        <td>{prof.gender}</td>
                        <td>
                          <NavLink to={`/editProfile/${prof.id}`}>
                        <i class="bi bi-pencil-square text-primary"></i>
                        </NavLink>
                        </td>
                        <td>
                        <i class="bi bi-trash-fill text-danger"></i>
                        </td>

                    </tr>
                
            )
        })
    }
    
  </tbody>
</table>
        </>
    )
}
export default Details;