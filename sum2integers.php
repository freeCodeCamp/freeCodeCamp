<?php

if(!defined("STDIN")){
	define("STDIN", fopen('php://stdin','rb'));
}
while (true) {
	// First Number
	$a = fgets(STDIN);
	// Second Number
	$b = fgets(STDIN);
	// Verify if exist Ctrl+C
	if (empty($a) || empty($b)) {
		break;
	}
	// Sum
	$x = $a + $b;
	// Result
	echo "X = ".$x."\n";
}
?>
