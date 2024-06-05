#!/usr/bin/env python3

"""
git-filter-repo filters git repositories, similar to git filter-branch, BFG
repo cleaner, and others.  The basic idea is that it works by running
   git fast-export <options> | filter | git fast-import <options>
where this program not only launches the whole pipeline but also serves as
the 'filter' in the middle.  It does a few additional things on top as well
in order to make it into a well-rounded filtering tool.

git-filter-repo can also be used as a library for more involved filtering
operations; however:
  ***** API BACKWARD COMPATIBILITY CAVEAT *****
  Programs using git-filter-repo as a library can reach pretty far into its
  internals, but I am not prepared to guarantee backward compatibility of
  all APIs.  I suspect changes will be rare, but I reserve the right to
  change any API.  Since it is assumed that repository filtering is
  something one would do very rarely, and in particular that it's a
  one-shot operation, this should not be a problem in practice for anyone.
  However, if you want to re-use a program you have written that uses
  git-filter-repo as a library (or makes use of one of its --*-callback
  arguments), you should either make sure you are using the same version of
  git and git-filter-repo, or make sure to re-test it.

  If there are particular pieces of the API you are concerned about, and
  there is not already a testcase for it in t9391-lib-usage.sh or
  t9392-python-callback.sh, please contribute a testcase.  That will not
  prevent me from changing the API, but it will allow you to look at the
  history of a testcase to see whether and how the API changed.
  ***** END API BACKWARD COMPATIBILITY CAVEAT *****
"""

import argparse
import collections
import fnmatch
import gettext
import io
import os
import platform
import re
import shutil
import subprocess
import sys
import time
import textwrap

from datetime import tzinfo, timedelta, datetime

__all__ = ["Blob", "Reset", "FileChange", "Commit", "Tag", "Progress",
           "Checkpoint", "FastExportParser", "ProgressWriter",
           "string_to_date", "date_to_string",
           "record_id_rename", "GitUtils", "FilteringOptions", "RepoFilter"]

deleted_hash = b'0'*40
write_marks = True
date_format_permissive = True

def gettext_poison(msg):
  if "GIT_TEST_GETTEXT_POISON" in os.environ: # pragma: no cover
    return "# GETTEXT POISON #"
  return gettext.gettext(msg)

_ = gettext_poison

def setup_gettext():
  TEXTDOMAIN="git-filter-repo"
  podir = os.environ.get("GIT_TEXTDOMAINDIR") or "@@LOCALEDIR@@"
  if not os.path.isdir(podir): # pragma: no cover
    podir = None  # Python has its own fallback; use that

  ## This looks like the most straightforward translation of the relevant
  ## code in git.git:gettext.c and git.git:perl/Git/I18n.pm:
  #import locale
  #locale.setlocale(locale.LC_MESSAGES, "");
  #locale.setlocale(locale.LC_TIME, "");
  #locale.textdomain(TEXTDOMAIN);
  #locale.bindtextdomain(TEXTDOMAIN, podir);
  ## but the python docs suggest using the gettext module (which doesn't
  ## have setlocale()) instead, so:
  gettext.textdomain(TEXTDOMAIN);
  gettext.bindtextdomain(TEXTDOMAIN, podir);

def _timedelta_to_seconds(delta):
  """
  Converts timedelta to seconds
  """
  offset = delta.days*86400 + delta.seconds + (delta.microseconds+0.0)/1000000
  return round(offset)

class FixedTimeZone(tzinfo):
  """
  Fixed offset in minutes east from UTC.
  """

  tz_re = re.compile(br'^([-+]?)(\d\d)(\d\d)$')

  def __init__(self, offset_string):
    tzinfo.__init__(self)
    sign, hh, mm = FixedTimeZone.tz_re.match(offset_string).groups()
    factor = -1 if (sign and sign == b'-') else 1
    self._offset = timedelta(minutes = factor*(60*int(hh) + int(mm)))
    self._offset_string = offset_string

  def utcoffset(self, dt):
    return self._offset

  def tzname(self, dt):
    return self._offset_string

  def dst(self, dt):
    return timedelta(0)

def string_to_date(datestring):
  (unix_timestamp, tz_offset) = datestring.split()
  return datetime.fromtimestamp(int(unix_timestamp),
                                FixedTimeZone(tz_offset))

def date_to_string(dateobj):
  epoch = datetime.fromtimestamp(0, dateobj.tzinfo)
  return(b'%d %s' % (int(_timedelta_to_seconds(dateobj - epoch)),
                     dateobj.tzinfo.tzname(0)))

def decode(bytestr):
  'Try to convert bytestr to utf-8 for outputting as an error message.'
  return bytestr.decode('utf-8', 'backslashreplace')

def glob_to_regex(glob_bytestr):
  'Translate glob_bytestr into a regex on bytestrings'

  # fnmatch.translate is idiotic and won't accept bytestrings
  if (decode(glob_bytestr).encode() != glob_bytestr): # pragma: no cover
    raise SystemExit(_("Error: Cannot handle glob %s").format(glob_bytestr))

  # Create regex operating on string
  regex = fnmatch.translate(decode(glob_bytestr))

  # FIXME: This is an ugly hack...
  # fnmatch.translate tries to do multi-line matching and wants the glob to
  # match up to the end of the input, which isn't relevant for us, so we
  # have to modify the regex.  fnmatch.translate has used different regex
  # constructs to achieve this with different python versions, so we have
  # to check for each of them and then fix it up.  It would be much better
  # if fnmatch.translate could just take some flags to allow us to specify
  # what we want rather than employing this hackery, but since it
  # doesn't...
  if regex.endswith(r'\Z(?ms)'): # pragma: no cover
    regex = regex[0:-7]
  elif regex.startswith(r'(?s:') and regex.endswith(r')\Z'): # pragma: no cover
    regex = regex[4:-3]

  # Finally, convert back to regex operating on bytestr
  return regex.encode()

class PathQuoting:
  _unescape = {b'a': b'\a',
               b'b': b'\b',
               b'f': b'\f',
               b'n': b'\n',
               b'r': b'\r',
               b't': b'\t',
               b'v': b'\v',
               b'"': b'"',
               b'\\':b'\\'}
  _unescape_re = re.compile(br'\\([a-z"\\]|[0-9]{3})')
  _escape = [bytes([x]) for x in range(127)]+[
             b'\\'+bytes(ord(c) for c in oct(x)[2:]) for x in range(127,256)]
  _reverse = dict(map(reversed, _unescape.items()))
  for x in _reverse:
    _escape[ord(x)] = b'\\'+_reverse[x]
  _special_chars = [len(x) > 1 for x in _escape]

  @staticmethod
  def unescape_sequence(orig):
    seq = orig.group(1)
    return PathQuoting._unescape[seq] if len(seq) == 1 else bytes([int(seq, 8)])

  @staticmethod
  def dequote(quoted_string):
    if quoted_string.startswith(b'"'):
      assert quoted_string.endswith(b'"')
      return PathQuoting._unescape_re.sub(PathQuoting.unescape_sequence,
                                          quoted_string[1:-1])
    return quoted_string

  @staticmethod
  def enquote(unquoted_string):
    # Option 1: Quoting when fast-export would:
    #    pqsc = PathQuoting._special_chars
    #    if any(pqsc[x] for x in set(unquoted_string)):
    # Option 2, perf hack: do minimal amount of quoting required by fast-import
    if unquoted_string.startswith(b'"') or b'\n' in unquoted_string:
      pqe = PathQuoting._escape
      return b'"' + b''.join(pqe[x] for x in unquoted_string) + b'"'
    return unquoted_string

class AncestryGraph(object):
  """
  A class that maintains a direct acycle graph of commits for the purpose of
  determining if one commit is the ancestor of another.
  """

  def __init__(self):
    self.cur_value = 0

    # A mapping from the external identifers given to us to the simple integers
    # we use in self.graph
    self.value = {}

    # A tuple of (depth, list-of-ancestors).  Values and keys in this graph are
    # all integers from the self.value dict.  The depth of a commit is one more
    # than the max depth of any of its ancestors.
    self.graph = {}

    # Cached results from previous calls to is_ancestor().
    self._cached_is_ancestor = {}

  def record_external_commits(self, external_commits):
    """
    Record in graph that each commit in external_commits exists, and is
    treated as a root commit with no parents.
    """
    for c in external_commits:
      if c not in self.value:
        self.cur_value += 1
        self.value[c] = self.cur_value
        self.graph[self.cur_value] = (1, [])

  def add_commit_and_parents(self, commit, parents):
    """
    Record in graph that commit has the given parents.  parents _MUST_ have
    been first recorded.  commit _MUST_ not have been recorded yet.
    """
    assert all(p in self.value for p in parents)
    assert commit not in self.value

    # Get values for commit and parents
    self.cur_value += 1
    self.value[commit] = self.cur_value
    graph_parents = [self.value[x] for x in parents]

    # Determine depth for commit, then insert the info into the graph
    depth = 1
    if parents:
      depth += max(self.graph[p][0] for p in graph_parents)
    self.graph[self.cur_value] = (depth, graph_parents)

  def is_ancestor(self, possible_ancestor, check):
    """
    Return whether possible_ancestor is an ancestor of check
    """
    a, b = self.value[possible_ancestor], self.value[check]
    original_pair = (a,b)
    a_depth = self.graph[a][0]
    ancestors = [b]
    visited = set()
    while ancestors:
      ancestor = ancestors.pop()
      prev_pair = (a, ancestor)
      if prev_pair in self._cached_is_ancestor:
        if not self._cached_is_ancestor[prev_pair]:
          continue
        self._cached_is_ancestor[original_pair] = True
        return True
      if ancestor in visited:
        continue
      visited.add(ancestor)
      depth, more_ancestors = self.graph[ancestor]
      if ancestor == a:
        self._cached_is_ancestor[original_pair] = True
        return True
      elif depth <= a_depth:
        continue
      ancestors.extend(more_ancestors)
    self._cached_is_ancestor[original_pair] = False
    return False

class MailmapInfo(object):
  def __init__(self, filename):
    self.changes = {}
    self._parse_file(filename)

  def _parse_file(self, filename):
    name_and_email_re = re.compile(br'(.*?)\s*<([^>]*)>\s*')
    comment_re = re.compile(br'\s*#.*')
    if not os.access(filename, os.R_OK):
      raise SystemExit(_("Cannot read %s") % decode(filename))
    with open(filename, 'br') as f:
      count = 0
      for line in f:
        count += 1
        err = "Unparseable mailmap file: line #{} is bad: {}".format(count, line)
        # Remove comments
        line = comment_re.sub(b'', line)
        # Remove leading and trailing whitespace
        line = line.strip()
        if not line:
          continue

        m = name_and_email_re.match(line)
        if not m:
          raise SystemExit(err)
        proper_name, proper_email = m.groups()
        if len(line) == m.end():
          self.changes[(None, proper_email)] = (proper_name, proper_email)
          continue
        rest = line[m.end():]
        m = name_and_email_re.match(rest)
        if m:
          commit_name, commit_email = m.groups()
          if len(rest) != m.end():
            raise SystemExit(err)
        else:
          commit_name, commit_email = rest, None
        self.changes[(commit_name, commit_email)] = (proper_name, proper_email)

  def translate(self, name, email):
    ''' Given a name and email, return the expected new name and email from the
        mailmap if there is a translation rule for it, otherwise just return
        the given name and email.'''
    for old, new in self.changes.items():
      old_name, old_email = old
      new_name, new_email = new
      if (old_email is None or email.lower() == old_email.lower()) and (
          name == old_name or not old_name):
        return (new_name or name, new_email or email)
    return (name, email)

class ProgressWriter(object):
  def __init__(self):
    self._last_progress_update = time.time()
    self._last_message = None

  def show(self, msg):
    self._last_message = msg
    now = time.time()
    if now - self._last_progress_update > .1:
      self._last_progress_update = now
      sys.stdout.write("\r{}".format(msg))
      sys.stdout.flush()

  def finish(self):
    self._last_progress_update = 0
    if self._last_message:
      self.show(self._last_message)
    sys.stdout.write("\n")

class _IDs(object):
  """
  A class that maintains the 'name domain' of all the 'marks' (short int
  id for a blob/commit git object). The reason this mechanism is necessary
  is because the text of fast-export may refer to an object using a different
  mark than the mark that was assigned to that object using IDS.new(). This
  class allows you to translate the fast-export marks (old) to the marks
  assigned from IDS.new() (new).

  Note that there are two reasons why the marks may differ: (1) The
  user manually creates Blob or Commit objects (for insertion into the
  stream) (2) We're reading the data from two different repositories
  and trying to combine the data (git fast-export will number ids from
  1...n, and having two 1's, two 2's, two 3's, causes issues).
  """

  def __init__(self):
    """
    Init
    """
    # The id for the next created blob/commit object
    self._next_id = 1

    # A map of old-ids to new-ids (1:1 map)
    self._translation = {}

    # A map of new-ids to every old-id that points to the new-id (1:N map)
    self._reverse_translation = {}

  def has_renames(self):
    """
    Return whether there have been ids remapped to new values
    """
    return bool(self._translation)

  def new(self):
    """
    Should be called whenever a new blob or commit object is created. The
    returned value should be used as the id/mark for that object.
    """
    rv = self._next_id
    self._next_id += 1
    return rv

  def record_rename(self, old_id, new_id, handle_transitivity = False):
    """
    Record that old_id is being renamed to new_id.
    """
    if old_id != new_id:
      # old_id -> new_id
      self._translation[old_id] = new_id

      # Transitivity will be needed if new commits are being inserted mid-way
      # through a branch.
      if handle_transitivity:
        # Anything that points to old_id should point to new_id
        if old_id in self._reverse_translation:
          for id_ in self._reverse_translation[old_id]:
            self._translation[id_] = new_id

      # Record that new_id is pointed to by old_id
      if new_id not in self._reverse_translation:
        self._reverse_translation[new_id] = []
      self._reverse_translation[new_id].append(old_id)

  def translate(self, old_id):
    """
    If old_id has been mapped to an alternate id, return the alternate id.
    """
    if old_id in self._translation:
      return self._translation[old_id]
    else:
      return old_id

  def __str__(self):
    """
    Convert IDs to string; used for debugging
    """
    rv = "Current count: %d\nTranslation:\n" % self._next_id
    for k in sorted(self._translation):
      rv += "  %d -> %s\n" % (k, self._translation[k])

    rv += "Reverse translation:\n"
    for k in sorted(self._reverse_translation):
      rv += "  " + str(k) + " -> " + str(self._reverse_translation[k]) + "\n"

    return rv

class _GitElement(object):
  """
  The base class for all git elements that we create.
  """

  def __init__(self):
    # A string that describes what type of Git element this is
    self.type = None

    # A flag telling us if this Git element has been dumped
    # (i.e. printed) or skipped.  Typically elements that have been
    # dumped or skipped will not be dumped again.
    self.dumped = 0

  def dump(self, file_):
    """
    This version should never be called. Derived classes need to
    override! We should note that subclasses should implement this
    method such that the output would match the format produced by
    fast-export.
    """
    raise SystemExit(_("Unimplemented function: %s") % type(self).__name__
                     +".dump()") # pragma: no cover

  def __bytes__(self):
    """
    Convert GitElement to bytestring; used for debugging
    """
    old_dumped = self.dumped
    writeme = io.BytesIO()
    self.dump(writeme)
    output_lines = writeme.getvalue().splitlines()
    writeme.close()
    self.dumped = old_dumped
    return b"%s:\n  %s" % (type(self).__name__.encode(),
                           b"\n  ".join(output_lines))

  def skip(self, new_id=None):
    """
    Ensures this element will not be written to output
    """
    self.dumped = 2

class _GitElementWithId(_GitElement):
  """
  The base class for Git elements that have IDs (commits and blobs)
  """

  def __init__(self):
    _GitElement.__init__(self)

    # The mark (short, portable id) for this element
    self.id = _IDS.new()

    # The previous mark for this element
    self.old_id = None

  def skip(self, new_id=None):
    """
    This element will no longer be automatically written to output. When a
    commit gets skipped, it's ID will need to be translated to that of its
    parent.
    """
    self.dumped = 2

    _IDS.record_rename(self.old_id or self.id, new_id)

class Blob(_GitElementWithId):
  """
  This class defines our representation of git blob elements (i.e. our
  way of representing file contents).
  """

  def __init__(self, data, original_id = None):
    _GitElementWithId.__init__(self)

    # Denote that this is a blob
    self.type = 'blob'

    # Record original id
    self.original_id = original_id

    # Stores the blob's data
    assert(type(data) == bytes)
    self.data = data

  def dump(self, file_):
    """
    Write this blob element to a file.
    """
    self.dumped = 1
    HASH_TO_ID[self.original_id] = self.id
    ID_TO_HASH[self.id] = self.original_id

    file_.write(b'blob\n')
    file_.write(b'mark :%d\n' % self.id)
    file_.write(b'data %d\n%s' % (len(self.data), self.data))
    file_.write(b'\n')


class Reset(_GitElement):
  """
  This class defines our representation of git reset elements.  A reset
  event is the creation (or recreation) of a named branch, optionally
  starting from a specific revision).
  """

  def __init__(self, ref, from_ref = None):
    _GitElement.__init__(self)

    # Denote that this is a reset
    self.type = 'reset'

    # The name of the branch being (re)created
    self.ref = ref

    # Some reference to the branch/commit we are resetting from
    self.from_ref = from_ref

  def dump(self, file_):
    """
    Write this reset element to a file
    """
    self.dumped = 1

    file_.write(b'reset %s\n' % self.ref)
    if self.from_ref:
      if isinstance(self.from_ref, int):
        file_.write(b'from :%d\n' % self.from_ref)
      else:
        file_.write(b'from %s\n' % self.from_ref)
      file_.write(b'\n')

class FileChange(_GitElement):
  """
  This class defines our representation of file change elements. File change
  elements are components within a Commit element.
  """

  def __init__(self, type_, filename = None, id_ = None, mode = None):
    _GitElement.__init__(self)

    # Denote the type of file-change (b'M' for modify, b'D' for delete, etc)
    # We could
    #   assert(type(type_) == bytes)
    # here but I don't just due to worries about performance overhead...
    self.type = type_

    # Record the name of the file being changed
    self.filename = filename

    # Record the mode (mode describes type of file entry (non-executable,
    # executable, or symlink)).
    self.mode = mode

    # blob_id is the id (mark) of the affected blob
    self.blob_id = id_

    if type_ == b'DELETEALL':
      assert filename is None and id_ is None and mode is None
      self.filename = b'' # Just so PathQuoting.enquote doesn't die
    else:
      assert filename is not None

    if type_ == b'M':
      assert id_ is not None and mode is not None
    elif type_ == b'D':
      assert id_ is None and mode is None
    elif type_ == b'R':  # pragma: no cover (now avoid fast-export renames)
      assert mode is None
      if id_ is None:
        raise SystemExit(_("new name needed for rename of %s") % filename)
      self.filename = (self.filename, id_)
      self.blob_id = None

  def dump(self, file_):
    """
    Write this file-change element to a file
    """
    skipped_blob = (self.type == b'M' and self.blob_id is None)
    if skipped_blob: return
    self.dumped = 1

    quoted_filename = PathQuoting.enquote(self.filename)
    if self.type == b'M' and isinstance(self.blob_id, int):
      file_.write(b'M %s :%d %s\n' % (self.mode, self.blob_id, quoted_filename))
    elif self.type == b'M':
      file_.write(b'M %s %s %s\n' % (self.mode, self.blob_id, quoted_filename))
    elif self.type == b'D':
      file_.write(b'D %s\n' % quoted_filename)
    elif self.type == b'DELETEALL':
      file_.write(b'deleteall\n')
    else:
      raise SystemExit(_("Unhandled filechange type: %s") % self.type) # pragma: no cover

class Commit(_GitElementWithId):
  """
  This class defines our representation of commit elements. Commit elements
  contain all the information associated with a commit.
  """

  def __init__(self, branch,
               author_name,    author_email,    author_date,
               committer_name, committer_email, committer_date,
               message,
               file_changes,
               parents,
               original_id = None,
               encoding = None, # encoding for message; None implies UTF-8
               **kwargs):
    _GitElementWithId.__init__(self)
    self.old_id = self.id

    # Denote that this is a commit element
    self.type = 'commit'

    # Record the affected branch
    self.branch = branch

    # Record original id
    self.original_id = original_id

    # Record author's name
    self.author_name  = author_name

    # Record author's email
    self.author_email = author_email

    # Record date of authoring
    self.author_date  = author_date

    # Record committer's name
    self.committer_name  = committer_name

    # Record committer's email
    self.committer_email = committer_email

    # Record date the commit was made
    self.committer_date  = committer_date

    # Record commit message and its encoding
    self.encoding = encoding
    self.message = message

    # List of file-changes associated with this commit. Note that file-changes
    # are also represented as git elements
    self.file_changes = file_changes

    self.parents = parents

  def dump(self, file_):
    """
    Write this commit element to a file.
    """
    self.dumped = 1
    HASH_TO_ID[self.original_id] = self.id
    ID_TO_HASH[self.id] = self.original_id

    # Make output to fast-import slightly easier for humans to read if the
    # message has no trailing newline of its own; cosmetic, but a nice touch...
    extra_newline = b'\n'
    if self.message.endswith(b'\n') or not (self.parents or self.file_changes):
      extra_newline = b''

    if not self.parents:
      file_.write(b'reset %s\n' % self.branch)
    file_.write((b'commit %s\n'
                 b'mark :%d\n'
                 b'author %s <%s> %s\n'
                 b'committer %s <%s> %s\n'
                ) % (
                  self.branch, self.id,
                  self.author_name, self.author_email, self.author_date,
                  self.committer_name, self.committer_email, self.committer_date
               ))
    if self.encoding:
      file_.write(b'encoding %s\n' % self.encoding)
    file_.write(b'data %d\n%s%s' %
                (len(self.message), self.message, extra_newline))
    for i, parent in enumerate(self.parents):
      file_.write(b'from ' if i==0 else b'merge ')
      if isinstance(parent, int):
        file_.write(b':%d\n' % parent)
      else:
        file_.write(b'%s\n' % parent)
    for change in self.file_changes:
      change.dump(file_)
    if not self.parents and not self.file_changes:
      # Workaround a bug in pre-git-2.22 versions of fast-import with
      # the get-mark directive.
      file_.write(b'\n')
    file_.write(b'\n')

  def first_parent(self):
    """
    Return first parent commit
    """
    if self.parents:
      return self.parents[0]
    return None

  def skip(self, new_id=None):
    _SKIPPED_COMMITS.add(self.old_id or self.id)
    _GitElementWithId.skip(self, new_id)

class Tag(_GitElementWithId):
  """
  This class defines our representation of annotated tag elements.
  """

  def __init__(self, ref, from_ref,
               tagger_name, tagger_email, tagger_date, tag_msg,
               original_id = None):
    _GitElementWithId.__init__(self)
    self.old_id = self.id

    # Denote that this is a tag element
    self.type = 'tag'

    # Store the name of the tag
    self.ref = ref

    # Store the entity being tagged (this should be a commit)
    self.from_ref = from_ref

    # Record original id
    self.original_id = original_id

    # Store the name of the tagger
    self.tagger_name  = tagger_name

    # Store the email of the tagger
    self.tagger_email = tagger_email

    # Store the date
    self.tagger_date  = tagger_date

    # Store the tag message
    self.message = tag_msg

  def dump(self, file_):
    """
    Write this tag element to a file
    """

    self.dumped = 1
    HASH_TO_ID[self.original_id] = self.id
    ID_TO_HASH[self.id] = self.original_id

    file_.write(b'tag %s\n' % self.ref)
    if (write_marks and self.id):
      file_.write(b'mark :%d\n' % self.id)
    markfmt = b'from :%d\n' if isinstance(self.from_ref, int) else b'from %s\n'
    file_.write(markfmt % self.from_ref)
    if self.tagger_name:
      file_.write(b'tagger %s <%s> ' % (self.tagger_name, self.tagger_email))
      file_.write(self.tagger_date)
      file_.write(b'\n')
    file_.write(b'data %d\n%s' % (len(self.message), self.message))
    file_.write(b'\n')

class Progress(_GitElement):
  """
  This class defines our representation of progress elements. The progress
  element only contains a progress message, which is printed by fast-import
  when it processes the progress output.
  """

  def __init__(self, message):
    _GitElement.__init__(self)

    # Denote that this is a progress element
    self.type = 'progress'

    # Store the progress message
    self.message = message

  def dump(self, file_):
    """
    Write this progress element to a file
    """
    self.dumped = 1

    file_.write(b'progress %s\n' % self.message)
    file_.write(b'\n')

class Checkpoint(_GitElement):
  """
  This class defines our representation of checkpoint elements.  These
  elements represent events which force fast-import to close the current
  packfile, start a new one, and to save out all current branch refs, tags
  and marks.
  """

  def __init__(self):
    _GitElement.__init__(self)

    # Denote that this is a checkpoint element
    self.type = 'checkpoint'

  def dump(self, file_):
    """
    Write this checkpoint element to a file
    """
    self.dumped = 1

    file_.write(b'checkpoint\n')
    file_.write(b'\n')

class LiteralCommand(_GitElement):
  """
  This class defines our representation of commands. The literal command
  includes only a single line, and is not processed in any special way.
  """

  def __init__(self, line):
    _GitElement.__init__(self)

    # Denote that this is a literal element
    self.type = 'literal'

    # Store the command
    self.line = line

  def dump(self, file_):
    """
    Write this progress element to a file
    """
    self.dumped = 1

    file_.write(self.line)

class Alias(_GitElement):
  """
  This class defines our representation of fast-import alias elements.  An
  alias element is the setting of one mark to the same sha1sum as another,
  usually because the newer mark corresponded to a pruned commit.
  """

  def __init__(self, ref, to_ref):
    _GitElement.__init__(self)
    # Denote that this is a reset
    self.type = 'alias'

    self.ref = ref
    self.to_ref = to_ref

  def dump(self, file_):
    """
    Write this reset element to a file
    """
    self.dumped = 1

    file_.write(b'alias\nmark :%d\nto :%d\n\n' % (self.ref, self.to_ref))

class FastExportParser(object):
  """
  A class for parsing and handling the output from fast-export. This
  class allows the user to register callbacks when various types of
  data are encountered in the fast-export output. The basic idea is that,
  FastExportParser takes fast-export output, creates the various objects
  as it encounters them, the user gets to use/modify these objects via
  callbacks, and finally FastExportParser outputs the modified objects
  in fast-import format (presumably so they can be used to create a new
  repo).
  """

  def __init__(self,
               tag_callback = None,   commit_callback = None,
               blob_callback = None,  progress_callback = None,
               reset_callback = None, checkpoint_callback = None,
               done_callback = None):
    # Members below simply store callback functions for the various git
    # elements
    self._tag_callback        = tag_callback
    self._blob_callback       = blob_callback
    self._reset_callback      = reset_callback
    self._commit_callback     = commit_callback
    self._progress_callback   = progress_callback
    self._checkpoint_callback = checkpoint_callback
    self._done_callback       = done_callback

    # Keep track of which refs appear from the export, and which make it to
    # the import (pruning of empty commits, renaming of refs, and creating
    # new manual objects and inserting them can cause these to differ).
    self._exported_refs = set()
    self._imported_refs = set()

    # A list of the branches we've seen, plus the last known commit they
    # pointed to.  An entry in latest_*commit will be deleted if we get a
    # reset for that branch.  These are used because of fast-import's weird
    # decision to allow having an implicit parent via naming the branch
    # instead of requiring branches to be specified via 'from' directives.
    self._latest_commit = {}
    self._latest_orig_commit = {}

    # A handle to the input source for the fast-export data
    self._input = None

    # A handle to the output file for the output we generate (we call dump
    # on many of the git elements we create).
    self._output = None

    # Stores the contents of the current line of input being parsed
    self._currentline = ''

    # Compile some regexes and cache those
    self._mark_re = re.compile(br'mark :(\d+)\n$')
    self._parent_regexes = {}
    parent_regex_rules = (br' :(\d+)\n$', br' ([0-9a-f]{40})\n')
    for parent_refname in (b'from', b'merge'):
      ans = [re.compile(parent_refname+x) for x in parent_regex_rules]
      self._parent_regexes[parent_refname] = ans
    self._quoted_string_re = re.compile(br'"(?:[^"\\]|\\.)*"')
    self._refline_regexes = {}
    for refline_name in (b'reset', b'commit', b'tag', b'progress'):
      self._refline_regexes[refline_name] = re.compile(refline_name+b' (.*)\n$')
    self._user_regexes = {}
    for user in (b'author', b'committer', b'tagger'):
      self._user_regexes[user] = re.compile(user + b' (.*?) <(.*?)> (.*)\n$')

  def _advance_currentline(self):
    """
    Grab the next line of input
    """
    self._currentline = self._input.readline()

  def _parse_optional_mark(self):
    """
    If the current line contains a mark, parse it and advance to the
    next line; return None otherwise
    """
    mark = None
    matches = self._mark_re.match(self._currentline)
    if matches:
      mark = int(matches.group(1))
      self._advance_currentline()
    return mark

  def _parse_optional_parent_ref(self, refname):
    """
    If the current line contains a reference to a parent commit, then
    parse it and advance the current line; otherwise return None. Note
    that the name of the reference ('from', 'merge') must match the
    refname arg.
    """
    orig_baseref, baseref = None, None
    rule, altrule = self._parent_regexes[refname]
    matches = rule.match(self._currentline)
    if matches:
      orig_baseref = int(matches.group(1))
      # We translate the parent commit mark to what it needs to be in
      # our mark namespace
      baseref = _IDS.translate(orig_baseref)
      self._advance_currentline()
    else:
      matches = altrule.match(self._currentline)
      if matches:
        orig_baseref = matches.group(1)
        baseref = orig_baseref
        self._advance_currentline()
    return orig_baseref, baseref

  def _parse_optional_filechange(self):
    """
    If the current line contains a file-change object, then parse it
    and advance the current line; otherwise return None. We only care
    about file changes of type b'M' and b'D' (these are the only types
    of file-changes that fast-export will provide).
    """
    filechange = None
    changetype = self._currentline[0:1]
    if changetype == b'M':
      (changetype, mode, idnum, path) = self._currentline.split(None, 3)
      if idnum[0:1] == b':':
        idnum = idnum[1:]
      path = path.rstrip(b'\n')
      # We translate the idnum to our id system
      if len(idnum) != 40:
        idnum = _IDS.translate( int(idnum) )
      if idnum is not None:
        if path.startswith(b'"'):
          path = PathQuoting.dequote(path)
        filechange = FileChange(b'M', path, idnum, mode)
      else:
        filechange = b'skipped'
      self._advance_currentline()
    elif changetype == b'D':
      (changetype, path) = self._currentline.split(None, 1)
      path = path.rstrip(b'\n')
      if path.startswith(b'"'):
        path = PathQuoting.dequote(path)
      filechange = FileChange(b'D', path)
      self._advance_currentline()
    elif changetype == b'R':  # pragma: no cover (now avoid fast-export renames)
      rest = self._currentline[2:-1]
      if rest.startswith(b'"'):
        m = self._quoted_string_re.match(rest)
        if not m:
          raise SystemExit(_("Couldn't parse rename source"))
        orig = PathQuoting.dequote(m.group(0))
        new = rest[m.end()+1:]
      else:
        orig, new = rest.split(b' ', 1)
      if new.startswith(b'"'):
        new = PathQuoting.dequote(new)
      filechange = FileChange(b'R', orig, new)
      self._advance_currentline()
    return filechange

  def _parse_original_id(self):
    original_id = self._currentline[len(b'original-oid '):].rstrip()
    self._advance_currentline()
    return original_id

  def _parse_encoding(self):
    encoding = self._currentline[len(b'encoding '):].rstrip()
    self._advance_currentline()
    return encoding

  def _parse_ref_line(self, refname):
    """
    Parses string data (often a branch name) from current-line. The name of
    the string data must match the refname arg. The program will crash if
    current-line does not match, so current-line will always be advanced if
    this method returns.
    """
    matches = self._refline_regexes[refname].match(self._currentline)
    if not matches:
      raise SystemExit(_("Malformed %(refname)s line: '%(line)s'") %
                       ({'refname': refname, 'line':self._currentline})
                       ) # pragma: no cover
    ref = matches.group(1)
    self._advance_currentline()
    return ref

  def _parse_user(self, usertype):
    """
    Get user name, email, datestamp from current-line. Current-line will
    be advanced.
    """
    user_regex = self._user_regexes[usertype]
    (name, email, when) = user_regex.match(self._currentline).groups()

    self._advance_currentline()
    return (name, email, when)

  def _parse_data(self):
    """
    Reads data from _input. Current-line will be advanced until it is beyond
    the data.
    """
    fields = self._currentline.split()
    assert fields[0] == b'data'
    size = int(fields[1])
    data = self._input.read(size)
    self._advance_currentline()
    if self._currentline == b'\n':
      self._advance_currentline()
    return data

  def _parse_blob(self):
    """
    Parse input data into a Blob object. Once the Blob has been created, it
    will be handed off to the appropriate callbacks. Current-line will be
    advanced until it is beyond this blob's data. The Blob will be dumped
    to _output once everything else is done (unless it has been skipped by
    the callback).
    """
    # Parse the Blob
    self._advance_currentline()
    id_ = self._parse_optional_mark()

    original_id = None
    if self._currentline.startswith(b'original-oid'):
      original_id = self._parse_original_id();

    data = self._parse_data()
    if self._currentline == b'\n':
      self._advance_currentline()

    # Create the blob
    blob = Blob(data, original_id)

    # If fast-export text had a mark for this blob, need to make sure this
    # mark translates to the blob's true id.
    if id_:
      blob.old_id = id_
      _IDS.record_rename(id_, blob.id)

    # Call any user callback to allow them to use/modify the blob
    if self._blob_callback:
      self._blob_callback(blob)

    # Now print the resulting blob
    if not blob.dumped:
      blob.dump(self._output)

  def _parse_reset(self):
    """
    Parse input data into a Reset object. Once the Reset has been created,
    it will be handed off to the appropriate callbacks. Current-line will
    be advanced until it is beyond the reset data. The Reset will be dumped
    to _output once everything else is done (unless it has been skipped by
    the callback).
    """
    # Parse the Reset
    ref = self._parse_ref_line(b'reset')
    self._exported_refs.add(ref)
    ignoreme, from_ref = self._parse_optional_parent_ref(b'from')
    if self._currentline == b'\n':
      self._advance_currentline()

    # fast-export likes to print extraneous resets that serve no purpose.
    # While we could continue processing such resets, that is a waste of
    # resources.  Also, we want to avoid recording that this ref was
    # seen in such cases, since this ref could be rewritten to nothing.
    if not from_ref:
      self._latest_commit.pop(ref, None)
      self._latest_orig_commit.pop(ref, None)
      return

    # Create the reset
    reset = Reset(ref, from_ref)

    # Call any user callback to allow them to modify the reset
    if self._reset_callback:
      self._reset_callback(reset)

    # Update metadata
    self._latest_commit[reset.ref] = reset.from_ref
    self._latest_orig_commit[reset.ref] = reset.from_ref

    # Now print the resulting reset
    if not reset.dumped:
      self._imported_refs.add(reset.ref)
      reset.dump(self._output)

  def _parse_commit(self):
    """
    Parse input data into a Commit object. Once the Commit has been created,
    it will be handed off to the appropriate callbacks. Current-line will
    be advanced until it is beyond the commit data. The Commit will be dumped
    to _output once everything else is done (unless it has been skipped by
    the callback OR the callback has removed all file-changes from the commit).
    """
    # Parse the Commit. This may look involved, but it's pretty simple; it only
    # looks bad because a commit object contains many pieces of data.
    branch = self._parse_ref_line(b'commit')
    self._exported_refs.add(branch)
    id_ = self._parse_optional_mark()

    original_id = None
    if self._currentline.startswith(b'original-oid'):
      original_id = self._parse_original_id();

    author_name = None
    author_email = None
    if self._currentline.startswith(b'author'):
      (author_name, author_email, author_date) = self._parse_user(b'author')

    (committer_name, committer_email, committer_date) = \
      self._parse_user(b'committer')

    if not author_name and not author_email:
      (author_name, author_email, author_date) = \
        (committer_name, committer_email, committer_date)

    encoding = None
    if self._currentline.startswith(b'encoding '):
      encoding = self._parse_encoding()

    commit_msg = self._parse_data()

    pinfo = [self._parse_optional_parent_ref(b'from')]
    # Due to empty pruning, we can have real 'from' and 'merge' lines that
    # due to commit rewriting map to a parent of None.  We need to record
    # 'from' if its non-None, and we need to parse all 'merge' lines.
    while self._currentline.startswith(b'merge '):
      pinfo.append(self._parse_optional_parent_ref(b'merge'))
    orig_parents, parents = [list(tmp) for tmp in zip(*pinfo)]

    # No parents is oddly represented as [None] instead of [], due to the
    # special 'from' handling.  Convert it here to a more canonical form.
    if parents == [None]:
      parents = []
    if orig_parents == [None]:
      orig_parents = []

    # fast-import format is kinda stupid in that it allows implicit parents
    # based on the branch name instead of requiring them to be specified by
    # 'from' directives.  The only way to get no parent is by using a reset
    # directive first, which clears the latest_commit_for_this_branch tracking.
    if not orig_parents and self._latest_commit.get(branch):
      parents = [self._latest_commit[branch]]
    if not orig_parents and self._latest_orig_commit.get(branch):
      orig_parents = [self._latest_orig_commit[branch]]

    # Get the list of file changes
    file_changes = []
    file_change = self._parse_optional_filechange()
    had_file_changes = file_change is not None
    while file_change:
      if not (type(file_change) == bytes and file_change == b'skipped'):
        file_changes.append(file_change)
      file_change = self._parse_optional_filechange()
    if self._currentline == b'\n':
      self._advance_currentline()

    # Okay, now we can finally create the Commit object
    commit = Commit(branch,
                    author_name,    author_email,    author_date,
                    committer_name, committer_email, committer_date,
                    commit_msg, file_changes, parents, original_id, encoding)

    # If fast-export text had a mark for this commit, need to make sure this
    # mark translates to the commit's true id.
    if id_:
      commit.old_id = id_
      _IDS.record_rename(id_, commit.id)

    # Call any user callback to allow them to modify the commit
    aux_info = {'orig_parents': orig_parents,
                'had_file_changes': had_file_changes}
    if self._commit_callback:
      self._commit_callback(commit, aux_info)

    # Now print the resulting commit, or if prunable skip it
    self._latest_orig_commit[branch] = commit.id
    if not (commit.old_id or commit.id) in _SKIPPED_COMMITS:
      self._latest_commit[branch] = commit.id
    if not commit.dumped:
      self._imported_refs.add(commit.branch)
      commit.dump(self._output)

  def _parse_tag(self):
    """
    Parse input data into a Tag object. Once the Tag has been created,
    it will be handed off to the appropriate callbacks. Current-line will
    be advanced until it is beyond the tag data. The Tag will be dumped
    to _output once everything else is done (unless it has been skipped by
    the callback).
    """
    # Parse the Tag
    tag = self._parse_ref_line(b'tag')
    self._exported_refs.add(b'refs/tags/'+tag)
    id_ = self._parse_optional_mark()
    ignoreme, from_ref = self._parse_optional_parent_ref(b'from')

    original_id = None
    if self._currentline.startswith(b'original-oid'):
      original_id = self._parse_original_id();

    tagger_name, tagger_email, tagger_date = None, None, None
    if self._currentline.startswith(b'tagger'):
      (tagger_name, tagger_email, tagger_date) = self._parse_user(b'tagger')
    tag_msg = self._parse_data()
    if self._currentline == b'\n':
      self._advance_currentline()

    # Create the tag
    tag = Tag(tag, from_ref,
              tagger_name, tagger_email, tagger_date, tag_msg,
              original_id)

    # If fast-export text had a mark for this tag, need to make sure this
    # mark translates to the tag's true id.
    if id_:
      tag.old_id = id_
      _IDS.record_rename(id_, tag.id)

    # Call any user callback to allow them to modify the tag
    if self._tag_callback:
      self._tag_callback(tag)

    # The tag might not point at anything that still exists (self.from_ref
    # will be None if the commit it pointed to and all its ancestors were
    # pruned due to being empty)
    if tag.from_ref:
      # Print out this tag's information
      if not tag.dumped:
        self._imported_refs.add(b'refs/tags/'+tag.ref)
        tag.dump(self._output)
    else:
      tag.skip()

  def _parse_progress(self):
    """
    Parse input data into a Progress object. Once the Progress has
    been created, it will be handed off to the appropriate
    callbacks. Current-line will be advanced until it is beyond the
    progress data. The Progress will be dumped to _output once
    everything else is done (unless it has been skipped by the callback).
    """
    # Parse the Progress
    message = self._parse_ref_line(b'progress')
    if self._currentline == b'\n':
      self._advance_currentline()

    # Create the progress message
    progress = Progress(message)

    # Call any user callback to allow them to modify the progress messsage
    if self._progress_callback:
      self._progress_callback(progress)

    # NOTE: By default, we do NOT print the progress message; git
    # fast-import would write it to fast_import_pipes which could mess with
    # our parsing of output from the 'ls' and 'get-mark' directives we send
    # to fast-import.  If users want these messages, they need to process
    # and handle them in the appropriate callback above.

  def _parse_checkpoint(self):
    """
    Parse input data into a Checkpoint object. Once the Checkpoint has
    been created, it will be handed off to the appropriate
    callbacks. Current-line will be advanced until it is beyond the
    checkpoint data. The Checkpoint will be dumped to _output once
    everything else is done (unless it has been skipped by the callback).
    """
    # Parse the Checkpoint
    self._advance_currentline()
    if self._currentline == b'\n':
      self._advance_currentline()

    # Create the checkpoint
    checkpoint = Checkpoint()

    # Call any user callback to allow them to drop the checkpoint
    if self._checkpoint_callback:
      self._checkpoint_callback(checkpoint)

    # NOTE: By default, we do NOT print the checkpoint message; although it
    # we would only realistically get them with --stdin, the fact that we
    # are filtering makes me think the checkpointing is less likely to be
    # reasonable.  In fact, I don't think it's necessary in general.  If
    # users do want it, they should process it in the checkpoint_callback.

  def _parse_literal_command(self):
    """
    Parse literal command.  Then just dump the line as is.
    """
    # Create the literal command object
    command = LiteralCommand(self._currentline)
    self._advance_currentline()

    # Now print the resulting literal command
    if not command.dumped:
      command.dump(self._output)

  def insert(self, obj):
    assert not obj.dumped
    obj.dump(self._output)
    if type(obj) == Commit:
      self._imported_refs.add(obj.branch)
    elif type(obj) in (Reset, Tag):
      self._imported_refs.add(obj.ref)

  def run(self, input, output):
    """
    This method filters fast export output.
    """
    # Set input. If no args provided, use stdin.
    self._input = input
    self._output = output

    # Run over the input and do the filtering
    self._advance_currentline()
    while self._currentline:
      if   self._currentline.startswith(b'blob'):
        self._parse_blob()
      elif self._currentline.startswith(b'reset'):
        self._parse_reset()
      elif self._currentline.startswith(b'commit'):
        self._parse_commit()
      elif self._currentline.startswith(b'tag'):
        self._parse_tag()
      elif self._currentline.startswith(b'progress'):
        self._parse_progress()
      elif self._currentline.startswith(b'checkpoint'):
        self._parse_checkpoint()
      elif self._currentline.startswith(b'feature'):
        self._parse_literal_command()
      elif self._currentline.startswith(b'option'):
        self._parse_literal_command()
      elif self._currentline.startswith(b'done'):
        if self._done_callback:
          self._done_callback()
        self._parse_literal_command()
        # Prevent confusion from others writing additional stuff that'll just
        # be ignored
        self._output.close()
      elif self._currentline.startswith(b'#'):
        self._parse_literal_command()
      elif self._currentline.startswith(b'get-mark') or \
           self._currentline.startswith(b'cat-blob') or \
           self._currentline.startswith(b'ls'):
        raise SystemExit(_("Unsupported command: '%s'") % self._currentline)
      else:
        raise SystemExit(_("Could not parse line: '%s'") % self._currentline)

  def get_exported_and_imported_refs(self):
    return self._exported_refs, self._imported_refs

def record_id_rename(old_id, new_id):
  """
  Register a new translation
  """
  handle_transitivity = True
  _IDS.record_rename(old_id, new_id, handle_transitivity)

# Internal globals
_IDS = _IDs()
_SKIPPED_COMMITS = set()
HASH_TO_ID = {}
ID_TO_HASH = {}

class SubprocessWrapper(object):
  @staticmethod
  def decodify(args):
    if type(args) == str:
      return args
    else:
      assert type(args) == list
      return [decode(x) if type(x)==bytes else x for x in args]

  @staticmethod
  def call(*args, **kwargs):
    if 'cwd' in kwargs:
      kwargs['cwd'] = decode(kwargs['cwd'])
    return subprocess.call(SubprocessWrapper.decodify(*args), **kwargs)

  @staticmethod
  def check_output(*args, **kwargs):
    if 'cwd' in kwargs:
      kwargs['cwd'] = decode(kwargs['cwd'])
    return subprocess.check_output(SubprocessWrapper.decodify(*args), **kwargs)

  @staticmethod
  def check_call(*args, **kwargs): # pragma: no cover  # used by filter-lamely
    if 'cwd' in kwargs:
      kwargs['cwd'] = decode(kwargs['cwd'])
    return subprocess.check_call(SubprocessWrapper.decodify(*args), **kwargs)

  @staticmethod
  def Popen(*args, **kwargs):
    if 'cwd' in kwargs:
      kwargs['cwd'] = decode(kwargs['cwd'])
    return subprocess.Popen(SubprocessWrapper.decodify(*args), **kwargs)

subproc = subprocess
if platform.system() == 'Windows' or 'PRETEND_UNICODE_ARGS' in os.environ:
  subproc = SubprocessWrapper

class GitUtils(object):
  @staticmethod
  def get_commit_count(repo, *args):
    """
    Return the number of commits that have been made on repo.
    """
    if not args:
      args = ['--all']
    if len(args) == 1 and isinstance(args[0], list):
      args = args[0]
    p = subproc.Popen(["git", "rev-list", "--count"] + args,
                      stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                      cwd=repo)
    if p.wait() != 0:
      raise SystemExit(_("%s does not appear to be a valid git repository")
                       % decode(repo))
    return int(p.stdout.read())

  @staticmethod
  def get_total_objects(repo):
    """
    Return the number of objects (both packed and unpacked)
    """
    p1 = subproc.Popen(["git", "count-objects", "-v"],
                          stdout=subprocess.PIPE, cwd=repo)
    lines = p1.stdout.read().splitlines()
    # Return unpacked objects + packed-objects
    return int(lines[0].split()[1]) + int(lines[2].split()[1])

  @staticmethod
  def is_repository_bare(repo_working_dir):
    out = subproc.check_output('git rev-parse --is-bare-repository'.split(),
                               cwd=repo_working_dir)
    return (out.strip() == b'true')

  @staticmethod
  def determine_git_dir(repo_working_dir):
    d = subproc.check_output('git rev-parse --git-dir'.split(),
                             cwd=repo_working_dir).strip()
    if repo_working_dir==b'.' or d.startswith(b'/'):
      return d
    return os.path.join(repo_working_dir, d)

  @staticmethod
  def get_refs(repo_working_dir):
    try:
      output = subproc.check_output('git show-ref'.split(),
                                    cwd=repo_working_dir)
    except subprocess.CalledProcessError as e:
      # If error code is 1, there just aren't any refs; i.e. new repo.
      # If error code is other than 1, some other error (e.g. not a git repo)
      if e.returncode != 1:
        raise SystemExit('fatal: {}'.format(e))
      output = ''
    return dict(reversed(x.split()) for x in output.splitlines())

  @staticmethod
  def get_blob_sizes(quiet = False):
    blob_size_progress = ProgressWriter()
    num_blobs = 0
    processed_blobs_msg = _("Processed %d blob sizes")

    # Get sizes of blobs by sha1
    cmd = '--batch-check=%(objectname) %(objecttype) ' + \
          '%(objectsize) %(objectsize:disk)'
    cf = subproc.Popen(['git', 'cat-file', '--batch-all-objects', cmd],
                       bufsize = -1,
                       stdout = subprocess.PIPE)
    unpacked_size = {}
    packed_size = {}
    for line in cf.stdout:
      sha, objtype, objsize, objdisksize = line.split()
      objsize, objdisksize = int(objsize), int(objdisksize)
      if objtype == b'blob':
        unpacked_size[sha] = objsize
        packed_size[sha] = objdisksize
        num_blobs += 1
      if not quiet:
        blob_size_progress.show(processed_blobs_msg % num_blobs)
    cf.wait()
    if not quiet:
      blob_size_progress.finish()
    return unpacked_size, packed_size

  @staticmethod
  def get_file_changes(repo, parent_hash, commit_hash):
    """
    Return a FileChanges list with the differences between parent_hash
    and commit_hash
    """
    file_changes = []

    cmd = ["git", "diff-tree", "-r", parent_hash, commit_hash]
    output = subproc.check_output(cmd, cwd=repo)
    for line in output.splitlines():
      fileinfo, path = line.split(b'\t', 1)
      if path.startswith(b'"'):
        path = PathQuoting.dequote(path)
      oldmode, mode, oldhash, newhash, changetype = fileinfo.split()
      if changetype == b'D':
        file_changes.append(FileChange(b'D', path))
      elif changetype in (b'A', b'M', b'T'):
        identifier = HASH_TO_ID.get(newhash, newhash)
        file_changes.append(FileChange(b'M', path, identifier, mode))
      else: # pragma: no cover
        raise SystemExit("Unknown change type for line {}".format(line))

    return file_changes

  @staticmethod
  def print_my_version():
    with open(__file__, 'br') as f:
      contents = f.read()
    # If people replaced @@LOCALEDIR@@ string to point at their local
    # directory, undo it so we can get original source version.
    contents = re.sub(br'\A#\!.*',
                      br'#!/usr/bin/env python3', contents)
    contents = re.sub(br'(\("GIT_TEXTDOMAINDIR"\) or ").*"',
                      br'\1@@LOCALEDIR@@"', contents)

    cmd = 'git hash-object --stdin'.split()
    version = subproc.check_output(cmd, input=contents).strip()
    print(decode(version[0:12]))

class FilteringOptions(object):
  default_replace_text = b'***REMOVED***'
  class AppendFilter(argparse.Action):
    def __call__(self, parser, namespace, values, option_string=None):
      user_path = values
      suffix = option_string[len('--path-'):] or 'match'
      if suffix.startswith('rename'):
        mod_type = 'rename'
        match_type = option_string[len('--path-rename-'):] or 'match'
        values = values.split(b':')
        if len(values) != 2:
          raise SystemExit(_("Error: --path-rename expects one colon in its"
                             " argument: <old_name:new_name>."))
        if values[0] and values[1] and not (
           values[0].endswith(b'/') == values[1].endswith(b'/')):
          raise SystemExit(_("Error: With --path-rename, if OLD_NAME and "
                             "NEW_NAME are both non-empty and either ends "
                             "with a slash then both must."))
        if any(v.startswith(b'/') for v in values):
          raise SystemExit(_("Error: Pathnames cannot begin with a '/'"))
        components = values[0].split(b'/') + values[1].split(b'/')
      else:
        mod_type = 'filter'
        match_type = suffix
        components = values.split(b'/')
        if values.startswith(b'/'):
          raise SystemExit(_("Error: Pathnames cannot begin with a '/'"))
      for illegal_path in [b'.', b'..']:
        if illegal_path in components:
          raise SystemExit(_("Error: Invalid path component '%s' found in '%s'")
                           % (decode(illegal_path), decode(user_path)))
      if match_type == 'regex':
        values = re.compile(values)
      items = getattr(namespace, self.dest, []) or []
      items.append((mod_type, match_type, values))
      if (match_type, mod_type) == ('glob', 'filter'):
        if not values.endswith(b'*'):
          extension = b'*' if values.endswith(b'/') else b'/*'
          items.append((mod_type, match_type, values+extension))
      setattr(namespace, self.dest, items)

  class HelperFilter(argparse.Action):
    def __call__(self, parser, namespace, values, option_string=None):
      af = FilteringOptions.AppendFilter(dest='path_changes',
                                         option_strings=None)
      dirname = values if values[-1:] == b'/' else values+b'/'
      if option_string == '--subdirectory-filter':
        af(parser, namespace, dirname,     '--path-match')
        af(parser, namespace, dirname+b':', '--path-rename')
      elif option_string == '--to-subdirectory-filter':
        af(parser, namespace, b':'+dirname, '--path-rename')
      else:
        raise SystemExit(_("Error: HelperFilter given invalid option_string: %s")
                         % option_string) # pragma: no cover

  class FileWithPathsFilter(argparse.Action):
    def __call__(self, parser, namespace, values, option_string=None):
      if not namespace.path_changes:
        namespace.path_changes = []
      namespace.path_changes += FilteringOptions.get_paths_from_file(values)

  @staticmethod
  def create_arg_parser():
    # Include usage in the summary, so we can put the description first
    summary = _('''Rewrite (or analyze) repository history

    git-filter-repo destructively rewrites history (unless --analyze or
    --dry-run are given) according to specified rules.  It refuses to do any
    rewriting unless either run from a clean fresh clone, or --force was
    given.

    Basic Usage:
      git-filter-repo --analyze
      git-filter-repo [FILTER/RENAME/CONTROL OPTIONS]

    See EXAMPLES section for details.
    ''').rstrip()

    # Provide a long helpful examples section
    example_text = _('''CALLBACKS

    All callback functions are of the same general format.  For a command line
    argument like
      --foo-callback 'BODY'

    the following code will be compiled and called:
      def foo_callback(foo):
        BODY

    Thus, to replace 'Jon' with 'John' in author/committer/tagger names:
      git filter-repo --name-callback 'return name.replace(b"Jon", b"John")'

    To remove all 'Tested-by' tags in commit (or tag) messages:
      git filter-repo --message-callback 'return re.sub(br"\\nTested-by:.*", "", message)'

    To remove all .DS_Store files:
      git filter-repo --filename-callback 'return None if os.path.basename(filename) == b".DS_Store" else filename'

    Note that if BODY resolves to a filename, then the contents of that file
    will be used as the BODY in the callback function.

    For more detailed examples and explanations AND caveats, see
      https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html#CALLBACKS

EXAMPLES

    To get a bunch of reports mentioning renames that have occurred in
    your repo and listing sizes of objects aggregated by any of path,
    directory, extension, or blob-id:
      git filter-repo --analyze

    (These reports can help you choose how to filter your repo; it can
    be useful to re-run this command after filtering to regenerate the
    report and verify the changes look correct.)

    To extract the history that touched just 'guides' and 'tools/releases':
      git filter-repo --path guides/ --path tools/releases

    To remove foo.zip and bar/baz/zips from every revision in history:
      git filter-repo --path foo.zip --path bar/baz/zips/ --invert-paths

    To replace the text 'password' with 'p455w0rd':
      git filter-repo --replace-text <(echo "password==>p455w0rd")

    To use the current version of the .mailmap file to update authors,
    committers, and taggers throughout history and make it permanent:
      git filter-repo --use-mailmap

    To extract the history of 'src/', rename all files to have a new leading
    directory 'my-module' (e.g. src/foo.java -> my-module/src/foo.java), and
    add a 'my-module-' prefix to all tags:
      git filter-repo --path src/ --to-subdirectory-filter my-module --tag-rename '':'my-module-'

    For more detailed examples and explanations, see
      https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html#EXAMPLES''')

    # Create the basic parser
    parser = argparse.ArgumentParser(description=summary,
                                     usage = argparse.SUPPRESS,
                                     add_help = False,
                                     epilog = example_text,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)

    analyze = parser.add_argument_group(title=_("Analysis"))
    analyze.add_argument('--analyze', action='store_true',
        help=_("Analyze repository history and create a report that may be "
               "useful in determining what to filter in a subsequent run. "
               "Will not modify your repo."))
    analyze.add_argument('--report-dir',
        metavar='DIR_OR_FILE',
        type=os.fsencode,
        dest='report_dir',
        help=_("Directory to write report, defaults to GIT_DIR/filter_repo/analysis,"
               "refuses to run if exists, --force delete existing dir first."))

    path = parser.add_argument_group(title=_("Filtering based on paths "
                                             "(see also --filename-callback)"),
                                     description=textwrap.dedent(_("""
           These options specify the paths to select.  Note that much like git
           itself, renames are NOT followed so you may need to specify multiple
           paths, e.g. `--path olddir/ --path newdir/`
           """[1:])))

    path.add_argument('--invert-paths', action='store_false', dest='inclusive',
        help=_("Invert the selection of files from the specified "
               "--path-{match,glob,regex} options below, i.e. only select "
               "files matching none of those options."))

    path.add_argument('--path-match', '--path', metavar='DIR_OR_FILE',
        type=os.fsencode,
        action=FilteringOptions.AppendFilter, dest='path_changes',
        help=_("Exact paths (files or directories) to include in filtered "
               "history.  Multiple --path options can be specified to get "
               "a union of paths."))
    path.add_argument('--path-glob', metavar='GLOB', type=os.fsencode,
        action=FilteringOptions.AppendFilter, dest='path_changes',
        help=_("Glob of paths to include in filtered history. Multiple "
               "--path-glob options can be specified to get a union of "
               "paths."))
    path.add_argument('--path-regex', metavar='REGEX', type=os.fsencode,
        action=FilteringOptions.AppendFilter, dest='path_changes',
        help=_("Regex of paths to include in filtered history. Multiple "
               "--path-regex options can be specified to get a union of "
               "paths"))
    path.add_argument('--use-base-name', action='store_true',
        help=_("Match on file base name instead of full path from the top "
               "of the repo.  Incompatible with --path-rename, and "
               "incompatible with matching against directory names."))

    rename = parser.add_argument_group(title=_("Renaming based on paths "
                                             "(see also --filename-callback)"))
    rename.add_argument('--path-rename', '--path-rename-match',
        metavar='OLD_NAME:NEW_NAME', dest='path_changes', type=os.fsencode,
        action=FilteringOptions.AppendFilter,
        help=_("Path to rename; if filename or directory matches OLD_NAME "
               "rename to NEW_NAME.  Multiple --path-rename options can be "
               "specified.  NOTE: If you combine filtering options with "
               "renaming ones, do not rely on a rename argument to select "
               "paths; you also need a filter to select them."))

    helpers = parser.add_argument_group(title=_("Path shortcuts"))
    helpers.add_argument('--paths-from-file', metavar='FILENAME',
        type=os.fsencode,
        action=FilteringOptions.FileWithPathsFilter, dest='path_changes',
        help=_("Specify several path filtering and renaming directives, one "
               "per line.  Lines with '==>' in them specify path renames, "
               "and lines can begin with 'literal:' (the default), 'glob:', "
               "or 'regex:' to specify different matching styles.  Blank "
               "lines and lines starting with a '#' are ignored."))
    helpers.add_argument('--subdirectory-filter', metavar='DIRECTORY',
        action=FilteringOptions.HelperFilter, type=os.fsencode,
        help=_("Only look at history that touches the given subdirectory "
               "and treat that directory as the project root.  Equivalent "
               "to using '--path DIRECTORY/ --path-rename DIRECTORY/:'"))
    helpers.add_argument('--to-subdirectory-filter', metavar='DIRECTORY',
        action=FilteringOptions.HelperFilter, type=os.fsencode,
        help=_("Treat the project root as instead being under DIRECTORY. "
               "Equivalent to using '--path-rename :DIRECTORY/'"))

    contents = parser.add_argument_group(title=_("Content editing filters "
                                                 "(see also --blob-callback)"))
    contents.add_argument('--replace-text', metavar='EXPRESSIONS_FILE',
        help=_("A file with expressions that, if found, will be replaced. "
               "By default, each expression is treated as literal text, "
               "but 'regex:' and 'glob:' prefixes are supported.  You can "
               "end the line with '==>' and some replacement text to "
               "choose a replacement choice other than the default of '{}'."
               .format(decode(FilteringOptions.default_replace_text))))
    contents.add_argument('--strip-blobs-bigger-than', metavar='SIZE',
                          dest='max_blob_size', default=0,
        help=_("Strip blobs (files) bigger than specified size (e.g. '5M', "
               "'2G', etc)"))
    contents.add_argument('--strip-blobs-with-ids', metavar='BLOB-ID-FILENAME',
        help=_("Read git object ids from each line of the given file, and "
               "strip all of them from history"))

    refrename = parser.add_argument_group(title=_("Renaming of refs "
                                              "(see also --refname-callback)"))
    refrename.add_argument('--tag-rename', metavar='OLD:NEW', type=os.fsencode,
        help=_("Rename tags starting with OLD to start with NEW.  For "
               "example, --tag-rename foo:bar will rename tag foo-1.2.3 "
               "to bar-1.2.3; either OLD or NEW can be empty."))

    messages = parser.add_argument_group(title=_("Filtering of commit messages "
                                               "(see also --message-callback)"))
    messages.add_argument('--replace-message', metavar='EXPRESSIONS_FILE',
        help=_("A file with expressions that, if found in commit messages, "
               "will be replaced. This file uses the same syntax as "
               "--replace-text."))
    messages.add_argument('--preserve-commit-hashes', action='store_true',
        help=_("By default, since commits are rewritten and thus gain new "
               "hashes, references to old commit hashes in commit messages "
               "are replaced with new commit hashes (abbreviated to the same "
               "length as the old reference).  Use this flag to turn off "
               "updating commit hashes in commit messages."))
    messages.add_argument('--preserve-commit-encoding', action='store_true',
        help=_("Do not reencode commit messages into UTF-8.  By default, if "
               "the commit object specifies an encoding for the commit "
               "message, the message is re-encoded into UTF-8."))

    people = parser.add_argument_group(title=_("Filtering of names & emails "
                                               "(see also --name-callback "
                                               "and --email-callback)"))
    people.add_argument('--mailmap', dest='mailmap', metavar='FILENAME',
        type=os.fsencode,
        help=_("Use specified mailmap file (see git-shortlog(1) for "
               "details on the format) when rewriting author, committer, "
               "and tagger names and emails.  If the specified file is "
               "part of git history, historical versions of the file will "
               "be ignored; only the current contents are consulted."))
    people.add_argument('--use-mailmap', dest='mailmap',
        action='store_const', const=b'.mailmap',
        help=_("Same as: '--mailmap .mailmap' "))

    parents = parser.add_argument_group(title=_("Parent rewriting"))
    parents.add_argument('--replace-refs', default=None,
                         choices=['delete-no-add', 'delete-and-add',
                                  'update-no-add', 'update-or-add',
                                  'update-and-add'],
        help=_("Replace refs (see git-replace(1)) are used to rewrite "
               "parents (unless turned off by the usual git mechanism); this "
               "flag specifies what do do with those refs afterward. "
               "Replace refs can either be deleted or updated to point at new "
               "commit hashes.  Also, new replace refs can be added for each "
               "commit rewrite.  With 'update-or-add', new replace refs are "
               "only added for commit rewrites that aren't used to update an "
               "existing replace ref. default is 'update-and-add' if "
               "$GIT_DIR/filter-repo/already_ran does not exist; "
               "'update-or-add' otherwise."))
    parents.add_argument('--prune-empty', default='auto',
                         choices=['always', 'auto', 'never'],
        help=_("Whether to prune empty commits.  'auto' (the default) means "
               "only prune commits which become empty (not commits which were "
               "empty in the original repo, unless their parent was pruned). "
               "When the parent of a commit is pruned, the first non-pruned "
               "ancestor becomes the new parent."))
    parents.add_argument('--prune-degenerate', default='auto',
                         choices=['always', 'auto', 'never'],
        help=_("Since merge commits are needed for history topology, they "
               "are typically exempt from pruning.  However, they can become "
               "degenerate with the pruning of other commits (having fewer "
               "than two parents, having one commit serve as both parents, or "
               "having one parent as the ancestor of the other.)  If such "
               "merge commits have no file changes, they can be pruned.  The "
               "default ('auto') is to only prune empty merge commits which "
               "become degenerate (not which started as such)."))
    parents.add_argument('--no-ff', action='store_true',
        help=_("Even if the first parent is or becomes an ancestor of another "
               "parent, do not prune it.  This modifies how "
               "--prune-degenerate behaves, and may be useful in projects who "
               "always use merge --no-ff."))

    callback = parser.add_argument_group(title=_("Generic callback code snippets"))
    callback.add_argument('--filename-callback', metavar="FUNCTION_BODY_OR_FILE",
        help=_("Python code body for processing filenames; see CALLBACKS "
               "sections below."))
    callback.add_argument('--message-callback', metavar="FUNCTION_BODY_OR_FILE",
        help=_("Python code body for processing messages (both commit "
               "messages and tag messages); see CALLBACKS section below."))
    callback.add_argument('--name-callback', metavar="FUNCTION_BODY_OR_FILE",
        help=_("Python code body for processing names of people; see "
               "CALLBACKS section below."))
    callback.add_argument('--email-callback', metavar="FUNCTION_BODY_OR_FILE",
        help=_("Python code body for processing emails addresses; see "
               "CALLBACKS section below."))
    callback.add_argument('--refname-callback', metavar="FUNCTION_BODY_OR_FILE",
        help=_("Python code body for processing refnames; see CALLBACKS "
               "section below."))

    callback.add_argument('--blob-callback', metavar="FUNCTION_BODY_OR_FILE",
        help=_("Python code body for processing blob objects; see "
               "CALLBACKS section below."))
    callback.add_argument('--commit-callback', metavar="FUNCTION_BODY_OR_FILE",
        help=_("Python code body for processing commit objects; see "
               "CALLBACKS section below."))
    callback.add_argument('--tag-callback', metavar="FUNCTION_BODY_OR_FILE",
        help=_("Python code body for processing tag objects; see CALLBACKS "
               "section below."))
    callback.add_argument('--reset-callback', metavar="FUNCTION_BODY_OR_FILE",
        help=_("Python code body for processing reset objects; see "
               "CALLBACKS section below."))

    desc = _(
      "Specifying alternate source or target locations implies --partial,\n"
      "except that the normal default for --replace-refs is used.  However,\n"
      "unlike normal uses of --partial, this doesn't risk mixing old and new\n"
      "history since the old and new histories are in different repositories.")
    location = parser.add_argument_group(title=_("Location to filter from/to"),
                                         description=desc)
    location.add_argument('--source', type=os.fsencode,
                          help=_("Git repository to read from"))
    location.add_argument('--target', type=os.fsencode,
        help=_("Git repository to overwrite with filtered history"))

    misc = parser.add_argument_group(title=_("Miscellaneous options"))
    misc.add_argument('--help', '-h', action='store_true',
        help=_("Show this help message and exit."))
    misc.add_argument('--version', action='store_true',
        help=_("Display filter-repo's version and exit."))
    misc.add_argument('--force', '-f', action='store_true',
        help=_("Rewrite repository history even if the current repo does not "
               "look like a fresh clone.  History rewriting is irreversible "
               "(and includes immediate pruning of reflogs and old objects), "
               "so be cautious about using this flag."))
    misc.add_argument('--partial', action='store_true',
        help=_("Do a partial history rewrite, resulting in the mixture of "
               "old and new history.  This implies a default of "
               "update-no-add for --replace-refs, disables rewriting "
               "refs/remotes/origin/* to refs/heads/*, disables removing "
               "of the 'origin' remote, disables removing unexported refs, "
               "disables expiring the reflog, and disables the automatic "
               "post-filter gc.  Also, this modifies --tag-rename and "
               "--refname-callback options such that instead of replacing "
               "old refs with new refnames, it will instead create new "
               "refs and keep the old ones around.  Use with caution."))
    # WARNING: --refs presents a problem with become-degenerate pruning:
    #   * Excluding a commit also excludes its ancestors so when some other
    #     commit has an excluded ancestor as a parent we have no way of
    #     knowing what it is an ancestor of without doing a special
    #     full-graph walk.
    misc.add_argument('--refs', nargs='+',
        help=_("Limit history rewriting to the specified refs.  Implies "
               "--partial.  In addition to the normal caveats of --partial "
               "(mixing old and new history, no automatic remapping of "
               "refs/remotes/origin/* to refs/heads/*, etc.), this also may "
               "cause problems for pruning of degenerate empty merge "
               "commits when negative revisions are specified."))

    misc.add_argument('--dry-run', action='store_true',
        help=_("Do not change the repository.  Run `git fast-export` and "
               "filter its output, and save both the original and the "
               "filtered version for comparison.  This also disables "
               "rewriting commit messages due to not knowing new commit "
               "IDs and disables filtering of some empty commits due to "
               "inability to query the fast-import backend." ))
    misc.add_argument('--debug', action='store_true',
        help=_("Print additional information about operations being "
               "performed and commands being run.  When used together "
               "with --dry-run, also show extra information about what "
               "would be run."))
    # WARNING: --state-branch has some problems:
    #   * It does not work well with manually inserted objects (user creating
    #     Blob() or Commit() or Tag() objects and calling
    #     RepoFilter.insert(obj) on them).
    #   * It does not work well with multiple source or multiple target repos
    #   * It doesn't work so well with pruning become-empty commits (though
    #     --refs doesn't work so well with it either)
    # These are probably fixable, given some work (e.g. re-importing the
    # graph at the beginning to get the AncestryGraph right, doing our own
    # export of marks instead of using fast-export --export-marks, etc.), but
    # for now just hide the option.
    misc.add_argument('--state-branch',
        #help=_("Enable incremental filtering by saving the mapping of old "
        #       "to new objects to the specified branch upon exit, and"
        #       "loading that mapping from that branch (if it exists) "
        #       "upon startup."))
        help=argparse.SUPPRESS)
    misc.add_argument('--stdin', action='store_true',
        help=_("Instead of running `git fast-export` and filtering its "
               "output, filter the fast-export stream from stdin.    The "
               "stdin must be in the expected input format (e.g. it needs "
               "to include original-oid directives)."))
    misc.add_argument('--quiet', action='store_true',
        help=_("Pass --quiet to other git commands called"))
    return parser

  @staticmethod
  def sanity_check_args(args):
    if args.analyze and args.path_changes:
      raise SystemExit(_("Error: --analyze is incompatible with --path* flags; "
                         "it's a read-only operation."))
    if args.analyze and args.stdin:
      raise SystemExit(_("Error: --analyze is incompatible with --stdin."))
    # If no path_changes are found, initialize with empty list but mark as
    # not inclusive so that all files match
    if args.path_changes == None:
      args.path_changes = []
      args.inclusive = False
    else:
      # Similarly, if we have no filtering paths, then no path should be
      # filtered out.  Based on how newname() works, the easiest way to
      # achieve that is setting args.inclusive to False.
      if not any(x[0] == 'filter' for x in args.path_changes):
        args.inclusive = False
      # Also check for incompatible --use-base-name and --path-rename flags.
      if args.use_base_name:
        if any(x[0] == 'rename' for x in args.path_changes):
          raise SystemExit(_("Error: --use-base-name and --path-rename are "
                             "incompatible."))
    # Also throw some sanity checks on git version here;
    # PERF: remove these checks once new enough git versions are common
    p = subproc.Popen('git fast-export -h'.split(),
                      stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    output = p.stdout.read()
    if b'--anonymize-map' not in output: # pragma: no cover
      global date_format_permissive
      date_format_permissive = False
    if b'--mark-tags' not in output: # pragma: no cover
      global write_marks
      write_marks = False
      if args.state_branch:
        # We need a version of git-fast-export with --mark-tags
        raise SystemExit(_("Error: need git >= 2.24.0"))
    if b'--reencode' not in output: # pragma: no cover
      if args.preserve_commit_encoding:
        # We need a version of git-fast-export with --reencode
        raise SystemExit(_("Error: need git >= 2.23.0"))
      else:
        # Set args.preserve_commit_encoding to None which we'll check for later
        # to avoid passing --reencode=yes to fast-export (that option was the
        # default prior to git-2.23)
        args.preserve_commit_encoding = None
      # If we don't have fast-exoprt --reencode, we may also be missing
      # diff-tree --combined-all-paths, which is even more important...
      p = subproc.Popen('git diff-tree -h'.split(),
                        stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
      output = p.stdout.read()
      if b'--combined-all-paths' not in output:
        # We need a version of git-diff-tree with --combined-all-paths
        raise SystemExit(_("Error: need git >= 2.22.0"))
    # End of sanity checks on git version
    if args.max_blob_size:
      suffix = args.max_blob_size[-1]
      if suffix not in '1234567890':
        mult = {'K': 1024, 'M': 1024**2, 'G': 1024**3}
        if suffix not in mult:
          raise SystemExit(_("Error: could not parse --strip-blobs-bigger-than"
                             " argument %s")
                           % args.max_blob_size)
        args.max_blob_size = int(args.max_blob_size[0:-1]) * mult[suffix]
      else:
        args.max_blob_size = int(args.max_blob_size)

  @staticmethod
  def get_replace_text(filename):
    replace_literals = []
    replace_regexes = []
    with open(filename, 'br') as f:
      for line in f:
        line = line.rstrip(b'\r\n')

        # Determine the replacement
        replacement = FilteringOptions.default_replace_text
        if b'==>' in line:
          line, replacement = line.rsplit(b'==>', 1)

        # See if we need to match via regex
        regex = None
        if line.startswith(b'regex:'):
          regex = line[6:]
        elif line.startswith(b'glob:'):
          regex = glob_to_regex(line[5:])
        if regex:
          replace_regexes.append((re.compile(regex), replacement))
        else:
          # Otherwise, find the literal we need to replace
          if line.startswith(b'literal:'):
            line = line[8:]
          if not line:
            continue
          replace_literals.append((line, replacement))
    return {'literals': replace_literals, 'regexes':  replace_regexes}

  @staticmethod
  def get_paths_from_file(filename):
    new_path_changes = []
    with open(filename, 'br') as f:
      for line in f:
        line = line.rstrip(b'\r\n')

        # Skip blank lines
        if not line:
          continue
        # Skip comment lines
        if line.startswith(b'#'):
          continue

        # Determine the replacement
        match_type, repl = 'literal', None
        if b'==>' in line:
          line, repl = line.rsplit(b'==>', 1)

        # See if we need to match via regex
        match_type = 'match' # a.k.a. 'literal'
        if line.startswith(b'regex:'):
          match_type = 'regex'
          match = re.compile(line[6:])
        elif line.startswith(b'glob:'):
          match_type = 'glob'
          match = line[5:]
          if repl:
            raise SystemExit(_("Error: In %s, 'glob:' and '==>' are incompatible (renaming globs makes no sense)" % decode(filename)))
        else:
          if line.startswith(b'literal:'):
            match = line[8:]
          else:
            match = line
          if repl is not None:
            if match and repl and match.endswith(b'/') != repl.endswith(b'/'):
              raise SystemExit(_("Error: When rename directories, if OLDNAME "
                                 "and NEW_NAME are both non-empty and either "
                                 "ends with a slash then both must."))

        # Record the filter or rename
        if repl is not None:
          new_path_changes.append(['rename', match_type, (match, repl)])
        else:
          new_path_changes.append(['filter', match_type, match])
          if match_type == 'glob' and not match.endswith(b'*'):
            extension = b'*' if match.endswith(b'/') else b'/*'
            new_path_changes.append(['filter', match_type, match+extension])
      return new_path_changes

  @staticmethod
  def default_options():
    return FilteringOptions.parse_args([], error_on_empty = False)

  @staticmethod
  def parse_args(input_args, error_on_empty = True):
    parser = FilteringOptions.create_arg_parser()
    if not input_args and error_on_empty:
      parser.print_usage()
      raise SystemExit(_("No arguments specified."))
    args = parser.parse_args(input_args)
    if args.help:
      parser.print_help()
      raise SystemExit()
    if args.version:
      GitUtils.print_my_version()
      raise SystemExit()
    FilteringOptions.sanity_check_args(args)
    if args.mailmap:
      args.mailmap = MailmapInfo(args.mailmap)
    if args.replace_text:
      args.replace_text = FilteringOptions.get_replace_text(args.replace_text)
    if args.replace_message:
      args.replace_message = FilteringOptions.get_replace_text(args.replace_message)
    if args.strip_blobs_with_ids:
      with open(args.strip_blobs_with_ids, 'br') as f:
        args.strip_blobs_with_ids = set(f.read().split())
    else:
      args.strip_blobs_with_ids = set()
    if (args.partial or args.refs) and not args.replace_refs:
      args.replace_refs = 'update-no-add'
    args.repack = not (args.partial or args.refs)
    if args.refs or args.source or args.target:
      args.partial = True
    if not args.refs:
      args.refs = ['--all']
    return args

class RepoAnalyze(object):

  # First, several helper functions for analyze_commit()

  @staticmethod
  def equiv_class(stats, filename):
    return stats['equivalence'].get(filename, (filename,))

  @staticmethod
  def setup_equivalence_for_rename(stats, oldname, newname):
    # if A is renamed to B and B is renamed to C, then the user thinks of
    # A, B, and C as all being different names for the same 'file'.  We record
    # this as an equivalence class:
    #   stats['equivalence'][name] = (A,B,C)
    # for name being each of A, B, and C.
    old_tuple = stats['equivalence'].get(oldname, ())
    if newname in old_tuple:
      return
    elif old_tuple:
      new_tuple = tuple(list(old_tuple)+[newname])
    else:
      new_tuple = (oldname, newname)
    for f in new_tuple:
      stats['equivalence'][f] = new_tuple

  @staticmethod
  def setup_or_update_rename_history(stats, commit, oldname, newname):
    rename_commits = stats['rename_history'].get(oldname, set())
    rename_commits.add(commit)
    stats['rename_history'][oldname] = rename_commits

  @staticmethod
  def handle_renames(stats, commit, change_types, filenames):
    for index, change_type in enumerate(change_types):
      if change_type == ord(b'R'):
        oldname, newname = filenames[index], filenames[-1]
        RepoAnalyze.setup_equivalence_for_rename(stats, oldname, newname)
        RepoAnalyze.setup_or_update_rename_history(stats, commit,
                                                   oldname, newname)

  @staticmethod
  def handle_file(stats, graph, commit, modes, shas, filenames):
    mode, sha, filename = modes[-1], shas[-1], filenames[-1]

    # Figure out kind of deletions to undo for this file, and update lists
    # of all-names-by-sha and all-filenames
    delmode = 'tree_deletions'
    if mode != b'040000':
      delmode = 'file_deletions'
      stats['names'][sha].add(filename)
      stats['allnames'].add(filename)

    # If the file (or equivalence class of files) was recorded as deleted,
    # clearly it isn't anymore
    equiv = RepoAnalyze.equiv_class(stats, filename)
    for f in equiv:
      stats[delmode].pop(f, None)

    # If we get a modify/add for a path that was renamed, we may need to break
    # the equivalence class.  However, if the modify/add was on a branch that
    # doesn't have the rename in its history, we are still okay.
    need_to_break_equivalence = False
    if equiv[-1] != filename:
      for rename_commit in stats['rename_history'][filename]:
        if graph.is_ancestor(rename_commit, commit):
          need_to_break_equivalence = True

    if need_to_break_equivalence:
      for f in equiv:
        if f in stats['equivalence']:
          del stats['equivalence'][f]

  @staticmethod
  def analyze_commit(stats, graph, commit, parents, date, file_changes):
    graph.add_commit_and_parents(commit, parents)
    for change in file_changes:
      modes, shas, change_types, filenames = change
      if len(parents) == 1 and change_types.startswith(b'R'):
        change_types = b'R'  # remove the rename score; we don't care
      if modes[-1] == b'160000':
        continue
      elif modes[-1] == b'000000':
        # Track when files/directories are deleted
        for f in RepoAnalyze.equiv_class(stats, filenames[-1]):
          if any(x == b'040000' for x in modes[0:-1]):
            stats['tree_deletions'][f] = date
          else:
            stats['file_deletions'][f] = date
      elif change_types.strip(b'AMT') == b'':
        RepoAnalyze.handle_file(stats, graph, commit, modes, shas, filenames)
      elif modes[-1] == b'040000' and change_types.strip(b'RAM') == b'':
        RepoAnalyze.handle_file(stats, graph, commit, modes, shas, filenames)
      elif change_types.strip(b'RAMT') == b'':
        RepoAnalyze.handle_file(stats, graph, commit, modes, shas, filenames)
        RepoAnalyze.handle_renames(stats, commit, change_types, filenames)
      else:
        raise SystemExit(_("Unhandled change type(s): %(change_type)s "
                           "(in commit %(commit)s)")
                         % ({'change_type': change_types, 'commit': commit})
                         ) # pragma: no cover

  @staticmethod
  def gather_data(args):
    unpacked_size, packed_size = GitUtils.get_blob_sizes()
    stats = {'names': collections.defaultdict(set),
             'allnames' : set(),
             'file_deletions': {},
             'tree_deletions': {},
             'equivalence': {},
             'rename_history': collections.defaultdict(set),
             'unpacked_size': unpacked_size,
             'packed_size': packed_size,
             'num_commits': 0}

    # Setup the rev-list/diff-tree process
    processed_commits_msg = _("Processed %d commits")
    commit_parse_progress = ProgressWriter()
    num_commits = 0
    cmd = ('git rev-list --topo-order --reverse {}'.format(' '.join(args.refs)) +
           ' | git diff-tree --stdin --always --root --format=%H%n%P%n%cd' +
           ' --date=short -M -t -c --raw --combined-all-paths')
    dtp = subproc.Popen(cmd, shell=True, bufsize=-1, stdout=subprocess.PIPE)
    f = dtp.stdout
    line = f.readline()
    if not line:
      raise SystemExit(_("Nothing to analyze; repository is empty."))
    cont = bool(line)
    graph = AncestryGraph()
    while cont:
      commit = line.rstrip()
      parents = f.readline().split()
      date = f.readline().rstrip()

      # We expect a blank line next; if we get a non-blank line then
      # this commit modified no files and we need to move on to the next.
      # If there is no line, we've reached end-of-input.
      line = f.readline()
      if not line:
        cont = False
      line = line.rstrip()

      # If we haven't reached end of input, and we got a blank line meaning
      # a commit that has modified files, then get the file changes associated
      # with this commit.
      file_changes = []
      if cont and not line:
        cont = False
        for line in f:
          if not line.startswith(b':'):
            cont = True
            break
          n = 1+max(1, len(parents))
          assert line.startswith(b':'*(n-1))
          relevant = line[n-1:-1]
          splits = relevant.split(None, n)
          modes = splits[0:n]
          splits = splits[n].split(None, n)
          shas = splits[0:n]
          splits = splits[n].split(b'\t')
          change_types = splits[0]
          filenames = [PathQuoting.dequote(x) for x in splits[1:]]
          file_changes.append([modes, shas, change_types, filenames])

      # If someone is trying to analyze a subset of the history, make sure
      # to avoid dying on commits with parents that we haven't seen before
      if args.refs:
        graph.record_external_commits([p for p in parents
                                       if not p in graph.value])

      # Analyze this commit and update progress
      RepoAnalyze.analyze_commit(stats, graph, commit, parents, date,
                                 file_changes)
      num_commits += 1
      commit_parse_progress.show(processed_commits_msg % num_commits)

    # Show the final commits processed message and record the number of commits
    commit_parse_progress.finish()
    stats['num_commits'] = num_commits

    # Close the output, ensure rev-list|diff-tree pipeline completed successfully
    dtp.stdout.close()
    if dtp.wait():
      raise SystemExit(_("Error: rev-list|diff-tree pipeline failed; see above.")) # pragma: no cover

    return stats

  @staticmethod
  def write_report(reportdir, stats):
    def datestr(datetimestr):
      return datetimestr if datetimestr else _('<present>').encode()

    def dirnames(path):
      while True:
        path = os.path.dirname(path)
        yield path
        if path == b'':
          break

    # Compute aggregate size information for paths, extensions, and dirs
    total_size = {'packed': 0, 'unpacked': 0}
    path_size = {'packed': collections.defaultdict(int),
                 'unpacked': collections.defaultdict(int)}
    ext_size = {'packed': collections.defaultdict(int),
                'unpacked': collections.defaultdict(int)}
    dir_size = {'packed': collections.defaultdict(int),
                'unpacked': collections.defaultdict(int)}
    for sha in stats['names']:
      size = {'packed': stats['packed_size'][sha],
              'unpacked': stats['unpacked_size'][sha]}
      for which in ('packed', 'unpacked'):
        for name in stats['names'][sha]:
          total_size[which] += size[which]
          path_size[which][name] += size[which]
          basename, ext = os.path.splitext(name)
          ext_size[which][ext] += size[which]
          for dirname in dirnames(name):
            dir_size[which][dirname] += size[which]

    # Determine if and when extensions and directories were deleted
    ext_deleted_data = {}
    for name in stats['allnames']:
      when = stats['file_deletions'].get(name, None)

      # Update the extension
      basename, ext = os.path.splitext(name)
      if when is None:
        ext_deleted_data[ext] = None
      elif ext in ext_deleted_data:
        if ext_deleted_data[ext] is not None:
          ext_deleted_data[ext] = max(ext_deleted_data[ext], when)
      else:
        ext_deleted_data[ext] = when

    dir_deleted_data = {}
    for name in dir_size['packed']:
      dir_deleted_data[name] = stats['tree_deletions'].get(name, None)

    with open(os.path.join(reportdir, b"README"), 'bw') as f:
      # Give a basic overview of this file
      f.write(b"== %s ==\n" % _("Overall Statistics").encode())
      f.write(("  %s: %d\n" % (_("Number of commits"),
                               stats['num_commits'])).encode())
      f.write(("  %s: %d\n" % (_("Number of filenames"),
                               len(path_size['packed']))).encode())
      f.write(("  %s: %d\n" % (_("Number of directories"),
                               len(dir_size['packed']))).encode())
      f.write(("  %s: %d\n" % (_("Number of file extensions"),
                               len(ext_size['packed']))).encode())
      f.write(b"\n")
      f.write(("  %s: %d\n" % (_("Total unpacked size (bytes)"),
                               total_size['unpacked'])).encode())
      f.write(("  %s: %d\n" % (_("Total packed size (bytes)"),
                               total_size['packed'])).encode())
      f.write(b"\n")

      # Mention issues with the report
      f.write(("== %s ==\n" % _("Caveats")).encode())
      f.write(("=== %s ===\n" % _("Sizes")).encode())
      f.write(textwrap.dedent(_("""
        Packed size represents what size your repository would be if no
        trees, commits, tags, or other metadata were included (though it may
        fail to represent de-duplication; see below).  It also represents the
        current packing, which may be suboptimal if you haven't gc'ed for a
        while.

        Unpacked size represents what size your repository would be if no
        trees, commits, tags, or other metadata were included AND if no
        files were packed; i.e., without delta-ing or compression.

        Both unpacked and packed sizes can be slightly misleading.  Deleting
        a blob from history not save as much space as the unpacked size,
        because it is obviously normally stored in packed form.  Also,
        deleting a blob from history may not save as much space as its packed
        size either, because another blob could be stored as a delta against
        that blob, so when you remove one blob another blob's packed size may
        grow.

        Also, the sum of the packed sizes can add up to more than the
        repository size; if the same contents appeared in the repository in
        multiple places, git will automatically de-dupe and store only one
        copy, while the way sizes are added in this analysis adds the size
        for each file path that has those contents.  Further, if a file is
        ever reverted to a previous version's contents, the previous
        version's size will be counted multiple times in this analysis, even
        though git will only store it once.
        """)[1:]).encode())
      f.write(b"\n")
      f.write(("=== %s ===\n" % _("Deletions")).encode())
      f.write(textwrap.dedent(_("""
        Whether a file is deleted is not a binary quality, since it can be
        deleted on some branches but still exist in others.  Also, it might
        exist in an old tag, but have been deleted in versions newer than
        that.  More thorough tracking could be done, including looking at
        merge commits where one side of history deleted and the other modified,
        in order to give a more holistic picture of deletions.  However, that
        algorithm would not only be more complex to implement, it'd also be
        quite difficult to present and interpret by users.  Since --analyze
        is just about getting a high-level rough picture of history, it instead
        implements the simplistic rule that is good enough for 98% of cases:
          A file is marked as deleted if the last commit in the fast-export
          stream that mentions the file lists it as deleted.
        This makes it dependent on topological ordering, but generally gives
        the "right" answer.
        """)[1:]).encode())
      f.write(b"\n")
      f.write(("=== %s ===\n" % _("Renames")).encode())
      f.write(textwrap.dedent(_("""
        Renames share the same non-binary nature that deletions do, plus
        additional challenges:
          * If the renamed file is renamed again, instead of just two names for
            a path you can have three or more.
          * Rename pairs of the form (oldname, newname) that we consider to be
            different names of the "same file" might only be valid over certain
            commit ranges.  For example, if a new commit reintroduces a file
            named oldname, then new versions of oldname aren't the "same file"
            anymore.  We could try to portray this to the user, but it's easier
            for the user to just break the pairing and only report unbroken
            rename pairings to the user.
          * The ability for users to rename files differently in different
            branches means that our chains of renames will not necessarily be
            linear but may branch out.
        """)[1:]).encode())
      f.write(b"\n")

    # Equivalence classes for names, so if folks only want to keep a
    # certain set of paths, they know the old names they want to include
    # too.
    with open(os.path.join(reportdir, b"renames.txt"), 'bw') as f:
      seen = set()
      for pathname,equiv_group in sorted(stats['equivalence'].items(),
                                         key=lambda x:(x[1], x[0])):
        if equiv_group in seen:
          continue
        seen.add(equiv_group)
        f.write(("{} ->\n    ".format(decode(equiv_group[0])) +
                     "\n    ".join(decode(x) for x in equiv_group[1:]) +
                 "\n").encode())

    # List directories in reverse sorted order of unpacked size
    with open(os.path.join(reportdir, b"directories-deleted-sizes.txt"), 'bw') as f:
      msg = "=== %s ===\n" % _("Deleted directories by reverse size")
      f.write(msg.encode())
      msg = _("Format: unpacked size, packed size, date deleted, directory name\n")
      f.write(msg.encode())
      for dirname, size in sorted(dir_size['packed'].items(),
                                  key=lambda x:(x[1],x[0]), reverse=True):
        if (dir_deleted_data[dirname]):
          f.write(b"  %10d %10d %-10s %s\n" % (dir_size['unpacked'][dirname],
                                              size,
                                              datestr(dir_deleted_data[dirname]),
                                              dirname or _('<toplevel>').encode()))

    with open(os.path.join(reportdir, b"directories-all-sizes.txt"), 'bw') as f:
      f.write(("=== %s ===\n" % _("All directories by reverse size")).encode())
      msg = _("Format: unpacked size, packed size, date deleted, directory name\n")
      f.write(msg.encode())
      for dirname, size in sorted(dir_size['packed'].items(),
                                  key=lambda x:(x[1],x[0]), reverse=True):
        f.write(b"  %10d %10d %-10s %s\n" % (dir_size['unpacked'][dirname],
                                            size,
                                            datestr(dir_deleted_data[dirname]),
                                            dirname or _("<toplevel>").encode()))

    # List extensions in reverse sorted order of unpacked size
    with open(os.path.join(reportdir, b"extensions-deleted-sizes.txt"), 'bw') as f:
      msg = "=== %s ===\n" % _("Deleted extensions by reverse size")
      f.write(msg.encode())
      msg = _("Format: unpacked size, packed size, date deleted, extension name\n")
      f.write(msg.encode())
      for extname, size in sorted(ext_size['packed'].items(),
                                  key=lambda x:(x[1],x[0]), reverse=True):
        if (ext_deleted_data[extname]):
          f.write(b"  %10d %10d %-10s %s\n" % (ext_size['unpacked'][extname],
                                              size,
                                              datestr(ext_deleted_data[extname]),
                                              extname or _('<no extension>').encode()))

    with open(os.path.join(reportdir, b"extensions-all-sizes.txt"), 'bw') as f:
      f.write(("=== %s ===\n" % _("All extensions by reverse size")).encode())
      msg = _("Format: unpacked size, packed size, date deleted, extension name\n")
      f.write(msg.encode())
      for extname, size in sorted(ext_size['packed'].items(),
                                  key=lambda x:(x[1],x[0]), reverse=True):
        f.write(b"  %10d %10d %-10s %s\n" % (ext_size['unpacked'][extname],
                                            size,
                                            datestr(ext_deleted_data[extname]),
                                            extname or _('<no extension>').encode()))

    # List files in reverse sorted order of unpacked size
    with open(os.path.join(reportdir, b"path-deleted-sizes.txt"), 'bw') as f:
      msg = "=== %s ===\n" % _("Deleted paths by reverse accumulated size")
      f.write(msg.encode())
      msg = _("Format: unpacked size, packed size, date deleted, path name(s)\n")
      f.write(msg.encode())
      for pathname, size in sorted(path_size['packed'].items(),
                                   key=lambda x:(x[1],x[0]), reverse=True):
        when = stats['file_deletions'].get(pathname, None)
        if when:
          f.write(b"  %10d %10d %-10s %s\n" % (path_size['unpacked'][pathname],
                                              size,
                                              datestr(when),
                                              pathname))

    with open(os.path.join(reportdir, b"path-all-sizes.txt"), 'bw') as f:
      msg = "=== %s ===\n" % _("All paths by reverse accumulated size")
      f.write(msg.encode())
      msg = _("Format: unpacked size, packed size, date deleted, path name\n")
      f.write(msg.encode())
      for pathname, size in sorted(path_size['packed'].items(),
                                   key=lambda x:(x[1],x[0]), reverse=True):
        when = stats['file_deletions'].get(pathname, None)
        f.write(b"  %10d %10d %-10s %s\n" % (path_size['unpacked'][pathname],
                                            size,
                                            datestr(when),
                                            pathname))

    # List of filenames and sizes in descending order
    with open(os.path.join(reportdir, b"blob-shas-and-paths.txt"), 'bw') as f:
      f.write(("=== %s ===\n" % _("Files by sha and associated pathnames in reverse size")).encode())
      f.write(_("Format: sha, unpacked size, packed size, filename(s) object stored as\n").encode())
      for sha, size in sorted(stats['packed_size'].items(),
                              key=lambda x:(x[1],x[0]), reverse=True):
        if sha not in stats['names']:
          # Some objects in the repository might not be referenced, or not
          # referenced by the branches/tags the user cares about; skip them.
          continue
        names_with_sha = stats['names'][sha]
        if len(names_with_sha) == 1:
          names_with_sha = names_with_sha.pop()
        else:
          names_with_sha = b'[' + b', '.join(sorted(names_with_sha)) + b']'
        f.write(b"  %s %10d %10d %s\n" % (sha,
                                          stats['unpacked_size'][sha],
                                          size,
                                          names_with_sha))

  @staticmethod
  def run(args):
    if args.report_dir:
      reportdir = args.report_dir
    else:
      git_dir = GitUtils.determine_git_dir(b'.')

    # Create the report directory as necessary
      results_tmp_dir = os.path.join(git_dir, b'filter-repo')
      if not os.path.isdir(results_tmp_dir):
        os.mkdir(results_tmp_dir)
      reportdir = os.path.join(results_tmp_dir, b"analysis")

    if os.path.isdir(reportdir):
      if args.force:
        sys.stdout.write(_("Warning: Removing recursively: \"%s\"") % decode(reportdir))
        shutil.rmtree(reportdir)
      else:
        sys.stdout.write(_("Error: dir already exists (use --force to delete): \"%s\"\n") % decode(reportdir))
        sys.exit(1)

    os.mkdir(reportdir)

    # Gather the data we need
    stats = RepoAnalyze.gather_data(args)

    # Write the reports
    sys.stdout.write(_("Writing reports to %s...") % decode(reportdir))
    sys.stdout.flush()
    RepoAnalyze.write_report(reportdir, stats)
    sys.stdout.write(_("done.\n"))

class InputFileBackup:
  def __init__(self, input_file, output_file):
    self.input_file  = input_file
    self.output_file = output_file

  def close(self):
    self.input_file.close()
    self.output_file.close()

  def read(self, size):
    output = self.input_file.read(size)
    self.output_file.write(output)
    return output

  def readline(self):
    line = self.input_file.readline()
    self.output_file.write(line)
    return line

class DualFileWriter:
  def __init__(self, file1, file2):
    self.file1 = file1
    self.file2 = file2

  def write(self, *args):
    self.file1.write(*args)
    self.file2.write(*args)

  def flush(self):
    self.file1.flush()
    self.file2.flush()

  def close(self):
    self.file1.close()
    self.file2.close()

class RepoFilter(object):
  def __init__(self,
               args,
               filename_callback = None,
               message_callback = None,
               name_callback = None,
               email_callback = None,
               refname_callback = None,
               blob_callback = None,
               commit_callback = None,
               tag_callback = None,
               reset_callback = None,
               done_callback = None):

    self._args = args

    # Repo we are exporting
    self._repo_working_dir = None

    # Store callbacks for acting on objects printed by FastExport
    self._blob_callback        = blob_callback
    self._commit_callback      = commit_callback
    self._tag_callback         = tag_callback
    self._reset_callback       = reset_callback
    self._done_callback        = done_callback

    # Store callbacks for acting on slices of FastExport objects
    self._filename_callback    = filename_callback  # filenames from commits
    self._message_callback     = message_callback   # commit OR tag message
    self._name_callback        = name_callback      # author, committer, tagger
    self._email_callback       = email_callback     # author, committer, tagger
    self._refname_callback     = refname_callback   # from commit/tag/reset
    self._handle_arg_callbacks()

    # Defaults for input
    self._input = None
    self._fep = None  # Fast Export Process
    self._fe_orig = None  # Path to where original fast-export output stored
    self._fe_filt = None  # Path to where filtered fast-export output stored
    self._parser = None # FastExportParser object we are working with

    # Defaults for output
    self._output = None
    self._fip = None  # Fast Import Process
    self._import_pipes = None
    self._managed_output = True

    # A tuple of (depth, list-of-ancestors).  Commits and ancestors are
    # identified by their id (their 'mark' in fast-export or fast-import
    # speak).  The depth of a commit is one more than the max depth of any
    # of its ancestors.
    self._graph = AncestryGraph()
    # Another one, for ancestry of commits in the original repo
    self._orig_graph = AncestryGraph()

    # Names of files that were tweaked in any commit; such paths could lead
    # to subsequent commits being empty
    self._files_tweaked = set()

    # A set of commit hash pairs (oldhash, newhash) which used to be merge
    # commits but due to filtering were turned into non-merge commits.
    # The commits probably have suboptimal commit messages (e.g. "Merge branch
    # next into master").
    self._commits_no_longer_merges = []

    # A dict of original_ids to new_ids; filtering commits means getting
    # new commit hash (sha1sums), and we record the mapping both for
    # diagnostic purposes and so we can rewrite commit messages.  Note that
    # the new_id can be None rather than a commit hash if the original
    # commit became empty and was pruned or was otherwise dropped.
    self._commit_renames = {}

    # A set of original_ids for which we have not yet gotten the
    # new_ids; we use OrderedDict because we need to know the order of
    # insertion, but the values are always ignored (and set to None).
    # If there was an OrderedSet class, I'd use it instead.
    self._pending_renames = collections.OrderedDict()

    # A dict of commit_hash[0:7] -> set(commit_hashes with that prefix).
    #
    # It's common for commit messages to refer to commits by abbreviated
    # commit hashes, as short as 7 characters.  To facilitate translating
    # such short hashes, we have a mapping of prefixes to full old hashes.
    self._commit_short_old_hashes = collections.defaultdict(set)

    # A set of commit hash references appearing in commit messages which
    # mapped to a valid commit that was removed entirely in the filtering
    # process.  The commit message will continue to reference the
    # now-missing commit hash, since there was nothing to map it to.
    self._commits_referenced_but_removed = set()

    # Progress handling (number of commits parsed, etc.)
    self._progress_writer = ProgressWriter()
    self._num_commits = 0

    # Size of blobs in the repo
    self._unpacked_size = {}

    # Other vars
    self._sanity_checks_handled = False
    self._finalize_handled = False
    self._orig_refs = None
    self._newnames = {}

    # Cache a few message translations for performance reasons
    self._parsed_message = _("Parsed %d commits")

    # Compile some regexes and cache those
    self._hash_re = re.compile(br'(\b[0-9a-f]{7,40}\b)')

  def _handle_arg_callbacks(self):
    def make_callback(argname, str):
      exec('def callback({}, _do_not_use_this_var = None):\n'.format(argname)+
           '  '+'\n  '.join(str.splitlines()), globals())
      return callback #namespace['callback']
    def handle(type):
      callback_field = '_{}_callback'.format(type)
      code_string = getattr(self._args, type+'_callback')
      if code_string:
        if os.path.exists(code_string):
          with open(code_string, 'r', encoding='utf-8') as f:
            code_string = f.read()
        if getattr(self, callback_field):
          raise SystemExit(_("Error: Cannot pass a %s_callback to RepoFilter "
                             "AND pass --%s-callback"
                           % (type, type)))
        if 'return ' not in code_string and \
           type not in ('blob', 'commit', 'tag', 'reset'):
          raise SystemExit(_("Error: --%s-callback should have a return statement")
                           % type)
        setattr(self, callback_field, make_callback(type, code_string))
    handle('filename')
    handle('message')
    handle('name')
    handle('email')
    handle('refname')
    handle('blob')
    handle('commit')
    handle('tag')
    handle('reset')

  def _run_sanity_checks(self):
    self._sanity_checks_handled = True
    if not self._managed_output:
      if not self._args.replace_refs:
        # If not _managed_output we don't want to make extra changes to the
        # repo, so set default to no-op 'update-no-add'
        self._args.replace_refs = 'update-no-add'
      return

    if self._args.debug:
      print("[DEBUG] Passed arguments:\n{}".format(self._args))

    # Determine basic repository information
    target_working_dir = self._args.target or b'.'
    self._orig_refs = GitUtils.get_refs(target_working_dir)
    is_bare = GitUtils.is_repository_bare(target_working_dir)

    # Determine if this is second or later run of filter-repo
    tmp_dir = self.results_tmp_dir(create_if_missing=False)
    already_ran = os.path.isfile(os.path.join(tmp_dir, b'already_ran'))

    # Default for --replace-refs
    if not self._args.replace_refs:
        self._args.replace_refs = ('update-or-add' if already_ran
                                   else 'update-and-add')

    # Do sanity checks from the correct directory
    if not self._args.force and not already_ran:
      cwd = os.getcwd()
      os.chdir(target_working_dir)
      RepoFilter.sanity_check(self._orig_refs, is_bare)
      os.chdir(cwd)

  @staticmethod
  def sanity_check(refs, is_bare):
    def abort(reason):
      try:
        cmd = 'git config remote.origin.url'
        output = subproc.check_output(cmd.split()).strip()
      except subprocess.CalledProcessError as e:
        output = None
      msg = ""
      if output and os.path.isdir(output):
        msg = _("Note: when cloning local repositories, you need to pass\n"
                "      --no-local to git clone to avoid this issue.\n")
      raise SystemExit(
        _("Aborting: Refusing to destructively overwrite repo history since\n"
          "this does not look like a fresh clone.\n"
          "  (%s)\n%s"
          "Please operate on a fresh clone instead.  If you want to proceed\n"
          "anyway, use --force.") % (reason, msg))

    # Make sure repo is fully packed, just like a fresh clone would be.
    # Note that transfer.unpackLimit defaults to 100, meaning that a
    # repository with no packs and less than 100 objects should be considered
    # fully packed.
    output = subproc.check_output('git count-objects -v'.split())
    stats = dict(x.split(b': ') for x in output.splitlines())
    num_packs = int(stats[b'packs'])
    num_loose_objects = int(stats[b'count'])
    if num_packs > 1 or \
       (num_packs == 1 and num_loose_objects > 0) or \
       num_loose_objects >= 100:
      abort(_("expected freshly packed repo"))

    # Make sure there is precisely one remote, named "origin"...or that this
    # is a new bare repo with no packs and no remotes
    output = subproc.check_output('git remote'.split()).strip()
    if not (output == b"origin" or (num_packs == 0 and not output)):
      abort(_("expected one remote, origin"))

    # Avoid letting people running with weird setups and overwriting GIT_DIR
    # elsewhere
    git_dir = GitUtils.determine_git_dir(b'.')
    if is_bare and git_dir != b'.':
      abort(_("GIT_DIR must be ."))
    elif not is_bare and git_dir != b'.git':
      abort(_("GIT_DIR must be .git"))

    # Make sure that all reflogs have precisely one entry
    reflog_dir=os.path.join(git_dir, b'logs')
    for root, dirs, files in os.walk(reflog_dir):
      for filename in files:
        pathname = os.path.join(root, filename)
        with open(pathname, 'br') as f:
          if len(f.read().splitlines()) > 1:
            shortpath = pathname[len(reflog_dir)+1:]
            abort(_("expected at most one entry in the reflog for %s") %
                  decode(shortpath))

    # Make sure there are no stashed changes
    if b'refs/stash' in refs:
      abort(_("has stashed changes"))

    # Do extra checks in non-bare repos
    if not is_bare:
      # Avoid uncommitted, unstaged, or untracked changes
      if subproc.call('git diff --staged --quiet'.split()):
        abort(_("you have uncommitted changes"))
      if subproc.call('git diff --quiet'.split()):
        abort(_("you have unstaged changes"))
      if len(subproc.check_output('git ls-files -o'.split())) > 0:
        abort(_("you have untracked changes"))

      # Avoid unpushed changes
      for refname, rev in refs.items():
        if not refname.startswith(b'refs/heads/'):
          continue
        origin_ref = refname.replace(b'refs/heads/', b'refs/remotes/origin/')
        if origin_ref not in refs:
          abort(_('%s exists, but %s not found') % (decode(refname),
                                                    decode(origin_ref)))
        if rev != refs[origin_ref]:
          abort(_('%s does not match %s') % (decode(refname),
                                             decode(origin_ref)))

      # Make sure there is only one worktree
      output = subproc.check_output('git worktree list'.split())
      if len(output.splitlines()) > 1:
        abort(_('you have multiple worktrees'))

  @staticmethod
  def cleanup(repo, repack, reset, run_quietly=False, show_debuginfo=False):
    ''' cleanup repo; if repack then expire reflogs and do a gc --prune=now.
        if reset then do a reset --hard.  Optionally also curb output if
        run_quietly is True, or go the opposite direction and show extra
        output if show_debuginfo is True. '''
    assert not (run_quietly and show_debuginfo)

    if (repack and not run_quietly and not show_debuginfo):
      print(_("Repacking your repo and cleaning out old unneeded objects"))
    quiet_flags = '--quiet' if run_quietly else ''
    cleanup_cmds = []
    if repack:
      cleanup_cmds = ['git reflog expire --expire=now --all'.split(),
                      'git gc {} --prune=now'.format(quiet_flags).split()]
    if reset:
      cleanup_cmds.insert(0, 'git reset {} --hard'.format(quiet_flags).split())
    location_info = ' (in {})'.format(decode(repo)) if repo != b'.' else ''
    for cmd in cleanup_cmds:
      if show_debuginfo:
        print("[DEBUG] Running{}: {}".format(location_info, ' '.join(cmd)))
      subproc.call(cmd, cwd=repo)

  def _get_rename(self, old_hash):
    # If we already know the rename, just return it
    new_hash = self._commit_renames.get(old_hash, None)
    if new_hash:
      return new_hash

    # If it's not in the remaining pending renames, we don't know it
    if old_hash is not None and old_hash not in self._pending_renames:
      return None

    # Read through the pending renames until we find it or we've read them all,
    # and return whatever we might find
    self._flush_renames(old_hash)
    return self._commit_renames.get(old_hash, None)

  def _flush_renames(self, old_hash=None, limit=0):
    # Parse through self._pending_renames until we have read enough.  We have
    # read enough if:
    #   self._pending_renames is empty
    #   old_hash != None and we found a rename for old_hash
    #   limit > 0 and len(self._pending_renames) started less than 2*limit
    #   limit > 0 and len(self._pending_renames) < limit
    if limit and len(self._pending_renames) < 2 * limit:
      return
    fi_input, fi_output = self._import_pipes
    while self._pending_renames:
      orig_id, ignore = self._pending_renames.popitem(last=False)
      new_id = fi_output.readline().rstrip()
      self._commit_renames[orig_id] = new_id
      if old_hash == orig_id:
        return
      if limit and len(self._pending_renames) < limit:
        return

  def _translate_commit_hash(self, matchobj_or_oldhash):
    old_hash = matchobj_or_oldhash
    if not isinstance(matchobj_or_oldhash, bytes):
      old_hash = matchobj_or_oldhash.group(1)
    orig_len = len(old_hash)
    new_hash = self._get_rename(old_hash)
    if new_hash is None:
      if old_hash[0:7] not in self._commit_short_old_hashes:
        self._commits_referenced_but_removed.add(old_hash)
        return old_hash
      possibilities = self._commit_short_old_hashes[old_hash[0:7]]
      matches = [x for x in possibilities
                 if x[0:orig_len] == old_hash]
      if len(matches) != 1:
        self._commits_referenced_but_removed.add(old_hash)
        return old_hash
      old_hash = matches[0]
      new_hash = self._get_rename(old_hash)

    assert new_hash is not None
    return new_hash[0:orig_len]

  def _trim_extra_parents(self, orig_parents, parents):
    '''Due to pruning of empty commits, some parents could be non-existent
       (None) or otherwise redundant.  Remove the non-existent parents, and
       remove redundant parents so long as that doesn't transform a merge
       commit into a non-merge commit.

       Returns a tuple:
         (parents, new_first_parent_if_would_become_non_merge)'''

    always_prune = (self._args.prune_degenerate == 'always')

    # Pruning of empty commits means multiple things:
    #   * An original parent of this commit may have been pruned causing the
    #     need to rewrite the reported parent to the nearest ancestor.  We
    #     want to know when we're dealing with such a parent.
    #   * Further, there may be no "nearest ancestor" if the entire history
    #     of that parent was also pruned.  (Detectable by the parent being
    #     'None')
    # Remove all parents rewritten to None, and keep track of which parents
    # were rewritten to an ancestor.
    tmp = zip(parents,
              orig_parents,
              [(x in _SKIPPED_COMMITS or always_prune) for x in orig_parents])
    tmp2 = [x for x in tmp if x[0] is not None]
    if not tmp2:
      # All ancestors have been pruned; we have no parents.
      return [], None
    parents, orig_parents, is_rewritten = [list(x) for x in zip(*tmp2)]

    # We can't have redundant parents if we don't have at least 2 parents
    if len(parents) < 2:
      return parents, None

    # Don't remove redundant parents if user doesn't want us to
    if self._args.prune_degenerate == 'never':
      return parents, None

    # Remove duplicate parents (if both sides of history have lots of commits
    # which become empty due to pruning, the most recent ancestor on both
    # sides may be the same commit), except only remove parents that have
    # been rewritten due to previous empty pruning.
    seen = set()
    seen_add = seen.add
    # Deleting duplicate rewritten parents means keeping parents if either
    # they have not been seen or they are ones that have not been rewritten.
    parents_copy = parents
    uniq = [[p, orig_parents[i], is_rewritten[i]] for i, p in enumerate(parents)
            if not (p in seen or seen_add(p)) or not is_rewritten[i]]
    parents, orig_parents, is_rewritten = [list(x) for x in zip(*uniq)]
    if len(parents) < 2:
      return parents_copy, parents[0]

    # Flatten unnecessary merges.  (If one side of history is entirely
    # empty commits that were pruned, we may end up attempting to
    # merge a commit with its ancestor.  Remove parents that are an
    # ancestor of another parent.)
    num_parents = len(parents)
    to_remove = []
    for cur in range(num_parents):
      if not is_rewritten[cur]:
        continue
      for other in range(num_parents):
        if cur == other:
          continue
        if not self._graph.is_ancestor(parents[cur], parents[other]):
          continue
        # parents[cur] is an ancestor of parents[other], so parents[cur]
        # seems redundant.  However, if it was intentionally redundant
        # (e.g. a no-ff merge) in the original, then we want to keep it.
        if not always_prune and \
           self._orig_graph.is_ancestor(orig_parents[cur],
                                        orig_parents[other]):
          continue
        # Some folks want their history to have all first parents be merge
        # commits (except for any root commits), and always do a merge --no-ff.
        # For such folks, don't remove the first parent even if it's an
        # ancestor of other commits.
        if self._args.no_ff and cur == 0:
          continue
        # Okay so the cur-th parent is an ancestor of the other-th parent,
        # and it wasn't that way in the original repository; mark the
        # cur-th parent as removable.
        to_remove.append(cur)
        break # cur removed, so skip rest of others -- i.e. check cur+=1
    for x in reversed(to_remove):
      parents.pop(x)
    if len(parents) < 2:
      return parents_copy, parents[0]

    return parents, None

  def _prunable(self, commit, new_1st_parent, had_file_changes, orig_parents):
    parents = commit.parents

    if self._args.prune_empty == 'never':
      return False
    always_prune = (self._args.prune_empty == 'always')

    # For merge commits, unless there are prunable (redundant) parents, we
    # do not want to prune
    if len(parents) >= 2 and not new_1st_parent:
      return False

    if len(parents) < 2:
      # Special logic for commits that started empty...
      if not had_file_changes and not always_prune:
        had_parents_pruned = (len(parents) < len(orig_parents) or
                              (len(orig_parents) == 1 and
                               orig_parents[0] in _SKIPPED_COMMITS))
        # If the commit remains empty and had parents which were pruned,
        # then prune this commit; otherwise, retain it
        return (not commit.file_changes and had_parents_pruned)

      # We can only get here if the commit didn't start empty, so if it's
      # empty now, it obviously became empty
      if not commit.file_changes:
        return True

    # If there are no parents of this commit and we didn't match the case
    # above, then this commit cannot be pruned.  Since we have no parent(s)
    # to compare to, abort now to prevent future checks from failing.
    if not parents:
      return False

    # Similarly, we cannot handle the hard cases if we don't have a pipe
    # to communicate with fast-import
    if not self._import_pipes:
      return False

    # If there have not been renames/remappings of IDs (due to insertion of
    # new blobs), then we can sometimes know things aren't prunable with a
    # simple check
    if not _IDS.has_renames():
      # non-merge commits can only be empty if blob/file-change editing caused
      # all file changes in the commit to have the same file contents as
      # the parent.
      changed_files = set(change.filename for change in commit.file_changes)
      if len(orig_parents) < 2 and changed_files - self._files_tweaked:
        return False

    # Finally, the hard case: due to either blob rewriting, or due to pruning
    # of empty commits wiping out the first parent history back to the merge
    # base, the list of file_changes we have may not actually differ from our
    # (new) first parent's version of the files, i.e. this would actually be
    # an empty commit.  Check by comparing the contents of this commit to its
    # (remaining) parent.
    #
    # NOTE on why this works, for the case of original first parent history
    # having been pruned away due to being empty:
    #     The first parent history having been pruned away due to being
    #     empty implies the original first parent would have a tree (after
    #     filtering) that matched the merge base's tree.  Since
    #     file_changes has the changes needed to go from what would have
    #     been the first parent to our new commit, and what would have been
    #     our first parent has a tree that matches the merge base, then if
    #     the new first parent has a tree matching the versions of files in
    #     file_changes, then this new commit is empty and thus prunable.
    fi_input, fi_output = self._import_pipes
    self._flush_renames()  # Avoid fi_output having other stuff present
    # Optimization note: we could have two loops over file_changes, the
    # first doing all the self._output.write() calls, and the second doing
    # the rest.  But I'm worried about fast-import blocking on fi_output
    # buffers filling up so I instead read from it as I go.
    for change in commit.file_changes:
      parent = new_1st_parent or commit.parents[0] # exists due to above checks
      quoted_filename = PathQuoting.enquote(change.filename)
      if isinstance(parent, int):
        self._output.write(b"ls :%d %s\n" % (parent, quoted_filename))
      else:
        self._output.write(b"ls %s %s\n" % (parent, quoted_filename))
      self._output.flush()
      parent_version = fi_output.readline().split()
      if change.type == b'D':
        if parent_version != [b'missing', quoted_filename]:
          return False
      else:
        blob_sha = change.blob_id
        if isinstance(change.blob_id, int):
          self._output.write(b"get-mark :%d\n" % change.blob_id)
          self._output.flush()
          blob_sha = fi_output.readline().rstrip()
        if parent_version != [change.mode, b'blob', blob_sha, quoted_filename]:
          return False

    return True

  def _record_remapping(self, commit, orig_parents):
    new_id = None
    # Record the mapping of old commit hash to new one
    if commit.original_id and self._import_pipes:
      fi_input, fi_output = self._import_pipes
      self._output.write(b"get-mark :%d\n" % commit.id)
      self._output.flush()
      orig_id = commit.original_id
      self._commit_short_old_hashes[orig_id[0:7]].add(orig_id)
      # Note that we have queued up an id for later reading; flush a
      # few of the older ones if we have too many queued up
      self._pending_renames[orig_id] = None
      self._flush_renames(None, limit=40)
    # Also, record if this was a merge commit that turned into a non-merge
    # commit.
    if len(orig_parents) >= 2 and len(commit.parents) < 2:
      self._commits_no_longer_merges.append((commit.original_id, new_id))

  def callback_metadata(self, extra_items = dict()):
    return {'commit_rename_func': self._translate_commit_hash,
            'ancestry_graph': self._graph,
            'original_ancestry_graph': self._orig_graph,
            **extra_items}

  def _tweak_blob(self, blob):
    if self._args.max_blob_size and len(blob.data) > self._args.max_blob_size:
      blob.skip()

    if blob.original_id in self._args.strip_blobs_with_ids:
      blob.skip()

    if ( self._args.replace_text
        # not (if blob contains zero byte in the first 8Kb, that is, if blob is binary data)
        and not b"\0" in blob.data[0:8192]
    ):
      for literal, replacement in self._args.replace_text['literals']:
        blob.data = blob.data.replace(literal, replacement)
      for regex,   replacement in self._args.replace_text['regexes']:
        blob.data = regex.sub(replacement, blob.data)

    if self._blob_callback:
      self._blob_callback(blob, self.callback_metadata())

  def _filter_files(self, commit):
    def filename_matches(path_expression, pathname):
      ''' Returns whether path_expression matches pathname or a leading
          directory thereof, allowing path_expression to not have a trailing
          slash even if it is meant to match a leading directory. '''
      if path_expression == b'':
        return True
      n = len(path_expression)
      if (pathname.startswith(path_expression) and
          (path_expression[n-1:n] == b'/' or
           len(pathname) == n or
           pathname[n:n+1] == b'/')):
        return True
      return False

    def newname(path_changes, pathname, use_base_name, filtering_is_inclusive):
      ''' Applies filtering and rename changes from path_changes to pathname,
          returning any of None (file isn't wanted), original filename (file
          is wanted with original name), or new filename. '''
      wanted = False
      full_pathname = pathname
      if use_base_name:
        pathname = os.path.basename(pathname)
      for (mod_type, match_type, path_exp) in path_changes:
        if mod_type == 'filter' and not wanted:
          assert match_type in ('match', 'glob', 'regex')
          if match_type == 'match' and filename_matches(path_exp, pathname):
            wanted = True
          if match_type == 'glob' and fnmatch.fnmatch(pathname, path_exp):
            wanted = True
          if match_type == 'regex' and path_exp.search(pathname):
            wanted = True
        elif mod_type == 'rename':
          match, repl = path_exp
          assert match_type in ('match','regex') # glob was translated to regex
          if match_type == 'match' and filename_matches(match, full_pathname):
            full_pathname = full_pathname.replace(match, repl, 1)
          if match_type == 'regex':
            full_pathname = match.sub(repl, full_pathname)
      return full_pathname if (wanted == filtering_is_inclusive) else None

    args = self._args
    new_file_changes = {}  # Assumes no renames or copies, otherwise collisions
    for change in commit.file_changes:
      # NEEDSWORK: _If_ we ever want to pass `--full-tree` to fast-export and
      # parse that output, we'll need to modify this block; `--full-tree`
      # issues a deleteall directive which has no filename, and thus this
      # block would normally strip it.  Of course, FileChange() and
      # _parse_optional_filechange() would need updates too.
      if change.type == b'DELETEALL':
        new_file_changes[b''] = change
        continue
      if change.filename in self._newnames:
        change.filename = self._newnames[change.filename]
      else:
        original_filename = change.filename
        change.filename = newname(args.path_changes, change.filename,
                                  args.use_base_name, args.inclusive)
        if self._filename_callback:
          change.filename = self._filename_callback(change.filename)
        self._newnames[original_filename] = change.filename
      if not change.filename:
        continue # Filtering criteria excluded this file; move on to next one
      if change.filename in new_file_changes:
        # Getting here means that path renaming is in effect, and caused one
        # path to collide with another.  That's usually bad, but can be okay
        # under two circumstances:
        #   1) Sometimes people have a file named OLDFILE in old revisions of
        #      history, and they rename to NEWFILE, and would like to rewrite
        #      history so that all revisions refer to it as NEWFILE.  As such,
        #      we can allow a collision when (at least) one of the two paths
        #      is a deletion.  Note that if OLDFILE and NEWFILE are unrelated
        #      this also allows the rewrite to continue, which makes sense
        #      since OLDFILE is no longer in the way.
        #   2) If OLDFILE and NEWFILE are exactly equal, then writing them
        #      both to the same location poses no problem; we only need one
        #      file.  (This could come up if someone copied a file in some
        #      commit, then later either deleted the file or kept it exactly
        #      in sync with the original with any changes, and then decides
        #      they want to rewrite history to only have one of the two files)
        colliding_change = new_file_changes[change.filename]
        if change.type == b'D':
          # We can just throw this one away and keep the other
          continue
        elif change.type == b'M' and (
            change.mode == colliding_change.mode and
            change.blob_id == colliding_change.blob_id):
          # The two are identical, so we can throw this one away and keep other
          continue
        elif new_file_changes[change.filename].type != b'D':
          raise SystemExit(_("File renaming caused colliding pathnames!\n") +
                           _("  Commit: {}\n").format(commit.original_id) +
                           _("  Filename: {}").format(change.filename))
      # Strip files that are too large
      if self._args.max_blob_size and \
         self._unpacked_size.get(change.blob_id, 0) > self._args.max_blob_size:
        continue
      if self._args.strip_blobs_with_ids and \
         change.blob_id in self._args.strip_blobs_with_ids:
        continue
      # Otherwise, record the change
      new_file_changes[change.filename] = change
    commit.file_changes = [v for k,v in sorted(new_file_changes.items())]

  def _tweak_commit(self, commit, aux_info):
    # Change the commit message according to callback
    if not self._args.preserve_commit_hashes:
      commit.message = self._hash_re.sub(self._translate_commit_hash,
                                         commit.message)
    if self._args.replace_message:
      for literal, replacement in self._args.replace_message['literals']:
        commit.message = commit.message.replace(literal, replacement)
      for regex,   replacement in self._args.replace_message['regexes']:
        commit.message = regex.sub(replacement, commit.message)
    if self._message_callback:
      commit.message = self._message_callback(commit.message)

    # Change the author & committer according to mailmap rules
    args = self._args
    if args.mailmap:
      commit.author_name, commit.author_email = \
          args.mailmap.translate(commit.author_name, commit.author_email)
      commit.committer_name, commit.committer_email = \
          args.mailmap.translate(commit.committer_name, commit.committer_email)
    # Change author & committer according to callbacks
    if self._name_callback:
      commit.author_name = self._name_callback(commit.author_name)
      commit.committer_name = self._name_callback(commit.committer_name)
    if self._email_callback:
      commit.author_email = self._email_callback(commit.author_email)
      commit.committer_email = self._email_callback(commit.committer_email)

    # Sometimes the 'branch' given is a tag; if so, rename it as requested so
    # we don't get any old tagnames
    if self._args.tag_rename:
      commit.branch = RepoFilter._do_tag_rename(args.tag_rename, commit.branch)
    if self._refname_callback:
      commit.branch = self._refname_callback(commit.branch)

    # Filter or rename the list of file changes
    orig_file_changes = set(commit.file_changes)
    self._filter_files(commit)

    # Record ancestry graph
    parents, orig_parents = commit.parents, aux_info['orig_parents']
    if self._args.state_branch:
      external_parents = parents
    else:
      external_parents = [p for p in parents if not isinstance(p, int)]
    self._graph.record_external_commits(external_parents)
    self._orig_graph.record_external_commits(external_parents)
    self._graph.add_commit_and_parents(commit.id, parents)
    self._orig_graph.add_commit_and_parents(commit.old_id, orig_parents)

    # Prune parents (due to pruning of empty commits) if relevant
    old_1st_parent = parents[0] if parents else None
    parents, new_1st_parent = self._trim_extra_parents(orig_parents, parents)
    commit.parents = parents

    # If parents were pruned, then we need our file changes to be relative
    # to the new first parent
    if parents and old_1st_parent != parents[0]:
      commit.file_changes = GitUtils.get_file_changes(self._repo_working_dir,
                                                      ID_TO_HASH[parents[0]],
                                                      commit.original_id)
      orig_file_changes = set(commit.file_changes)
      self._filter_files(commit)

    # Find out which files were modified by the callbacks.  Such paths could
    # lead to subsequent commits being empty (e.g. if removing a line containing
    # a password from every version of a file that had the password, and some
    # later commit did nothing more than remove that line)
    final_file_changes = set(commit.file_changes)
    if self._args.replace_text or self._blob_callback:
      differences = orig_file_changes.union(final_file_changes)
    else:
      differences = orig_file_changes.symmetric_difference(final_file_changes)
    self._files_tweaked.update(x.filename for x in differences)

    # Call the user-defined callback, if any
    if self._commit_callback:
      self._commit_callback(commit, self.callback_metadata(aux_info))

    # Now print the resulting commit, or if prunable skip it
    if not commit.dumped:
      if not self._prunable(commit, new_1st_parent,
                            aux_info['had_file_changes'], orig_parents):
        self._insert_into_stream(commit)
        self._record_remapping(commit, orig_parents)
      else:
        rewrite_to = new_1st_parent or commit.first_parent()
        commit.skip(new_id = rewrite_to)
        if self._args.state_branch:
          alias = Alias(commit.old_id or commit.id, rewrite_to or deleted_hash)
          self._insert_into_stream(alias)
        reset = Reset(commit.branch, rewrite_to or deleted_hash)
        self._insert_into_stream(reset)
        self._commit_renames[commit.original_id] = None

    # Show progress
    self._num_commits += 1
    if not self._args.quiet:
      self._progress_writer.show(self._parsed_message % self._num_commits)

  @staticmethod
  def _do_tag_rename(rename_pair, tagname):
    old, new = rename_pair.split(b':', 1)
    old, new = b'refs/tags/'+old, b'refs/tags/'+new
    if tagname.startswith(old):
      return tagname.replace(old, new, 1)
    return tagname

  def _tweak_tag(self, tag):
    # Tweak the tag message according to callbacks
    if self._args.replace_message:
      for literal, replacement in self._args.replace_message['literals']:
        tag.message = tag.message.replace(literal, replacement)
      for regex,   replacement in self._args.replace_message['regexes']:
        tag.message = regex.sub(replacement, tag.message)
    if self._message_callback:
      tag.message = self._message_callback(tag.message)

    # Tweak the tag name according to tag-name-related callbacks
    tag_prefix = b'refs/tags/'
    fullref = tag_prefix+tag.ref
    if self._args.tag_rename:
      fullref = RepoFilter._do_tag_rename(self._args.tag_rename, fullref)
    if self._refname_callback:
      fullref = self._refname_callback(fullref)
      if not fullref.startswith(tag_prefix):
        msg = "Error: fast-import requires tags to be in refs/tags/ namespace."
        msg += "\n       {} renamed to {}".format(tag_prefix+tag.ref, fullref)
        raise SystemExit(msg)
    tag.ref = fullref[len(tag_prefix):]

    # Tweak the tagger according to callbacks
    if self._args.mailmap:
      tag.tagger_name, tag.tagger_email = \
          self._args.mailmap.translate(tag.tagger_name, tag.tagger_email)
    if self._name_callback:
      tag.tagger_name = self._name_callback(tag.tagger_name)
    if self._email_callback:
      tag.tagger_email = self._email_callback(tag.tagger_email)

    # Call general purpose tag callback
    if self._tag_callback:
      self._tag_callback(tag, self.callback_metadata())

  def _tweak_reset(self, reset):
    if self._args.tag_rename:
      reset.ref = RepoFilter._do_tag_rename(self._args.tag_rename, reset.ref)
    if self._refname_callback:
      reset.ref = self._refname_callback(reset.ref)
    if self._reset_callback:
      self._reset_callback(reset, self.callback_metadata())

  def results_tmp_dir(self, create_if_missing=True):
    target_working_dir = self._args.target or b'.'
    git_dir = GitUtils.determine_git_dir(target_working_dir)
    d = os.path.join(git_dir, b'filter-repo')
    if create_if_missing and not os.path.isdir(d):
      os.mkdir(d)
    return d

  def _load_marks_file(self, marks_basename):
    full_branch = 'refs/heads/{}'.format(self._args.state_branch)
    marks_file = os.path.join(self.results_tmp_dir(), marks_basename)
    working_dir = self._args.target or b'.'
    cmd = ['git', '-C', working_dir, 'show-ref', full_branch]
    contents = b''
    if subproc.call(cmd, stdout=subprocess.DEVNULL) == 0:
      cmd = ['git', '-C', working_dir, 'show',
             '%s:%s' % (full_branch, decode(marks_basename))]
      try:
        contents = subproc.check_output(cmd)
      except subprocess.CalledProcessError as e: # pragma: no cover
        raise SystemExit(_("Failed loading %s from %s") %
                         (decode(marks_basename), full_branch))
    if contents:
      biggest_id = max(int(x.split()[0][1:]) for x in contents.splitlines())
      _IDS._next_id = max(_IDS._next_id, biggest_id+1)
    with open(marks_file, 'bw') as f:
      f.write(contents)
    return marks_file

  def _save_marks_files(self):
    basenames = [b'source-marks', b'target-marks']
    working_dir = self._args.target or b'.'

    # Check whether the branch exists
    parent = []
    full_branch = 'refs/heads/{}'.format(self._args.state_branch)
    cmd = ['git', '-C', working_dir, 'show-ref', full_branch]
    if subproc.call(cmd, stdout=subprocess.DEVNULL) == 0:
      parent = ['-p', full_branch]

    # Run 'git hash-object $MARKS_FILE' for each marks file, save result
    blob_hashes = {}
    for marks_basename in basenames:
      marks_file = os.path.join(self.results_tmp_dir(), marks_basename)
      if not os.path.isfile(marks_file): # pragma: no cover
        raise SystemExit(_("Failed to find %s to save to %s")
                         % (marks_file, self._args.state_branch))
      cmd = ['git', '-C', working_dir, 'hash-object', '-w', marks_file]
      blob_hashes[marks_basename] = subproc.check_output(cmd).strip()

    # Run 'git mktree' to create a tree out of it
    p = subproc.Popen(['git', '-C', working_dir, 'mktree'],
                      stdin=subprocess.PIPE, stdout=subprocess.PIPE)
    for b in basenames:
      p.stdin.write(b'100644 blob %s\t%s\n' % (blob_hashes[b], b))
    p.stdin.close()
    p.wait()
    tree = p.stdout.read().strip()

    # Create the new commit
    cmd = (['git', '-C', working_dir, 'commit-tree', '-m', 'New mark files',
            tree] + parent)
    commit = subproc.check_output(cmd).strip()
    subproc.call(['git', '-C', working_dir, 'update-ref', full_branch, commit])

  def importer_only(self):
    self._run_sanity_checks()
    self._setup_output()

  def set_output(self, outputRepoFilter):
    assert outputRepoFilter._output

    # set_output implies this RepoFilter is doing exporting, though may not
    # be the only one.
    self._setup_input(use_done_feature = False)

    # Set our output management up to pipe to outputRepoFilter's locations
    self._managed_output = False
    self._output = outputRepoFilter._output
    self._import_pipes = outputRepoFilter._import_pipes

    # Handle sanity checks, though currently none needed for export-only cases
    self._run_sanity_checks()

  def _setup_input(self, use_done_feature):
    if self._args.stdin:
      self._input = sys.stdin.detach()
      sys.stdin = None # Make sure no one tries to accidentally use it
      self._fe_orig = None
    else:
      skip_blobs = (self._blob_callback is None and
                    self._args.replace_text is None and
                    self._args.source == self._args.target)
      extra_flags = []
      if skip_blobs:
        extra_flags.append('--no-data')
        if self._args.max_blob_size:
          self._unpacked_size, packed_size = GitUtils.get_blob_sizes()
      if use_done_feature:
        extra_flags.append('--use-done-feature')
      if write_marks:
        extra_flags.append(b'--mark-tags')
      if self._args.state_branch:
        assert(write_marks)
        source_marks_file = self._load_marks_file(b'source-marks')
        extra_flags.extend([b'--export-marks='+source_marks_file,
                            b'--import-marks='+source_marks_file])
      if self._args.preserve_commit_encoding is not None: # pragma: no cover
        reencode = 'no' if self._args.preserve_commit_encoding else 'yes'
        extra_flags.append('--reencode='+reencode)
      location = ['-C', self._args.source] if self._args.source else []
      fep_cmd = ['git'] + location + ['fast-export', '--show-original-ids',
                 '--signed-tags=strip', '--tag-of-filtered-object=rewrite',
                 '--fake-missing-tagger', '--reference-excluded-parents'
                 ] + extra_flags + self._args.refs
      self._fep = subproc.Popen(fep_cmd, bufsize=-1, stdout=subprocess.PIPE)
      self._input = self._fep.stdout
      if self._args.dry_run or self._args.debug:
        self._fe_orig = os.path.join(self.results_tmp_dir(),
                                     b'fast-export.original')
        output = open(self._fe_orig, 'bw')
        self._input = InputFileBackup(self._input, output)
        if self._args.debug:
          tmp = [decode(x) if isinstance(x, bytes) else x for x in fep_cmd]
          print("[DEBUG] Running: {}".format(' '.join(tmp)))
          print("  (saving a copy of the output at {})"
                .format(decode(self._fe_orig)))

  def _setup_output(self):
    if not self._args.dry_run:
      location = ['-C', self._args.target] if self._args.target else []
      fip_cmd = ['git'] + location + ['-c', 'core.ignorecase=false',
                                      'fast-import', '--force', '--quiet']
      if date_format_permissive:
        fip_cmd.append('--date-format=raw-permissive')
      if self._args.state_branch:
        target_marks_file = self._load_marks_file(b'target-marks')
        fip_cmd.extend([b'--export-marks='+target_marks_file,
                        b'--import-marks='+target_marks_file])
      self._fip = subproc.Popen(fip_cmd, bufsize=-1,
                                stdin=subprocess.PIPE, stdout=subprocess.PIPE)
      self._import_pipes = (self._fip.stdin, self._fip.stdout)
    if self._args.dry_run or self._args.debug:
      self._fe_filt = os.path.join(self.results_tmp_dir(),
                                   b'fast-export.filtered')
      self._output = open(self._fe_filt, 'bw')
    else:
      self._output = self._fip.stdin
    if self._args.debug and not self._args.dry_run:
      self._output = DualFileWriter(self._fip.stdin, self._output)
      tmp = [decode(x) if isinstance(x, bytes) else x for x in fip_cmd]
      print("[DEBUG] Running: {}".format(' '.join(tmp)))
      print("  (using the following file as input: {})"
            .format(decode(self._fe_filt)))

  def _migrate_origin_to_heads(self):
    refs_to_migrate = set(x for x in self._orig_refs
                          if x.startswith(b'refs/remotes/origin/'))
    if not refs_to_migrate:
      return
    if self._args.debug:
      print("[DEBUG] Migrating refs/remotes/origin/* -> refs/heads/*")
    target_working_dir = self._args.target or b'.'
    p = subproc.Popen('git update-ref --no-deref --stdin'.split(),
                      stdin=subprocess.PIPE, cwd=target_working_dir)
    for ref in refs_to_migrate:
      if ref == b'refs/remotes/origin/HEAD':
        p.stdin.write(b'delete %s %s\n' % (ref, self._orig_refs[ref]))
        del self._orig_refs[ref]
        continue
      newref = ref.replace(b'refs/remotes/origin/', b'refs/heads/')
      if newref not in self._orig_refs:
        p.stdin.write(b'create %s %s\n' % (newref, self._orig_refs[ref]))
      p.stdin.write(b'delete %s %s\n' % (ref, self._orig_refs[ref]))
      self._orig_refs[newref] = self._orig_refs[ref]
      del self._orig_refs[ref]
    p.stdin.close()
    if p.wait():
      raise SystemExit(_("git update-ref failed; see above")) # pragma: no cover

    # Now remove
    if self._args.debug:
      print("[DEBUG] Removing 'origin' remote (rewritten history will no ")
      print("        longer be related; consider re-pushing it elsewhere.")
    subproc.call('git remote rm origin'.split(), cwd=target_working_dir)

  def _final_commands(self):
    self._finalize_handled = True
    self._done_callback and self._done_callback()

    if not self._args.quiet:
      self._progress_writer.finish()

  def _ref_update(self, target_working_dir):
    # Start the update-ref process
    p = subproc.Popen('git update-ref --no-deref --stdin'.split(),
                      stdin=subprocess.PIPE,
                      cwd=target_working_dir)

    # Remove replace_refs from _orig_refs
    replace_refs = {k:v for k, v in self._orig_refs.items()
                    if k.startswith(b'refs/replace/')}
    reverse_replace_refs = collections.defaultdict(list)
    for k,v in replace_refs.items():
      reverse_replace_refs[v].append(k)
    all(map(self._orig_refs.pop, replace_refs))

    # Remove unused refs
    exported_refs, imported_refs = self.get_exported_and_imported_refs()
    refs_to_nuke = exported_refs - imported_refs
    if self._args.partial:
      refs_to_nuke = set()
    if refs_to_nuke and self._args.debug:
      print("[DEBUG] Deleting the following refs:\n  "+
            decode(b"\n  ".join(refs_to_nuke)))
    p.stdin.write(b''.join([b"delete %s\n" % x
                           for x in refs_to_nuke]))

    # Delete or update and add replace_refs; note that fast-export automatically
    # handles 'update-no-add', we only need to take action for the other four
    # choices for replace_refs.
    self._flush_renames()
    actual_renames = {k:v for k,v in self._commit_renames.items() if k != v}
    if self._args.replace_refs in ['delete-no-add', 'delete-and-add']:
      # Delete old replace refs, if unwanted
      replace_refs_to_nuke = set(replace_refs)
      if self._args.replace_refs == 'delete-and-add':
        # git-update-ref won't allow us to update a ref twice, so be careful
        # to avoid deleting refs we'll later update
        replace_refs_to_nuke = replace_refs_to_nuke.difference(
                                 [b'refs/replace/'+x for x in actual_renames])
      p.stdin.write(b''.join([b"delete %s\n" % x
                             for x in replace_refs_to_nuke]))
    if self._args.replace_refs in ['delete-and-add', 'update-or-add',
                                   'update-and-add']:
      # Add new replace refs
      update_only = (self._args.replace_refs == 'update-or-add')
      p.stdin.write(b''.join([b"update refs/replace/%s %s\n" % (old, new)
                              for old,new in actual_renames.items()
                              if new and not (update_only and
                                              old in reverse_replace_refs)]))

    # Complete the update-ref process
    p.stdin.close()
    if p.wait():
      raise SystemExit(_("git update-ref failed; see above")) # pragma: no cover

  def _record_metadata(self, metadata_dir, orig_refs):
    self._flush_renames()
    with open(os.path.join(metadata_dir, b'commit-map'), 'bw') as f:
      f.write(("%-40s %s\n" % (_("old"), _("new"))).encode())
      for (old,new) in self._commit_renames.items():
        msg = b'%s %s\n' % (old, new if new != None else deleted_hash)
        f.write(msg)

    exported_refs, imported_refs = self.get_exported_and_imported_refs()

    batch_check_process = None
    batch_check_output_re = re.compile(b'^([0-9a-f]{40}) ([a-z]+) ([0-9]+)$')
    with open(os.path.join(metadata_dir, b'ref-map'), 'bw') as f:
      f.write(("%-40s %-40s %s\n" % (_("old"), _("new"), _("ref"))).encode())
      for refname, old_hash in orig_refs.items():
        if refname not in exported_refs:
          continue
        if refname not in imported_refs:
          new_hash = deleted_hash
        elif old_hash in self._commit_renames:
          new_hash = self._commit_renames[old_hash]
          new_hash = new_hash if new_hash != None else deleted_hash
        else: # Must be either an annotated tag, or a ref whose tip was pruned
          if not batch_check_process:
            cmd = 'git cat-file --batch-check'.split()
            target_working_dir = self._args.target or b'.'
            batch_check_process = subproc.Popen(cmd,
                                                stdin=subprocess.PIPE,
                                                stdout=subprocess.PIPE,
                                                cwd=target_working_dir)
          batch_check_process.stdin.write(refname+b"\n")
          batch_check_process.stdin.flush()
          line = batch_check_process.stdout.readline()
          m = batch_check_output_re.match(line)
          if m and m.group(2) in (b'tag', b'commit'):
            new_hash = m.group(1)
          elif line.endswith(b' missing\n'):
            new_hash = deleted_hash
          else:
            raise SystemExit(_("Failed to find new id for %(refname)s "
                               "(old id was %(old_hash)s)")
                             % ({'refname': refname, 'old_hash': old_hash})
                             ) # pragma: no cover
        f.write(b'%s %s %s\n' % (old_hash, new_hash, refname))
      if self._args.source or self._args.target:
        new_refs = GitUtils.get_refs(self._args.target or b'.')
        for ref, new_hash in new_refs.items():
          if ref not in orig_refs and not ref.startswith(b'refs/replace/'):
            old_hash = b'0'*len(new_hash)
            f.write(b'%s %s %s\n' % (old_hash, new_hash, ref))
    if batch_check_process:
      batch_check_process.stdin.close()
      batch_check_process.wait()

    with open(os.path.join(metadata_dir, b'suboptimal-issues'), 'bw') as f:
      issues_found = False
      if self._commits_no_longer_merges:
        issues_found = True

        f.write(textwrap.dedent(_('''
          The following commits used to be merge commits but due to filtering
          are now regular commits; they likely have suboptimal commit messages
          (e.g. "Merge branch next into master").  Original commit hash on the
          left, commit hash after filtering/rewriting on the right:
          ''')[1:]).encode())
        for oldhash, newhash in self._commits_no_longer_merges:
          f.write('  {} {}\n'.format(oldhash, newhash).encode())
        f.write(b'\n')

      if self._commits_referenced_but_removed:
        issues_found = True
        f.write(textwrap.dedent(_('''
          The following commits were filtered out, but referenced in another
          commit message.  The reference to the now-nonexistent commit hash
          (or a substring thereof) was left as-is in any commit messages:
          ''')[1:]).encode())
        for bad_commit_reference in self._commits_referenced_but_removed:
          f.write('  {}\n'.format(bad_commit_reference).encode())
        f.write(b'\n')

      if not issues_found:
        f.write(_("No filtering problems encountered.\n").encode())

    with open(os.path.join(metadata_dir, b'already_ran'), 'bw') as f:
       f.write(_("This file exists to allow you to filter again without --force.\n").encode())

  def finish(self):
    ''' Alternative to run() when there is no input of our own to parse,
        meaning that run only really needs to close the handle to fast-import
        and let it finish, thus making a call to "run" feel like a misnomer. '''
    assert not self._input
    assert self._managed_output
    self.run()

  def insert(self, obj, direct_insertion = False):
    if not direct_insertion:
      if type(obj) == Blob:
        self._tweak_blob(obj)
      elif type(obj) == Commit:
        aux_info = {'orig_parents': obj.parents,
                    'had_file_changes': bool(obj.file_changes)}
        self._tweak_commit(obj, aux_info)
      elif type(obj) == Reset:
        self._tweak_reset(obj)
      elif type(obj) == Tag:
        self._tweak_tag(obj)
    self._insert_into_stream(obj)

  def _insert_into_stream(self, obj):
    if not obj.dumped:
      if self._parser:
        self._parser.insert(obj)
      else:
        obj.dump(self._output)

  def get_exported_and_imported_refs(self):
    return self._parser.get_exported_and_imported_refs()

  def run(self):
    start = time.time()
    if not self._input and not self._output:
      self._run_sanity_checks()
      if not self._args.dry_run and not self._args.partial:
        self._migrate_origin_to_heads()
      self._setup_input(use_done_feature = True)
      self._setup_output()
    assert self._sanity_checks_handled

    if self._input:
      # Create and run the filter
      self._repo_working_dir = self._args.source or b'.'
      self._parser = FastExportParser(blob_callback   = self._tweak_blob,
                                      commit_callback = self._tweak_commit,
                                      tag_callback    = self._tweak_tag,
                                      reset_callback  = self._tweak_reset,
                                      done_callback   = self._final_commands)
      self._parser.run(self._input, self._output)
      if not self._finalize_handled:
        self._final_commands()

      # Make sure fast-export completed successfully
      if not self._args.stdin and self._fep.wait():
        raise SystemExit(_("Error: fast-export failed; see above.")) # pragma: no cover
      self._input.close()

    # If we're not the manager of self._output, we should avoid post-run cleanup
    if not self._managed_output:
      return

    # Close the output and ensure fast-import successfully completes
    self._output.close()
    if not self._args.dry_run and self._fip.wait():
      raise SystemExit(_("Error: fast-import failed; see above.")) # pragma: no cover

    # With fast-export and fast-import complete, update state if requested
    if self._args.state_branch:
      self._save_marks_files()

    # Notify user how long it took, before doing a gc and such
    msg = "New history written in {:.2f} seconds..."
    if self._args.repack:
      msg = "New history written in {:.2f} seconds; now repacking/cleaning..."
    print(msg.format(time.time()-start))

    # Exit early, if requested
    if self._args.dry_run:
      print(_("NOTE: Not running fast-import or cleaning up; --dry-run passed."))
      if self._fe_orig:
        print(_("      Requested filtering can be seen by comparing:"))
        print("        " + decode(self._fe_orig))
      else:
        print(_("      Requested filtering can be seen at:"))
      print("        " + decode(self._fe_filt))
      return

    target_working_dir = self._args.target or b'.'
    if self._input:
      self._ref_update(target_working_dir)

      # Write out data about run
      self._record_metadata(self.results_tmp_dir(), self._orig_refs)

    # Final cleanup:
    #   If we need a repack, then nuke the reflogs and repack.
    #   If we need a reset, do a reset --hard
    reset = not GitUtils.is_repository_bare(target_working_dir)
    RepoFilter.cleanup(target_working_dir, self._args.repack, reset,
                       run_quietly=self._args.quiet,
                       show_debuginfo=self._args.debug)

    # Let user know how long it took
    print(_("Completely finished after {:.2f} seconds.")
          .format(time.time()-start))

def main():
  setup_gettext()
  args = FilteringOptions.parse_args(sys.argv[1:])
  if args.analyze:
    RepoAnalyze.run(args)
  else:
    filter = RepoFilter(args)
    filter.run()

if __name__ == '__main__':
  main()