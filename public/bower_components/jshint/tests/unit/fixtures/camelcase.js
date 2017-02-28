function FooBar(testMe) {
  this.testMe = testMe;
}

function Foo_bar(test_me) {
  this.test_me = test_me;
}

function Foo() {
  this.TEST_ME = 2;
}

var TEST_1, test1, test_1;

function _FooBar(_testMe) {
    this.__testMe = _testMe;
}

function _FooBar_(testMe_) {
  this.__testMe__ = testMe_;
}