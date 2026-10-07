// see scheduler.mjs

function unstable_runWithPriority(priority, callback) {
	return callback();
}

module.exports = {
	unstable_ImmediatePriority: 1,
	unstable_UserBlockingPriority: 2,
	unstable_NormalPriority: 3,
	unstable_LowPriority: 4,
	unstable_IdlePriority: 5,
	unstable_runWithPriority,
	unstable_now: performance.now.bind(performance)
};
