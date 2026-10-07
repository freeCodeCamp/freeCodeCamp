# Change Log
## 4.1.0
> Released 07/24/2019
* Adds int64 support for node v12+
* Drops support for node v4

## 4.0
> Released 10/21/2017
* Major breaking changes arriving in v4.

### New Features
* Ability to read data from a specific offset. ex: readInt8(5)
* Ability to write over data when an offset is given (see breaking changes) ex:  writeInt8(5, 0);
* Ability to set internal read and write offsets.



### Breaking Changes

* Old constructor patterns have been completely removed. It's now required to use the SmartBuffer.fromXXX() factory constructors. Read more on the v4 docs.
* rewind(), skip(), moveTo() have been removed.
* Internal private properties are now prefixed with underscores (_).
* **All** writeXXX() methods that are given an offset will now **overwrite data** instead of insert
* insertXXX() methods have been added for when you want to insert data at a specific offset (this replaces the old behavior of writeXXX() when an offset was provided)


### Other Changes
* Standardizd error messaging
* Standardized offset/length bounds and sanity checking
* General overall cleanup of code.

## 3.0.3
> Released 02/19/2017
* Adds missing type definitions for some internal functions.

## 3.0.2
> Released 02/17/2017

### Bug Fixes
* Fixes a bug where using readString with a length of zero resulted in reading the remaining data instead of returning an empty string. (Fixed by Seldszar)

## 3.0.1
> Released 02/15/2017

### Bug Fixes
* Fixes a bug leftover from the TypeScript refactor where .readIntXXX() resulted in .readUIntXXX() being called by mistake.

## 3.0
> Released 02/12/2017

### Bug Fixes
* readUIntXXXX() methods will now throw an exception if they attempt to read beyond the bounds of the valid buffer data available.
    * **Note** This is technically a breaking change, so version is bumped to 3.x.

## 2.0
> Relased 01/30/2017

### New Features:

* Entire package re-written in TypeScript (2.1)
* Backwards compatibility is preserved for now
* New factory methods for creating SmartBuffer instances
    * SmartBuffer.fromSize()
    * SmartBuffer.fromBuffer()
    * SmartBuffer.fromOptions()
* New SmartBufferOptions constructor options
* Added additional tests

### Bug Fixes:
* Fixes a bug where reading null terminated strings may result in an exception.
