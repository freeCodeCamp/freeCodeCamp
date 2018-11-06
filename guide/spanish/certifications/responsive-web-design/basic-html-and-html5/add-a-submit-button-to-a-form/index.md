---
title: Add a Submit Button to a Form
localeTitle: Agregar un botón de envío a un formulario
---
## Agregar un botón de envío a un formulario

En este desafío, desea insertar el botón de envío como el último elemento del formulario (justo antes de la etiqueta de cierre `</form>` ) y asignarle el `type="submit"` atributo `type="submit"` (todo en minúsculas) y un contenido de texto de "Enviar "(primera letra en mayúscula) como se especifica en la instrucción de desafío.

1) el valor de `submit` del `type` atributo también es válido dentro de una etiqueta de `input` y mostrará un botón con casi el mismo comportamiento, pero esta no es la etiqueta que desea usar en este desafío.
```
<input type="submit">
```

Si no especifica un valor, el agente del usuario elegirá un valor predeterminado (en general, esto es algo como "Enviar" o "Enviar consulta").

Si desea especificar un valor como "Enviar solicitud", puede hacerlo así:
```
<input type="submit" value="Send Request">

```