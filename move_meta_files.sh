#!/bin/bash

# Script to move and rename meta.json files in curriculum/challenges/_meta

# Set the base directory
BASE_DIR="/home/oliver/Code/fcc/freeCodeCamp/curriculum/challenges/_meta"
TARGET_DIR="/home/oliver/Code/fcc/freeCodeCamp/curriculum/structure/blocks"

# Check if the base directory exists
if [ ! -d "$BASE_DIR" ]; then
    echo "Error: Directory $BASE_DIR does not exist"
    exit 1
fi

mkdir -p "$TARGET_DIR"

# Find all directories in the _meta folder
for dir in "$BASE_DIR"/*/ ; do
    # Check if it's actually a directory
    if [ -d "$dir" ]; then
        # Get the directory name without the path
        dir_name=$(basename "$dir")

        # Path to the meta.json file
        meta_file="${dir}meta.json"

        # New path for the renamed file
        new_file="$TARGET_DIR/$dir_name.json"

        # Check if meta.json exists in this directory
        if [ -f "$meta_file" ]; then
            echo "Moving $meta_file to $new_file"
            mv "$meta_file" "$new_file"

            # Remove the now-empty directory
            if [ -z "$(ls -A "$dir")" ]; then
                echo "Removing empty directory: $dir"
                rmdir "$dir"
            else
                echo "Warning: Directory $dir is not empty after moving meta.json"
            fi
        else
            echo "Warning: meta.json not found in $dir"
        fi
    fi
done

echo "Script completed!"
