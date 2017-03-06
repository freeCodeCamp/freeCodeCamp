/*
    comment after return is treated like code
    https://github.com/jshint/jshint/issues/1227
*/
function blah() {
  /*jshint -W093*/
  return boo=true;
  // normal comment
  /*jshint +W093*/
  /*jslint +W093*/
  /*member dasdsa*/
  // normal comment 2
  /* normal comment 3 */
  return 1;
}
