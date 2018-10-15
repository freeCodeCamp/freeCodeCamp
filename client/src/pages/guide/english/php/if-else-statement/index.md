---
title: If-else Statement
---
## Introduction
If/Else is a conditional statement where depending on the truthiness of a condition, diffierent actions will be performed.  

> **Note:** The `{}` brackets are only needed if the condition has more than one action statement.

## If Statement
~~~~
  if (condition){
    statement1;
    statement2;
  }
~~~~
> **Note:** The `else` statement is optional.
## If/Else Statement
~~~~
  if (condition){
    statement1;
    statement2;
  }
  else{
    statement3;
    statement4;
  }
~~~~
## If/Elseif/Else Statement
~~~~
  if (condition1){
    statement1;
    statement2;
  }
  elseif (condition2){
    statement3;
    statement4;
  }
  else
    statement5;
~~~~
## Nested If/Else Statement
~~~~
  if (condition1){
      if (condition2){
        statement1;
        statement2;
      }
      else{
        statement3;
        statement4;
      }
  }
  else {
      if (condition3){
        statement5;
        statement6;
      }
      else{
        statement7;
        statement8;
      }
  }
~~~~

For more information check out the following link:
<a href='http://php.net/manual/en/control-structures.elseif.php' target='_blank' rel='nofollow'>PHP Else</a>
