---
title: Rest API Design
localeTitle: Design da API de descanso
---### História

RESTO significa **Re** protocolo **T** ransferência **S** tate apresentação. Roy Fielding definiu REST em sua dissertação de doutorado no ano 2000.

### O que é isso?

O REST foi desenvolvido para fornecer uma interface uniforme para

*   Identificando recursos
*   Manipulação de recursos
*   Mensagens descritivas
*   Usando a hipermídia como o mecanismo do estado do aplicativo (HATEOS)

### Melhores práticas

*   \#### Noções básicas

| Método | http://api.co/v2/cars | http://api.co/v2/cars/1234 |  
| --- | --- | --- | | GET | Listar todos os carros | Recuperar um carro individual | | POST | Crie um carro novo | Erro | | PÔR | Substituir coleções de carros por uma nova | Substitua o carro com id 1234 | | DELETE | Apagar todos os carros | Apagar carro com id 1234 |

_Observe enquanto as operações PUT, cliente ou servidor, podem gerar id's_

*   #### Os substantivos são bons Os verbos são ruins
    
*   Use substantivos para referenciar recursos como `cars` , `fruits` etc.
    
*   Use verbos para declarações de ação `convertMilesToKms` , `getNutritionalValues`
    
*   #### Singular ou plural?
    
    Use a gramática correta para declaração
    
    **Evitar** `/person/145`
    
    **Prefiro** `/people/154` Suponho retornar a 154ª pessoa da lista de pessoas
    
*   #### Use revestimento
    
    Use qualquer um dos padrões abaixo e seja **consistente!**
    
    | Estilos de maiúsculas | Exemplo | | ------------- | ------------- | | **UpperCamelCase** | `http://api.fintech.cp/DailyTransactions/Today` | | **lowerCamelCase** | `http://api.fintech.cp/dailyTransactions/today` |  
    | **snake\_case** | `http://api.fintech.cp/daily_transactions/today` |
    
*   #### **Relacionamentos e Recursos**
    
*   Os recursos podem ter relacionamentos `one-to-many` , `many-to-many` , `many-to-one` etc. O mapeamento correto deles é crucial.
    
*   Mapeamento de **um para muitos**
    
    Por exemplo, `Tickets/145/messages/4` sugere relação um-para-muitos entre `tickets` e `messages` . Significado `1` ticket tem `N` mensagens. A mensagem não é um recurso autônomo. Você não pode ter `/messages/4` .
    
*   **Muitos para muitos** mapeamento
    
    Por exemplo, `/usergroups/345/users/56` sugere selecionar o 345º grupo de usuários e obter o usuário com o ID 56. Entretanto, um usuário pode estar em vários `usergroups` isto é, `/usergroups/209/users/56` também é válido. Nesse caso, para separar os `users` recurso depedente em um ponto de extremidade separado como `/users/56` e fornecer a vinculação de recursos em `/usergroups/209/users/56`
    
*   #### **Parâmetros da API**
    
*   **CAMINHO** : _necessário_ para acessar o recurso Por exemplo, `/cars` `/fruits`
    
*   **Parâmetros de consulta** : _opcional_ filtrar a lista Por exemplo `/cars?type=SUV&year=2010`
    
*   **Corpo** : Lógica específica do recurso. Consulta de pesquisa avançada. Às vezes, pode ter tanto consulta quanto corpo.
    
*   **Cabeçalho** : deve conter dados globais ou de plataforma ampla. Por exemplo, parâmetros de chave de API, chaves criptografadas para autenticação, informações de tipo de dispositivo, por exemplo, móvel ou desktop ou endpoint, tipo de dados do dispositivo, por exemplo, xml ou json. Use o cabeçalho para comunicar esses parâmetros
    
*   #### Códigos de Status HTTP
    
    Use códigos de status corretos
    
    | Códigos | Significado | | ------------- |: -------------: | | 1xx | Solicitação recebida e entendida. | | 2xx | Ação solicitada pelo cliente foi recebida, entendida e solicitada. | | 3xx | O cliente deve tomar medidas adicionais para concluir a solicitação. A maioria desses códigos de status é usada no redirecionamento de URL. | | 4xx | Destinado a situações em que parece que o erro foi causado pelo cliente. | | 5xx | O servidor não conseguiu atender a uma solicitação. |
    
    Pouco mais em **2xx** !
    
*   **201 Recurso Criado.** POST `/cars` devem retornar o HTTP 201 criado com o cabeçalho de `location` informando como acessar o recurso Por exemplo, `location` : `api.com/cars/124` no cabeçalho
    
*   **202 - Aceito**
    
    Use isso se a tarefa for grande para ser executada. Diga ao cliente, aceitou o pedido e processará / processará Nenhuma carga é retornada
    
*   **204 - Nenhum conteúdo**
    
    Usada quando excluídos `DELETE cars/124` Não retorna conteúdo. Mas também pode retornar `200 OK` se a API pretende enviar o recurso excluído para processamento adicional.
    
    Os perigosos recursos **5xx** !
    
*   **500** Erro interno do servidor
    
*   **504** Tempo limite do gateway. O servidor não recebeu resposta em tempo hábil
    
    Menos conhecido **4xx** sugere que você está passando o parâmetro errado. Também pode passar informações erradas. Por exemplo
    
    `DELETE /cars/MH09234`
    
    retorna `4xx` ou mensagem `Expecting int car id /car/id got string car/MH09234`
    

### **Leitura adicional**

[Como criar ótimas APIs - Analisar o dia do desenvolvedor 2013](https://www.youtube.com/watch?v=qCdpTji8nxo)

[O interminável debate de design da API REST por Guillaume Laforge](https://www.youtube.com/watch?v=48azd2VqtP0)

[Códigos de status HTTP](https://httpstatuses.com/)