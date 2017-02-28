(function() {
  // Usage in same scope as declaration (function)
  var func1;
  void func1;
  void func2;
  var func2;

  var func3, func4, func5, func6;
  var unusedFunc;

  {
    void func3;

    // Redeclaration (direct descendent of function)
    var func4;
    void func4;
    void func5;
    var func5;

    // Usage in same scope as declaration (block)
    var topBlock1;
    void topBlock1;
    void topBlock2;
    var topBlock2;

    var topBlock3, topBlock4, topBlock5, topBlock6, topBlock7;
    var unusedTopBlock;

    {
      void func6;

      // Redeclaration (indirect descendent of function)
      var func7;
      void func7;
      void func8;
      var func8;

      void topBlock5;

      // Redeclaration (direct descendent of block)
      var topBlock6;
      void topBlock6;
      void topBlock7;
      var topBlock7;

      // Usage in same scope as declaration (nested block)
      var nestedBlock1;
      void nestedBlock1;
      void nestedBlock2;
      var nestedBlock2;

      var unusedNestedBlock;

      {
        // Redeclaration (indirect descendent of block)
        var topBlock3;
        void topBlock3;
        void topBlock4;
        var topBlock4;
      }
    }
  }
})();
