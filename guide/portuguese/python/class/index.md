---
title: Class
localeTitle: Classe
---
## Classe

As classes fornecem um meio de agrupar dados e funcionalidades juntos. Criar uma nova classe cria um novo tipo de objeto, permitindo que novas instâncias desse tipo sejam feitas. Cada instância de classe pode ter atributos anexados a ela para manter seu estado. Instâncias de classe também podem ter métodos (definidos por sua classe) para modificar seu estado.

Comparado com outras linguagens de programação, o mecanismo de classe do Python adiciona classes com um mínimo de nova sintaxe e semântica. É uma mistura dos mecanismos de classe encontrados em C ++. Classes Python fornecem todos os recursos padrão da Programação Orientada a Objetos: o mecanismo de herança de classes permite múltiplas classes base, uma classe derivada pode sobrescrever quaisquer métodos de sua classe ou classes base, e um método pode chamar o método de uma classe base com o mesmo nome. Objetos podem conter quantidades arbitrárias e tipos de dados. Como é o caso dos módulos, as classes participam da natureza dinâmica do Python: eles são criados em tempo de execução e podem ser modificados posteriormente após a criação.

#### Sintaxe de Definição de Classe:

A forma mais simples de definição de classe é assim:

```python
class ClassName: 
    <statement-1> 
        ... 
        ... 
        ... 
    <statement-N> 
 ``` 
 
 #### Class Objects: 
 
 Class objects support two kinds of operations: attribute references and instantiation. 
 
 Referência de atributo usam a sintaxe padrão usada para todas as referências de atributo em Python: `obj.name`.
 Nomes de atributos válidos são todos os nomes que estavam na classe quando o objeto daquela classe foi criado.
 Então, se a definição da classe for parecida com a definição abaixo:
```

python class MyClass: "" "Um exemplo simples de classe" "" i = 12345
```
def f(self): 
    return 'hello world' 
```

```
Then `MyClass.i` and `MyClass.f` are valid attribute references, returning an integer and a function object, respectively. 
 Class attributes can also be assigned to, so you can change the value of `MyClass.i` by assignment. `__doc__` is also a valid attribute, returning the docstring belonging to the class: `"A simple example class"`. 
 
 Class instantiation uses function notation. Just pretend that the class object is a parameterless function that returns a new instance of the class. For example (assuming the above class): 
```

python x = MyClass ()
```
Creates a new instance of the class and assigns this object to the local variable x. 
 
 The instantiation operation (“calling” a class object) creates an empty object. 
 Many classes like to create objects with instances customized to a specific initial state. 
 Therefore a class may define a special method named __init__(), like this: 
```

python def **init** (self): self.data = \[\]
```
When a class defines an `__init__()` method, class instantiation automatically invokes `__init__()` for the newly-created class instance. 
 So in this example, a new, initialized instance can be obtained by: 
```

python x = MyClass ()
```
Of course, the `__init__()` method may have arguments for greater flexibility. 
 In that case, arguments given to the class instantiation operator are passed on to `__init__()`. For example, 
```

python Complexo de classe: def **init** (self, realpart, imagpart): self.r = realpart self.i = imagpart …

x = complexo (3,0, -4,5)

> > > xr, xi (3,0, -4,5) \`\` \`
