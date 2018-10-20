---
title: এরে (বিন্যাস)
---

## PHP  এরে পরিচিতি 

PHP এরে হচ্ছে একই ধরনের কিছু আইটেমের সংগ্রহ .

## Syntax (শব্দবিন্যাস)

এরেকে প্রকাশ করা হয়  array(), অথবা [].

একটি এরের গঠন শৈলীর উদাহরণ হতে পারে :

```
<?php

$bikes = array('Suzuki','BMW','Yamaha');
```
```
<?php

$bikes = ['Suzuki', 'BMW', 'Yamaha'];
```

## Key => Value

এছাড়াও এরেকে নামযুক্ত কী দিয়ে সংজ্ঞায়িত করা যেতে পারে :

```
<?php

$bikes = [
    'favorite'        => 'Suzuki',
    'second favorite' => 'BMW',
    'not my favorite' => 'Yamaha'
];
```

## Accessing Items - এরে থেকে আইটেম একসেস  করা 

একটি অ্যারের মধ্যে আইটেমগুলি তাদের সংশ্লিষ্ট কী, অথবা অ্যারের মধ্যে অবস্থান দ্বারা অ্যাক্সেস করা যেতে পারে.

For instance:

```
<?php

$bikes = ['Suzuki', 'BMW', 'Yamaha'];

echo 'I like '. $bikes[0]
```

এর আউটপুট (ফলাফল) হবে :

```
I like Suzuki
```

নাম্বার কী ব্যবহার করে আরেকটি উদাহরণ দেয়া হল :
```
<?php

$bikes = [
    'favorite'        => 'Suzuki',
    'second favorite' => 'BMW',
    'not my favorite' => 'Yamaha'
];

echo 'I like '. $bikes['not my favorite']
```

এর আউটপুট (ফলাফল) হবে :

```
I like BWM
```

## ভুল-ভ্রান্তি 

অ্যারে ব্যবহার করার সময় কিছু গুরুত্বপূর্ণ বিষয় মনে রাখতে হবে :

1) শেষ উপাদানের পরে একটি কমা দেয়া হল ঐচ্ছিক.
2) নেম কি অবশ্যই ইনডেক্স কিংবা নাম হতে হবে সিঙ্গেল '' সহ  (i.e. $bikes[not my favorite] would not work).

বিস্তারিত জানার জন্য দেখুন  [PHP: Arrays](http://php.net/manual/en/language.types.array.php)
