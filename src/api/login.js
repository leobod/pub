import service from '@/utils/request'

export function login (data) {
  return service({
    url: '/login',
    method: 'post',
    data
  })
}
