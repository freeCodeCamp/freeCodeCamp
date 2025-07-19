import { parse, isValid, format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

interface formatDateProps {
  month: number;
  day: number;
  year: number;
}

// Format month, day, and year as "YYYY-MM-DD" with leading zeros
export function formatDate({ year, month, day }: formatDateProps) {
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

// Returns the current US Central date in yyyy-MM-dd
export function getTodayUsCentral(dateObj: Date = new Date()) {
  const zonedDate = toZonedTime(dateObj, 'America/Chicago');
  return format(zonedDate, 'yyyy-MM-dd');
}

// Validate that dateString is in the format yyyy-MM-dd
// Leading zero's are accepted for single digit month/day
export function isValidDateParam(dateString: string) {
  const parsedDate = parse(dateString, 'yyyy-MM-dd', new Date());
  return isValid(parsedDate);
}

// Convert yyyy-MM-dd to display format (e.g: "January 1, 2025")
export function formatDisplayDate(dateString: string) {
  const parsedDate = parse(dateString, 'yyyy-MM-dd', new Date());
  if (!isValid(parsedDate)) {
    return 'Invalid date';
  }
  return format(parsedDate, 'MMMM d, yyyy');
}
