---
title: Getters & Setters
localeTitle: Getters & Setters
---# Getters & Setters

O typescript também suporta a propriedade `get` e `set` . Get e Set Properties são na verdade chamados Accessors. Os acessores de uma propriedade contêm instruções executáveis ​​associadas à obtenção (leitura) ou configuração (gravação) da propriedade. As declarações podem conter o acessador get ou o acessador set ou ambos.

```typescript
class User { 
    private _fullName: string = ''; 
 
    get fullName() { 
        return this._fullName; 
    } 
 
    set fullName(name) { 
        this._fullName = name; 
    } 
 } 
 
 let user = new User(); 
 
 user.fullName = 'John Doe'; 
 
 console.log(user.fullName); 

```