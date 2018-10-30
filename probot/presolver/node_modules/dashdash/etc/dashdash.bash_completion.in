#!/bin/bash
#
# Bash completion generated for '{{name}}' at {{date}}.
#
# The original template lives here:
# https://github.com/trentm/node-dashdash/blob/master/etc/dashdash.bash_completion.in
#

#
# Copyright 2016 Trent Mick
# Copyright 2016 Joyent, Inc.
#
#
# A generic Bash completion driver script.
#
# This is meant to provide a re-usable chunk of Bash to use for
# "etc/bash_completion.d/" files for individual tools. Only the "Configuration"
# section with tool-specific info need differ. Features:
#
# - support for short and long opts
# - support for knowing which options take arguments
# - support for subcommands (e.g. 'git log <TAB>' to show just options for the
#   log subcommand)
# - does the right thing with "--" to stop options
# - custom optarg and arg types for custom completions
# - (TODO) support for shells other than Bash (tcsh, zsh, fish?, etc.)
#
#
# Examples/design:
#
# 1. Bash "default" completion. By default Bash's 'complete -o default' is
#    enabled. That means when there are no completions (e.g. if no opts match
#    the current word), then you'll get Bash's default completion. Most notably
#    that means you get filename completion. E.g.:
#       $ tool ./<TAB>
#       $ tool READ<TAB>
#
# 2. all opts and subcmds:
#       $ tool <TAB>
#       $ tool -v <TAB>     # assuming '-v' doesn't take an arg
#       $ tool -<TAB>       # matching opts
#       $ git lo<TAB>       # matching subcmds
#
#    Long opt completions are given *without* the '=', i.e. we prefer space
#    separated because that's easier for good completions.
#
# 3. long opt arg with '='
#       $ tool --file=<TAB>
#       $ tool --file=./d<TAB>
#    We maintain the "--file=" prefix. Limitation: With the attached prefix
#    the 'complete -o filenames' doesn't know to do dirname '/' suffixing. Meh.
#
# 4. envvars:
#       $ tool $<TAB>
#       $ tool $P<TAB>
#    Limitation: Currently only getting exported vars, so we miss "PS1" and
#    others.
#
# 5. Defer to other completion in a subshell:
#       $ tool --file $(cat ./<TAB>
#    We get this from 'complete -o default ...'.
#
# 6. Custom completion types from a provided bash function.
#       $ tool --profile <TAB>        # complete available "profiles"
#
#
# Dev Notes:
# - compgen notes, from http://unix.stackexchange.com/questions/151118/understand-compgen-builtin-command
# - https://www.gnu.org/software/bash/manual/html_node/Programmable-Completion-Builtins.html
#


# Debugging this completion:
#   1. Uncomment the "_{{name}}_log_file=..." line.
#   2. 'tail -f /var/tmp/dashdash-completion.log' in one terminal.
#   3. Re-source this bash completion file.
#_{{name}}_log=/var/tmp/dashdash-completion.log

function _{{name}}_completer {

    # ---- cmd definition

    {{spec}}


    # ---- locals

    declare -a argv


    # ---- support functions

    function trace {
        [[ -n "$_{{name}}_log" ]] && echo "$*" >&2
    }

    function _dashdash_complete {
        local idx context
        idx=$1
        context=$2

        local shortopts longopts optargs subcmds allsubcmds argtypes
        shortopts="$(eval "echo \${cmd${context}_shortopts}")"
        longopts="$(eval "echo \${cmd${context}_longopts}")"
        optargs="$(eval "echo \${cmd${context}_optargs}")"
        subcmds="$(eval "echo \${cmd${context}_subcmds}")"
        allsubcmds="$(eval "echo \${cmd${context}_allsubcmds}")"
        IFS=', ' read -r -a argtypes <<< "$(eval "echo \${cmd${context}_argtypes}")"

        trace ""
        trace "_dashdash_complete(idx=$idx, context=$context)"
        trace "  shortopts: $shortopts"
        trace "  longopts: $longopts"
        trace "  optargs: $optargs"
        trace "  subcmds: $subcmds"
        trace "  allsubcmds: $allsubcmds"

        # Get 'state' of option parsing at this COMP_POINT.
        # Copying "dashdash.js#parse()" behaviour here.
        local state=
        local nargs=0
        local i=$idx
        local argtype
        local optname
        local prefix
        local word
        local dashdashseen=
        while [[ $i -lt $len && $i -le $COMP_CWORD ]]; do
            argtype=
            optname=
            prefix=
            word=

            arg=${argv[$i]}
            trace "  consider argv[$i]: '$arg'"

            if [[ "$arg" == "--" && $i -lt $COMP_CWORD ]]; then
                trace "    dashdash seen"
                dashdashseen=yes
                state=arg
                word=$arg
            elif [[ -z "$dashdashseen" && "${arg:0:2}" == "--" ]]; then
                arg=${arg:2}
                if [[ "$arg" == *"="* ]]; then
                    optname=${arg%%=*}
                    val=${arg##*=}
                    trace "    long opt: optname='$optname' val='$val'"
                    state=arg
                    argtype=$(echo "$optargs" | awk -F "-$optname=" '{print $2}' | cut -d' ' -f1)
                    word=$val
                    prefix="--$optname="
                else
                    optname=$arg
                    val=
                    trace "    long opt: optname='$optname'"
                    state=longopt
                    word=--$optname

                    if [[ "$optargs" == *"-$optname="* && $i -lt $COMP_CWORD ]]; then
                        i=$(( $i + 1 ))
                        state=arg
                        argtype=$(echo "$optargs" | awk -F "-$optname=" '{print $2}' | cut -d' ' -f1)
                        word=${argv[$i]}
                        trace "    takes arg (consume argv[$i], word='$word')"
                    fi
                fi
            elif [[ -z "$dashdashseen" && "${arg:0:1}" == "-" ]]; then
                trace "    short opt group"
                state=shortopt
                word=$arg

                local j=1
                while [[ $j -lt ${#arg} ]]; do
                    optname=${arg:$j:1}
                    trace "    consider index $j: optname '$optname'"

                    if [[ "$optargs" == *"-$optname="* ]]; then
                        argtype=$(echo "$optargs" | awk -F "-$optname=" '{print $2}' | cut -d' ' -f1)
                        if [[ $(( $j + 1 )) -lt ${#arg} ]]; then
                            state=arg
                            word=${arg:$(( $j + 1 ))}
                            trace "      takes arg (rest of this arg, word='$word', argtype='$argtype')"
                        elif [[ $i -lt $COMP_CWORD ]]; then
                            state=arg
                            i=$(( $i + 1 ))
                            word=${argv[$i]}
                            trace "    takes arg (word='$word', argtype='$argtype')"
                        fi
                        break
                    fi

                    j=$(( $j + 1 ))
                done
            elif [[ $i -lt $COMP_CWORD && -n "$arg" ]] && $(echo "$allsubcmds" | grep -w "$arg" >/dev/null); then
                trace "    complete subcmd: recurse _dashdash_complete"
                _dashdash_complete $(( $i + 1 )) "${context}__${arg/-/_}"
                return
            else
                trace "    not an opt or a complete subcmd"
                state=arg
                word=$arg
                nargs=$(( $nargs + 1 ))
                if [[ ${#argtypes[@]} -gt 0 ]]; then
                    argtype="${argtypes[$(( $nargs - 1 ))]}"
                    if [[ -z "$argtype" ]]; then
                        # If we have more args than argtypes, we use the
                        # last type.
                        argtype="${argtypes[@]: -1:1}"
                    fi
                fi
            fi

            trace "    state=$state prefix='$prefix' word='$word'"
            i=$(( $i + 1 ))
        done

        trace "  parsed: state=$state optname='$optname' argtype='$argtype' prefix='$prefix' word='$word' dashdashseen=$dashdashseen"
        local compgen_opts=
        if [[ -n "$prefix" ]]; then
            compgen_opts="$compgen_opts -P $prefix"
        fi

        case $state in
        shortopt)
            compgen $compgen_opts -W "$shortopts $longopts" -- "$word"
            ;;
        longopt)
            compgen $compgen_opts -W "$longopts" -- "$word"
            ;;
        arg)
            # If we don't know what completion to do, then emit nothing. We
            # expect that we are running with:
            #       complete -o default ...
            # where "default" means: "Use Readline's default completion if
            # the compspec generates no matches." This gives us the good filename
            # completion, completion in subshells/backticks.
            #
            # We cannot support an argtype="directory" because
            #       compgen -S '/' -A directory -- "$word"
            # doesn't give a satisfying result. It doesn't stop at the trailing '/'
            # so you cannot descend into dirs.
            if [[ "${word:0:1}" == '$' ]]; then
                # By default, Bash will complete '$<TAB>' to all envvars. Apparently
                # 'complete -o default' does *not* give us that. The following
                # gets *close* to the same completions: '-A export' misses envvars
                # like "PS1".
                trace "  completing envvars"
                compgen $compgen_opts -P '$' -A export -- "${word:1}"
            elif [[ -z "$argtype" ]]; then
                # Only include opts in completions if $word is not empty.
                # This is to avoid completing the leading '-', which foils
                # using 'default' completion.
                if [[ -n "$dashdashseen" ]]; then
                    trace "  completing subcmds, if any (no argtype, dashdash seen)"
                    compgen $compgen_opts -W "$subcmds" -- "$word"
                elif [[ -z "$word" ]]; then
                    trace "  completing subcmds, if any (no argtype, empty word)"
                    compgen $compgen_opts -W "$subcmds" -- "$word"
                else
                    trace "  completing opts & subcmds (no argtype)"
                    compgen $compgen_opts -W "$shortopts $longopts $subcmds" -- "$word"
                fi
            elif [[ $argtype == "none" ]]; then
                # We want *no* completions, i.e. some way to get the active
                # 'complete -o default' to not do filename completion.
                trace "  completing 'none' (hack to imply no completions)"
                echo "##-no-completion- -results-##"
            elif [[ $argtype == "file" ]]; then
                # 'complete -o default' gives the best filename completion, at least
                # on Mac.
                trace "  completing 'file' (let 'complete -o default' handle it)"
                echo ""
            elif ! type complete_$argtype 2>/dev/null >/dev/null; then
                trace "  completing '$argtype' (fallback to default b/c complete_$argtype is unknown)"
                echo ""
            else
                trace "  completing custom '$argtype'"
                completions=$(complete_$argtype "$word")
                if [[ -z "$completions" ]]; then
                    trace "  no custom '$argtype' completions"
                    # These are in ascii and "dictionary" order so they sort
                    # correctly.
                    echo "##-no-completion- -results-##"
                else
                    echo $completions
                fi
            fi
            ;;
        *)
            trace "  unknown state: $state"
            ;;
        esac
    }


    trace ""
    trace "-- $(date)"
    #trace "\$IFS: '$IFS'"
    #trace "\$@: '$@'"
    #trace "COMP_WORDBREAKS: '$COMP_WORDBREAKS'"
    trace "COMP_CWORD: '$COMP_CWORD'"
    trace "COMP_LINE: '$COMP_LINE'"
    trace "COMP_POINT: $COMP_POINT"

    # Guard against negative COMP_CWORD. This is a Bash bug at least on
    # Mac 10.10.4's bash. See
    # <https://lists.gnu.org/archive/html/bug-bash/2009-07/msg00125.html>.
    if [[ $COMP_CWORD -lt 0 ]]; then
        trace "abort on negative COMP_CWORD"
        exit 1;
    fi

    # I don't know how to do array manip on argv vars,
    # so copy over to argv array to work on them.
    shift   # the leading '--'
    i=0
    len=$#
    while [[ $# -gt 0 ]]; do
        argv[$i]=$1
        shift;
        i=$(( $i + 1 ))
    done
    trace "argv: '${argv[@]}'"
    trace "argv[COMP_CWORD-1]: '${argv[$(( $COMP_CWORD - 1 ))]}'"
    trace "argv[COMP_CWORD]: '${argv[$COMP_CWORD]}'"
    trace "argv len: '$len'"

    _dashdash_complete 1 ""
}


# ---- mainline

# Note: This if-block to help work with 'compdef' and 'compctl' is
# adapted from 'npm completion'.
if type complete &>/dev/null; then
    function _{{name}}_completion {
        local _log_file=/dev/null
        [[ -z "$_{{name}}_log" ]] || _log_file="$_{{name}}_log"
        COMPREPLY=($(COMP_CWORD="$COMP_CWORD" \
            COMP_LINE="$COMP_LINE" \
            COMP_POINT="$COMP_POINT" \
            _{{name}}_completer -- "${COMP_WORDS[@]}" \
            2>$_log_file)) || return $?
    }
    complete -o default -F _{{name}}_completion {{name}}
elif type compdef &>/dev/null; then
    function _{{name}}_completion {
        local _log_file=/dev/null
        [[ -z "$_{{name}}_log" ]] || _log_file="$_{{name}}_log"
        compadd -- $(COMP_CWORD=$((CURRENT-1)) \
            COMP_LINE=$BUFFER \
            COMP_POINT=0 \
            _{{name}}_completer -- "${words[@]}" \
            2>$_log_file)
    }
    compdef _{{name}}_completion {{name}}
elif type compctl &>/dev/null; then
    function _{{name}}_completion {
        local cword line point words si
        read -Ac words
        read -cn cword
        let cword-=1
        read -l line
        read -ln point
        local _log_file=/dev/null
        [[ -z "$_{{name}}_log" ]] || _log_file="$_{{name}}_log"
        reply=($(COMP_CWORD="$cword" \
            COMP_LINE="$line" \
            COMP_POINT="$point" \
            _{{name}}_completer -- "${words[@]}" \
            2>$_log_file)) || return $?
    }
    compctl -K _{{name}}_completion {{name}}
fi


##
## This is a Bash completion file for the '{{name}}' command. You can install
## with either:
##
##     cp FILE /usr/local/etc/bash_completion.d/{{name}}   # Mac
##     cp FILE /etc/bash_completion.d/{{name}}             # Linux
##
## or:
##
##     cp FILE > ~/.{{name}}.completion
##     echo "source ~/.{{name}}.completion" >> ~/.bashrc
##