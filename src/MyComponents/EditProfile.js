import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditProfile=()=>{
        const {pid}=useParams()

        useEffect(()=>{
                getProfileById()
        },[])
        async function getProfileById(){
            
        
            const profile = await axios.get("http://127.0.0.1:8000/api/pf/"+pid+'/')
            console.log(profile)
        }
        
        return(
        <>
                <h1>{pid}</h1>
                <h1 className="text-info">This Is EditProfile Component</h1>
        </>
    )
}
export default EditProfile;