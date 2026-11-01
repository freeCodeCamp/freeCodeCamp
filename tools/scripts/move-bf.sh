#!/bin/bash

# Define the source file
source_file="curriculum/challenges/english/22-rosetta-code/rosetta-code-challenges/execute-brain.md"

# Define the destination directory
destination_dir="curriculum/challenges"

# Loop through all directories except _meta and english. Null-delimited so
# directory names with spaces are handled correctly.
while IFS= read -r -d '' dir; do
    # Copy the file to each directory. A missing target folder fails loudly
    # rather than creating a new directory tree in that language.
    cp "./$source_file" "$dir/22-rosetta-code/rosetta-code-challenges/"
done < <(find "$destination_dir" -mindepth 1 -maxdepth 1 -type d ! -name '_meta' ! -name 'english' -print0)
