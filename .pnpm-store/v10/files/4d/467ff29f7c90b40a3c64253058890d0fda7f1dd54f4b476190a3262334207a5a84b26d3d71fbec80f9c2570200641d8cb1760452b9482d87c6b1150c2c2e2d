import toDate from "../../toDate/index.js";
import startOfUTCWeek from "../startOfUTCWeek/index.js";
import startOfUTCWeekYear from "../startOfUTCWeekYear/index.js";
import requiredArgs from "../requiredArgs/index.js";
var MILLISECONDS_IN_WEEK = 604800000;
export default function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}