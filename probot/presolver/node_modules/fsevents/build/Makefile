# We borrow heavily from the kernel build setup, though we are simpler since
# we don't have Kconfig tweaking settings on us.

# The implicit make rules have it looking for RCS files, among other things.
# We instead explicitly write all the rules we care about.
# It's even quicker (saves ~200ms) to pass -r on the command line.
MAKEFLAGS=-r

# The source directory tree.
srcdir := ..
abs_srcdir := $(abspath $(srcdir))

# The name of the builddir.
builddir_name ?= .

# The V=1 flag on command line makes us verbosely print command lines.
ifdef V
  quiet=
else
  quiet=quiet_
endif

# Specify BUILDTYPE=Release on the command line for a release build.
BUILDTYPE ?= Release

# Directory all our build output goes into.
# Note that this must be two directories beneath src/ for unit tests to pass,
# as they reach into the src/ directory for data with relative paths.
builddir ?= $(builddir_name)/$(BUILDTYPE)
abs_builddir := $(abspath $(builddir))
depsdir := $(builddir)/.deps

# Object output directory.
obj := $(builddir)/obj
abs_obj := $(abspath $(obj))

# We build up a list of every single one of the targets so we can slurp in the
# generated dependency rule Makefiles in one pass.
all_deps :=



CC.target ?= $(CC)
CFLAGS.target ?= $(CPPFLAGS) $(CFLAGS)
CXX.target ?= $(CXX)
CXXFLAGS.target ?= $(CPPFLAGS) $(CXXFLAGS)
LINK.target ?= $(LINK)
LDFLAGS.target ?= $(LDFLAGS)
AR.target ?= $(AR)

# C++ apps need to be linked with g++.
LINK ?= $(CXX.target)

# TODO(evan): move all cross-compilation logic to gyp-time so we don't need
# to replicate this environment fallback in make as well.
CC.host ?= gcc
CFLAGS.host ?= $(CPPFLAGS_host) $(CFLAGS_host)
CXX.host ?= g++
CXXFLAGS.host ?= $(CPPFLAGS_host) $(CXXFLAGS_host)
LINK.host ?= $(CXX.host)
LDFLAGS.host ?=
AR.host ?= ar

# Define a dir function that can handle spaces.
# http://www.gnu.org/software/make/manual/make.html#Syntax-of-Functions
# "leading spaces cannot appear in the text of the first argument as written.
# These characters can be put into the argument value by variable substitution."
empty :=
space := $(empty) $(empty)

# http://stackoverflow.com/questions/1189781/using-make-dir-or-notdir-on-a-path-with-spaces
replace_spaces = $(subst $(space),?,$1)
unreplace_spaces = $(subst ?,$(space),$1)
dirx = $(call unreplace_spaces,$(dir $(call replace_spaces,$1)))

# Flags to make gcc output dependency info.  Note that you need to be
# careful here to use the flags that ccache and distcc can understand.
# We write to a dep file on the side first and then rename at the end
# so we can't end up with a broken dep file.
depfile = $(depsdir)/$(call replace_spaces,$@).d
DEPFLAGS = -MMD -MF $(depfile).raw

# We have to fixup the deps output in a few ways.
# (1) the file output should mention the proper .o file.
# ccache or distcc lose the path to the target, so we convert a rule of
# the form:
#   foobar.o: DEP1 DEP2
# into
#   path/to/foobar.o: DEP1 DEP2
# (2) we want missing files not to cause us to fail to build.
# We want to rewrite
#   foobar.o: DEP1 DEP2 \
#               DEP3
# to
#   DEP1:
#   DEP2:
#   DEP3:
# so if the files are missing, they're just considered phony rules.
# We have to do some pretty insane escaping to get those backslashes
# and dollar signs past make, the shell, and sed at the same time.
# Doesn't work with spaces, but that's fine: .d files have spaces in
# their names replaced with other characters.
define fixup_dep
# The depfile may not exist if the input file didn't have any #includes.
touch $(depfile).raw
# Fixup path as in (1).
sed -e "s|^$(notdir $@)|$@|" $(depfile).raw >> $(depfile)
# Add extra rules as in (2).
# We remove slashes and replace spaces with new lines;
# remove blank lines;
# delete the first line and append a colon to the remaining lines.
sed -e 's|\\||' -e 'y| |\n|' $(depfile).raw |\
  grep -v '^$$'                             |\
  sed -e 1d -e 's|$$|:|'                     \
    >> $(depfile)
rm $(depfile).raw
endef

# Command definitions:
# - cmd_foo is the actual command to run;
# - quiet_cmd_foo is the brief-output summary of the command.

quiet_cmd_cc = CC($(TOOLSET)) $@
cmd_cc = $(CC.$(TOOLSET)) $(GYP_CFLAGS) $(DEPFLAGS) $(CFLAGS.$(TOOLSET)) -c -o $@ $<

quiet_cmd_cxx = CXX($(TOOLSET)) $@
cmd_cxx = $(CXX.$(TOOLSET)) $(GYP_CXXFLAGS) $(DEPFLAGS) $(CXXFLAGS.$(TOOLSET)) -c -o $@ $<

quiet_cmd_objc = CXX($(TOOLSET)) $@
cmd_objc = $(CC.$(TOOLSET)) $(GYP_OBJCFLAGS) $(DEPFLAGS) -c -o $@ $<

quiet_cmd_objcxx = CXX($(TOOLSET)) $@
cmd_objcxx = $(CXX.$(TOOLSET)) $(GYP_OBJCXXFLAGS) $(DEPFLAGS) -c -o $@ $<

# Commands for precompiled header files.
quiet_cmd_pch_c = CXX($(TOOLSET)) $@
cmd_pch_c = $(CC.$(TOOLSET)) $(GYP_PCH_CFLAGS) $(DEPFLAGS) $(CXXFLAGS.$(TOOLSET)) -c -o $@ $<
quiet_cmd_pch_cc = CXX($(TOOLSET)) $@
cmd_pch_cc = $(CC.$(TOOLSET)) $(GYP_PCH_CXXFLAGS) $(DEPFLAGS) $(CXXFLAGS.$(TOOLSET)) -c -o $@ $<
quiet_cmd_pch_m = CXX($(TOOLSET)) $@
cmd_pch_m = $(CC.$(TOOLSET)) $(GYP_PCH_OBJCFLAGS) $(DEPFLAGS) -c -o $@ $<
quiet_cmd_pch_mm = CXX($(TOOLSET)) $@
cmd_pch_mm = $(CC.$(TOOLSET)) $(GYP_PCH_OBJCXXFLAGS) $(DEPFLAGS) -c -o $@ $<

# gyp-mac-tool is written next to the root Makefile by gyp.
# Use $(4) for the command, since $(2) and $(3) are used as flag by do_cmd
# already.
quiet_cmd_mac_tool = MACTOOL $(4) $<
cmd_mac_tool = ./gyp-mac-tool $(4) $< "$@"

quiet_cmd_mac_package_framework = PACKAGE FRAMEWORK $@
cmd_mac_package_framework = ./gyp-mac-tool package-framework "$@" $(4)

quiet_cmd_infoplist = INFOPLIST $@
cmd_infoplist = $(CC.$(TOOLSET)) -E -P -Wno-trigraphs -x c $(INFOPLIST_DEFINES) "$<" -o "$@"

quiet_cmd_touch = TOUCH $@
cmd_touch = touch $@

quiet_cmd_copy = COPY $@
# send stderr to /dev/null to ignore messages when linking directories.
cmd_copy = rm -rf "$@" && cp -af "$<" "$@"

quiet_cmd_alink = LIBTOOL-STATIC $@
cmd_alink = rm -f $@ && ./gyp-mac-tool filter-libtool libtool $(GYP_LIBTOOLFLAGS) -static -o $@ $(filter %.o,$^)

quiet_cmd_link = LINK($(TOOLSET)) $@
cmd_link = $(LINK.$(TOOLSET)) $(GYP_LDFLAGS) $(LDFLAGS.$(TOOLSET)) -o "$@" $(LD_INPUTS) $(LIBS)

quiet_cmd_solink = SOLINK($(TOOLSET)) $@
cmd_solink = $(LINK.$(TOOLSET)) -shared $(GYP_LDFLAGS) $(LDFLAGS.$(TOOLSET)) -o "$@" $(LD_INPUTS) $(LIBS)

quiet_cmd_solink_module = SOLINK_MODULE($(TOOLSET)) $@
cmd_solink_module = $(LINK.$(TOOLSET)) -bundle $(GYP_LDFLAGS) $(LDFLAGS.$(TOOLSET)) -o $@ $(filter-out FORCE_DO_CMD, $^) $(LIBS)


# Define an escape_quotes function to escape single quotes.
# This allows us to handle quotes properly as long as we always use
# use single quotes and escape_quotes.
escape_quotes = $(subst ','\'',$(1))
# This comment is here just to include a ' to unconfuse syntax highlighting.
# Define an escape_vars function to escape '$' variable syntax.
# This allows us to read/write command lines with shell variables (e.g.
# $LD_LIBRARY_PATH), without triggering make substitution.
escape_vars = $(subst $$,$$$$,$(1))
# Helper that expands to a shell command to echo a string exactly as it is in
# make. This uses printf instead of echo because printf's behaviour with respect
# to escape sequences is more portable than echo's across different shells
# (e.g., dash, bash).
exact_echo = printf '%s\n' '$(call escape_quotes,$(1))'

# Helper to compare the command we're about to run against the command
# we logged the last time we ran the command.  Produces an empty
# string (false) when the commands match.
# Tricky point: Make has no string-equality test function.
# The kernel uses the following, but it seems like it would have false
# positives, where one string reordered its arguments.
#   arg_check = $(strip $(filter-out $(cmd_$(1)), $(cmd_$@)) \
#                       $(filter-out $(cmd_$@), $(cmd_$(1))))
# We instead substitute each for the empty string into the other, and
# say they're equal if both substitutions produce the empty string.
# .d files contain ? instead of spaces, take that into account.
command_changed = $(or $(subst $(cmd_$(1)),,$(cmd_$(call replace_spaces,$@))),\
                       $(subst $(cmd_$(call replace_spaces,$@)),,$(cmd_$(1))))

# Helper that is non-empty when a prerequisite changes.
# Normally make does this implicitly, but we force rules to always run
# so we can check their command lines.
#   $? -- new prerequisites
#   $| -- order-only dependencies
prereq_changed = $(filter-out FORCE_DO_CMD,$(filter-out $|,$?))

# Helper that executes all postbuilds until one fails.
define do_postbuilds
  @E=0;\
  for p in $(POSTBUILDS); do\
    eval $$p;\
    E=$$?;\
    if [ $$E -ne 0 ]; then\
      break;\
    fi;\
  done;\
  if [ $$E -ne 0 ]; then\
    rm -rf "$@";\
    exit $$E;\
  fi
endef

# do_cmd: run a command via the above cmd_foo names, if necessary.
# Should always run for a given target to handle command-line changes.
# Second argument, if non-zero, makes it do asm/C/C++ dependency munging.
# Third argument, if non-zero, makes it do POSTBUILDS processing.
# Note: We intentionally do NOT call dirx for depfile, since it contains ? for
# spaces already and dirx strips the ? characters.
define do_cmd
$(if $(or $(command_changed),$(prereq_changed)),
  @$(call exact_echo,  $($(quiet)cmd_$(1)))
  @mkdir -p "$(call dirx,$@)" "$(dir $(depfile))"
  $(if $(findstring flock,$(word 2,$(cmd_$1))),
    @$(cmd_$(1))
    @echo "  $(quiet_cmd_$(1)): Finished",
    @$(cmd_$(1))
  )
  @$(call exact_echo,$(call escape_vars,cmd_$(call replace_spaces,$@) := $(cmd_$(1)))) > $(depfile)
  @$(if $(2),$(fixup_dep))
  $(if $(and $(3), $(POSTBUILDS)),
    $(call do_postbuilds)
  )
)
endef

# Declare the "all" target first so it is the default,
# even though we don't have the deps yet.
.PHONY: all
all:

# make looks for ways to re-generate included makefiles, but in our case, we
# don't have a direct way. Explicitly telling make that it has nothing to do
# for them makes it go faster.
%.d: ;

# Use FORCE_DO_CMD to force a target to run.  Should be coupled with
# do_cmd.
.PHONY: FORCE_DO_CMD
FORCE_DO_CMD:

TOOLSET := target
# Suffix rules, putting all outputs into $(obj).
$(obj).$(TOOLSET)/%.o: $(srcdir)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)
$(obj).$(TOOLSET)/%.o: $(srcdir)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)
$(obj).$(TOOLSET)/%.o: $(srcdir)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)
$(obj).$(TOOLSET)/%.o: $(srcdir)/%.cxx FORCE_DO_CMD
	@$(call do_cmd,cxx,1)
$(obj).$(TOOLSET)/%.o: $(srcdir)/%.m FORCE_DO_CMD
	@$(call do_cmd,objc,1)
$(obj).$(TOOLSET)/%.o: $(srcdir)/%.mm FORCE_DO_CMD
	@$(call do_cmd,objcxx,1)
$(obj).$(TOOLSET)/%.o: $(srcdir)/%.S FORCE_DO_CMD
	@$(call do_cmd,cc,1)
$(obj).$(TOOLSET)/%.o: $(srcdir)/%.s FORCE_DO_CMD
	@$(call do_cmd,cc,1)

# Try building from generated source, too.
$(obj).$(TOOLSET)/%.o: $(obj).$(TOOLSET)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)
$(obj).$(TOOLSET)/%.o: $(obj).$(TOOLSET)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)
$(obj).$(TOOLSET)/%.o: $(obj).$(TOOLSET)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)
$(obj).$(TOOLSET)/%.o: $(obj).$(TOOLSET)/%.cxx FORCE_DO_CMD
	@$(call do_cmd,cxx,1)
$(obj).$(TOOLSET)/%.o: $(obj).$(TOOLSET)/%.m FORCE_DO_CMD
	@$(call do_cmd,objc,1)
$(obj).$(TOOLSET)/%.o: $(obj).$(TOOLSET)/%.mm FORCE_DO_CMD
	@$(call do_cmd,objcxx,1)
$(obj).$(TOOLSET)/%.o: $(obj).$(TOOLSET)/%.S FORCE_DO_CMD
	@$(call do_cmd,cc,1)
$(obj).$(TOOLSET)/%.o: $(obj).$(TOOLSET)/%.s FORCE_DO_CMD
	@$(call do_cmd,cc,1)

$(obj).$(TOOLSET)/%.o: $(obj)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)
$(obj).$(TOOLSET)/%.o: $(obj)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)
$(obj).$(TOOLSET)/%.o: $(obj)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)
$(obj).$(TOOLSET)/%.o: $(obj)/%.cxx FORCE_DO_CMD
	@$(call do_cmd,cxx,1)
$(obj).$(TOOLSET)/%.o: $(obj)/%.m FORCE_DO_CMD
	@$(call do_cmd,objc,1)
$(obj).$(TOOLSET)/%.o: $(obj)/%.mm FORCE_DO_CMD
	@$(call do_cmd,objcxx,1)
$(obj).$(TOOLSET)/%.o: $(obj)/%.S FORCE_DO_CMD
	@$(call do_cmd,cc,1)
$(obj).$(TOOLSET)/%.o: $(obj)/%.s FORCE_DO_CMD
	@$(call do_cmd,cc,1)


ifeq ($(strip $(foreach prefix,$(NO_LOAD),\
    $(findstring $(join ^,$(prefix)),\
                 $(join ^,.target.mk)))),)
  include .target.mk
endif
ifeq ($(strip $(foreach prefix,$(NO_LOAD),\
    $(findstring $(join ^,$(prefix)),\
                 $(join ^,action_after_build.target.mk)))),)
  include action_after_build.target.mk
endif
ifeq ($(strip $(foreach prefix,$(NO_LOAD),\
    $(findstring $(join ^,$(prefix)),\
                 $(join ^,fse.target.mk)))),)
  include fse.target.mk
endif

quiet_cmd_regen_makefile = ACTION Regenerating $@
cmd_regen_makefile = cd $(srcdir); /Users/eshanker/.nvm/versions/node/v10.1.0/lib/node_modules/npm/node_modules/node-gyp/gyp/gyp_main.py -fmake --ignore-environment "--toplevel-dir=." -I/Users/eshanker/Code/fsevents/build/config.gypi -I/Users/eshanker/.nvm/versions/node/v10.1.0/lib/node_modules/npm/node_modules/node-gyp/addon.gypi -I/Users/eshanker/.node-gyp/10.1.0/include/node/common.gypi "--depth=." "-Goutput_dir=." "--generator-output=build" "-Dlibrary=shared_library" "-Dvisibility=default" "-Dnode_root_dir=/Users/eshanker/.node-gyp/10.1.0" "-Dnode_gyp_dir=/Users/eshanker/.nvm/versions/node/v10.1.0/lib/node_modules/npm/node_modules/node-gyp" "-Dnode_lib_file=/Users/eshanker/.node-gyp/10.1.0/<(target_arch)/node.lib" "-Dmodule_root_dir=/Users/eshanker/Code/fsevents" "-Dnode_engine=v8" binding.gyp
Makefile: $(srcdir)/../../.nvm/versions/node/v10.1.0/lib/node_modules/npm/node_modules/node-gyp/addon.gypi $(srcdir)/../../.node-gyp/10.1.0/include/node/common.gypi $(srcdir)/build/config.gypi $(srcdir)/binding.gyp
	$(call do_cmd,regen_makefile)

# "all" is a concatenation of the "all" targets from all the included
# sub-makefiles. This is just here to clarify.
all:

# Add in dependency-tracking rules.  $(all_deps) is the list of every single
# target in our tree. Only consider the ones with .d (dependency) info:
d_files := $(wildcard $(foreach f,$(all_deps),$(depsdir)/$(f).d))
ifneq ($(d_files),)
  include $(d_files)
endif
