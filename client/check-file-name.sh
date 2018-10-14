#!/bin/bash -el
ignoreFile="./.gitignore"
dirsToExclude=""
filesToExclude=""

while IFS= read -r line
do
    line=$(echo "${line}" | xargs)
    if [ [${line:0:1}] != [\#] ]
    then
        if [ ["$line"] != [""] ]
        then
            if [[ -d $line ]]; then
                if [ ["$dirsToExclude"] != [""] ]
                then
                    dirsToExclude+=" -o "
                fi
                dirsToExclude+="-path ${line}"
            elif [[ -f $line ]]; then
                if [ ["$filesToExclude"] != [""] ]
                then
                    filesToExclude+=" -o "
                fi
                filesToExclude+="-path ${line}"
            fi
        fi
    fi
done <$ignoreFile

if [ ["$dirsToExclude"] != [""] ]; then
    dirsToExclude=" -type d \\( ${dirsToExclude} \\) -prune -o "
fi
if [ ["$filesToExclude"] != [""] ]; then
    filesToExclude=" -type f \\( ${filesToExclude} \\) -prune -o "
fi

command="find . ${dirsToExclude} ${filesToExclude} -name '*[A-Z]*' | wc -l"

echo $command

no="$(eval $command)"
if (( $no > 0 )); then
    echo "${no} file(s) are in upper case. Please rename files to lower case."
    exit 1
fi
exit 0