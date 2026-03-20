export function getThemeCookie(): boolean | null {
  const match = document.cookie.match(/(?:^|; )theme=(light|dark)/)
  if (!match) return null
  return match[1] === 'dark'
}

export function setThemeCookie(isDark: boolean) {
  document.cookie = `theme=${isDark ? 'dark' : 'light'}; path=/; max-age=${60 * 60 * 24 * 365}`
}
