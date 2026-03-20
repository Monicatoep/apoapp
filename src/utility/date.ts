export function daysBetween(a: Date, b: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24
  const aStart = new Date(a.getFullYear(), a.getMonth(), a.getDate())
  const bStart = new Date(b.getFullYear(), b.getMonth(), b.getDate())
  return Math.round((bStart.getTime() - aStart.getTime()) / msPerDay)
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' })
}
