import { parse, isValid, format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

interface formatDateProps {
  month: number;
  day: number;
  year: number;
}

// Format month, day, and year as "M-D-YYYY"
export function formatDate({ month, day, year }: formatDateProps) {
  return `${month}-${day}-${year}`;
}

// Returns the current US Central date in M-D-YYYY
export function getTodayUsCentral(dateObj: Date = new Date()) {
  const zonedDate = toZonedTime(dateObj, 'America/Chicago');
  return format(zonedDate, 'M-d-yyyy');
}

// Validate that dateString is in the format M-D-YYYY
// Leading zero's are accepted for single digit month/day
export function isValidDateParam(dateString: string) {
  const parsedDate = parse(dateString, 'M-d-yyyy', new Date());
  return isValid(parsedDate);
}

// Convert M-D-YYYY to display format (e.g: "January 1, 2025")
export function formatDisplayDate(dateString: string) {
  const parsedDate = parse(dateString, 'M-d-yyyy', new Date());
  if (!isValid(parsedDate)) {
    return 'Invalid date';
  }
  return format(parsedDate, 'MMMM d, yyyy');
}
