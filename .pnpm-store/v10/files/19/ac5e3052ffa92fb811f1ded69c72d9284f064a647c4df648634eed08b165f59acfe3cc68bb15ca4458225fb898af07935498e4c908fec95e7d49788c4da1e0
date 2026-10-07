import toInteger from "../toInteger/index.js";
import toDate from "../../toDate/index.js";
import getUTCWeek from "../getUTCWeek/index.js";
import requiredArgs from "../requiredArgs/index.js";
export default function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}