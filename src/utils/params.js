/**
 * 获取URL参数
 * @param {String} 变量名称
 * @returns String
 */
export const getQueryVariable = (variable) => {
  if (window.location.hash.split('?').length === 1) return
  const query = window.location.hash.split('?')[1]
  const vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=')
    if (pair[0] === variable) {
      return pair[1]
    }
  }
  return ''
}
