// MM-DD-YYYY - e.g: "4-8-2025" or "10-10-2025"
export function formatDateUsCentral(dateObj: Date) {
  return dateObj
    .toLocaleString('en-US', {
      timeZone: 'America/Chicago',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
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

export function getUsCentralMonthIndex(dateObj: Date) {
  return (
    parseInt(
      dateObj.toLocaleString('en-US', {
        timeZone: 'America/Chicago',
        month: '2-digit'
      }),
      10
    ) - 1
  );
}

export function getUsCentralYear(dateObj: Date) {
  return parseInt(
    dateObj.toLocaleString('en-US', {
      timeZone: 'America/Chicago',
      year: 'numeric'
    }),
    10
  );
}

export function formatDateUTC(dateObj: Date) {
  const year = dateObj.getUTCFullYear();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  return `${month}-${day}-${year}`;
}

interface formatDateProps {
  month: number;
  day: number;
  year: number;
}

export function formatDate({ month, day, year }: formatDateProps) {
  return `${month}-${day}-${year}`;
}
