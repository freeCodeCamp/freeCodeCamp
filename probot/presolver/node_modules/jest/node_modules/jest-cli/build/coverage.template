// Copyright 2004-present Facebook. All Rights Reserved.

// Instrumentation Header
{
    var <%= instrumented.names.statement %>;
    var <%= instrumented.names.expression %>;
    var <%= instrumented.names.block %>;
    var nodes = <%= coverageStorageVar %>.nodes = {};
    var blocks = <%= coverageStorageVar %>.blocks = {};

    <%= instrumented.names.statement %> = function(i) {
        var node = nodes[i] = (nodes[i] || {index: i, count:0})
        node.count++;
    };

    <%= instrumented.names.expression %> = function(i) {
        var node = nodes[i] = (nodes[i] || {index: i, count:0})
        node.count++;
    };

    <%= instrumented.names.block %> = function(i) {
        var block = blocks[i] = (blocks[i] || {index: i, count:0})
        block.count++;
    };
};
////////////////////////

// Instrumented Code
<%= source %>
