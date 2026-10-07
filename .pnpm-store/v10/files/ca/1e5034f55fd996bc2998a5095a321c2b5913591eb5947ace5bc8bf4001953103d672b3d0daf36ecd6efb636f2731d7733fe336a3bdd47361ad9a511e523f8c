/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 * @emails oncall+relay
 */

// flowlint ambiguous-object-type:error

'use strict';

import type {IEnvironment, RecordSource} from '../store/RelayStoreTypes';

type InspectFn = (environment: IEnvironment, dataID?: ?string) => mixed;

let inspect: InspectFn = () => {};

if (__DEV__) {
  let formattersInstalled = false;

  /**
   * Installs a Chrome Developer Tools custom formatter for Relay proxy objects
   * returned by StoreInspector.inspect.
   *
   * bit.ly/object-formatters
   */
  const installDevtoolFormatters = () => {
    if (formattersInstalled) {
      return;
    }
    formattersInstalled = true;
    if (window.devtoolsFormatters == null) {
      window.devtoolsFormatters = [];
    }
    if (!Array.isArray(window.devtoolsFormatters)) {
      return;
    }
    // eslint-disable-next-line no-console
    console.info(
      'Make sure to select "Enable custom formatters" in the Chrome ' +
        'Developer Tools settings, tab "Preferences" under the "Console" ' +
        'section.',
    );
    window.devtoolsFormatters.push(...createFormatters());
  };

  const createFormatters = () => {
    const listStyle = {
      style:
        'list-style-type: none; padding: 0; margin: 0 0 0 12px; font-style: normal',
    };
    const keyStyle = {style: 'rgb(136, 19, 145)'};
    const nullStyle = {style: 'color: #777'};

    const reference = (object, config) => {
      return object == null
        ? ['span', nullStyle, 'undefined']
        : ['object', {object, config}];
    };

    const renderRecordHeader = record => {
      return [
        'span',
        {style: 'font-style: italic'},
        record.__typename,
        ['span', nullStyle, ' {id: "', record.__id, '", …}'],
      ];
    };

    const isRecord = o => o != null && typeof o.__id === 'string';

    class RecordEntry {
      +key: string;
      +value: mixed;
      constructor(key: string, value: mixed) {
        this.key = key;
        this.value = value;
      }
    }

    const renderRecordEntries = record => {
      const children = Object.keys(record).map(key => {
        return [
          'li',
          {},
          ['object', {object: new RecordEntry(key, record[key])}],
        ];
      });
      return ['ol', listStyle, ...children];
    };

    const recordFormatter = {
      header(obj) {
        if (!isRecord(obj)) {
          return null;
        }
        return renderRecordHeader(obj);
      },
      hasBody(obj) {
        return true;
      },
      body(obj) {
        return renderRecordEntries(obj);
      },
    };

    const recordEntryFormatter = {
      header(obj) {
        if (obj instanceof RecordEntry) {
          const value = isRecord(obj.value)
            ? renderRecordHeader(obj.value)
            : reference(obj.value);
          return ['span', keyStyle, obj.key, ': ', value];
        }
        return null;
      },
      hasBody(obj) {
        return isRecord(obj.value);
      },
      body(obj) {
        return renderRecordEntries(obj.value);
      },
    };

    return [recordFormatter, recordEntryFormatter];
  };

  const getWrappedRecord = (source: RecordSource, dataID: string) => {
    const record = source.get(dataID);
    if (record == null) {
      return record;
    }
    return new Proxy(
      {...record},
      {
        get(target, prop) {
          const value = target[prop];
          if (value == null) {
            return value;
          }
          if (typeof value === 'object') {
            if (typeof value.__ref === 'string') {
              return getWrappedRecord(source, value.__ref);
            }
            if (Array.isArray(value.__refs)) {
              // $FlowFixMe[incompatible-call]
              return value.__refs.map(ref => getWrappedRecord(source, ref));
            }
          }
          return value;
        },
      },
    );
  };

  inspect = (environment: IEnvironment, dataID: ?string) => {
    installDevtoolFormatters();
    return getWrappedRecord(
      environment.getStore().getSource(),
      dataID ?? 'client:root',
    );
  };
}

module.exports = {
  inspect,
};
