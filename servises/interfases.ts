export interface loginUser {
  id: number,
  username: string,
  email: string,
  token: string
}
export interface user {
  id: number,
  username: string,
  email: string,
}


export interface registerUser {
  username: string,
  email: string,
  password: string
}