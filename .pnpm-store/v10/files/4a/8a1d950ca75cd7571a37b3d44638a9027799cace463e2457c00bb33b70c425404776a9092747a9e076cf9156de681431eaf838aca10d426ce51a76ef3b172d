'use strict';

var os = require('os');
var fs = require('fs');
var child = require('child_process');

var DEFAULT_RESOLV_FILE = '/etc/resolv.conf';

function getInterfaceName() {
  var val = 'eth';
  var platform = os.platform();
  if (platform === 'darwin') {
    val = 'en';
  } else if (platform === 'win32') {
    val = null;
  }
  return val;
}

function getIfconfigCMD() {
  if (os.platform() === 'win32') {
    return 'ipconfig/all';
  }
  return '/sbin/ifconfig';
}

// typeof os.networkInterfaces family is a number (v18.0.0)
// types: 'IPv4' | 'IPv6' => 4 | 6
// @see https://github.com/nodejs/node/issues/42861
function matchName(actualFamily, expectedFamily) {
  if (expectedFamily === 'IPv4') {
    return actualFamily === 'IPv4' || actualFamily === 4;
  }
  if (expectedFamily === 'IPv6') {
    return actualFamily === 'IPv6' || actualFamily === 6;
  }
  return actualFamily === expectedFamily;
}

/**
 * Get all addresses.
 *
 * @param {String} [interfaceName] interface name, default is 'eth' on linux, 'en' on mac os.
 * @param {Function(err, addr)} callback
 *  - {Object} addr {
 *    - {String} ip
 *    - {String} ipv6
 *    - {String} mac
 *  }
 */
function address(interfaceName, callback) {
  if (typeof interfaceName === 'function') {
    callback = interfaceName;
    interfaceName = null;
  }

  var addr = {
    ip: address.ip(interfaceName),
    ipv6: address.ipv6(interfaceName),
    mac: null
  };
  address.mac(interfaceName, function (err, mac) {
    if (mac) {
      addr.mac = mac;
    }
    callback(err, addr);
  });
}

address.interface = function (family, name) {
  var interfaces = os.networkInterfaces();
  var noName = !name;
  name = name || getInterfaceName();
  family = family || 'IPv4';
  for (var i = -1; i < 8; i++) {
    var interfaceName = name + (i >= 0 ? i : ''); // support 'lo' and 'lo0'
    var items = interfaces[interfaceName];
    if (items) {
      for (var j = 0; j < items.length; j++) {
        var item = items[j];
        if (matchName(item.family, family)) {
          return item;
        }
      }
    }
  }

  if (noName) {
    // filter all loopback or local addresses
    for (var k in interfaces) {
      var items = interfaces[k];
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        // all 127 addresses are local and should be ignored
        if (matchName(item.family, family) && !item.address.startsWith('127.')) {
          return item;
        }
      }
    }
  }
  return;
};

/**
 * Get current machine IPv4
 *
 * @param {String} [interfaceName] interface name, default is 'eth' on linux, 'en' on mac os.
 * @return {String} IP address
 */
address.ip = function (interfaceName) {
  var item = address.interface('IPv4', interfaceName);
  return item && item.address;
};

/**
 * Get current machine IPv6
 *
 * @param {String} [interfaceName] interface name, default is 'eth' on linux, 'en' on mac os.
 * @return {String} IP address
 */
address.ipv6 = function (interfaceName) {
  var item = address.interface('IPv6', interfaceName);
  return item && item.address;
};

// osx start line 'en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500'
// linux start line 'eth0      Link encap:Ethernet  HWaddr 00:16:3E:00:0A:29  '
var MAC_OSX_START_LINE = /^(\w+)\:\s+flags=/;
var MAC_LINUX_START_LINE = /^(\w+)\s{2,}link encap:\w+/i;

// ether 78:ca:39:b0:e6:7d
// HWaddr 00:16:3E:00:0A:29
var MAC_RE = address.MAC_RE = /(?:ether|HWaddr)\s+((?:[a-z0-9]{2}\:){5}[a-z0-9]{2})/i;

// osx: inet 192.168.2.104 netmask 0xffffff00 broadcast 192.168.2.255
// linux: inet addr:10.125.5.202  Bcast:10.125.15.255  Mask:255.255.240.0
var MAC_IP_RE = address.MAC_IP_RE = /inet\s(?:addr\:)?(\d+\.\d+\.\d+\.\d+)/;

function getMAC(content, interfaceName, matchIP) {
  var lines = content.split('\n');
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trimRight();
    var m = MAC_OSX_START_LINE.exec(line) || MAC_LINUX_START_LINE.exec(line);
    if (!m) {
      continue;
    }

    // check interface name
    var name = m[1];
    if (name.indexOf(interfaceName) !== 0) {
      continue;
    }

    var ip = null;
    var mac = null;
    var match = MAC_RE.exec(line);
    if (match) {
      mac = match[1];
    }

    i++;
    while (true) {
      line = lines[i];
      if (!line || MAC_OSX_START_LINE.exec(line) || MAC_LINUX_START_LINE.exec(line)) {
        i--;
        break; // hit next interface, handle next interface
      }
      if (!mac) {
        match = MAC_RE.exec(line);
        if (match) {
          mac = match[1];
        }
      }

      if (!ip) {
        match = MAC_IP_RE.exec(line);
        if (match) {
          ip = match[1];
        }
      }

      i++;
    }

    if (ip === matchIP) {
      return mac;
    }
  }
}

/**
 * Get current machine MAC address
 *
 * @param {String} [interfaceName] interface name, default is 'eth' on linux, 'en' on mac os.
 * @param {Function(err, address)} callback
 */
address.mac = function (interfaceName, callback) {
  if (typeof interfaceName === 'function') {
    callback = interfaceName;
    interfaceName = null;
  }
  interfaceName = interfaceName || getInterfaceName();
  var item = address.interface('IPv4', interfaceName);
  if (!item) {
    return callback();
  }

  // https://github.com/nodejs/node/issues/13581
  // bug in node 7.x and <= 8.4.0
  if (!process.env.CI && (item.mac === 'ff:00:00:00:00:00' || item.mac === '00:00:00:00:00:00')) {
    // wrong address, ignore it
    item.mac = '';
  }

  if (item.mac) {
    return callback(null, item.mac);
  }

  child.exec(getIfconfigCMD(), {timeout: 5000}, function (err, stdout, stderr) {
    if (err || !stdout) {
      return callback(err);
    }

    var mac = getMAC(stdout || '', interfaceName, item.address);
    callback(null, mac);
  });
};

// nameserver 172.24.102.254
var DNS_SERVER_RE = /^nameserver\s+(\d+\.\d+\.\d+\.\d+)$/i;

/**
 * Get DNS servers.
 *
 * @param {String} [filepath] resolv config file path. default is '/etc/resolv.conf'.
 * @param {Function(err, servers)} callback
 */
address.dns = function (filepath, callback) {
  if (typeof filepath === 'function') {
    callback = filepath;
    filepath = null;
  }
  filepath = filepath || DEFAULT_RESOLV_FILE;
  fs.readFile(filepath, 'utf8', function (err, content) {
    if (err) {
      return callback(err);
    }
    var servers = [];
    content = content || '';
    var lines = content.split('\n');
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      var m = DNS_SERVER_RE.exec(line);
      if (m) {
        servers.push(m[1]);
      }
    }

    callback(null, servers);
  });
};

module.exports = address;
