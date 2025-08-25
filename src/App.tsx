// import Button from "./components/Button";
// import User from "./components/User";
// import AdminInfo from "./components/AdminInfo";
// import UserInfo from "./components/UserInfo";
// import type { adminInfo, Info } from "./types";
import Counter from "./components/Counter";
// import Todo from "./components/Todo";
// import UserProfile from "./components/UserProfile";

// import Form from "./components/Form";
// import FocusInput from "./FocusInput";

const App = () => {
  // const user:Info = {
  //   id: 1,
  //   name:"john",
  //   email:"john@gmail.com",
  //   location: ['Bd', 'Ban']
  // }

  // const admin:adminInfo = {
  //   id: 2,
  //   name:"smith",
  //   email:"smith@gmail.com",
  //   location:["USA","UK"],
  //   role:"admin"
  // }

  return (
    <div>
      {/* <User name="Nayon" age= {20} isStudent= {true} /> */}
      {/* <Button label= "Click me" onClick = {()=>alert("Clicked")} disabled = {false} />
       <Button label= "Click me" onClick = {()=>alert("Clicked")} disabled = {true} /> */}

      {/* <UserInfo user={user} />
      <AdminInfo admin= {admin} /> */}

      <Counter />
      {/* <UserProfile /> */}
      {/* <Todo /> */}
      {/* <Form/> */}
      {/* <FocusInput /> */}
    </div>
  );
};
export default App;
