{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_24
    pkgs.pnpm
    pkgs.openssl
    pkgs.prisma-engines_6
  ];

  shellHook = ''
    export PRISMA_QUERY_ENGINE_LIBRARY="${pkgs.prisma-engines_6}/lib/libquery_engine.node"
    export PRISMA_QUERY_ENGINE_BINARY="${pkgs.prisma-engines_6}/bin/query-engine"
    export PRISMA_SCHEMA_ENGINE_BINARY="${pkgs.prisma-engines_6}/bin/schema-engine"
    export PRISMA_FMT_BINARY="${pkgs.prisma-engines_6}/bin/prisma-fmt"
  '';
}
