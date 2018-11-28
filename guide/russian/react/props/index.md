---
title: Props
localeTitle: Props
---
### Что такое props?

Props (упр. от слова properties) - это дата, переданная в компонент. Они неизменяемы (только для чтения).

Свойства - это произвольные данные, переданные в компонент. Все компоненты React, должны действовать как чистые функции (оставлять свойства неизменными).

### Пример

```shell
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

    function App() {
      return (
        <div>
          <Welcome name="Sara" />
          <Welcome name="Cahal" />
          <Welcome name="Edite" />
        </div>
      );
    }
```

name является свойством, которое через props.name может получить компонент Welcome.

