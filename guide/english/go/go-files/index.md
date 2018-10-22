---
title: Go Files
---
 # Handling Files using Go
 Reading and writing files are basic tasks in programming and Go provides functions to aid in this.
 ## Reading the entire file
 We can use ReadFile from the io/ioutil package to get the entire file as an array of bytes.
 ```go
data, err := ioutil.ReadFile("text.txt") // Read the file
if err != nil {
  panic(err)
}
fmt.Print(string(data)) // Print the file contents as a string
```
## Reading a file by bytes
 We can read a file chunks of bytes at a time. This is more optimal than reading an entire file into memory at once.
 ```go
file, err := os.Open("text.txt") // Open the file
if err != nil {
	panic(err)
}
defer file.Close() 					// Always remember to close the file
reader := bufio.NewReader(file)		// Create a new reader for the file
b := make([]byte, 3) 				// Array of bytes to hold read bytes
for {
	_, err := reader.Read(b)		// Read b bytes from the file
	if err != nil {
		break
	}
	fmt.Println(string(b))
}
```
 ## Reading a file line by line
 We can also read a file line by line using a scanner
 ```go
  file, err := os.Open("text.txt")
  if err != nil {
    panic(err)
  }
  defer file.Close()
  
  scanner := bufio.NewScanner(file) // Create a new scanner from the file
  for scanner.Scan() {              // While there are still lines to scan
    fmt.Println(scanner.Text())     // Get the text from the scanner and print it 
  }
  err = scanner.Err()
  if err != nil {
    panic(err)
  }
```
 ## Writing data to a file
 We can dump an array of bytes, for example data, into a file
 ```go 
  data = []byte("This is some fake data.\nThis is the second line\nHere is a third line\nAnd number four.\n") // Example data
  err := ioutil.WriteFile("text2.txt", data, 0644) // Write data to text2.txt and set permissions on the file to 0644
  if err != nil {
    panic(err)
  }
```
 ## Open file for writing
 We can also open a file and continue writing to it as bytes or strings.
 ```go
file, err := os.Create("text3.txt")
if err != nil {
  panic(err)
}
defer file.Close()
 data = []byte("This is some fake data.\n")
data2 := "This is the second line\n"
 // Write a byte slice
numBytes, err := file.Write(data) // Write data to file. Returns the number of bytes written as an int
if err != nil {
  panic(err)
}
fmt.Printf("Wrote %d bytes\n", numBytes)
 // Write a string
numBytes, err = file.WriteString(data2)
fmt.Printf("Wrote %d bytes\n", numBytes)
 // Issue a sync which commits the current contents to stable storage
file.Sync()
 writer := bufio.NewWriter(file) // Create a new bufio Writer and write a string to it
numBytes, err = writer.WriteString("Another string added to the file\n")
fmt.Printf("Wrote %d bytes\n", numBytes)
 writer.Flush() // Using Flush ensures all operations have been applied to the writer
```
