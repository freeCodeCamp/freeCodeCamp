var hasOwnProperty = Object.prototype.hasOwnProperty;

function buildMap(list, caseInsensitive) {
    var map = Object.create(null);

    if (!Array.isArray(list)) {
        return null;
    }

    for (var i = 0; i < list.length; i++) {
        var name = list[i];

        if (caseInsensitive) {
            name = name.toLowerCase();
        }

        map[name] = true;
    }

    return map;
}

function buildList(data) {
    if (!data) {
        return null;
    }

    var tags = buildMap(data.tags, true);
    var ids = buildMap(data.ids);
    var classes = buildMap(data.classes);

    if (tags === null &&
        ids === null &&
        classes === null) {
        return null;
    }

    return {
        tags: tags,
        ids: ids,
        classes: classes
    };
}

function buildIndex(data) {
    var scopes = false;

    if (data.scopes && Array.isArray(data.scopes)) {
        scopes = Object.create(null);

        for (var i = 0; i < data.scopes.length; i++) {
            var list = data.scopes[i];

            if (!list || !Array.isArray(list)) {
                throw new Error('Wrong usage format');
            }

            for (var j = 0; j < list.length; j++) {
                var name = list[j];

                if (hasOwnProperty.call(scopes, name)) {
                    throw new Error('Class can\'t be used for several scopes: ' + name);
                }

                scopes[name] = i + 1;
            }
        }
    }

    return {
        whitelist: buildList(data),
        blacklist: buildList(data.blacklist),
        scopes: scopes
    };
}

module.exports = {
    buildIndex: buildIndex
};
