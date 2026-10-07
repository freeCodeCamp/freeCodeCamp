import getUTCISOWeekYear from "../getUTCISOWeekYear/index.js";
import startOfUTCISOWeek from "../startOfUTCISOWeek/index.js";
import requiredArgs from "../requiredArgs/index.js";
export default function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}