---
title: Mainipulating Strings
--- 
There are various built-in functions in R that allow you to manipulate strings, here are a few with examples for reference.

Using the vector:
```{r}
> duck_facts <- c("Ducks have waterproof feathers.", "Male ducks are called drakes.", "Do not feed ducks bread!")
```

### nchar()
Returns the total number of characters in a string 
```{r}
> nchar(duck_facts[1])
31
```

### toupper()
Converts all characters in a string into upper case
```{r}
> toupper(duck_facts[3])
'DO NOT FEED DUCKS BREAD!'
```

### tolower()
Converts all characters in a string into lower case
```{r}
> tolower(duck_facts[3])
'do not feed ducks bread!'
```

### chartr()
Converts a certain set of characters in a string into a provided set of characters
```{r}
> chartr("bread", "chocolate", duck_facts[3])
'do not feed ducks chocolate!'
```

### strsplit()
Splits a string into a list, given a delimeter 
```{r}
> fact1 <- strsplit(duck_facts[1], " ") 
> fact1
[1]
'Ducks'
[2]
'have'
[3]
'waterproof'
[4]
'feathers.'
```

### sort()
Sorts a vector of characters by alphabetical order
```{r}
> fact1_vector <- unlist(fact1)
> sorted_fact <- sort(fact1_vector)
> sorted_fact
1. 'Ducks'
2. 'feathers.'
3. 'have'
4. 'waterproof'
```

You can also pass in the `decreasing = TRUE` argument to reverse the order
```{r}
> reverse_fact <- sort(fact1_vector, decreasing = TRUE)
> reverse_fact
1. 'waterproof'
2. 'have'
3. 'feathers.'
4. 'Ducks'
```

### paste()
Concatenates a character vector with a provided delimeter
```{r}
> paste(reverse_fact, collapse = "-")
'waterproof-have-feathers.-Ducks'
```

### substr()
Returns a sub section of a string 
```{r}
> substring <- substr(duck_facts[2], start = 5, stop = 22)
> substring
' ducks are called '
```

### str_sub()
Utilises the stringr library.
Returns a sub section from the back end of a string
```{r}
> library(stringr)
> str_sub(duck_facts[2], -8, -1)
' drakes.'
```

### trimws()
Removes whitespace from the ends of a string
```{r}
> trimws(substring)
'ducks are called'
```