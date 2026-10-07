import assertString from './util/assertString';
import isIP from './isIP';
var subnetMaybe = /^\d{1,3}$/;
var v4Subnet = 32;
var v6Subnet = 128;
export default function isIPRange(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  assertString(str);
  var parts = str.split('/');

  // parts[0] -> ip, parts[1] -> subnet
  if (parts.length !== 2) {
    return false;
  }
  if (!subnetMaybe.test(parts[1])) {
    return false;
  }

  // Disallow preceding 0 i.e. 01, 02, ...
  if (parts[1].length > 1 && parts[1].startsWith('0')) {
    return false;
  }
  var isValidIP = isIP(parts[0], version);
  if (!isValidIP) {
    return false;
  }

  // Define valid subnet according to IP's version
  var expectedSubnet = null;
  switch (String(version)) {
    case '4':
      expectedSubnet = v4Subnet;
      break;
    case '6':
      expectedSubnet = v6Subnet;
      break;
    default:
      expectedSubnet = isIP(parts[0], '6') ? v6Subnet : v4Subnet;
  }
  return parts[1] <= expectedSubnet && parts[1] >= 0;
}