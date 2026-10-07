var mr = require('./').create();
var BN = require('bn.js');

var p = new BN(
    `00:d3:99:af:83:02:de:91:f8:cc:1b:4e:2e:e0:18:
    b3:0a:41:a4:77:98:d2:ad:66:0f:dc:17:85:ca:58:
    b4:e4:88:55:c5:0a:82:08:7c:fb:70:a9:41:30:be:
    af:50:d2:ce:93:cd:46:83:47:6e:c0:51:a7:10:e6:
    66:d1:08:e8:3d:b8:ce:fe:3e:4e:48:96:82:15:f7:
    2c:83:80:05:f2:14:3a:a4:5a:44:2b:22:22:67:e5:
    21:23:b7:cb:0f:71:5b:12:8b:3d:81:f6:5e:dc:99:
    8f:f9:80:38:75:57:c2:dd:9b:7a:b2:24:97:42:60:
    92:1f:1d:8a:68:c5:b8:7f:5d:c0:53:3d:15:f2:95:
    b8:1d:8b:c2:e6:ca:a6:4c:bd:bf:88:9f:3e:d3:d7:
    24:18:27:62:6e:d0:52:75:68:9f:2a:c9:39:af:95:
    55:bb:11:08:dc:51:e9:8b:5a:38:e0:c0:e9:d8:a6:
    71:a5:03:f9:a7:2c:dd:1a:63:8e:7f:f0:36:68:a0:
    44:f8:09:48:3d:bd:de:b3:2d:3a:2f:73:88:8a:0c:
    e2:7f:9b:dd:e8:c2:0e:ee:21:e4:a7:f9:4d:46:2f:
    a7:f6:6d:fa:88:2e:95:60:ac:53:2e:45:a2:9d:9e:
    c4:80:fc:c7:49:c9:42:bb:2b:66:f6:14:6d:7f:03:
    4e:f3`.replace(/[^a-f0-9]/g, ''), 16);
console.time();
mr.test(p);
console.timeEnd();
