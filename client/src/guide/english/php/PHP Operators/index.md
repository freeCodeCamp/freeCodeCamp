---
title: PHP Operators
---
## PHP Operators

<h3>Precedence of PHP Operators</h3>

<p>Precedence of operators infroms about the grouping of terms in an expression. This affects how evaluation takes place in an expression. Some operators have higher precedence than other operators. For example the division operator has higher precedence than subtraction operator. For example $x=8/2-1 .The value assigned to $x will be 3 not 8 as / has higher precedence than - so expression will be divided first i.e. 8/2 and then from result 1 is subtracted which gives final result as 3.</p>

<p>The following table shows the precedence of the different operators. The operators with higher precedence appears at the top and that with lower precedence appears at the bottom. The following table also shows the associativity which is used to evaluate operators when they have same precedence.</p>

<table>
  <tr>
    <th>S.No</th>
    <th>Category</th>
    <th>Operators</th>
    <th>Associativity</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Unary</td>
    <td>! ++ --</td>
    <td>Right to left</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Multiplicative</td>
    <td>* / %</td>
    <td>Left to right</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Additive</td>
    <td>+ -</td>
    <td>Left to right</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Relational</td>
    <td>< <= > >=	</td>
    <td>Left to right</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Equality</td>
    <td>== !=</td>
    <td>Left to right</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Logical AND</td>
    <td>&&</td>
    <td>Left to right</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Logical OR</td>
    <td>||</td>
    <td>Left to right</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Conditional</td>
    <td>?:</td>
    <td>Right to left</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Assignment</td>
    <td>= += -= *= /= %=</td>
    <td>Right to left</td>
  </tr>
</table>
