has-unicode
===========

Try to guess if your terminal supports unicode

```javascript
var hasUnicode = require("has-unicode")

if (hasUnicode()) {
  // the terminal probably has unicode support
}
```
```javascript
var hasUnicode = require("has-unicode").tryHarder
hasUnicode(function(unicodeSupported) {
  if (unicodeSupported) {
    // the terminal probably has unicode support
  }
})
```

## Detecting Unicode

What we actually detect is UTF-8 support, as that's what Node itself supports.
If you have a UTF-16 locale then you won't be detected as unicode capable.

### Windows

Since at least Windows 7, `cmd` and `powershell` have been unicode capable,
but unfortunately even then it's not guaranteed. In many localizations it
still uses legacy code pages and there's no facility short of running
programs or linking C++ that will let us detect this. As such, we
report any Windows installation as NOT unicode capable, and recommend
that you encourage your users to override this via config.

### Unix Like Operating Systems

We look at the environment variables `LC_ALL`, `LC_CTYPE`, and `LANG` in
that order.  For `LC_ALL` and `LANG`, it looks for `.UTF-8` in the value. 
For `LC_CTYPE` it looks to see if the value is `UTF-8`.  This is sufficient
for most POSIX systems.  While locale data can be put in `/etc/locale.conf`
as well, AFAIK it's always copied into the environment.

