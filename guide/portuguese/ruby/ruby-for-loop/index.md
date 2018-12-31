---
title: Ruby For Loops
localeTitle: Ruby For Loops
---
## Ruby For Loops

Os loops forçados Ruby são usados ​​para fazer loop ou iterar sobre vários elementos e executar um bloco de código para cada elemento. For loops são freqüentemente usados ​​em matrizes. Veja a seção sobre [Ruby Arrays](https://github.com/freeCodeCamp/guides/blob/master/src/pages/ruby/ruby-arrays/index.md) .

For loops são meramente um exemplo de loop ou iteração sobre elementos. Abaixo está um exemplo de um loop for:
```
for element in array do 
  puts element 
 end 
```

Existem muitas maneiras diferentes nas quais você pode executar um loop ou loop em Ruby, outro exemplo seria:
```
element.each do |element| 
  puts element 
 end 
```

Isso alcançaria exatamente os mesmos resultados que o loop for mencionado anteriormente, mas é mais simples e mais eficiente, pois faz uso dos métodos incorporados do Array.

Para ir além, podemos escrever o loop acima da seguinte maneira:
```
element.each do { |element| puts element } 

```