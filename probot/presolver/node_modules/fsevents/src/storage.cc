/*
 ** © 2014 by Philipp Dunkel <pip@pipobscure.com>
 ** Licensed under MIT License.
 */

struct fse_event {
  UInt64 id;
  UInt32 flags;
  CFStringRef path;
  
  fse_event(CFStringRef eventPath, UInt32 eventFlag, UInt64 eventId) {
    this->path = eventPath;
    this->flags = eventFlag;
    this->id = eventId;
    if (this->path != NULL)
      CFRetain(this->path);
  }
  
  ~fse_event() {
    if (this->path != NULL)
      CFRelease(this->path);
  }

private:
  fse_event(const fse_event&);
  void operator=(const fse_event&);
};
