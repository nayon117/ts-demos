// import Button from "./components/Button";
// import User from "./components/User";

import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";
import type { adminInfo, Info } from "./types";

const App = () => {

  const user:Info = {
    id: 1,
    name:"john",
    email:"john@gmail.com"
  }

  const admin:adminInfo = {
    id: 2,
    name:"smith",
    email:"smith@gmail.com",
    role:"admin"
  }

  return (
    <div>
       {/* <User name="Nayon" age= {20} isStudent= {true} /> */}
       {/* <Button label= "Click me" onClick = {()=>alert("Clicked")} disabled = {false} />
       <Button label= "Click me" onClick = {()=>alert("Clicked")} disabled = {true} /> */}

      <UserInfo user={user} />
      <AdminInfo admin= {admin} />

    </div>
  )
}
export default App;
