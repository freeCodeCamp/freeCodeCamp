define("vs/basic-languages/monaco.contribution", ["require", "../editor.api-CykLys8L"], (function(require, editor_api) {
  "use strict";
  const languageDefinitions = {};
  const lazyLanguageLoaders = {};
  class LazyLanguageLoader {
    static getOrCreate(languageId) {
      if (!lazyLanguageLoaders[languageId]) {
        lazyLanguageLoaders[languageId] = new LazyLanguageLoader(languageId);
      }
      return lazyLanguageLoaders[languageId];
    }
    constructor(languageId) {
      this._languageId = languageId;
      this._loadingTriggered = false;
      this._lazyLoadPromise = new Promise((resolve, reject) => {
        this._lazyLoadPromiseResolve = resolve;
        this._lazyLoadPromiseReject = reject;
      });
    }
    load() {
      if (!this._loadingTriggered) {
        this._loadingTriggered = true;
        languageDefinitions[this._languageId].loader().then(
          (mod) => this._lazyLoadPromiseResolve(mod),
          (err) => this._lazyLoadPromiseReject(err)
        );
      }
      return this._lazyLoadPromise;
    }
  }
  function registerLanguage(def) {
    const languageId = def.id;
    languageDefinitions[languageId] = def;
    editor_api.languages.register(def);
    const lazyLanguageLoader = LazyLanguageLoader.getOrCreate(languageId);
    editor_api.languages.registerTokensProviderFactory(languageId, {
      create: async () => {
        const mod = await lazyLanguageLoader.load();
        return mod.language;
      }
    });
    editor_api.languages.onLanguageEncountered(languageId, async () => {
      const mod = await lazyLanguageLoader.load();
      editor_api.languages.setLanguageConfiguration(languageId, mod.conf);
    });
  }
  registerLanguage({
    id: "abap",
    extensions: [".abap"],
    aliases: ["abap", "ABAP"],
    loader: () => new Promise((resolve, reject) => require(["../abap-BxE6jMvt"], resolve, reject))
  });
  registerLanguage({
    id: "apex",
    extensions: [".cls"],
    aliases: ["Apex", "apex"],
    mimetypes: ["text/x-apex-source", "text/x-apex"],
    loader: () => new Promise((resolve, reject) => require(["../apex-Jqcmv7eP"], resolve, reject))
  });
  registerLanguage({
    id: "azcli",
    extensions: [".azcli"],
    aliases: ["Azure CLI", "azcli"],
    loader: () => new Promise((resolve, reject) => require(["../azcli-DlDxj3-g"], resolve, reject))
  });
  registerLanguage({
    id: "bat",
    extensions: [".bat", ".cmd"],
    aliases: ["Batch", "bat"],
    loader: () => new Promise((resolve, reject) => require(["../bat-gO9qKzUo"], resolve, reject))
  });
  registerLanguage({
    id: "bicep",
    extensions: [".bicep"],
    aliases: ["Bicep"],
    loader: () => new Promise((resolve, reject) => require(["../bicep-XOQLqtWX"], resolve, reject))
  });
  registerLanguage({
    id: "cameligo",
    extensions: [".mligo"],
    aliases: ["Cameligo"],
    loader: () => new Promise((resolve, reject) => require(["../cameligo-DCtn5844"], resolve, reject))
  });
  registerLanguage({
    id: "clojure",
    extensions: [".clj", ".cljs", ".cljc", ".edn"],
    aliases: ["clojure", "Clojure"],
    loader: () => new Promise((resolve, reject) => require(["../clojure-DyYtgmYv"], resolve, reject))
  });
  registerLanguage({
    id: "coffeescript",
    extensions: [".coffee"],
    aliases: ["CoffeeScript", "coffeescript", "coffee"],
    mimetypes: ["text/x-coffeescript", "text/coffeescript"],
    loader: () => new Promise((resolve, reject) => require(["../coffee-C8bOs6Uz"], resolve, reject))
  });
  registerLanguage({
    id: "c",
    extensions: [".c", ".h"],
    aliases: ["C", "c"],
    loader: () => new Promise((resolve, reject) => require(["../cpp-9dJI961u"], resolve, reject))
  });
  registerLanguage({
    id: "cpp",
    extensions: [".cpp", ".cc", ".cxx", ".hpp", ".hh", ".hxx"],
    aliases: ["C++", "Cpp", "cpp"],
    loader: () => new Promise((resolve, reject) => require(["../cpp-9dJI961u"], resolve, reject))
  });
  registerLanguage({
    id: "csharp",
    extensions: [".cs", ".csx", ".cake"],
    aliases: ["C#", "csharp"],
    loader: () => new Promise((resolve, reject) => require(["../csharp-NZNtYXm3"], resolve, reject))
  });
  registerLanguage({
    id: "csp",
    extensions: [".csp"],
    aliases: ["CSP", "csp"],
    loader: () => new Promise((resolve, reject) => require(["../csp-CtMdzNMY"], resolve, reject))
  });
  registerLanguage({
    id: "css",
    extensions: [".css"],
    aliases: ["CSS", "css"],
    mimetypes: ["text/css"],
    loader: () => new Promise((resolve, reject) => require(["../css-t68wsr0f"], resolve, reject))
  });
  registerLanguage({
    id: "cypher",
    extensions: [".cypher", ".cyp"],
    aliases: ["Cypher", "OpenCypher"],
    loader: () => new Promise((resolve, reject) => require(["../cypher-DyfRGA23"], resolve, reject))
  });
  registerLanguage({
    id: "dart",
    extensions: [".dart"],
    aliases: ["Dart", "dart"],
    mimetypes: ["text/x-dart-source", "text/x-dart"],
    loader: () => new Promise((resolve, reject) => require(["../dart-eN3E5CF0"], resolve, reject))
  });
  registerLanguage({
    id: "dockerfile",
    extensions: [".dockerfile"],
    filenames: ["Dockerfile"],
    aliases: ["Dockerfile"],
    loader: () => new Promise((resolve, reject) => require(["../dockerfile-A7JJbAuF"], resolve, reject))
  });
  registerLanguage({
    id: "ecl",
    extensions: [".ecl"],
    aliases: ["ECL", "Ecl", "ecl"],
    loader: () => new Promise((resolve, reject) => require(["../ecl-BJgqfLSq"], resolve, reject))
  });
  registerLanguage({
    id: "elixir",
    extensions: [".ex", ".exs"],
    aliases: ["Elixir", "elixir", "ex"],
    loader: () => new Promise((resolve, reject) => require(["../elixir-BxvNo5o6"], resolve, reject))
  });
  registerLanguage({
    id: "flow9",
    extensions: [".flow"],
    aliases: ["Flow9", "Flow", "flow9", "flow"],
    loader: () => new Promise((resolve, reject) => require(["../flow9-BNnUn-_8"], resolve, reject))
  });
  registerLanguage({
    id: "fsharp",
    extensions: [".fs", ".fsi", ".ml", ".mli", ".fsx", ".fsscript"],
    aliases: ["F#", "FSharp", "fsharp"],
    loader: () => new Promise((resolve, reject) => require(["../fsharp-DHdXPb1O"], resolve, reject))
  });
  registerLanguage({
    id: "freemarker2",
    extensions: [".ftl", ".ftlh", ".ftlx"],
    aliases: ["FreeMarker2", "Apache FreeMarker2"],
    loader: () => {
      return new Promise((resolve, reject) => require(["../freemarker2-CQSuO4BX"], resolve, reject)).then((m) => m.TagAutoInterpolationDollar);
    }
  });
  registerLanguage({
    id: "freemarker2.tag-angle.interpolation-dollar",
    aliases: ["FreeMarker2 (Angle/Dollar)", "Apache FreeMarker2 (Angle/Dollar)"],
    loader: () => {
      return new Promise((resolve, reject) => require(["../freemarker2-CQSuO4BX"], resolve, reject)).then((m) => m.TagAngleInterpolationDollar);
    }
  });
  registerLanguage({
    id: "freemarker2.tag-bracket.interpolation-dollar",
    aliases: ["FreeMarker2 (Bracket/Dollar)", "Apache FreeMarker2 (Bracket/Dollar)"],
    loader: () => {
      return new Promise((resolve, reject) => require(["../freemarker2-CQSuO4BX"], resolve, reject)).then((m) => m.TagBracketInterpolationDollar);
    }
  });
  registerLanguage({
    id: "freemarker2.tag-angle.interpolation-bracket",
    aliases: ["FreeMarker2 (Angle/Bracket)", "Apache FreeMarker2 (Angle/Bracket)"],
    loader: () => {
      return new Promise((resolve, reject) => require(["../freemarker2-CQSuO4BX"], resolve, reject)).then((m) => m.TagAngleInterpolationBracket);
    }
  });
  registerLanguage({
    id: "freemarker2.tag-bracket.interpolation-bracket",
    aliases: ["FreeMarker2 (Bracket/Bracket)", "Apache FreeMarker2 (Bracket/Bracket)"],
    loader: () => {
      return new Promise((resolve, reject) => require(["../freemarker2-CQSuO4BX"], resolve, reject)).then((m) => m.TagBracketInterpolationBracket);
    }
  });
  registerLanguage({
    id: "freemarker2.tag-auto.interpolation-dollar",
    aliases: ["FreeMarker2 (Auto/Dollar)", "Apache FreeMarker2 (Auto/Dollar)"],
    loader: () => {
      return new Promise((resolve, reject) => require(["../freemarker2-CQSuO4BX"], resolve, reject)).then((m) => m.TagAutoInterpolationDollar);
    }
  });
  registerLanguage({
    id: "freemarker2.tag-auto.interpolation-bracket",
    aliases: ["FreeMarker2 (Auto/Bracket)", "Apache FreeMarker2 (Auto/Bracket)"],
    loader: () => {
      return new Promise((resolve, reject) => require(["../freemarker2-CQSuO4BX"], resolve, reject)).then((m) => m.TagAutoInterpolationBracket);
    }
  });
  registerLanguage({
    id: "go",
    extensions: [".go"],
    aliases: ["Go"],
    loader: () => new Promise((resolve, reject) => require(["../go-DcS9_gMe"], resolve, reject))
  });
  registerLanguage({
    id: "graphql",
    extensions: [".graphql", ".gql"],
    aliases: ["GraphQL", "graphql", "gql"],
    mimetypes: ["application/graphql"],
    loader: () => new Promise((resolve, reject) => require(["../graphql-CHzgmf8E"], resolve, reject))
  });
  registerLanguage({
    id: "handlebars",
    extensions: [".handlebars", ".hbs"],
    aliases: ["Handlebars", "handlebars", "hbs"],
    mimetypes: ["text/x-handlebars-template"],
    loader: () => new Promise((resolve, reject) => require(["../handlebars-C_OonjWa"], resolve, reject))
  });
  registerLanguage({
    id: "hcl",
    extensions: [".tf", ".tfvars", ".hcl"],
    aliases: ["Terraform", "tf", "HCL", "hcl"],
    loader: () => new Promise((resolve, reject) => require(["../hcl-ChD4paVH"], resolve, reject))
  });
  registerLanguage({
    id: "html",
    extensions: [".html", ".htm", ".shtml", ".xhtml", ".mdoc", ".jsp", ".asp", ".aspx", ".jshtm"],
    aliases: ["HTML", "htm", "html", "xhtml"],
    mimetypes: ["text/html", "text/x-jshtm", "text/template", "text/ng-template"],
    loader: () => new Promise((resolve, reject) => require(["../html-Bey8D4EY"], resolve, reject))
  });
  registerLanguage({
    id: "ini",
    extensions: [".ini", ".properties", ".gitconfig"],
    filenames: ["config", ".gitattributes", ".gitconfig", ".editorconfig"],
    aliases: ["Ini", "ini"],
    loader: () => new Promise((resolve, reject) => require(["../ini-CdZgSnLI"], resolve, reject))
  });
  registerLanguage({
    id: "java",
    extensions: [".java", ".jav"],
    aliases: ["Java", "java"],
    mimetypes: ["text/x-java-source", "text/x-java"],
    loader: () => new Promise((resolve, reject) => require(["../java-vwwkdu2k"], resolve, reject))
  });
  registerLanguage({
    id: "javascript",
    extensions: [".js", ".es6", ".jsx", ".mjs", ".cjs"],
    firstLine: "^#!.*\\bnode",
    filenames: ["jakefile"],
    aliases: ["JavaScript", "javascript", "js"],
    mimetypes: ["text/javascript"],
    loader: () => new Promise((resolve, reject) => require(["../javascript-BgQ1b_eP"], resolve, reject))
  });
  registerLanguage({
    id: "julia",
    extensions: [".jl"],
    aliases: ["julia", "Julia"],
    loader: () => new Promise((resolve, reject) => require(["../julia-DrYN6c6i"], resolve, reject))
  });
  registerLanguage({
    id: "kotlin",
    extensions: [".kt", ".kts"],
    aliases: ["Kotlin", "kotlin"],
    mimetypes: ["text/x-kotlin-source", "text/x-kotlin"],
    loader: () => new Promise((resolve, reject) => require(["../kotlin-CSDqhv6t"], resolve, reject))
  });
  registerLanguage({
    id: "less",
    extensions: [".less"],
    aliases: ["Less", "less"],
    mimetypes: ["text/x-less", "text/less"],
    loader: () => new Promise((resolve, reject) => require(["../less-B7KFvseP"], resolve, reject))
  });
  registerLanguage({
    id: "lexon",
    extensions: [".lex"],
    aliases: ["Lexon"],
    loader: () => new Promise((resolve, reject) => require(["../lexon-BmRNXYWC"], resolve, reject))
  });
  registerLanguage({
    id: "lua",
    extensions: [".lua"],
    aliases: ["Lua", "lua"],
    loader: () => new Promise((resolve, reject) => require(["../lua-BYAO5Img"], resolve, reject))
  });
  registerLanguage({
    id: "liquid",
    extensions: [".liquid", ".html.liquid"],
    aliases: ["Liquid", "liquid"],
    mimetypes: ["application/liquid"],
    loader: () => new Promise((resolve, reject) => require(["../liquid-Limfe9fx"], resolve, reject))
  });
  registerLanguage({
    id: "m3",
    extensions: [".m3", ".i3", ".mg", ".ig"],
    aliases: ["Modula-3", "Modula3", "modula3", "m3"],
    loader: () => new Promise((resolve, reject) => require(["../m3-B1KqSpyY"], resolve, reject))
  });
  registerLanguage({
    id: "markdown",
    extensions: [".md", ".markdown", ".mdown", ".mkdn", ".mkd", ".mdwn", ".mdtxt", ".mdtext"],
    aliases: ["Markdown", "markdown"],
    loader: () => new Promise((resolve, reject) => require(["../markdown-BXo7NBdp"], resolve, reject))
  });
  registerLanguage({
    id: "mdx",
    extensions: [".mdx"],
    aliases: ["MDX", "mdx"],
    loader: () => new Promise((resolve, reject) => require(["../mdx-DDjyMvBD"], resolve, reject))
  });
  registerLanguage({
    id: "mips",
    extensions: [".s"],
    aliases: ["MIPS", "MIPS-V"],
    mimetypes: ["text/x-mips", "text/mips", "text/plaintext"],
    loader: () => new Promise((resolve, reject) => require(["../mips-zX62smW0"], resolve, reject))
  });
  registerLanguage({
    id: "msdax",
    extensions: [".dax", ".msdax"],
    aliases: ["DAX", "MSDAX"],
    loader: () => new Promise((resolve, reject) => require(["../msdax-MzEb-8sD"], resolve, reject))
  });
  registerLanguage({
    id: "mysql",
    extensions: [],
    aliases: ["MySQL", "mysql"],
    loader: () => new Promise((resolve, reject) => require(["../mysql-Drs0JCLT"], resolve, reject))
  });
  registerLanguage({
    id: "objective-c",
    extensions: [".m"],
    aliases: ["Objective-C"],
    loader: () => new Promise((resolve, reject) => require(["../objective-c-DZzj24DI"], resolve, reject))
  });
  registerLanguage({
    id: "pascal",
    extensions: [".pas", ".p", ".pp"],
    aliases: ["Pascal", "pas"],
    mimetypes: ["text/x-pascal-source", "text/x-pascal"],
    loader: () => new Promise((resolve, reject) => require(["../pascal-Ek4lERtt"], resolve, reject))
  });
  registerLanguage({
    id: "pascaligo",
    extensions: [".ligo"],
    aliases: ["Pascaligo", "ligo"],
    loader: () => new Promise((resolve, reject) => require(["../pascaligo-BhBiNdI2"], resolve, reject))
  });
  registerLanguage({
    id: "perl",
    extensions: [".pl", ".pm"],
    aliases: ["Perl", "pl"],
    loader: () => new Promise((resolve, reject) => require(["../perl-BZM3Cl3T"], resolve, reject))
  });
  registerLanguage({
    id: "pgsql",
    extensions: [],
    aliases: ["PostgreSQL", "postgres", "pg", "postgre"],
    loader: () => new Promise((resolve, reject) => require(["../pgsql-BAYS0xjf"], resolve, reject))
  });
  registerLanguage({
    id: "php",
    extensions: [".php", ".php4", ".php5", ".phtml", ".ctp"],
    aliases: ["PHP", "php"],
    mimetypes: ["application/x-php"],
    loader: () => new Promise((resolve, reject) => require(["../php-DK3ktPH8"], resolve, reject))
  });
  registerLanguage({
    id: "pla",
    extensions: [".pla"],
    loader: () => new Promise((resolve, reject) => require(["../pla-DbBZgOrT"], resolve, reject))
  });
  registerLanguage({
    id: "postiats",
    extensions: [".dats", ".sats", ".hats"],
    aliases: ["ATS", "ATS/Postiats"],
    loader: () => new Promise((resolve, reject) => require(["../postiats-OtZm4COL"], resolve, reject))
  });
  registerLanguage({
    id: "powerquery",
    extensions: [".pq", ".pqm"],
    aliases: ["PQ", "M", "Power Query", "Power Query M"],
    loader: () => new Promise((resolve, reject) => require(["../powerquery-Du80-tps"], resolve, reject))
  });
  registerLanguage({
    id: "powershell",
    extensions: [".ps1", ".psm1", ".psd1"],
    aliases: ["PowerShell", "powershell", "ps", "ps1"],
    loader: () => new Promise((resolve, reject) => require(["../powershell-mk7ECzLJ"], resolve, reject))
  });
  registerLanguage({
    id: "proto",
    extensions: [".proto"],
    aliases: ["protobuf", "Protocol Buffers"],
    loader: () => new Promise((resolve, reject) => require(["../protobuf-Bn1ftnRe"], resolve, reject))
  });
  registerLanguage({
    id: "pug",
    extensions: [".jade", ".pug"],
    aliases: ["Pug", "Jade", "jade"],
    loader: () => new Promise((resolve, reject) => require(["../pug-BIApPNjT"], resolve, reject))
  });
  registerLanguage({
    id: "python",
    extensions: [".py", ".rpy", ".pyw", ".cpy", ".gyp", ".gypi"],
    aliases: ["Python", "py"],
    firstLine: "^#!/.*\\bpython[0-9.-]*\\b",
    loader: () => new Promise((resolve, reject) => require(["../python-CzSOMEzg"], resolve, reject))
  });
  registerLanguage({
    id: "qsharp",
    extensions: [".qs"],
    aliases: ["Q#", "qsharp"],
    loader: () => new Promise((resolve, reject) => require(["../qsharp-BzyhV8V4"], resolve, reject))
  });
  registerLanguage({
    id: "r",
    extensions: [".r", ".rhistory", ".rmd", ".rprofile", ".rt"],
    aliases: ["R", "r"],
    loader: () => new Promise((resolve, reject) => require(["../r-BZ_VXAR1"], resolve, reject))
  });
  registerLanguage({
    id: "razor",
    extensions: [".cshtml"],
    aliases: ["Razor", "razor"],
    mimetypes: ["text/x-cshtml"],
    loader: () => new Promise((resolve, reject) => require(["../razor-BIG_AFb9"], resolve, reject))
  });
  registerLanguage({
    id: "redis",
    extensions: [".redis"],
    aliases: ["redis"],
    loader: () => new Promise((resolve, reject) => require(["../redis-BVpHZsxd"], resolve, reject))
  });
  registerLanguage({
    id: "redshift",
    extensions: [],
    aliases: ["Redshift", "redshift"],
    loader: () => new Promise((resolve, reject) => require(["../redshift-DMeYiY_v"], resolve, reject))
  });
  registerLanguage({
    id: "restructuredtext",
    extensions: [".rst"],
    aliases: ["reStructuredText", "restructuredtext"],
    loader: () => new Promise((resolve, reject) => require(["../restructuredtext-CmsqpaZy"], resolve, reject))
  });
  registerLanguage({
    id: "ruby",
    extensions: [".rb", ".rbx", ".rjs", ".gemspec", ".pp"],
    filenames: ["rakefile", "Gemfile"],
    aliases: ["Ruby", "rb"],
    loader: () => new Promise((resolve, reject) => require(["../ruby-qQzGPz_6"], resolve, reject))
  });
  registerLanguage({
    id: "rust",
    extensions: [".rs", ".rlib"],
    aliases: ["Rust", "rust"],
    loader: () => new Promise((resolve, reject) => require(["../rust-DIvkf86i"], resolve, reject))
  });
  registerLanguage({
    id: "sb",
    extensions: [".sb"],
    aliases: ["Small Basic", "sb"],
    loader: () => new Promise((resolve, reject) => require(["../sb-DUCWDbCb"], resolve, reject))
  });
  registerLanguage({
    id: "scala",
    extensions: [".scala", ".sc", ".sbt"],
    aliases: ["Scala", "scala", "SBT", "Sbt", "sbt", "Dotty", "dotty"],
    mimetypes: ["text/x-scala-source", "text/x-scala", "text/x-sbt", "text/x-dotty"],
    loader: () => new Promise((resolve, reject) => require(["../scala-Cs4aXuOD"], resolve, reject))
  });
  registerLanguage({
    id: "scheme",
    extensions: [".scm", ".ss", ".sch", ".rkt"],
    aliases: ["scheme", "Scheme"],
    loader: () => new Promise((resolve, reject) => require(["../scheme-DM9P8uKD"], resolve, reject))
  });
  registerLanguage({
    id: "scss",
    extensions: [".scss"],
    aliases: ["Sass", "sass", "scss"],
    mimetypes: ["text/x-scss", "text/scss"],
    loader: () => new Promise((resolve, reject) => require(["../scss-DijLV5ju"], resolve, reject))
  });
  registerLanguage({
    id: "shell",
    extensions: [".sh", ".bash"],
    aliases: ["Shell", "sh"],
    loader: () => new Promise((resolve, reject) => require(["../shell-BmIjpZz5"], resolve, reject))
  });
  registerLanguage({
    id: "sol",
    extensions: [".sol"],
    aliases: ["sol", "solidity", "Solidity"],
    loader: () => new Promise((resolve, reject) => require(["../solidity-ClNCm0U5"], resolve, reject))
  });
  registerLanguage({
    id: "aes",
    extensions: [".aes"],
    aliases: ["aes", "sophia", "Sophia"],
    loader: () => new Promise((resolve, reject) => require(["../sophia-DRm4eves"], resolve, reject))
  });
  registerLanguage({
    id: "sparql",
    extensions: [".rq"],
    aliases: ["sparql", "SPARQL"],
    loader: () => new Promise((resolve, reject) => require(["../sparql-O5ONewYs"], resolve, reject))
  });
  registerLanguage({
    id: "sql",
    extensions: [".sql"],
    aliases: ["SQL"],
    loader: () => new Promise((resolve, reject) => require(["../sql-RAEyXdQG"], resolve, reject))
  });
  registerLanguage({
    id: "st",
    extensions: [".st", ".iecst", ".iecplc", ".lc3lib", ".TcPOU", ".TcDUT", ".TcGVL", ".TcIO"],
    aliases: ["StructuredText", "scl", "stl"],
    loader: () => new Promise((resolve, reject) => require(["../st-UObc-eRR"], resolve, reject))
  });
  registerLanguage({
    id: "swift",
    aliases: ["Swift", "swift"],
    extensions: [".swift"],
    mimetypes: ["text/swift"],
    loader: () => new Promise((resolve, reject) => require(["../swift-CXsb7aR5"], resolve, reject))
  });
  registerLanguage({
    id: "systemverilog",
    extensions: [".sv", ".svh"],
    aliases: ["SV", "sv", "SystemVerilog", "systemverilog"],
    loader: () => new Promise((resolve, reject) => require(["../systemverilog-D8uKG36_"], resolve, reject))
  });
  registerLanguage({
    id: "verilog",
    extensions: [".v", ".vh"],
    aliases: ["V", "v", "Verilog", "verilog"],
    loader: () => new Promise((resolve, reject) => require(["../systemverilog-D8uKG36_"], resolve, reject))
  });
  registerLanguage({
    id: "tcl",
    extensions: [".tcl"],
    aliases: ["tcl", "Tcl", "tcltk", "TclTk", "tcl/tk", "Tcl/Tk"],
    loader: () => new Promise((resolve, reject) => require(["../tcl-BiHOeboY"], resolve, reject))
  });
  registerLanguage({
    id: "twig",
    extensions: [".twig"],
    aliases: ["Twig", "twig"],
    mimetypes: ["text/x-twig"],
    loader: () => new Promise((resolve, reject) => require(["../twig-DDbyWOW2"], resolve, reject))
  });
  registerLanguage({
    id: "typescript",
    extensions: [".ts", ".tsx", ".cts", ".mts"],
    aliases: ["TypeScript", "ts", "typescript"],
    mimetypes: ["text/typescript"],
    loader: () => {
      return new Promise((resolve, reject) => require(["../typescript-0SV7N1Xc"], resolve, reject));
    }
  });
  registerLanguage({
    id: "typespec",
    extensions: [".tsp"],
    aliases: ["TypeSpec"],
    loader: () => new Promise((resolve, reject) => require(["../typespec-BoPQuPjQ"], resolve, reject))
  });
  registerLanguage({
    id: "vb",
    extensions: [".vb"],
    aliases: ["Visual Basic", "vb"],
    loader: () => new Promise((resolve, reject) => require(["../vb-Dj0rva7R"], resolve, reject))
  });
  registerLanguage({
    id: "wgsl",
    extensions: [".wgsl"],
    aliases: ["WebGPU Shading Language", "WGSL", "wgsl"],
    loader: () => new Promise((resolve, reject) => require(["../wgsl-C6G-1Rhr"], resolve, reject))
  });
  registerLanguage({
    id: "xml",
    extensions: [
      ".xml",
      ".xsd",
      ".dtd",
      ".ascx",
      ".csproj",
      ".config",
      ".props",
      ".targets",
      ".wxi",
      ".wxl",
      ".wxs",
      ".xaml",
      ".svg",
      ".svgz",
      ".opf",
      ".xslt",
      ".xsl"
    ],
    firstLine: "(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",
    aliases: ["XML", "xml"],
    mimetypes: ["text/xml", "application/xml", "application/xaml+xml", "application/xml-dtd"],
    loader: () => new Promise((resolve, reject) => require(["../xml-fSKCG6nN"], resolve, reject))
  });
  registerLanguage({
    id: "yaml",
    extensions: [".yaml", ".yml"],
    aliases: ["YAML", "yaml", "YML", "yml"],
    mimetypes: ["application/x-yaml", "text/x-yaml"],
    loader: () => new Promise((resolve, reject) => require(["../yaml-Dx1TJ9RY"], resolve, reject))
  });
}));
