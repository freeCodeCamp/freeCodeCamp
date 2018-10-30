'use strict';

module.exports = function(res, fn){
  res.text = '';
  res.setEncoding('utf8');
  res.on('data', chunk => {
    res.text += chunk;
  });
  res.on('end', fn);
};
