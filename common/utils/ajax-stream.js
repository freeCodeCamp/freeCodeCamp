/*
 * Copyright (c) Microsoft Open Technologies, Inc.  All rights reserved.
 * Microsoft Open Technologies would like to thank its contributors, a list
 * of whom are at http://rx.codeplex.com/wikipage?title=Contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you
 * may not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
 * implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

import debugFactory from 'debug';
import { AnonymousObservable, helpers } from 'rx';

const debug = debugFactory('freecc:ajax$');
const root = typeof window !== 'undefined' ? window : {};

// Gets the proper XMLHttpRequest for support for older IE
function getXMLHttpRequest() {
  if (root.XMLHttpRequest) {
    return new root.XMLHttpRequest();
  } else {
    var progId;
    try {
      var progIds = [
        'Msxml2.XMLHTTP',
        'Microsoft.XMLHTTP',
        'Msxml2.XMLHTTP.4.0'
      ];
      for (var i = 0; i < 3; i++) {
        try {
          progId = progIds[i];
          if (new root.ActiveXObject(progId)) {
            break;
          }
        } catch (e) {
          // purposely do nothing
          helpers.noop(e);
        }
      }
      return new root.ActiveXObject(progId);
    } catch (e) {
      throw new Error('XMLHttpRequest is not supported by your browser');
    }
  }
}

// Get CORS support even for older IE
function getCORSRequest() {
  var xhr = new root.XMLHttpRequest();
  if ('withCredentials' in xhr) {
    return xhr;
  } else if (root.XDomainRequest) {
    return new XDomainRequest();
  } else {
    throw new Error('CORS is not supported by your browser');
  }
}

function normalizeAjaxSuccessEvent(e, xhr, settings) {
  var response = ('response' in xhr) ? xhr.response : xhr.responseText;
  response = settings.responseType === 'json' ? JSON.parse(response) : response;
  return {
    response: response,
    status: xhr.status,
    responseType: xhr.responseType,
    xhr: xhr,
    originalEvent: e
  };
}

function normalizeAjaxErrorEvent(e, xhr, type) {
  return {
    type: type,
    status: xhr.status,
    xhr: xhr,
    originalEvent: e
  };
}

/*
 *
 * Creates an observable for an Ajax request with either a settings object
 * with url, headers, etc or a string for a URL.
 *
 * @example
 *   source = Rx.DOM.ajax('/products');
 *   source = Rx.DOM.ajax( url: 'products', method: 'GET' });
 *
 * @param {Object} settings Can be one of the following:
 *
 *  A string of the URL to make the Ajax call.
 *  An object with the following properties
 *   - url: URL of the request
 *   - body: The body of the request
 *   - method: Method of the request, such as GET, POST, PUT, PATCH, DELETE
 *   - async: Whether the request is async
 *   - headers: Optional headers
 *   - crossDomain: true if a cross domain request, else false
 *
 * @returns {Observable} An observable sequence containing the XMLHttpRequest.
*/

export function ajax$(options) {
  var settings = {
    method: 'GET',
    crossDomain: false,
    async: true,
    headers: {},
    responseType: 'text',
    createXHR: function() {
      return this.crossDomain ? getCORSRequest() : getXMLHttpRequest();
    },
    normalizeError: normalizeAjaxErrorEvent,
    normalizeSuccess: normalizeAjaxSuccessEvent
  };

  if (typeof options === 'string') {
    settings.url = options;
  } else {
    for (var prop in options) {
      if (hasOwnProperty.call(options, prop)) {
        settings[prop] = options[prop];
      }
    }
  }

  var normalizeError = settings.normalizeError;
  var normalizeSuccess = settings.normalizeSuccess;

  if (!settings.crossDomain && !settings.headers['X-Requested-With']) {
    settings.headers['X-Requested-With'] = 'XMLHttpRequest';
  }
  settings.hasContent = typeof settings.body !== 'undefined';

  return new AnonymousObservable(function(observer) {
    var isDone = false;
    var xhr;

    var processResponse = function(xhr, e) {
      var status = xhr.status === 1223 ? 204 : xhr.status;
      if ((status >= 200 && status <= 300) || status === 0 || status === '') {
        observer.onNext(normalizeSuccess(e, xhr, settings));
        observer.onCompleted();
      } else {
        observer.onError(normalizeError(e, xhr, 'error'));
      }
      isDone = true;
    };

    try {
      xhr = settings.createXHR();
    } catch (err) {
      observer.onError(err);
    }

    try {
      if (settings.user) {
        xhr.open(
          settings.method,
          settings.url,
          settings.async,
          settings.user,
          settings.password
        );
      } else {
        xhr.open(settings.method, settings.url, settings.async);
      }

      var headers = settings.headers;
      for (var header in headers) {
        if (hasOwnProperty.call(headers, header)) {
          xhr.setRequestHeader(header, headers[header]);
        }
      }

      if (
        !xhr.upload ||
        (!('withCredentials' in xhr) && root.XDomainRequest)
      ) {
        xhr.onload = function(e) {
          if (settings.progressObserver) {
            settings.progressObserver.onNext(e);
            settings.progressObserver.onCompleted();
          }
          processResponse(xhr, e);
        };

        if (settings.progressObserver) {
          xhr.onprogress = function(e) {
            settings.progressObserver.onNext(e);
          };
        }

        xhr.onerror = function(e) {
          if (settings.progressObserver) {
            settings.progressObserver.onError(e);
          }
          observer.onError(normalizeError(e, xhr, 'error'));
          isDone = true;
        };

        xhr.onabort = function(e) {
          if (settings.progressObserver) {
            settings.progressObserver.onError(e);
          }
          observer.onError(normalizeError(e, xhr, 'abort'));
          isDone = true;
        };
      } else {

        xhr.onreadystatechange = function(e) {
          if (xhr.readyState === 4) {
            processResponse(xhr, e);
          }
        };
      }

      debug(
        'ajax$ sending content',
        settings.hasContent && settings.body
      );
      xhr.send(settings.hasContent && settings.body || null);
    } catch (e) {
      observer.onError(e);
    }

    return function() {
      if (!isDone && xhr.readyState !== 4) { xhr.abort(); }
    };
  });
}

/**
  * Creates an observable sequence from an Ajax POST Request with the body.
  *
  * @param {String} url The URL to POST
  * @param {Object} body The body to POST
  * @returns {Observable} The observable sequence which contains the response
  * from the Ajax POST.
  */
export function post$(url, body) {
  return ajax$({ url, body, method: 'POST' });
}

export function postJSON$(url, body) {
  return ajax$({
    url,
    body: JSON.stringify(body),
    method: 'POST',
    responseType: 'json',
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
  * Creates an observable sequence from an Ajax GET Request with the body.
  *
  * @param {String} url The URL to GET
  * @returns {Observable} The observable sequence which
  * contains the response from the Ajax GET.
  */
export function get$(url) {
  return ajax$({ url: url });
}

/**
  * Creates an observable sequence from JSON from an Ajax request
  *
  * @param {String} url The URL to GET
  * @returns {Observable} The observable sequence which contains the parsed JSON
  */
export function getJSON$(url) {
  return ajax$({ url: url, responseType: 'json' }).map(function(x) {
    return x.response;
  });
}
