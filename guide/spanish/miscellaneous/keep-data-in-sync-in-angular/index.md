---
title: Keep Data in Sync in Angular
localeTitle: Mantener los datos sincronizados en angular
---
Diga que desea que aparezca algo en la vista del usuario cuando lo agregue a la base de datos. Un nuevo objeto de _cosa_ aparecerá instantáneamente en un bucle de _repetición ng_ en su vista HTML si simplemente lo agrega a su matriz local con
```
$scope.awesomeThings.push(newThing); 
```

Pero todavía tendrá que agregarlo a su colección de base de datos. Añádelo a tu colección con
```
$http.post('/api/things', newThing); 
```

¡Pero espera! Pronto se dará cuenta de que, mientras que todas las otras cosas en la matriz _$ scope.awesomeThings_ tienen identificadores únicos asignados por MongoDB (debajo de la propiedad _._ Cosa\_ id), su _nuevo_ objeto _Thing_ no lo tendrá, lo que lo hará difícil para usted en algún momento. realizar acciones de bases de datos en el mismo (eliminarlo de su base de datos requiere el uso de _su._ ID\_ propiedad). Entonces, ¿qué querrá hacer después de agregarlo a su matriz _$ scope.awesomeThings_ (porque queremos que aparezca en la página del usuario de inmediato)? En total, su código para agregar un nuevoTing a su matriz y base de datos local se verá así:
```
$scope.awesomeThings.push(newThing); 
 $http.post('/api/things', newThing).success(function(thatThingWeJustAdded) { 
    $scope.awesomeThings.pop(); // let's lose that id-lacking newThing 
    $scope.awesomeThings.push(thatThingWeJustAdded); // and add the id-having newThing! 
 }; 
```

Esto actualiza la matriz local para obtener resultados aparentemente instantáneos para su usuario y luego la sincroniza con su base de datos y actualiza la matriz local en segundo plano con la versión de la base de datos de su objeto _newThing_ , única _._ id\_ y todo. ¡Observe que la devolución de llamada que pasamos a la función de _éxito_ recibe _lo_ nuevo de la base de datos como un argumento! De esta manera, puede volver a agregarlo fácilmente a su ámbito local sin demasiada sobrecarga.