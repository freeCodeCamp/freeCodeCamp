var test = function() {
    var fun1 = function (){
        fun2();
    };

    function fun2() {}

    var fun3 = function() {
    };

    function fun5() {}

    fun1();
    fun4();
};
