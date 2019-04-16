export function getToken() {
  return localStorage.getItem('token')
}

export function setToken(value: string) {
  localStorage.setItem('token', value)
}

export function checkPhoneNumber(phone: string) {
  const phoneRegex = /^1[0-9]{10}$/
  if (phoneRegex.test(phone)) {
    return true
  } else {
    return false
  }
}