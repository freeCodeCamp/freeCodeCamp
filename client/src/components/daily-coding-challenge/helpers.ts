// MM-DD-YYYY - e.g: "04-08-2025"
export function formatDateUsCentral(dateObj: Date) {
  return dateObj
    .toLocaleString('en-US', {
      timeZone: 'America/Chicago',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    .replace(/\//g, '-');
}

// Mmm D, YYYY - e.g: "Apr 8, 2025"
export function formatDateUsCentralForDisplay(dateObj: Date) {
  return dateObj.toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}
