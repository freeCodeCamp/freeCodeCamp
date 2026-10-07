function CallbackFiller() {
    this.queues = {};
}

CallbackFiller.prototype.fill = function(key, err, data) {
    var waiting = this.queues[key];
    delete this.queues[key];

    if (waiting && waiting.length) {
        waiting.forEach(function(task) {
            (task.cb)(err, data);
        });
    }
};

CallbackFiller.prototype.has = function(key) {
    return this.queues[key];
};

CallbackFiller.prototype.add = function(key, funcObj) {
    if (this.queues[key]) {
        this.queues[key].push(funcObj);
    } else {
        this.queues[key] = [funcObj];
    }
};

module.exports = CallbackFiller;
