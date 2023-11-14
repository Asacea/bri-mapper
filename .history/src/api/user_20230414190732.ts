import myRequest from './api'
interface userList {
  query?:string,
  pagenum:number,
  pagesize:number
}
interface addUserList {
  // ip:string,
  user?:string,
  password:string,
  dbname:string,
  ip: string,
  id:number,
}
interface editUserList {
  id: number,
  user: string,
  password?:string,
  dbname?:string,
  ip?: string,
  dtype?:number
}
export function getUsers(data:userList) {
  return myRequest.request({
    url: '/listpage',
    params:data
  })
}
export function getUsersFromId(id:number) {
  return myRequest.request({
    url: `detail/${id}`,
  })
}
export function addUser(data:addUserList) {
  return myRequest.request({
    url: '/add',
    method:'post',
    data
  })
}
export function deleteUsersFromId(id:number) {
  return myRequest.request({
    url: `del/${id}`,
    method:'delete'
  })
}
export function editUsersFromId(data:editUserList) {
  return myRequest.request({
    url: `update`,
    method:'post',
    data:{
      dbname,ip
    }
  })
}
// export function changeUserStatus(uId:number,type:boolean) {
//   return myRequest.request({
//     url: `users/${uId}/state/${type}`,
//     method:'put',
//   })
// }

// export function assignUserRole(id:number,rid:number) {
//   return myRequest.request({
//     url: `users/${id}/role`,
//     method:'put',
//     data:{
//       rid
//     }
//   })
// }
