import type { Info } from "../types";

type userInfo = {
  user: Info
}

const UserInfo = ({user}:userInfo) => {
  return (
    <div className=''>
        Welcome to UserInfo
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.email}</p>
    </div>
  )
}
export default UserInfo;
