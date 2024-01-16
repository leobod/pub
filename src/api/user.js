import service from '@/utils/request'

export function list (data) {
  return service({
    url: '/user/list',
    method: 'post',
    data
  })
}
