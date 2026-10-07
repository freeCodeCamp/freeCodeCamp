{
  inputs = {
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils }:
    utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages."${system}";
      in rec {
       devShell = pkgs.mkShell {
          nativeBuildInputs = with pkgs; [
            yarn
            nodejs-14_x
            nodePackages.typescript-language-server
            nodePackages.eslint
          ];
        };
      });
}
