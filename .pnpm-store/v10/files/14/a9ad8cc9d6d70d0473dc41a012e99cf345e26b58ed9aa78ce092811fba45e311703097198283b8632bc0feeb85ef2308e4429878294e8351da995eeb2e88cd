"use strict";

const {
  isForbidden,
  isForbiddenResponse,
  isPrivilegedNoCORSRequest,
  isNoCORSSafelistedRequest,
  isCORSWhitelisted
} = require("./header-types");
const HeaderList = require("./header-list");

function assertName(name) {
  if (!name.match(/^[!#$%&'*+\-.^`|~\w]+$/)) {
    throw new TypeError("name is invalid");
  }
}

function assertValue(value) {
  if (value.match(/[\0\r\n]/)) {
    throw new TypeError("value is invalid");
  }
}

class HeadersImpl {
  constructor(globalObject, args) {
    this.guard = "none";
    this.headersList = new HeaderList();

    if (args[0]) {
      this._fill(args[0]);
    }
  }

  _fill(init) {
    if (Array.isArray(init)) {
      for (const header of init) {
        if (header.length !== 2) {
          throw new TypeError("init is invalid");
        }
        this.append(header[0], header[1]);
      }
    } else {
      for (const key of Object.keys(init)) {
        this.append(key, init[key]);
      }
    }
  }

  has(name) {
    assertName(name);
    return this.headersList.contains(name);
  }

  get(name) {
    assertName(name);
    return this.headersList.get(name);
  }

  _removePrivilegedNoCORSHeaders() {
    this.headersList.delete("range");
  }

  append(name, value) {
    value = value.trim();
    assertName(name);
    assertValue(value);

    switch (this.guard) {
      case "immutable":
        throw new TypeError("Headers is immutable");
      case "request":
        if (isForbidden(name)) {
          return;
        }
        break;
      case "request-no-cors": {
        let temporaryValue = this.get(name);
        if (temporaryValue === null) {
          temporaryValue = value;
        } else {
          temporaryValue += `, ${value}`;
        }
        if (!isCORSWhitelisted(name, value)) {
          return;
        }
        break;
      }
      case "response":
        if (isForbiddenResponse(name)) {
          return;
        }
        break;
    }

    this.headersList.append(name, value);
    this._removePrivilegedNoCORSHeaders();
  }

  set(name, value) {
    value = value.trim();
    assertName(name);
    assertValue(value);

    switch (this.guard) {
      case "immutable":
        throw new TypeError("Headers is immutable");
      case "request":
        if (isForbidden(name)) {
          return;
        }
        break;
      case "request-no-cors": {
        if (!isCORSWhitelisted(name, value)) {
          return;
        }
        break;
      }
      case "response":
        if (isForbiddenResponse(name)) {
          return;
        }
        break;
    }
    this.headersList.set(name, value);
    this._removePrivilegedNoCORSHeaders();
  }

  delete(name) {
    assertName(name);

    switch (this.guard) {
      case "immutable":
        throw new TypeError("Headers is immutable");
      case "request":
        if (isForbidden(name)) {
          return;
        }
        break;
      case "request-no-cors": {
        if (
          !isNoCORSSafelistedRequest(name) &&
          !isPrivilegedNoCORSRequest(name)
        ) {
          return;
        }
        break;
      }
      case "response":
        if (isForbiddenResponse(name)) {
          return;
        }
        break;
    }
    this.headersList.delete(name);
    this._removePrivilegedNoCORSHeaders();
  }

  * [Symbol.iterator]() {
    for (const header of this.headersList.sortAndCombine()) {
      yield header;
    }
  }
}

exports.implementation = HeadersImpl;
