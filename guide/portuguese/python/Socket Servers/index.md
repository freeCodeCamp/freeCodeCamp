# Comçando com Servidores

### Introdução:
Na aula passada eninei como usar o modulo para python socket, hoje, ensino como usar o socket para fazer servidores web.
Nesta aula, para facilitar a escrita do código, vou usar um modulo que eu fiz, SSocket, para simplificar o modulo socket e pode ser encontrado em https://github.com/wi6n3l/Simple-Socket

#### Exemplo de web server: 
```python 
import SSocket

SSocket.Server_wait(5, 23125)

def open_file(file):
    try:
        with open(file, "rb") as doc:
            return doc.read().decode("utf-8")
    except:
        with open("404.error", "rb") as doc:
            return doc.read().decode("utf-8")

def php_html_check(file):
    try:
        with open(file + ".html", "rb") as doc:
            pass
        return file + ".html"
    except:
        try:
            with open(file + ".php", "rb") as doc:
                pass
            return file + ".php"
        except:
            return "404.error"

index = open_file(php_html_check("index"))

def main():
    while True:
        try:
            SSocket.Server_accept()

            raw_request = SSocket.Read(1024, "ascii")
            request = raw_request.split(" ")


            method = request[0]
            directory = request[1]

            response = "HTTP/1.1 200 OK\nContent-Type: text/html\n\n"

            if method == "GET":
                if directory == "/":
                    SSocket.Write(response + index, "ascii")
                elif directory[len(directory)-1] == "/":
                    SSocket.Write(response + open_file(php_html_check(directory[1:] + "index")), "ascii")
                    print(open_file(php_html_check(directory[1:] + "index")))
                elif not "." in directory.split("/")[len(directory.split("/"))-1]:
                    SSocket.Write(response + open_file(php_html_check(directory[1:] + "/" + "index")), "ascii")
                    print(open_file(php_html_check(directory[1:] + "/" + "index")))
                else:
                    SSocket.Write(response + open_file(directory[1:]), "ascii")
        except KeyboardInterrupt:
            SSocket.Close()

main()
```

#####Explicação:
Primeiro começo por definir a função ```open_file``` para facilitar abrir documentos futuramente e perceber ficheiros não existentes.

Depois a função ```php_html_check``` para perceber se um index de um diretório (ficheiro prédefinido que abre quando digitamos um dirétorio numa barra de url) é um ficheiro HTML ou PHP.

Por fim defenimos o index principal, a página principal de um site.

```main``` é definido como um while loop  que deteta as conexões e separa o request do navegador, e reencaminha cada diretorio e pagina digitada no url para cada ficheiro. Nesta parte do código ainda se podia acrescentar um sistema de acesso restrito e log.

Por fim defenimos que se houver um ```KeyboardInterrupt``` o servidor para, para evitar problemas de colisão de IP´s.

Fontes: 
https://github.com/wi6n3l/Simple-Socket