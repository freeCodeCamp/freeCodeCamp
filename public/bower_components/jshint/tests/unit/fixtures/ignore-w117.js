function testUndeclaredGlobalSuppressWarningUsingW117() {
  //jshint -W117
  c();
  //jshint +W117
  c();
}
function testUndeclaredGlobalSuppressWarningUsingUndef() {
  //jshint undef:false
  c();
  //jshint undef:true
  c();
}

function testUndeclaredGlobal() {
  c();
}
