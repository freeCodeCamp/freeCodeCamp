<!doctype html>
<html ng-app="app">
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.3/angular.min.js"></script>
    <script src="../src/sprintf.js"></script>
    <script src="../src/angular-sprintf.js"></script>
</head>
<body>
    <pre>{{ "%+010d"|sprintf:-123 }}</pre>
    <pre>{{ "%+010d"|vsprintf:[-123] }}</pre>
    <pre>{{ "%+010d"|fmt:-123 }}</pre>
    <pre>{{ "%+010d"|vfmt:[-123] }}</pre>
    <pre>{{ "I've got %2$d apples and %1$d oranges."|fmt:4:2 }}</pre>
    <pre>{{ "I've got %(apples)d apples and %(oranges)d oranges."|fmt:{apples: 2, oranges: 4} }}</pre>

    <script>
        angular.module("app", ["sprintf"])
    </script>
</body>
</html>
