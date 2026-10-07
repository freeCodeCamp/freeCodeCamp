var Hogan = Hogan || require('./lib/hogan');

function doIt() {

    var child        = Hogan.compile('{{< intermediate }} {{$childcontent}} child content {{/childcontent}} {{/intermediate}}');

    var intermediate = Hogan.compile('{{< parent}} {{$content}} intermediate content {{$childcontent}} ERROR {{/childcontent}} {{/content}} {{/parent}}');

    var parent       = Hogan.compile('Content:{{$content}} parent content{{/content}}');

    var result       = child.render({}, {intermediate: intermediate, parent: parent});

    console.log("got:     ", result);
    console.log("expected:", "Content: intermediate content child content")
}

function doIt2() {

    var child        = Hogan.compile('{{< intermediate }}{{$childcontent}}child content{{/childcontent}}{{/intermediate}}');

    var intermediate = Hogan.compile('{{< parent}} {{$content}} intermediate content {{/content}}{{$childcontent}} ERROR2 {{/childcontent}}  {{/parent}}');

    var parent       = Hogan.compile('Content:{{$content}} parent content {{/content}}{{$childcontent}} ERROR1 {{/childcontent}}');

    var result       = child.render({}, {intermediate: intermediate, parent: parent});

    console.log("got:     ", result);
    console.log("expected:", "Content: intermediate content child content")
}

function doIt3() {
  Hogan.cache = {};
  var child1 = Hogan.compile("{{<intermediate}}{{$content}}CHILD1{{/content}}{{/intermediate}}");
  var child2 = Hogan.compile("{{<intermediate}}{{$content}}CHILD2{{/content}}{{/intermediate}}");
  var intermediate = Hogan.compile("{{<parent}}{{$content}}INTERMEDIATE{{/content}}{{/parent}}");
  var parent = Hogan.compile("Content: {{$content}}PARENT{{/content}}");
  var s;

  s = parent.render({}, {});

  s = intermediate.render({}, {parent: parent});

  s = child1.render({}, {intermediate: intermediate, parent: parent});

  s = child2.render({}, {intermediate: intermediate, parent: parent});
  console.log("got:         ", s);
  console.log("expected:    ", "Content: CHILD2");
}

doIt3();
