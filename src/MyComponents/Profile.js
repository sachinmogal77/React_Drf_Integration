import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Profile=()=>{

            const[file,setFile] = useState();
            function handleChange(e){
                console.log(e.target.files);
                setFile(URL.createObjectURL(e.target.files[0]));
            }

            const {register,handleSubmit,reset,}=useForm()

           const navi = useNavigate()

            const getRegisterProfile=(ProfileObj)=>{
                const headers = {
                    'Content-Type': 'multipart/form-data'
                }
                ProfileObj.profile_pic = ProfileObj.profile_pic[0]
                console.log(ProfileObj);
                axios.post("http://127.0.0.1:8000/api/pf/",ProfileObj, { headers:headers})
                reset()
                navi("/details")
            }

    return(
        <>
        <form onSubmit={handleSubmit(getRegisterProfile)}>
            <div className="row">
                <div className="col-md-3">
                    <h1 className="text-primary text-center">Add Profile</h1>
            <div class="mb-3">
  
                    <input type="text" class="form-control"  placeholder="first_name" {...register("first_name")}/>
            </div>
            <div class="mb-3">
                    <input type="text" class="form-control" placeholder="last_name"  {...register("last_name")}/>
            </div>
            <div class="mb-3">
                    
                    <input type="file"   onChange={handleChange}  {...register("profile_pic")}/>
                    <img src={file} alt=""/>
            </div>
            <div class="mb-3">
                    <input type="text" class="form-control" placeholder="address"  {...register("address")}/>
            </div>
            <div class="mb-3">
                    <input type="text" class="form-control" placeholder="city"  {...register("city")}/>
            </div>
            <div class="mb-3">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio"   value="Male"  {...register("gender")}/>
                        <label class="form-check-label">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio"  value="Female"  {...register("gender")}/>
                        <label class="form-check-label" >Female</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio"  value="Others"  {...register("gender")}/>
                        <label class="form-check-label" >Others</label>
                    </div>
                    <div class="mb-3 text-center">
                        <input type="submit" class="btn btn-success"/>

                    </div>
            </div>
            </div>
            </div>
            </form>
        </>
    )
}
export default Profile;