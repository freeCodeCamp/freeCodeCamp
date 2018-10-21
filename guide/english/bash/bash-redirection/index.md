---
title: Bash Redirection
---

## Bash Redirection
One of the most powerful features of bash (and other shells that support similar syntax) is output and input redirection via pipes and concatination symbols. To start simply the problem of appending a sting to a file is considered. One could open the file in a terminal based editor such as Vim or Nano and manually paste the line in, though this is a bit tedious. Further more, what if one wanted to take the output of one command, say ' $echo 'hi' ' and put it into a file? Again, this could be done via a copy and paste, though this would get tedious if it had to be done repeatedly and this is not scriptable or automatable, so instead the redirection operators '>' or '>>' can be used. With the the operators the previous example can be rewritten as

echo 'hi' > output.txt
or
echo 'hi' >> output.txt

The difference between the two is a single '>' will overwrite the destination file with the input while a '>>' will append the input to the destination file. 

Finally, and most powerful of all, is the pipe "|" which can be used to take a running programs output and 'pipe' it into another program. For example:

sort textfile.txt | uniq

will first sort each line in the file alpahabetically and then print only the unique entries. This is only scratching the surface of the massive power of pipes though.
