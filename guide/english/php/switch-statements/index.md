---
title: Switch Statements
---
## Switch Statements
Switch statements execute blocks of code based on the value of a condition.  

### Syntax:
```PHP
switch(x) {
  case 1:
    statement1;
    break;
   case 2:
     statement2;
     break;
   default:
     defaultstatement;
}
```

In the above example, x is the condition.  The statements following the case that matches will be executed.  If there are no matches, the default statement(s) will be run.  

The `break` keyword is used to end each case.  

### More Information:
<a href='http://php.net/manual/en/control-structures.switch.php' target='_blank' rel='nofollow'>PHP Switch</a> 
