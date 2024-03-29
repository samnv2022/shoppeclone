import { User } from 'src/types/user.type'

export const LocalStorageEventTarget = new EventTarget()

export const setAccessTokenToLS = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}

export const setRefreshTokenToLS = (refresh_token: string) => {
  localStorage.setItem('refresh_token', refresh_token)
}

export const getAccessTokenFromLS = () => {
  return localStorage.getItem('access_token') || ''
}

export const clearLS = () => {
  localStorage.removeItem('access_token')
  const clearLSEvent = new Event('clearLS')
  localStorage.removeItem('refresh_token')
  LocalStorageEventTarget.dispatchEvent(clearLSEvent)
}

export const getProfileFromLS = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}

export const getRefreshTokenFromLS = () => localStorage.getItem('refresh_token') || ''

export const setProfileToLS = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
