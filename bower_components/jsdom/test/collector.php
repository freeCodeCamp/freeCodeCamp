<?php


$files = glob($_SERVER['argv'][1] . "/*.html");

$segments = array_filter(explode('/', $_SERVER['argv'][1]));
$last = array_pop($segments);
$outputFile = implode('/', $segments) . "/{$last}.js";

$functions = array();
$functionBodies = array();

foreach ($files as $file)
{
	$content = file_get_contents($file);
	
	$first = "// expose test function names";
	
	$start = strpos($content, $first);
	$end   = strpos($content, "</script>", $start + strlen($first));


	$substring = substr($content, $start+$first, $end-$start);
	
	$function = substr($substring, strpos($substring, "/**"));
	
	$function = str_replace("function ", "", $function);
	$function = str_replace("() {", " : function () {", $function);
	
	// parse out the actual function
	array_push($functionBodies, trim($function));
	
}


file_put_contents($outputFile, "exports.tests = {\n".implode(",\n", array_filter($functionBodies)) . '\n}');