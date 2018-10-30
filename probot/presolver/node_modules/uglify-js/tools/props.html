<html>
  <head>
  </head>
  <body>
    <script>(function(){
      var props = {};

      function addObject(obj) {
        if (obj == null) return;
        try {
          Object.getOwnPropertyNames(obj).forEach(add);
        } catch(ex) {}
        if (obj.prototype) {
          Object.getOwnPropertyNames(obj.prototype).forEach(add);
        }
        if (typeof obj == "function") {
          try {
            Object.getOwnPropertyNames(new obj).forEach(add);
          } catch(ex) {}
        }
      }

      function add(name) {
        props[name] = true;
      }

      Object.getOwnPropertyNames(window).forEach(function(thing){
        addObject(window[thing]);
      });

      try {
        addObject(new Event("click"));
        addObject(new Event("contextmenu"));
        addObject(new Event("mouseup"));
        addObject(new Event("mousedown"));
        addObject(new Event("keydown"));
        addObject(new Event("keypress"));
        addObject(new Event("keyup"));
      } catch(ex) {}

      var ta = document.createElement("textarea");
      ta.style.width = "100%";
      ta.style.height = "20em";
      ta.style.boxSizing = "border-box";
      <!-- ta.value = Object.keys(props).sort(cmp).map(function(name){ -->
      <!--   return JSON.stringify(name); -->
      <!-- }).join(",\n"); -->
      ta.value = JSON.stringify({
        vars: [],
        props: Object.keys(props).sort(cmp)
      }, null, 2);
      document.body.appendChild(ta);

      function cmp(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a < b ? -1 : a > b ? 1 : 0;
      }
    })();</script>
  </body>
</html>
