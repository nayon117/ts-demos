export type Info = {
  id: number,
  name:string,
  email:string
}

export type adminInfo = Info & {
  role: "admin"
}
