# [1.0.7](https://github.com/EventSource/eventsource/compare/v1.0.6...v1.0.7)

* Add dispatchEvent to EventSource ([#101](https://github.com/EventSource/eventsource/pull/101) Ali Afroozeh)
* Added `checkServerIdentity` option ([#104](https://github.com/EventSource/eventsource/pull/104) cintolas)
* Surface request error message ([#107](https://github.com/EventSource/eventsource/pull/107) RasPhilCo)

# [1.0.6](https://github.com/EventSource/eventsource/compare/v1.0.5...v1.0.6)

* Fix issue where a unicode sequence split in two chunks would lead to invalid messages ([#108](https://github.com/EventSource/eventsource/pull/108) Espen Hovlandsdal)
* Change example to use `eventsource/ssestream` (Aslak Hellesøy)

# [1.0.5](https://github.com/EventSource/eventsource/compare/v1.0.4...v1.0.5)

* Check for `window` existing before polyfilling. ([#80](https://github.com/EventSource/eventsource/pull/80) Neftaly Hernandez)

# [1.0.4](https://github.com/EventSource/eventsource/compare/v1.0.2...v1.0.4)

* Pass withCredentials on to the XHR. ([#79](https://github.com/EventSource/eventsource/pull/79) Ken Mayer)

# [1.0.2](https://github.com/EventSource/eventsource/compare/v1.0.1...v1.0.2)

* Fix proxy not working when proxy and target URL uses different protocols. ([#76](https://github.com/EventSource/eventsource/pull/76) Espen Hovlandsdal)
* Make `close()` a prototype method instead of an instance method. ([#77](https://github.com/EventSource/eventsource/pull/77) Espen Hovlandsdal)

# [1.0.1](https://github.com/EventSource/eventsource/compare/v1.0.0...v1.0.1)

* Reconnect if server responds with HTTP 500, 502, 503 or 504. ([#74](https://github.com/EventSource/eventsource/pull/74) Vykintas Narmontas)

# [1.0.0](https://github.com/EventSource/eventsource/compare/v0.2.3...v1.0.0)

* Add missing `removeEventListener`-method. ([#51](https://github.com/EventSource/eventsource/pull/51) Yucheng Tu / Espen Hovlandsdal)
* Fix EventSource reconnecting on non-200 responses. ([af84476](https://github.com/EventSource/eventsource/commit/af84476b519a01e61b8c80727261df52ae40022c) Espen Hovlandsdal)
* Add ability to customize https options. ([#53](https://github.com/EventSource/eventsource/pull/53) Rafael Alfaro)
* Add readyState constants to EventSource instances. ([#66](https://github.com/EventSource/eventsource/pull/66) Espen Hovlandsdal)

# [0.2.3](https://github.com/EventSource/eventsource/compare/v0.2.2...v0.2.3)

* Fix `onConnectionClosed` firing multiple times resulting in multiple connections. ([#61](https://github.com/EventSource/eventsource/pull/61) Phil Strong / Duncan Wong)
* Remove unneeded isPlainObject check for headers. ([#64](https://github.com/EventSource/eventsource/pull/64) David Mark)

# [0.2.2](https://github.com/EventSource/eventsource/compare/v0.2.1...v0.2.2)

* Don't include test files in npm package. ([#56](https://github.com/EventSource/eventsource/pull/56) eanplatter)

# [0.2.1](https://github.com/EventSource/eventsource/compare/v0.2.0...v0.2.1)

* Fix `close()` for polyfill. ([#52](https://github.com/EventSource/eventsource/pull/52) brian-medendorp)
* Add http/https proxy function. ([#46](https://github.com/EventSource/eventsource/pull/46) Eric Lu)
* Fix reconnect for polyfill. Only disable reconnect when server status is 204. (Aslak Hellesøy).
* Drop support for Node 0.10.x and older (Aslak Hellesøy).

# [0.2.0](https://github.com/EventSource/eventsource/compare/v0.1.6...v0.2.0)

* Renamed repository to `eventsource` (since it's not just Node, but also browser polyfill). (Aslak Hellesøy).
* Compatibility with webpack/browserify. ([#44](https://github.com/EventSource/eventsource/pull/44) Adriano Raiano).

# [0.1.6](https://github.com/EventSource/eventsource/compare/v0.1.5...v0.1.6)

* Ignore headers without a value. ([#41](https://github.com/EventSource/eventsource/issues/41), [#43](https://github.com/EventSource/eventsource/pull/43) Adriano Raiano)

# [0.1.5](https://github.com/EventSource/eventsource/compare/v0.1.4...v0.1.5)

* Refactor tests to support Node.js 0.12.0 and Io.js 1.1.0. (Aslak Hellesøy)

# [0.1.4](https://github.com/EventSource/eventsource/compare/v0.1.3...master)

* Bugfix: Added missing origin property. ([#39](https://github.com/EventSource/eventsource/pull/39), [#38](https://github.com/EventSource/eventsource/issues/38) Arnout Kazemier)
* Expose `status` property on `error` events. ([#40](https://github.com/EventSource/eventsource/pull/40) Adriano Raiano)

# [0.1.3](https://github.com/EventSource/eventsource/compare/v0.1.2...v0.1.3)

* Bugfix: Made message properties enumerable. ([#37](https://github.com/EventSource/eventsource/pull/37) Golo Roden)

# [0.1.2](https://github.com/EventSource/eventsource/compare/v0.1.1...v0.1.2)

* Bugfix: Blank lines not read. ([#35](https://github.com/EventSource/eventsource/issues/35), [#36](https://github.com/EventSource/eventsource/pull/36) Lesterpig)

# [0.1.1](https://github.com/EventSource/eventsource/compare/v0.1.0...v0.1.1)

* Bugfix: Fix message type. ([#33](https://github.com/EventSource/eventsource/pull/33) Romain Gauthier)

# [0.1.0](https://github.com/EventSource/eventsource/compare/v0.0.10...v0.1.0)

* Bugfix: High CPU usage by replacing Jison with port of WebKit's parser. ([#25](https://github.com/EventSource/eventsource/issues/25), [#32](https://github.com/EventSource/eventsource/pull/32), [#18](https://github.com/EventSource/eventsource/issues/18) qqueue)
* Reformatted all code to 2 spaces.

# [0.0.10](https://github.com/EventSource/eventsource/compare/v0.0.9...v0.0.10)

* Provide `Event` argument on `open` and `error` event ([#30](https://github.com/EventSource/eventsource/issues/30), [#31](https://github.com/EventSource/eventsource/pull/31) Donghwan Kim)
* Expose `lastEventId` on messages. ([#28](https://github.com/EventSource/eventsource/pull/28) mbieser)

# [0.0.9](https://github.com/EventSource/eventsource/compare/v0.0.8...v0.0.9)

* Bugfix: old "last-event-id" used on reconnect ([#27](https://github.com/EventSource/eventsource/pull/27) Aslak Hellesøy)

# [0.0.8](https://github.com/EventSource/eventsource/compare/v0.0.7...v0.0.8)

* Bugfix: EventSource still reconnected when closed ([#24](https://github.com/EventSource/eventsource/pull/24) FrozenCow)
* Allow unauthorized HTTPS connections by setting `rejectUnauthorized` to false. (Aslak Hellesøy)

# [0.0.7](https://github.com/EventSource/eventsource/compare/v0.0.6...v0.0.7)

* Explicitly raise an error when server returns http 403 and don't continue ([#20](https://github.com/EventSource/eventsource/pull/20) Scott Moak)
* Added ability to send custom http headers to server ([#21](https://github.com/EventSource/eventsource/pull/21), [#9](https://github.com/EventSource/eventsource/issues/9) Scott Moak)
* Fix Unicode support to cope with Javascript Unicode size limitations ([#23](https://github.com/EventSource/eventsource/pull/23), [#22](https://github.com/EventSource/eventsource/issues/22) Devon Adkisson)
* Graceful handling of parse errors ([#19](https://github.com/EventSource/eventsource/issues/19) Aslak Hellesøy)
* Switched from testing with Nodeunit to Mocha (Aslak Hellesøy)

# [0.0.6](https://github.com/EventSource/eventsource/compare/v0.0.5...v0.0.6)

* Add Accept: text/event-stream header ([#17](https://github.com/EventSource/eventsource/pull/17) William Wicks)

# [0.0.5](https://github.com/EventSource/eventsource/compare/v0.0.4...v0.0.5)

* Add no-cache and https support ([#10](https://github.com/EventSource/eventsource/pull/10) Einar Otto Stangvik)
* Ensure that Last-Event-ID is sent to the server for reconnects, as defined in the spec ([#8](https://github.com/EventSource/eventsource/pull/8) Einar Otto Stangvik)
* Verify that CR and CRLF are accepted alongside LF ([#7](https://github.com/EventSource/eventsource/pull/7) Einar Otto Stangvik)
* Emit 'open' event ([#4](https://github.com/EventSource/eventsource/issues/4) Einar Otto Stangvik)

# [0.0.4](https://github.com/EventSource/eventsource/compare/v0.0.3...v0.0.4)

* Automatic reconnect every second if the server is down. Reconnect interval can be set with `reconnectInterval` (not in W3C spec). (Aslak Hellesøy)

# [0.0.3](https://github.com/EventSource/eventsource/compare/v0.0.2...v0.0.3)

* Jison based eventstream parser ([#2](https://github.com/EventSource/eventsource/pull/2) Einar Otto Stangvik)

# [0.0.2](https://github.com/EventSource/eventsource/compare/v0.0.1...v0.0.2)

* Use native EventListener (Aslak Hellesøy)

# 0.0.1

* First release
