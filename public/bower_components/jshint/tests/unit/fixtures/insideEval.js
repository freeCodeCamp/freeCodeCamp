eval("func_" + 123 + "();");

eval("func_" + func() + "();");

eval("evil_yet_valid();");

eval("evil_and_invalid(");

eval("this_" + "can_be" + "_tested_too();");

setTimeout("evil_yet_valid();", 1000);

setTimeout("evil_and_invalid(", 1000);

window.setTimeout("evil_yet_valid();", 1000);

window.setTimeout("evil_and_invalid(", 1000);
