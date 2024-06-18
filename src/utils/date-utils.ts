export function formatDateToYYYYMMDD(date: Date): string {
  return date.toISOString().substring(0, 10)
}

export function formatDateToFancy(date: Date): string {
  // return date.toISOString().substring(0, 10)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
