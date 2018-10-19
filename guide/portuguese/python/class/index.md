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
 
 Objetos de Classe suportam dois tipo de operações: referência de atributo e instanciação. 
 
 Referências de atributos usam a sintaxe padrão usada para todas as referências de atributos no Python: `obj.name`. 
 Os nomes de atributos válidos são todos os nomes que estavam no namespace da classe quando o objeto da classe foi criado.
 Então, se a definição da classe for assim:
```

python class MyClass: "" "Um exemplo simples de classe" "" i = 12345
```
def f(self): 
    return 'hello world' 
```

```
Então `MyClass.i` e `MyClass.f` são referências válidas de atributos, retornando um inteiro e um objeto de função, respectivamente. 
Atributos de classe também podem ser atribuídos, para que você possa alterar o valor de `MyClass.i` por designação. `__doc__` também é um atributo válido, retornando os docstring pertencente à classe: `"A simple example class"`. 
 
Instanciação de classe usa notação de função. Apenas finge que o objeto de classe é uma função sem parâmetros que retorna uma nova instância da classe. Por exemplo (assumindo a classe acima): 
```

python x = MyClass ()
```
Cria uma nova instância da classe e atribui esse objeto à variável local x. 
 
 A operação de instanciação (“chamando” um objeto de classe) cria um objeto vazio. 
 Muitas classes gostam de criar objetos com instâncias personalizadas para um estado inicial específico. 
 Portanto, uma classe pode definir um método especial chamado __init__(), assim: 
```

python def **init** (self): self.data = \[\]
```
Quando uma classe define um método `__init__()`, instanciação de classe invoca automaticamente `__init__()` para a instância de classe recém-criada.
Portanto, neste exemplo, uma nova instância inicializada pode ser obtida: 
```

python x = MyClass ()
```
Naturalmente, o método `__init__()` pode ter argumentos para maior flexibilidade. 
Nesse caso, argumentos dados ao operador de instanciação de classe são passados para `__init__()`. Por exemplo, 
```

python Complexo de classe: def **init** (self, realpart, imagpart): self.r = realpart self.i = imagpart …

x = complexo (3,0, -4,5)

> > > xr, xi (3,0, -4,5) \`\` \`
