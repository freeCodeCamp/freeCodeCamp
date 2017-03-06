(function() {
  void funcBefore;
  void topBlockBefore;
  void nestedBlockBefore;

  var funcBefore, funcAfter;

  {
    void funcBefore;
    void topBlockBefore;
    void nestedBlockBefore;

    var topBlockBefore, topBlockAfter;

    {
      void funcBefore;
      void topBlockBefore;
      void nestedBlockBefore;

      var nestedBlockBefore, nestedBlockAfter;

      void nestedBlockAfter;
      void topBlockAfter;
      void funcAfter;
    }

    void nestedBlockAfter;
    void topBlockAfter;
    void funcAfter;
  }

  void nestedBlockAfter;
  void topBlockAfter;
  void funcAfter;
}());
