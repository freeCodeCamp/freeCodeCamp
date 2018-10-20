---
title: Arrays(অ্যারেস)
---
## Arrays(অ্যারেস)

### অ্যারের প্রকারবেধ
পিএইচপিতে তিন ধরনের অ্যারে আছে । ইনডেক্স অ্যারে, এসোসিয়েটিভ অ্যারে, বহুমাত্রিক অ্যারে.

### ইনডেক্স অ্যারের উদাহরণ:
ইনডেক্স অ্যারে থেকে আইটেম কে নিতে হয় আইটেমের ইনডেক্স পজিশন নাম্বার দিয়ে .
```PHP
<?php
$freecodecamp = array("free", "code", "camp");
```
`$freecodecamp[0]` would return `"free"`, `$freecodecamp[1]` would return `"code"`, and `$freecodecamp[2]` would return `"camp"`.

### এসোসিয়েটিভ অ্যারের উদাহরণ
এসোসিয়েটিভ অ্যারে থেকে আইটেম কে নিতে হয় আইটেমের নাম কী  দিয়ে.
```PHP
<?php
$freecodecamp = array("free"=>"0","code"=>"1","camp"=>"2");
```
`$freecodecamp['free']` would return "0", `$freecodecamp['code']` would return "1", `$freecodecamp['camp']` would return "2",

### বহুমাত্রিক অ্যারের উদাহরণ:
বহুমাত্রিক অ্যারে হচ্ছে যেখানে একটা অ্যারে আরও এক বা একাধিক অ্যারেকে ধারণ করে। 
```PHP
<?php
$freecodecamp = array(array("free"=>"0","code"=>"1","camp"=>"2"),array("free"=>"0","code"=>"1","camp"=>"2"),array("free"=>"0","code"=>"1","camp"=>"2"));
```

#### বিস্তারিত জানার জন্য :
* <a href="https://secure.php.net/manual/en/language.types.array.php" rel="nofollow">php.net arrays manual</a>
