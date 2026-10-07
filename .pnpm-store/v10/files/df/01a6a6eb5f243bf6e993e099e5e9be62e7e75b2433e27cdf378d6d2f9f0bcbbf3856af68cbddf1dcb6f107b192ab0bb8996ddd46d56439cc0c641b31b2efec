import toInteger from "../toInteger/index.js";
import toDate from "../../toDate/index.js";
import getUTCISOWeek from "../getUTCISOWeek/index.js";
import requiredArgs from "../requiredArgs/index.js";
export default function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}