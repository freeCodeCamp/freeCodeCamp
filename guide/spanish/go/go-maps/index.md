---
title: Go Maps
localeTitle: Ir Mapas
---
## Ir Mapas

Un mapa, llamado _diccionario_ en otros idiomas, "asigna" claves a valores. Un mapa se declara así:

```go
var m map[Key]Value 
```

Este mapa no tiene claves y no se le pueden agregar claves. Para crear un mapa, usa la función `make` :

```go
m = make(map[Key]Value) 
```

Cualquier cosa puede ser usada como una clave o como un valor.

### Modificando mapas

Aquí hay algunas acciones comunes con los mapas.

#### Insertando / Cambiando elementos

Crear o cambiar el elemento `foo` en el mapa `m` :

```go
m["foo"] = bar 
```

#### Obteniendo elementos

Obtener elemento con clave `foo` en el mapa `m` :

```go
element = m["foo"] 
```

#### Borrando elementos

Eliminar elemento con clave `foo` en el mapa `m` :

```go
delete(m, "foo") 
```

#### Compruebe si se ha utilizado una clave

Compruebe si la clave `foo` se ha utilizado en el mapa `m` :

```go
element, ok = m["foo"] 
```

Si `ok` es `true` , la clave se ha utilizado y el `element` mantiene el valor en `m["foo"]` . Si `ok` es `false` , la clave no se ha utilizado y el `element` mantiene sus valores cero.

### Mapa literales

Puedes crear literales de mapas directamente:

```go
var m = map[string]bool{ 
    "Go": true, 
    "JavaScript":false, 
 } 
 
 m["Go"] // true 
 m["JavaScript"] = true // Set Javascript to true 
 delete(m, "JavaScript") // Delete "JavaScript" key and value 
 language, ok = m["C++"] // ok is false, language is bool's zero-value (false) 
```

#### Más información:

*   [Un tour de go](https://tour.golang.org/moretypes/19)
*   [Ir por ejemplo](https://gobyexample.com/maps)
*   [Libro de golang](https://www.golang-book.com/books/intro/6#section3)
*   [La especificación del lenguaje de programación Go](https://golang.org/ref/spec#Making_slices_maps_and_channels)