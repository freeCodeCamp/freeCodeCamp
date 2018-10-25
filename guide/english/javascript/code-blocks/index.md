---
title: Code Block
---
## Introduction

In computer programming, a **block** or code **block** is a section of code which is grouped together. Blocks consist of one or more declarations and statements. A programming language that permits the creation of blocks, including blocks nested within other blocks, is called a block-structured programming language. JavaScript is one such programming language.

A **block** statement in JavaScript is used to group zero or more statements. The block is delimited by a pair of curly brackets.

    {
      statement_1;
      statement_2;
      ...
      statement_n;
    }

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block' target='_blank' rel='nofollow'>MDN link</a>

## Examples

The **block** statement is commonly used with control flow statements (e.g. `if...else`, `for`, `while`) and functions.

    while (x < 10) {
      x++;
    }

    function addnums(num1, num2) {
      var sum = 0;
      sum = num1 + num2;
      return sum;
    }
