import Cookies from 'js-cookie'

const KEY = 'lzkey'
const VAL = 'lzval'

export function getKey () {
  return Cookies.get(KEY)
}

export function setKey (val) {
  return Cookies.set(KEY, val)
}

export function delKey () {
  return Cookies.remove(KEY)
}

export function getVal () {
  return Cookies.get(VAL)
}

export function setVal (val) {
  return Cookies.set(VAL, val)
}

export function delVal () {
  return Cookies.remove(VAL)
}
