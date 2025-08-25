import type { adminInfo } from "../types";

interface AdminInfoProps {
  admin : adminInfo
}

const AdminInfo = ({admin}:AdminInfoProps) => {
  return (
    <div className=''>
        Welcome to AdminInfo
        <p>{admin.id}</p>
        <p>{admin.name}</p>
        <p>{admin.email}</p>
        <p>{admin.role}</p>
    </div>
  )
}
export default AdminInfo;
