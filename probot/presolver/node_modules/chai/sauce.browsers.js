
/*!
 * Chrome
 */

exports['SL_Chrome'] = {
    base: 'SauceLabs'
  , browserName: 'chrome'
};

/*!
 * Firefox
 */

 exports['SL_Firefox'] = {
     base: 'SauceLabs'
   , browserName: 'firefox'
 };

 exports['SL_Firefox_ESR'] = {
     base: 'SauceLabs'
   , browserName: 'firefox'
   , version: 38
 };

/*!
 * Internet Explorer
 */

exports['SL_IE'] = {
    base: 'SauceLabs'
  , browserName: 'internet explorer'
};

exports['SL_IE_Old'] = {
    base: 'SauceLabs'
  , browserName: 'internet explorer'
  , version: 10
};

exports['SL_Edge'] = {
    base: 'SauceLabs'
  , browserName: 'microsoftedge'
};

/*!
 * Safari
 */

exports['SL_Safari'] = {
    base: 'SauceLabs'
  , browserName: 'safari'
  , platform: 'Mac 10.11'
};

/*!
 * iPhone
 */

/*!
 * TODO: These take forever to boot or shut down. Causes timeout.
 *

exports['SL_iPhone_6'] = {
    base: 'SauceLabs'
  , browserName: 'iphone'
  , platform: 'Mac 10.8'
  , version: '6'
};

exports['SL_iPhone_5-1'] = {
    base: 'SauceLabs'
  , browserName: 'iphone'
  , platform: 'Mac 10.8'
  , version: '5.1'
};

exports['SL_iPhone_5'] = {
    base: 'SauceLabs'
  , browserName: 'iphone'
  , platform: 'Mac 10.6'
  , version: '5'
};

*/

/*!
 * Android
 */

/*!
 * TODO: fails because of error serialization
 *

exports['SL_Android_4'] = {
    base: 'SauceLabs'
  , browserName: 'android'
  , platform: 'Linux'
  , version: '4'
};

*/
