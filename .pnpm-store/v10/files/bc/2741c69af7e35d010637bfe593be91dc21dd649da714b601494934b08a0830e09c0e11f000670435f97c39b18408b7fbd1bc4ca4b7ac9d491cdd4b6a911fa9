'use strict';

module.exports = function (t, a) {
	var queue = t(3);

	a(queue.hit('raz'), undefined, "Hit #1");
	a(queue.hit('raz'), undefined, "Hit #2");
	a(queue.hit('dwa'), undefined, "Hit #3");
	a(queue.hit('raz'), undefined, "Hit #4");
	a(queue.hit('dwa'), undefined, "Hit #5");
	a(queue.hit('trzy'), undefined, "Hit #6");
	a(queue.hit('raz'), undefined, "Hit #7");
	a(queue.hit('dwa'), undefined, "Hit #8");

	a(queue.hit('cztery'), 'trzy', "Overflow #1");
	a(queue.hit('dwa'), undefined, "Hit #9");

	a(queue.hit('trzy'), 'raz', "Overflow #2");

	a(queue.hit('raz'), 'cztery', "Overflow #3");
	a(queue.hit('cztery'), 'dwa', "Overflow #4");
	a(queue.hit('trzy'), undefined, "Hit #10");

	a(queue.hit('dwa'), 'raz', "Overflow #4");
	a(queue.hit('cztery'), undefined, "Hit #11");

	queue.delete('cztery');
	a(queue.hit('cztery'), undefined, "Hit #12");
};
