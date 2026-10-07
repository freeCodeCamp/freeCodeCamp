"use strict"
var Buffer = require("safer-buffer").Buffer

// Multibyte codec. In this scheme, a character is represented by 1 or more bytes.
// Our codec supports UTF-16 surrogates, extensions for GB18030 and unicode sequences.
// To save memory and loading time, we read table files only when requested.

exports._dbcs = DBCSCodec

var UNASSIGNED = -1
var GB18030_CODE = -2
var SEQ_START = -10
var NODE_START = -1000
var UNASSIGNED_NODE = new Array(0x100)
var DEF_CHAR = -1

for (var i = 0; i < 0x100; i++) { UNASSIGNED_NODE[i] = UNASSIGNED }

// Class DBCSCodec reads and initializes mapping tables.
function DBCSCodec (codecOptions, iconv) {
  this.encodingName = codecOptions.encodingName
  if (!codecOptions) { throw new Error("DBCS codec is called without the data.") }
  if (!codecOptions.table) { throw new Error("Encoding '" + this.encodingName + "' has no data.") }

  // Load tables.
  var mappingTable = codecOptions.table()

  // Decode tables: MBCS -> Unicode.

  // decodeTables is a trie, encoded as an array of arrays of integers. Internal arrays are trie nodes and all have len = 256.
  // Trie root is decodeTables[0].
  // Values: >=  0 -> unicode character code. can be > 0xFFFF
  //         == UNASSIGNED -> unknown/unassigned sequence.
  //         == GB18030_CODE -> this is the end of a GB18030 4-byte sequence.
  //         <= NODE_START -> index of the next node in our trie to process next byte.
  //         <= SEQ_START  -> index of the start of a character code sequence, in decodeTableSeq.
  this.decodeTables = []
  this.decodeTables[0] = UNASSIGNED_NODE.slice(0) // Create root node.

  // Sometimes a MBCS char corresponds to a sequence of unicode chars. We store them as arrays of integers here.
  this.decodeTableSeq = []

  // Actual mapping tables consist of chunks. Use them to fill up decode tables.
  for (var i = 0; i < mappingTable.length; i++) { this._addDecodeChunk(mappingTable[i]) }

  // Load & create GB18030 tables when needed.
  if (typeof codecOptions.gb18030 === "function") {
    this.gb18030 = codecOptions.gb18030() // Load GB18030 ranges.

    // Add GB18030 common decode nodes.
    var commonThirdByteNodeIdx = this.decodeTables.length
    this.decodeTables.push(UNASSIGNED_NODE.slice(0))

    var commonFourthByteNodeIdx = this.decodeTables.length
    this.decodeTables.push(UNASSIGNED_NODE.slice(0))

    // Fill out the tree
    var firstByteNode = this.decodeTables[0]
    for (var i = 0x81; i <= 0xFE; i++) {
      var secondByteNode = this.decodeTables[NODE_START - firstByteNode[i]]
      for (var j = 0x30; j <= 0x39; j++) {
        if (secondByteNode[j] === UNASSIGNED) {
          secondByteNode[j] = NODE_START - commonThirdByteNodeIdx
        } else if (secondByteNode[j] > NODE_START) {
          throw new Error("gb18030 decode tables conflict at byte 2")
        }

        var thirdByteNode = this.decodeTables[NODE_START - secondByteNode[j]]
        for (var k = 0x81; k <= 0xFE; k++) {
          if (thirdByteNode[k] === UNASSIGNED) {
            thirdByteNode[k] = NODE_START - commonFourthByteNodeIdx
          } else if (thirdByteNode[k] === NODE_START - commonFourthByteNodeIdx) {
            continue
          } else if (thirdByteNode[k] > NODE_START) {
            throw new Error("gb18030 decode tables conflict at byte 3")
          }

          var fourthByteNode = this.decodeTables[NODE_START - thirdByteNode[k]]
          for (var l = 0x30; l <= 0x39; l++) {
            if (fourthByteNode[l] === UNASSIGNED) { fourthByteNode[l] = GB18030_CODE }
          }
        }
      }
    }
  }

  this.defaultCharUnicode = iconv.defaultCharUnicode

  // Encode tables: Unicode -> DBCS.

  // `encodeTable` is array mapping from unicode char to encoded char. All its values are integers for performance.
  // Because it can be sparse, it is represented as array of buckets by 256 chars each. Bucket can be null.
  // Values: >=  0 -> it is a normal char. Write the value (if <=256 then 1 byte, if <=65536 then 2 bytes, etc.).
  //         == UNASSIGNED -> no conversion found. Output a default char.
  //         <= SEQ_START  -> it's an index in encodeTableSeq, see below. The character starts a sequence.
  this.encodeTable = []

  // `encodeTableSeq` is used when a sequence of unicode characters is encoded as a single code. We use a tree of
  // objects where keys correspond to characters in sequence and leafs are the encoded dbcs values. A special DEF_CHAR key
  // means end of sequence (needed when one sequence is a strict subsequence of another).
  // Objects are kept separately from encodeTable to increase performance.
  this.encodeTableSeq = []

  // Some chars can be decoded, but need not be encoded.
  var skipEncodeChars = {}
  if (codecOptions.encodeSkipVals) {
    for (var i = 0; i < codecOptions.encodeSkipVals.length; i++) {
      var val = codecOptions.encodeSkipVals[i]
      if (typeof val === "number") { skipEncodeChars[val] = true } else {
        for (var j = val.from; j <= val.to; j++) { skipEncodeChars[j] = true }
      }
    }
  }

  // Use decode trie to recursively fill out encode tables.
  this._fillEncodeTable(0, 0, skipEncodeChars)

  // Add more encoding pairs when needed.
  if (codecOptions.encodeAdd) {
    for (var uChar in codecOptions.encodeAdd) {
      if (Object.prototype.hasOwnProperty.call(codecOptions.encodeAdd, uChar)) { this._setEncodeChar(uChar.charCodeAt(0), codecOptions.encodeAdd[uChar]) }
    }
  }

  this.defCharSB = this.encodeTable[0][iconv.defaultCharSingleByte.charCodeAt(0)]
  if (this.defCharSB === UNASSIGNED) this.defCharSB = this.encodeTable[0]["?"]
  if (this.defCharSB === UNASSIGNED) this.defCharSB = "?".charCodeAt(0)
}

DBCSCodec.prototype.encoder = DBCSEncoder
DBCSCodec.prototype.decoder = DBCSDecoder

// Decoder helpers
DBCSCodec.prototype._getDecodeTrieNode = function (addr) {
  var bytes = []
  for (; addr > 0; addr >>>= 8) { bytes.push(addr & 0xFF) }
  if (bytes.length == 0) { bytes.push(0) }

  var node = this.decodeTables[0]
  for (var i = bytes.length - 1; i > 0; i--) { // Traverse nodes deeper into the trie.
    var val = node[bytes[i]]

    if (val == UNASSIGNED) { // Create new node.
      node[bytes[i]] = NODE_START - this.decodeTables.length
      this.decodeTables.push(node = UNASSIGNED_NODE.slice(0))
    } else if (val <= NODE_START) { // Existing node.
      node = this.decodeTables[NODE_START - val]
    } else { throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + addr.toString(16)) }
  }
  return node
}

DBCSCodec.prototype._addDecodeChunk = function (chunk) {
  // First element of chunk is the hex mbcs code where we start.
  var curAddr = parseInt(chunk[0], 16)

  // Choose the decoding node where we'll write our chars.
  var writeTable = this._getDecodeTrieNode(curAddr)
  curAddr = curAddr & 0xFF

  // Write all other elements of the chunk to the table.
  for (var k = 1; k < chunk.length; k++) {
    var part = chunk[k]
    if (typeof part === "string") { // String, write as-is.
      for (var l = 0; l < part.length;) {
        var code = part.charCodeAt(l++)
        if (code >= 0xD800 && code < 0xDC00) { // Decode surrogate
          var codeTrail = part.charCodeAt(l++)
          if (codeTrail >= 0xDC00 && codeTrail < 0xE000) { writeTable[curAddr++] = 0x10000 + (code - 0xD800) * 0x400 + (codeTrail - 0xDC00) } else { throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + chunk[0]) }
        } else if (code > 0x0FF0 && code <= 0x0FFF) { // Character sequence (our own encoding used)
          var len = 0xFFF - code + 2
          var seq = []
          for (var m = 0; m < len; m++) { seq.push(part.charCodeAt(l++)) } // Simple variation: don't support surrogates or subsequences in seq.

          writeTable[curAddr++] = SEQ_START - this.decodeTableSeq.length
          this.decodeTableSeq.push(seq)
        } else { writeTable[curAddr++] = code } // Basic char
      }
    } else if (typeof part === "number") { // Integer, meaning increasing sequence starting with prev character.
      var charCode = writeTable[curAddr - 1] + 1
      for (var l = 0; l < part; l++) { writeTable[curAddr++] = charCode++ }
    } else { throw new Error("Incorrect type '" + typeof part + "' given in " + this.encodingName + " at chunk " + chunk[0]) }
  }
  if (curAddr > 0xFF) { throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + chunk[0] + ": too long" + curAddr) }
}

// Encoder helpers
DBCSCodec.prototype._getEncodeBucket = function (uCode) {
  var high = uCode >> 8 // This could be > 0xFF because of astral characters.
  if (this.encodeTable[high] === undefined) {
    this.encodeTable[high] = UNASSIGNED_NODE.slice(0)
  } // Create bucket on demand.
  return this.encodeTable[high]
}

DBCSCodec.prototype._setEncodeChar = function (uCode, dbcsCode) {
  var bucket = this._getEncodeBucket(uCode)
  var low = uCode & 0xFF
  if (bucket[low] <= SEQ_START) { this.encodeTableSeq[SEQ_START - bucket[low]][DEF_CHAR] = dbcsCode } // There's already a sequence, set a single-char subsequence of it.
  else if (bucket[low] == UNASSIGNED) { bucket[low] = dbcsCode }
}

DBCSCodec.prototype._setEncodeSequence = function (seq, dbcsCode) {
  // Get the root of character tree according to first character of the sequence.
  var uCode = seq[0]
  var bucket = this._getEncodeBucket(uCode)
  var low = uCode & 0xFF

  var node
  if (bucket[low] <= SEQ_START) {
    // There's already a sequence with  - use it.
    node = this.encodeTableSeq[SEQ_START - bucket[low]]
  } else {
    // There was no sequence object - allocate a new one.
    node = {}
    if (bucket[low] !== UNASSIGNED) node[DEF_CHAR] = bucket[low] // If a char was set before - make it a single-char subsequence.
    bucket[low] = SEQ_START - this.encodeTableSeq.length
    this.encodeTableSeq.push(node)
  }

  // Traverse the character tree, allocating new nodes as needed.
  for (var j = 1; j < seq.length - 1; j++) {
    var oldVal = node[uCode]
    if (typeof oldVal === "object") { node = oldVal } else {
      node = node[uCode] = {}
      if (oldVal !== undefined) { node[DEF_CHAR] = oldVal }
    }
  }

  // Set the leaf to given dbcsCode.
  uCode = seq[seq.length - 1]
  node[uCode] = dbcsCode
}

DBCSCodec.prototype._fillEncodeTable = function (nodeIdx, prefix, skipEncodeChars) {
  var node = this.decodeTables[nodeIdx]
  var hasValues = false
  var subNodeEmpty = {}
  for (var i = 0; i < 0x100; i++) {
    var uCode = node[i]
    var mbCode = prefix + i
    if (skipEncodeChars[mbCode]) { continue }

    if (uCode >= 0) {
      this._setEncodeChar(uCode, mbCode)
      hasValues = true
    } else if (uCode <= NODE_START) {
      var subNodeIdx = NODE_START - uCode
      if (!subNodeEmpty[subNodeIdx]) {  // Skip empty subtrees (they are too large in gb18030).
        var newPrefix = (mbCode << 8) >>> 0  // NOTE: '>>> 0' keeps 32-bit num positive.
        if (this._fillEncodeTable(subNodeIdx, newPrefix, skipEncodeChars)) { hasValues = true } else { subNodeEmpty[subNodeIdx] = true }
      }
    } else if (uCode <= SEQ_START) {
      this._setEncodeSequence(this.decodeTableSeq[SEQ_START - uCode], mbCode)
      hasValues = true
    }
  }
  return hasValues
}

// == Encoder ==================================================================

function DBCSEncoder (options, codec) {
  // Encoder state
  this.leadSurrogate = -1
  this.seqObj = undefined

  // Static data
  this.encodeTable = codec.encodeTable
  this.encodeTableSeq = codec.encodeTableSeq
  this.defaultCharSingleByte = codec.defCharSB
  this.gb18030 = codec.gb18030
}

DBCSEncoder.prototype.write = function (str) {
  var newBuf = Buffer.alloc(str.length * (this.gb18030 ? 4 : 3))
  var leadSurrogate = this.leadSurrogate
  var seqObj = this.seqObj
  var nextChar = -1
  var i = 0; var j = 0

  while (true) {
    // 0. Get next character.
    if (nextChar === -1) {
      if (i == str.length) break
      var uCode = str.charCodeAt(i++)
    } else {
      var uCode = nextChar
      nextChar = -1
    }

    // 1. Handle surrogates.
    if (uCode >= 0xD800 && uCode < 0xE000) { // Char is one of surrogates.
      if (uCode < 0xDC00) { // We've got lead surrogate.
        if (leadSurrogate === -1) {
          leadSurrogate = uCode
          continue
        } else {
          leadSurrogate = uCode
          // Double lead surrogate found.
          uCode = UNASSIGNED
        }
      } else { // We've got trail surrogate.
        if (leadSurrogate !== -1) {
          uCode = 0x10000 + (leadSurrogate - 0xD800) * 0x400 + (uCode - 0xDC00)
          leadSurrogate = -1
        } else {
          // Incomplete surrogate pair - only trail surrogate found.
          uCode = UNASSIGNED
        }
      }
    } else if (leadSurrogate !== -1) {
      // Incomplete surrogate pair - only lead surrogate found.
      nextChar = uCode; uCode = UNASSIGNED // Write an error, then current char.
      leadSurrogate = -1
    }

    // 2. Convert uCode character.
    var dbcsCode = UNASSIGNED
    if (seqObj !== undefined && uCode != UNASSIGNED) { // We are in the middle of the sequence
      var resCode = seqObj[uCode]
      if (typeof resCode === "object") { // Sequence continues.
        seqObj = resCode
        continue
      } else if (typeof resCode === "number") { // Sequence finished. Write it.
        dbcsCode = resCode
      } else if (resCode == undefined) { // Current character is not part of the sequence.
        // Try default character for this sequence
        resCode = seqObj[DEF_CHAR]
        if (resCode !== undefined) {
          dbcsCode = resCode // Found. Write it.
          nextChar = uCode // Current character will be written too in the next iteration.
        } else {
          // TODO: What if we have no default? (resCode == undefined)
          // Then, we should write first char of the sequence as-is and try the rest recursively.
          // Didn't do it for now because no encoding has this situation yet.
          // Currently, just skip the sequence and write current char.
        }
      }
      seqObj = undefined
    } else if (uCode >= 0) {  // Regular character
      var subtable = this.encodeTable[uCode >> 8]
      if (subtable !== undefined) { dbcsCode = subtable[uCode & 0xFF] }

      if (dbcsCode <= SEQ_START) { // Sequence start
        seqObj = this.encodeTableSeq[SEQ_START - dbcsCode]
        continue
      }

      if (dbcsCode == UNASSIGNED && this.gb18030) {
        // Use GB18030 algorithm to find character(s) to write.
        var idx = findIdx(this.gb18030.uChars, uCode)
        if (idx != -1) {
          var dbcsCode = this.gb18030.gbChars[idx] + (uCode - this.gb18030.uChars[idx])
          newBuf[j++] = 0x81 + Math.floor(dbcsCode / 12600); dbcsCode = dbcsCode % 12600
          newBuf[j++] = 0x30 + Math.floor(dbcsCode / 1260); dbcsCode = dbcsCode % 1260
          newBuf[j++] = 0x81 + Math.floor(dbcsCode / 10); dbcsCode = dbcsCode % 10
          newBuf[j++] = 0x30 + dbcsCode
          continue
        }
      }
    }

    // 3. Write dbcsCode character.
    if (dbcsCode === UNASSIGNED) { dbcsCode = this.defaultCharSingleByte }

    if (dbcsCode < 0x100) {
      newBuf[j++] = dbcsCode
    } else if (dbcsCode < 0x10000) {
      newBuf[j++] = dbcsCode >> 8   // high byte
      newBuf[j++] = dbcsCode & 0xFF // low byte
    } else if (dbcsCode < 0x1000000) {
      newBuf[j++] = dbcsCode >> 16
      newBuf[j++] = (dbcsCode >> 8) & 0xFF
      newBuf[j++] = dbcsCode & 0xFF
    } else {
      newBuf[j++] = dbcsCode >>> 24
      newBuf[j++] = (dbcsCode >>> 16) & 0xFF
      newBuf[j++] = (dbcsCode >>> 8) & 0xFF
      newBuf[j++] = dbcsCode & 0xFF
    }
  }

  this.seqObj = seqObj
  this.leadSurrogate = leadSurrogate
  return newBuf.slice(0, j)
}

DBCSEncoder.prototype.end = function () {
  if (this.leadSurrogate === -1 && this.seqObj === undefined) { return } // All clean. Most often case.

  var newBuf = Buffer.alloc(10); var j = 0

  if (this.seqObj) { // We're in the sequence.
    var dbcsCode = this.seqObj[DEF_CHAR]
    if (dbcsCode !== undefined) { // Write beginning of the sequence.
      if (dbcsCode < 0x100) {
        newBuf[j++] = dbcsCode
      } else {
        newBuf[j++] = dbcsCode >> 8   // high byte
        newBuf[j++] = dbcsCode & 0xFF // low byte
      }
    } else {
      // See todo above.
    }
    this.seqObj = undefined
  }

  if (this.leadSurrogate !== -1) {
    // Incomplete surrogate pair - only lead surrogate found.
    newBuf[j++] = this.defaultCharSingleByte
    this.leadSurrogate = -1
  }

  return newBuf.slice(0, j)
}

// Export for testing
DBCSEncoder.prototype.findIdx = findIdx

// == Decoder ==================================================================

function DBCSDecoder (options, codec) {
  // Decoder state
  this.nodeIdx = 0
  this.prevBytes = []

  // Static data
  this.decodeTables = codec.decodeTables
  this.decodeTableSeq = codec.decodeTableSeq
  this.defaultCharUnicode = codec.defaultCharUnicode
  this.gb18030 = codec.gb18030
}

DBCSDecoder.prototype.write = function (buf) {
  var newBuf = Buffer.alloc(buf.length * 2)
  var nodeIdx = this.nodeIdx
  var prevBytes = this.prevBytes; var prevOffset = this.prevBytes.length
  var seqStart = -this.prevBytes.length // idx of the start of current parsed sequence.
  var uCode

  for (var i = 0, j = 0; i < buf.length; i++) {
    var curByte = (i >= 0) ? buf[i] : prevBytes[i + prevOffset]

    // Lookup in current trie node.
    var uCode = this.decodeTables[nodeIdx][curByte]

    if (uCode >= 0) {
      // Normal character, just use it.
    } else if (uCode === UNASSIGNED) { // Unknown char.
      // TODO: Callback with seq.
      uCode = this.defaultCharUnicode.charCodeAt(0)
      i = seqStart // Skip one byte ('i' will be incremented by the for loop) and try to parse again.
    } else if (uCode === GB18030_CODE) {
      if (i >= 3) {
        var ptr = (buf[i - 3] - 0x81) * 12600 + (buf[i - 2] - 0x30) * 1260 + (buf[i - 1] - 0x81) * 10 + (curByte - 0x30)
      } else {
        var ptr = (prevBytes[i - 3 + prevOffset] - 0x81) * 12600 +
                          (((i - 2 >= 0) ? buf[i - 2] : prevBytes[i - 2 + prevOffset]) - 0x30) * 1260 +
                          (((i - 1 >= 0) ? buf[i - 1] : prevBytes[i - 1 + prevOffset]) - 0x81) * 10 +
                          (curByte - 0x30)
      }
      var idx = findIdx(this.gb18030.gbChars, ptr)
      uCode = this.gb18030.uChars[idx] + ptr - this.gb18030.gbChars[idx]
    } else if (uCode <= NODE_START) { // Go to next trie node.
      nodeIdx = NODE_START - uCode
      continue
    } else if (uCode <= SEQ_START) { // Output a sequence of chars.
      var seq = this.decodeTableSeq[SEQ_START - uCode]
      for (var k = 0; k < seq.length - 1; k++) {
        uCode = seq[k]
        newBuf[j++] = uCode & 0xFF
        newBuf[j++] = uCode >> 8
      }
      uCode = seq[seq.length - 1]
    } else { throw new Error("iconv-lite internal error: invalid decoding table value " + uCode + " at " + nodeIdx + "/" + curByte) }

    // Write the character to buffer, handling higher planes using surrogate pair.
    if (uCode >= 0x10000) {
      uCode -= 0x10000
      var uCodeLead = 0xD800 | (uCode >> 10)
      newBuf[j++] = uCodeLead & 0xFF
      newBuf[j++] = uCodeLead >> 8

      uCode = 0xDC00 | (uCode & 0x3FF)
    }
    newBuf[j++] = uCode & 0xFF
    newBuf[j++] = uCode >> 8

    // Reset trie node.
    nodeIdx = 0; seqStart = i + 1
  }

  this.nodeIdx = nodeIdx
  this.prevBytes = (seqStart >= 0)
    ? Array.prototype.slice.call(buf, seqStart)
    : prevBytes.slice(seqStart + prevOffset).concat(Array.prototype.slice.call(buf))

  return newBuf.slice(0, j).toString("ucs2")
}

DBCSDecoder.prototype.end = function () {
  var ret = ""

  // Try to parse all remaining chars.
  while (this.prevBytes.length > 0) {
    // Skip 1 character in the buffer.
    ret += this.defaultCharUnicode
    var bytesArr = this.prevBytes.slice(1)

    // Parse remaining as usual.
    this.prevBytes = []
    this.nodeIdx = 0
    if (bytesArr.length > 0) { ret += this.write(bytesArr) }
  }

  this.prevBytes = []
  this.nodeIdx = 0
  return ret
}

// Binary search for GB18030. Returns largest i such that table[i] <= val.
function findIdx (table, val) {
  if (table[0] > val) { return -1 }

  var l = 0; var r = table.length
  while (l < r - 1) { // always table[l] <= val < table[r]
    var mid = l + ((r - l + 1) >> 1)
    if (table[mid] <= val) { l = mid } else { r = mid }
  }
  return l
}
