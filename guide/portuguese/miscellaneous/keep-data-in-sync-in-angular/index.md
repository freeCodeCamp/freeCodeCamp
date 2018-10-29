---
title: Keep Data in Sync in Angular
localeTitle: Mantenha os dados em sincronia no Angular
---
Digamos que você queira que algo apareça na visualização do usuário ao adicioná-lo ao banco de dados. Uma _coisa_ nova objeto irá mostrar instantaneamente em um loop _ng-repeat_ na sua opinião HTML se você simplesmente adicioná-lo à sua matriz local com
```
$scope.awesomeThings.push(newThing); 
```

Mas você ainda precisará adicioná-lo à sua coleção de banco de dados. Adicione à sua coleção com
```
$http.post('/api/things', newThing); 
```

Mas espere! Você logo perceberá que, enquanto todas as outras coisas em sua matriz _$ scope.awesomeThings_ têm ids exclusivos designados pelo MongoDB (sob a propriedade _._ Id\_ property), seu objeto _newThing_ não, o que tornará difícil para você em algum momento faça ações de banco de dados sobre ele (excluí-lo do banco de dados requer que você use sua propriedade _._ id\_). Então, o que você vai querer fazer depois de adicioná-lo ao array _$ scope.awesomeThings_ (porque queremos que ele apareça na página do usuário imediatamente). No geral, o seu código para adicionar um newThing ao seu array local e banco de dados será parecido com:
```
$scope.awesomeThings.push(newThing); 
 $http.post('/api/things', newThing).success(function(thatThingWeJustAdded) { 
    $scope.awesomeThings.pop(); // let's lose that id-lacking newThing 
    $scope.awesomeThings.push(thatThingWeJustAdded); // and add the id-having newThing! 
 }; 
```

Isso atualiza a matriz local para resultados aparentemente instantâneos para o usuário e, em seguida, sincroniza-a com o banco de dados e atualiza a matriz local em segundo plano com a versão do banco de dados do objeto _newThing_ , exclusivo _._ id\_ e tudo. Observe que o callback que passamos para a função _success_ recebe a nova _coisa_ do banco de dados como um argumento! Dessa forma, você pode facilmente adicioná-lo de volta ao seu escopo local sem muita sobrecarga.