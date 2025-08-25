import { useState } from "react";

interface UserProfileState {
  name:string,
  age:number,
  email:string
}

const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfileState>({
    name:"",
    age:0,
    email:""
  });

  const updateName = (name:string) =>{
    setProfile((prevName) => ({...prevName,name}))
  }
  const updateAge = (age:number) =>{
    setProfile((prevAge)=>({...prevAge,age}))
  }
   const updateEmail = (email:string) =>{
    setProfile((prevEmail) => ({...prevEmail,email}))
  }

  return (
    <div>
        Welcome to UserProfile
        <input type="text" value={profile.name} onChange={(e) =>updateName(e.target.value)} />
        <input type="number" value={profile.age > 0 ? profile.age :""} onChange={(e)=>updateAge(Number(e.target.value))} />
         <input type="text" value={profile.email} onChange={(e) =>updateEmail(e.target.value)} />

         <h1>Profile Summary</h1>
         <h3>{profile.name}</h3>
         <h3>{profile.age}</h3>
         <h3>{profile.email}</h3>
    </div>
  )
}
export default UserProfile;
