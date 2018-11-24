---
title: Ruby Conditionals
---
Ruby has several commonly used conditionals.

## If Statements
An extremely common conditional in many programming languages, the statement tests if the condition is true, then branches into the specified action. An if statement consists of one `if`,
any number of `elsif` and at most one `else` statement.
*   ```ruby
    fruit = :apple
    
    if fruit == :apple
      puts "Your fruit is an apple"
    elsif fruit == :orange
      puts "Your fruit is an orange"
    else
      puts "This is not an apple or an orange"
    end
    ```

### Unless statement
An unless statement is the opposite of an if statement. It is the same as a negated if statement.
*   ```ruby
    happy = true
    if !happy
      puts "This person is not happy"
    end
    ```
The above statement equal to the statement below
*   ```ruby
    unless happy
      puts "This person is not happy"
    end
    ```
## Ternary Statement
A ternary statement is used as a short conditional statement. It is written as follows
*   ```ruby
    game = "won"
    fans = game == "won" ? "happy" : unhappy
    fans # => "happy"
    ```
## Case Statement
A case statement is similar to an if/elsif/else statement
*   ```ruby
    fruit = :apple
    
    case fruit
    when :apple
      puts "Your fruit is an apple"
    when :orange
      puts "Your fruit is an orange"
    else
      puts "This is not an apple or an orange"
    end
    ```