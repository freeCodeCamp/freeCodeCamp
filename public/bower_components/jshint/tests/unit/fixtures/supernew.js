var a = new function () {
    var secret = 1234;

    function getSecret() {
        return secret;
    }

    this.secret = getSecret();
};

var b = new Date;