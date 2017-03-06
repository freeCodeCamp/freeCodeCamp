(function foo() {
  'use strict';
  <%
    if someCondition do
  %>
  someMethod('<?php foo('test') ?>')
  <% end %>
  return '<%= asset_path('foo.png') %>' + '<% some_method() %>';
})();

function return_jsx() {
  //<%
  return <span>
    (somecondition ?
      "a"
      /* else */:
      "b"
    )
  </span>;
  //%>
}
