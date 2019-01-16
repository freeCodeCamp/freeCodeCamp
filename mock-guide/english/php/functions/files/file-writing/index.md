---
title: File Writing
---
## File Writing

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/php/functions/files/writing/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
### file_put_contents — Write data to a file

This function is identical to calling fopen(), fwrite() and fclose() successively to write data to a file.

If filename does not exist, the file is created. Otherwise, the existing file is overwritten, unless the FILE_APPEND flag is  set.

#### Parameters: 

##### filename
Path to the file where to write the data.

##### data
The data to write. Can be either a string, an array or a stream resource.

If data is a stream resource, the remaining buffer of that stream will be copied to the specified file. This is similar with using stream_copy_to_stream().

You can also specify the data parameter as a single dimension array. This is equivalent to file_put_contents($filename, implode('', $array)).

##### flags
The value of flags can be any combination of the following flags, joined with the binary OR (|) operator.


| Flag | Description |
| --- | --- |
| FILE_USE_INCLUDE_PATH | Search for filename in the include directory. See include_path for more information. |
| FILE_APPEND | If file filename already exists, append the data to the file instead of overwriting it. |
| LOCK_EX | Acquire an exclusive lock on the file while proceeding to the writing. In other words, a flock() call happens between the fopen() call and the fwrite() call. This is not identical to an fopen() call with mode "x". |

##### context
A valid context resource created with stream_context_create().

### Return Values
This function returns the number of bytes that were written to the file, or FALSE on failure.







#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
