---
title: Python Set Types
---
A set object is an unordered collection of distinct hashable objects. Common uses include membership testing, removing duplicates from a sequence, and computing mathematical operations such as intersection, union, difference, and symmetric difference.

<a href='https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset' target='_blank' rel='nofollow'>Python Docs - Set Types Set Frozenset</a>

**TODO: Explain hash/hashable**
A hash table is a contiguous vector of records, whose slots come in three
flavors:

1. Slots with key+value pairs.  Call these citizens.
2. Not-yet-used slots.  Call these virgins.
3. Slots that were once citizens, but whose key got deleted, and where
   another key+value pair hasn't yet overwritten the slot.  Call these
   turds (that's the technical term <0.9 wink>).

Python resizes the table when the number of virgins falls below a third of
the total number of slots.  In the usual case, Python doubles the table size
(up to a current maximum of 1,073,741,824 slots).  However, if many
deletions leave behind many turds, it's possible for the number of virgins
to get very low despite that few citizens remain; in that case, Python
actually shrinks the table (down to a current minimum of 4 slots).

To avoid thrashing when a mix of additions and deletions are made when the
table is near a resize threshold, Python doesn't actually check the # of
virgins after a delete (in effect, it assumes you'll soon be replacing the
turds with citizens again).  So, curiously enough, deleting a key *never*
shrinks the table.  A long sequence of deletes followed by an add may shrink
it, though.  A way to force possible shrinkage without adding a key is:

    dict = dict.copy()

dict.copy() always returns a turd-free dictionary, of the smallest
power-of-2 size that leaves at least a third of the slots virgin.
