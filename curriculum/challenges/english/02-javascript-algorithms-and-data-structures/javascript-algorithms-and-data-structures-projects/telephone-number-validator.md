---
id: aff0395860f5d3034dc0bfc9
title: Telephone Number Validator
challengeType: 5
forumTopicId: 16090
dashedName: telephone-number-validator
---

# --description--

Return `true` if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

<blockquote>555-555-5555<br>(555)555-5555<br>(555) 555-5555<br>555 555 5555<br>5555555555<br>1 555 555 5555</blockquote>

For this challenge you will be presented with a string such as `800-692-7753` or `8oo-six427676;laskdjf`. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is `1`. Return `true` if the string is a valid US phone number; otherwise return `false`.

# --hints--

`telephoneCheck("555-555-5555")` should return a boolean.

```js
assert(typeof telephoneCheck('555-555-5555') === 'boolean');
```

`telephoneCheck("1 555-555-5555")` should return `true`.

```js
assert(telephoneCheck('1 555-555-5555') === true);
```

`telephoneCheck("1 (555) 555-5555")` should return `true`.

```js
assert(telephoneCheck('1 (555) 555-5555') === true);
```

`telephoneCheck("5555555555")` should return `true`.

```js
assert(telephoneCheck('5555555555') === true);
```

`telephoneCheck("555-555-5555")` should return `true`.

```js
assert(telephoneCheck('555-555-5555') === true);
```

`telephoneCheck("(555)555-5555")` should return `true`.

```js
assert(telephoneCheck('(555)555-5555') === true);
```

`telephoneCheck("1(555)555-5555")` should return `true`.

```js
assert(telephoneCheck('1(555)555-5555') === true);
```

`telephoneCheck("555-5555")` should return `false`.

```js
assert(telephoneCheck('555-5555') === false);
```

`telephoneCheck("5555555")` should return `false`.

```js
assert(telephoneCheck('5555555') === false);
```

`telephoneCheck("1 555)555-5555")` should return `false`.

```js
assert(telephoneCheck('1 555)555-5555') === false);
```

`telephoneCheck("1 555 555 5555")` should return `true`.

```js
assert(telephoneCheck('1 555 555 5555') === true);
```

`telephoneCheck("1 456 789 4444")` should return `true`.

```js
assert(telephoneCheck('1 456 789 4444') === true);
```

`telephoneCheck("123**&!!asdf#")` should return `false`.

```js
assert(telephoneCheck('123**&!!asdf#') === false);
```

`telephoneCheck("55555555")` should return `false`.

```js
assert(telephoneCheck('55555555') === false);
```

`telephoneCheck("(6054756961)")` should return `false`.

```js
assert(telephoneCheck('(6054756961)') === false);
```

`telephoneCheck("2 (757) 622-7382")` should return `false`.

```js
assert(telephoneCheck('2 (757) 622-7382') === false);
```

`telephoneCheck("0 (757) 622-7382")` should return `false`.

```js
assert(telephoneCheck('0 (757) 622-7382') === false);
```

`telephoneCheck("-1 (757) 622-7382")` should return `false`.

```js
assert(telephoneCheck('-1 (757) 622-7382') === false);
```

`telephoneCheck("2 757 622-7382")` should return `false`.

```js
assert(telephoneCheck('2 757 622-7382') === false);
```

`telephoneCheck("10 (757) 622-7382")` should return `false`.

```js
assert(telephoneCheck('10 (757) 622-7382') === false);
```

`telephoneCheck("27576227382")` should return `false`.

```js
assert(telephoneCheck('27576227382') === false);
```

`telephoneCheck("(275)76227382")` should return `false`.

```js
assert(telephoneCheck('(275)76227382') === false);
```

`telephoneCheck("2(757)6227382")` should return `false`.

```js
assert(telephoneCheck('2(757)6227382') === false);
```

`telephoneCheck("2(757)622-7382")` should return `false`.

```js
assert(telephoneCheck('2(757)622-7382') === false);
```

`telephoneCheck("555)-555-5555")` should return `false`.

```js
assert(telephoneCheck('555)-555-5555') === false);
```

`telephoneCheck("(555-555-5555")` should return `false`.

```js
assert(telephoneCheck('(555-555-5555') === false);
```

`telephoneCheck("(555)5(55?)-5555")` should return `false`.

```js
assert(telephoneCheck('(555)5(55?)-5555') === false);
```

`telephoneCheck("55 55-55-555-5")` should return `false`.

```js
assert(telephoneCheck('55 55-55-555-5') === false);
```

`telephoneCheck("11 555-555-5555")` should return `false`.

```js
assert(telephoneCheck('11 555-555-5555') === false);
```

`telephoneCheck()`, when called with any valid number, should return `true`.

```js

function generatePhoneNumber(type) {
  
  const areaCodes = ['201','202','203','204','205','206','207','208','209','210','212','213','214','215','216','217','218','219','220','224','225','226','228','229','231','234','236','239','240','242','246','248','249','250','251','252','253','254','256','260','262','264','267','268','269','270','272','276','281','284','289','301','302','303','304','305','306','307','308','309','310','312','313','314','315','316','317','318','319','320','321','323','325','330','331','334','336','337','339','340','343','345','346','347','351','352','360','361','364','365','380','385','386','401','402','403','404','405','406','407','408','409','410','412','413','414','415','416','417','418','419','423','424','425','430','431','432','434','435','437','438','440','441','442','443','450','458','469','470','473','475','478','479','480','484','501','502','503','504','505','506','507','508','509','510','512','513','514','515','516','517','518','519','520','530','531','534','539','540','541','548','551','559','561','562','563','567','570','571','573','574','575','579','580','581','585','586','587','601','602','603','604','605','606','607','608','609','610','612','613','614','615','616','617','618','619','620','623','626','628','629','630','631','636','639','641','646','647','649','650','651','657','660','661','662','664','667','669','670','671','678','681','682','684','701','702','703','704','705','706','707','708','709','712','713','714','715','716','717','718','719','720','721','724','725','727','731','732','734','737','740','743','747','754','757','758','760','762','763','765','767','769','770','772','773','774','775','778','779','780','781','782','784','785','786','787','801','802','803','804','805','806','807','808','809','810','812','813','814','815','816','817','818','819','825','828','829','830','831','832','843','845','847','848','849','850','854','856','857','858','859','860','862','863','864','865','867','868','869','870','872','873','876','878','901','902','903','904','905','906','907','908','909']
  
  let result = "";
  let bit1 = areaCodes[Math.ceil(Math.random() * areaCodes.length - 1)];
  let bit2 = "";
  let bit3 = "";

  for (let i = 0; i < 3; i++) {
    bit2 += Math.floor(Math.random() * 8) + 2;
    bit3 += Math.floor(Math.random() * 10);
  }

  bit3 += Math.floor(Math.random() * 10);

  if (type <= 1) {
    // 1 XXX-XXX-XXXX
    result = `1 ${bit1}-${bit2}-${bit3}`

  } else if (type <= 2) {
    // 1 (XXX)XXX-XXXX
    result = `1 (${bit1})${bit2}-${bit3}`;

  } else if (type <= 3) {
    // 1(XXX)XXX-XXXX
    result = `1(${bit1})${bit2}-${bit3}`;

  } else if (type <= 4) {
    // 1 XXX XXX XXXX
    result = `1 ${bit1} ${bit2} ${bit3}`

  } else if (type <= 5) {
    // XXXXXXXXXX
    result = `${bit1}${bit2}${bit3}`

  } else if (type <= 6) {
    // XXX-XXX-XXXX
    result = `${bit1}-${bit2}-${bit3}`

  } else {
    //(XXX)XXX-XXXX
    result = `(${bit1})${bit2}-${bit3}`

  }

  return result;
}

for (let i = 1; i <= 7; i++) {
  let phoneNum = generatePhoneNumber(i);
  assert.strictEqual(telephoneCheck(phoneNum), true);
}
```

When the `#user-input` element contains an invalid US number and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: "` followed by the number.

```js

function generateInvalidPhoneNumber(type) {
  let result = "";
  let bit1 = "";
  let bit2 = "";
  let bit3 = "";
  
  for (let i = 0; i < 3; i++) {
    bit1 += Math.floor(Math.random() * 10);
    bit2 += Math.floor(Math.random() * 10);
    bit3 += Math.floor(Math.random() * 10);
  }

  bit3 += Math.floor(Math.random() * 10);

  if (type <= 1) {
    // 1 XXX-XXX-XXX
    result = `1 ${bit1}-${bit2}-${bit1}`
    
  } else if (type <= 2) {
    // 1 (XXXXXX-XXXX
    result = `1 (${bit1}${bit2}-${bit3}`;
    
  } else if (type <= 3) {
    // XX(XXX)XXX-XXXX
    result = `${bit1[0]}(${bit1})${bit2}-${bit3}`;
    
  } else if (type <= 4) {
    // -XXXX XXX XXX 
    result = `-${bit3} ${bit2} ${bit1}`
    
  } else if (type <= 5) {
    // XXXXXXXXXX-X
    result = `${bit1}${bit2}${bit3}-${bit3[0]}`
    
  } else if (type <= 6) {
    // XXX#XXX-XXXX
    result = `${bit1}#${bit2}-${bit3}`
    
  } else {
    //555)555-5555
    result = `${bit1})${bit2}-${bit3}`
    
  }

  return result;
}

const notPhoneNum = generateInvalidPhoneNumber(Math.floor(Math.random() * 7))
assert.strictEqual(telephoneCheck(notPhoneNum), false)
```


# --seed--

## --seed-contents--

```js
function telephoneCheck(str) {
  return true;
}

telephoneCheck("555-555-5555");
```

# --solutions--

```js
var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
  return re.test(str);
}

telephoneCheck("555-555-5555");
```
