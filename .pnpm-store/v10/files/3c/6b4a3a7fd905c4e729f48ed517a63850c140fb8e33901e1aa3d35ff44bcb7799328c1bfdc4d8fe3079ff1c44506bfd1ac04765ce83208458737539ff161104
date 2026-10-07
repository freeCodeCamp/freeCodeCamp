cmake_minimum_required(VERSION 4.0)

find_package(cmake-bare REQUIRED PATHS node_modules/cmake-bare)
find_package(cmake-fetch REQUIRED PATHS node_modules/cmake-fetch)

project(bare_url C)

fetch_package("github:holepunchto/libutf#6b1a36f")
fetch_package("github:holepunchto/liburl#03f1488")

add_bare_module(bare_url)

target_sources(
  ${bare_url}
  PRIVATE
    binding.c
)

target_link_libraries(
  ${bare_url}
  PRIVATE
    $<TARGET_OBJECTS:utf>
    $<TARGET_OBJECTS:url>
  PUBLIC
    utf
    url
)
