(function(){
  var foo = { bar: function() { baz(); } };
  function baz() { }
  foo.bar();
  baz();
}());