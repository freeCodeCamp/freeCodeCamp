---
title: Tautologies
---
## Tautologies
### Definition
In logic, a tautology is a statement that is true in every possible case. The opposite of a tautology is a contradiction, a statement being false in every possible cases.
Also, a formula is said to be a contradiciotn if every truth assignment to its component statements results in the formula being false.

### Example
<table>
  <tr>
    <th>p</th>
    <th>q</th> 
    <th>p OR q</th>
    <th>p → p OR q</th>
  </tr>
  <tr>
    <td>T</td>
    <td>T</td>
    <td>T</tq>
    <td>T</td>
  </tr>
  <tr>
    <td>T</td>
    <td>F</td>
    <td>T</td>
    <td>T</td>
  </tr>
  <tr>
    <td>F</td>
    <td>T</td>
    <td>T</td>
    <td>T</td>
  </tr>
  <tr>
    <td>F</td>
    <td>F</td>
    <td>F</td>
    <td>T</td>
  </tr>
</table>

As we can see in the truth table, the statement "p → p OR q" is always true (see last column). 

An example in terms of Boolean logic is `B || !B`. It is always true that B is true or B is not true.

The opposite of a tautology is a contradiction, a formula which is "always false". In other words, a contradiction is false for every assignment of truth values to its simple components.

An example of a contradiction with Boolean logic is `B && !B`. It is impossible for B to be both true and false at the same time. 

#### Note
The arrow simply means "implies". p implies p OR q, it can also mean <i>if...then...</i>  

#### More Information:

<!-- Please add any articles you think might be helpful to read before writing the article -->
- [Wikipedia Tautology (Logic)](https://en.wikipedia.org/wiki/Tautology_(logic))
- [Youtube Truth Tables](https://www.youtube.com/watch?v=O0KbymjE7xU)
- [Wikipedia Logic Symbols](https://en.wikipedia.org/wiki/List_of_logic_symbols)
- [Mathonline, Tautologies and Contradictions](http://mathonline.wikidot.com/tautologies-and-contradictions)
