export type Info = {
  id: number,
  name:string,
  email:string,
  location:string[]
}

export type adminInfo = Info & {
  role: "admin"
}
