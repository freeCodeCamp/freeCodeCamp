cmake_minimum_required(VERSION 4.0)

find_package(cmake-bare REQUIRED PATHS node_modules/cmake-bare)

project(bare_fs C)

add_bare_module(bare_fs)

target_sources(
  ${bare_fs}
  PRIVATE
    binding.c
)
