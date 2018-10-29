---
title: Data Types
localeTitle: Tipos de datos
---
## Tipos de datos

En Elixir hay cinco tipos de datos básicos: enteros, flotadores, booleanos, átomos y cadenas. Estos tipos de datos se utilizan para almacenar valores para su uso posterior en su programa.

### Enteros

Un entero es un número no decimal. Elixir ha incorporado soporte para números binarios, octales y hexadecimales como enteros.

```elixir
iex> 1337 
 1337 
```

### Flotadores

Un flotador requiere un decimal y al menos un dígito después del decimal. Los flotadores admiten una precisión doble de 64 bits y `e` para los exponentes.

```elixir
iex> 27e-100 
 27e-100 
```

### Booleanos

Un booleano es un valor verdadero o falso. En Elixir todo es veraz excepto `false` y `nil` . Es importante tener en cuenta que los booleanos son un subtipo de átomos de Elxir (puede inspeccionar los valores en IEX para ver por sí mismo).

```elixir
iex> true 
 true 
 iex> false 
 false 
 iex> nil 
 nil 
```

### Los átomos

Un átomo es una constante cuyo valor es el mismo que el nombre. Los átomos se usan comúnmente para mensajes de estado / error dentro de una tupla con más información incluida en una cadena.

```elixir
iex> {:ok, "Message sent successfully"} 
 {:ok, "Message sent successfully"} 
 iex> {:error, "Message failed to send"} 
 {:error, "Message failed to send"} 
```

### Instrumentos de cuerda

Una cadena está codificada en UTF-8 y envuelta entre comillas dobles.

```elixir
iex> "freeCodeCamp" 
 "freeCodeCamp" 
```

Una cadena también es binaria, puede ver la representación binaria de una cadena en Elixir adjuntando `<> <<0>>` al final de la cadena. Una cadena puede representar un binario, un binario también puede representar una cadena.

```elixir
iex> "freeCodeCamp" <> <<0>> 
 <<102, 114, 101, 101, 67, 111, 100, 101, 67, 97, 109, 112, 0>> 
```

#### Más información

*   [Hexdocs Atom](https://hexdocs.pm/elixir/Atom.html)
*   [Cadena Hexdocs](https://hexdocs.pm/elixir/String.html)
*   [Hexdocs Integer](https://hexdocs.pm/elixir/Integer.html)
*   [Flotador Hexdocs](https://hexdocs.pm/elixir/Float.html)