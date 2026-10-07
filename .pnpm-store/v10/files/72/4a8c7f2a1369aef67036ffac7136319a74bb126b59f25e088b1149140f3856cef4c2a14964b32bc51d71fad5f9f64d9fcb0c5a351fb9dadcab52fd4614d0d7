cmake_minimum_required(VERSION 3.25)

find_package(cmake-bare REQUIRED PATHS node_modules/cmake-bare)

project(bare_os C)

add_bare_module(bare_os)

target_sources(
  ${bare_os}
  PRIVATE
    binding.c
)
