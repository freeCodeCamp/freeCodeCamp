#!/bin/bash
VER=$(git tag -l v[0-9].[0-9]*.[0-9]* | tail -n 1)
echo "# ($(date +%Y-%m-%d))"
echo
git log $VER...HEAD --no-merges --topo-order --format=' * %s (%an)'
echo
echo "# $VER"
