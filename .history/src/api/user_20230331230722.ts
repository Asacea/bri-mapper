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
  ip:string
}
export function getUsers(data:userList) {
  return myRequest.request({
    url: '/users',
    params:data
  })
}
export function getUsersFromId(id:number) {
  return myRequest.request({
    url: `users/${id}`,
  })
}
export function addUser(data:addUserList) {
  return myRequest.request({
    url: '/users',
    method:'post',
    data
  })
}
export function deleteUsersFromId(id:number) {
  return myRequest.request({
    url: `users/${id}`,
    method:'delete'
  })
}
export function editUsersFromId(id:number,dbname?:string,ip?:string) {
  return myRequest.request({
    url: `users/${id}`,
    method:'put',
    data:{
      dbname,ip
    }
  })
}
export function changeUserStatus(uId:number,type:boolean) {
  return myRequest.request({
    url: `users/${uId}/state/${type}`,
    method:'put',
  })
}

export function assignUserRole(id:number,rid:number) {
  return myRequest.request({
    url: `users/${id}/role`,
    method:'put',
    data:{
      rid
    }
  })
}
