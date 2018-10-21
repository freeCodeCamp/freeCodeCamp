---
title: File handling
---
## File Handling
Uptill now we were using `cin` and `cout` for reading and writing data, but what if we wanna write a data into a file or pick up a data from a file? Here our `cin` and `cout` doesnot work so we use a standard c++ library called fstream. 

## Data types and description
* #ofstream - This data type represents the output file stream and is used to create files and to write information to files.
* #iftream - This data type represents the output file stream and is used to create files and to write information to files.
* #fstream - This data type represents the file stream generally, and has the capabilities of both ofstream and ifstream which means it can create files, write information to files, and read information from files.


## To write in a file
```cpp
#include <fstream>
#include <iostream>
using namespace std;
 
int main () {
   char data[100];

   // open a file in write mode.
   ofstream outfile;
   outfile.open("afile.dat");

   cout << "Writing to the file" << endl;
   cout << "Enter your name: "; 
   cin.getline(data, 100);

   // write inputted data into the file.
   outfile << data << endl;

   cout << "Enter your age: "; 
   cin >> data;
   cin.ignore();
   
   // again write inputted data into the file.
   outfile << data << endl;

   // close the opened file.
   outfile.close();

   // open a file in read mode.
   ifstream infile; 
   infile.open("afile.dat"); 
 
   cout << "Reading from the file" << endl; 
   infile >> data; 

   // write the data at the screen.
   cout << data << endl;
   
   // again read the data from the file and display it.
   infile >> data; 
   cout << data << endl; 

   // close the opened file.
   infile.close();

   return 0;
}
```

```cpp
$./a.out
Writing to the file
Enter your name: Zara
Enter your age: 9
Reading from the file
Zara
9
```

* the getline() function is used to read a line from the opened file
* the ignore() function s used to ignore the extra characters left by previous read statement

## Sources
1.Tutorialspoint
