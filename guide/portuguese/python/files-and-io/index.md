---
title: Files and IO
localeTitle: Arquivos e IO
---
## Arquivos e IO

Arquivo é um local nomeado no disco para armazenar informações relacionadas. Ele é usado para armazenar permanentemente dados em memória não volátil (por exemplo, disco rígido). Como a memória de acesso aleatório (RAM) é volátil, que perde seus dados quando o computador é desligado, usamos arquivos para uso futuro dos dados.

Quando queremos ler ou escrever em um arquivo, precisamos abri-lo primeiro. Quando terminamos, ele precisa ser fechado, para que os recursos vinculados ao arquivo sejam liberados.

Portanto, no Python, uma operação de arquivo ocorre na seguinte ordem: 1) Abra um arquivo 2) Leia ou escreva (execute a operação) 3) Feche o arquivo

O Python possui várias formas de operações de entrada e saída. Algumas das operações de saída podem ser a impressão de um texto, logs do console e até a saída de um arquivo de texto ou planilha.

### Saída para tela

O Python fornece a maneira mais simples de produzir saída para a tela.

```python
print "Python is a powerful language.","It is easy to learn." 
```

Saída:
```
Python is a powerful language.It is easy to learn. 
```

### Entrada do usuário

Existem duas maneiras de receber informações de um usuário.

raw\_input (\[prompt\])

Usado para ler uma linha da entrada padrão e retorna como uma string

```python
str = raw_input("Enter your name: ") 
 print "Welcome ", str 
```

Saída:
```
Enter your name: John Doe 
 Welcome John Doe 
```

entrada (prompt)

Funcionalidade semelhante a raw\_input (), mas assume que a entrada é uma expressão válida do Python

```python
str = input("Enter input: ") 
 print "Input: ", str 
```

Saída:
```
Enter input: [x*5 for x in range(2,10,2)] 
 Input: [10,20,30,40] 
```

### Interagindo com arquivos em Python

Usando o Python, os arquivos podem ser facilmente abertos, lidos, escritos e fechados. Com as funções disponíveis:

1.  `open()`
2.  `read()`
3.  `write()`
4.  `close()`

Exemplo:

```python
file1 = open("foo.txt", "r+")     # Opens the file with read permission. 
 file1.write("Python is a powerful language.It is easy to learn.")     # Writes data into the file. 
 data = file1.read(15)     # Reads first 15 characters in the file. 
 print "First 15 characters are:\n", data     # Prints output 
 file1.close()     # Closes the opened file. 
```

Saída:
```
First 15 characters are: 
 Python is a pow 
```

#### Abrindo Arquivos

O método python open () pode ser usado para retornar um objeto de arquivo. É mais comumente usado com dois argumentos, que são o nome do arquivo e o modo de acesso. O modo de acesso é usado para descrever a maneira como o arquivo é acessado ou usado.

Os modos mais usados ​​são 'w', que é para gravar no arquivo e 'r', que é usado para ler o arquivo, enquanto 'r +' é usado para ler e gravar o arquivo. 'a' é o modo usado para anexar texto ao arquivo. O argumento mode também é opcional e será assumido como 'r' se for omitido.

Um arquivo deve ser fechado após a operação de entrada e saída ter sido concluída para liberar todos os recursos.

Exemplo de código para abrir um arquivo de texto:

\`\` \`python file = open ('hello\_world.txt', 'w') file.write ('Hello World!') file.close ()
```
##### Using with 
 An alternative to using the `open()` function in standalone is to make use of the `with` statement to open a file. This is considered best practice as it allows the Python framework to manage the context of opening the file, and will autmoatically perform any required resource cleanup. 
 
 This is adventageous in the fact that it takes the onus off the programmer to close every file that is opened, and that the file will still be closed even if an exception was encountered during an IO operation. 
 
 When using the `with` statement is important to note that access to the file will only available within the scope of the `with` block. 
 
 To open a file using the `with` statement the `with` keyword is entered, followed by the call to `open(file)`. Following this the variable used as a handle to the open file is declared after the `as` keyword. Once the programs execution returns from this block, the file will be closed automatically. 
 
 Sample code to open a text file using the `with` statement: 
```

com open ('hello\_world.txt', 'w') como f: f.write ('Hello World!') \`\` \`

#### Mais Informações:

[Documentação Python - IO](https://docs.python.org/2/tutorial/inputoutput.html) [Automatize o material chato](https://automatetheboringstuff.com/chapter8/) [Tutoriais Point - Python IO](https://www.tutorialspoint.com/python/python_files_io.htm) [8 PEP 343: A declaração 'com'](https://docs.python.org/2.5/whatsnew/pep-343.html)