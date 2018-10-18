Más Comandos para administrar los Containers de Docker.
----------------------------------------------------------

 * Comando para listar los Containers activos.
  `docker conatiner ls`
 
 * Comando para listar todos los Containers ( incluidos los containers inactivos o parados)
  `docker container ls -a `
 
 * Comando para ejecutar comandos en el Container
   `docker exec -it <container name> run --rm <command>`
   
 * Comando para ver el log del container
    `docker logs <container name>`
    
 * Comando para eliminar todos los containers inactivos.
   `docker container prune`
   
 Más información
[Más comandos para contenedores Docker] (https://docs.docker.com/engine/reference/commandline/container/)  
