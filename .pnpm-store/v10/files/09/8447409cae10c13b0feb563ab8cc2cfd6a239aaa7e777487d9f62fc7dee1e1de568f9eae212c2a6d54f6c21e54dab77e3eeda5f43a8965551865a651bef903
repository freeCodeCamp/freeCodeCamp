Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const mediaStripping = require('./mediaStripping.js');

const DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT = 2e4;
const utf8Bytes = (text) => {
  return new TextEncoder().encode(text).length;
};
const jsonBytes = (value) => {
  return utf8Bytes(JSON.stringify(value));
};
function truncateTextByBytes(text, maxBytes) {
  if (utf8Bytes(text) <= maxBytes) {
    return text;
  }
  let low = 0;
  let high = text.length;
  let bestFit = "";
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const candidate = text.slice(0, mid);
    const byteSize = utf8Bytes(candidate);
    if (byteSize <= maxBytes) {
      bestFit = candidate;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return bestFit;
}
function getItemText(item) {
  if (typeof item === "string") {
    return item;
  }
  if ("text" in item && typeof item.text === "string") {
    return item.text;
  }
  return "";
}
function withItemText(item, text) {
  if (typeof item === "string") {
    return text;
  }
  return { ...item, text };
}
function isContentMessage(message) {
  return message !== null && typeof message === "object" && "content" in message && typeof message.content === "string";
}
function isContentArrayMessage(message) {
  return message !== null && typeof message === "object" && "content" in message && Array.isArray(message.content);
}
function isPartsMessage(message) {
  return message !== null && typeof message === "object" && "parts" in message && Array.isArray(message.parts) && message.parts.length > 0;
}
function truncateContentMessage(message, maxBytes) {
  const emptyMessage = { ...message, content: "" };
  const overhead = jsonBytes(emptyMessage);
  const availableForContent = maxBytes - overhead;
  if (availableForContent <= 0) {
    return [];
  }
  const truncatedContent = truncateTextByBytes(message.content, availableForContent);
  return [{ ...message, content: truncatedContent }];
}
function getArrayItems(message) {
  if ("parts" in message && Array.isArray(message.parts)) {
    return { key: "parts", items: message.parts };
  }
  if ("content" in message && Array.isArray(message.content)) {
    return { key: "content", items: message.content };
  }
  return { key: null, items: [] };
}
function truncateArrayMessage(message, maxBytes) {
  const { key, items } = getArrayItems(message);
  if (key === null || items.length === 0) {
    return [];
  }
  const emptyItems = items.map((item) => withItemText(item, ""));
  const overhead = jsonBytes({ ...message, [key]: emptyItems });
  let remainingBytes = maxBytes - overhead;
  if (remainingBytes <= 0) {
    return [];
  }
  const includedItems = [];
  for (const item of items) {
    const text = getItemText(item);
    const textSize = utf8Bytes(text);
    if (textSize <= remainingBytes) {
      includedItems.push(item);
      remainingBytes -= textSize;
    } else if (includedItems.length === 0) {
      const truncated = truncateTextByBytes(text, remainingBytes);
      if (truncated) {
        includedItems.push(withItemText(item, truncated));
      }
      break;
    } else {
      break;
    }
  }
  if (includedItems.length <= 0) {
    return [];
  } else {
    return [{ ...message, [key]: includedItems }];
  }
}
function truncateSingleMessage(message, maxBytes) {
  if (!message) return [];
  if (typeof message === "string") {
    const truncated = truncateTextByBytes(message, maxBytes);
    return truncated ? [truncated] : [];
  }
  if (typeof message !== "object") {
    return [];
  }
  if (isContentMessage(message)) {
    return truncateContentMessage(message, maxBytes);
  }
  if (isContentArrayMessage(message) || isPartsMessage(message)) {
    return truncateArrayMessage(message, maxBytes);
  }
  return [];
}
function stripInlineMediaFromMessages(messages) {
  const stripped = messages.map((message) => {
    let newMessage = void 0;
    if (!!message && typeof message === "object") {
      if (isContentArrayMessage(message)) {
        newMessage = {
          ...message,
          content: stripInlineMediaFromMessages(message.content)
        };
      } else if ("content" in message && mediaStripping.isContentMedia(message.content)) {
        newMessage = {
          ...message,
          content: mediaStripping.stripInlineMediaFromSingleMessage(message.content)
        };
      }
      if (isPartsMessage(message)) {
        newMessage = {
          // might have to strip content AND parts
          ...newMessage ?? message,
          parts: stripInlineMediaFromMessages(message.parts)
        };
      }
      if (mediaStripping.isContentMedia(newMessage)) {
        newMessage = mediaStripping.stripInlineMediaFromSingleMessage(newMessage);
      } else if (mediaStripping.isContentMedia(message)) {
        newMessage = mediaStripping.stripInlineMediaFromSingleMessage(message);
      }
    }
    return newMessage ?? message;
  });
  return stripped;
}
function truncateMessagesByBytes(messages, maxBytes) {
  if (!Array.isArray(messages) || messages.length === 0) {
    return messages;
  }
  const effectiveMaxBytes = maxBytes - 2;
  const lastMessage = messages[messages.length - 1];
  const stripped = stripInlineMediaFromMessages([lastMessage]);
  const strippedMessage = stripped[0];
  const messageBytes = jsonBytes(strippedMessage);
  if (messageBytes <= effectiveMaxBytes) {
    return stripped;
  }
  return truncateSingleMessage(strippedMessage, effectiveMaxBytes);
}
function truncateGenAiMessages(messages) {
  return truncateMessagesByBytes(messages, DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT);
}
function truncateGenAiStringInput(input) {
  return truncateTextByBytes(input, DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT);
}

exports.DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT = DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT;
exports.truncateGenAiMessages = truncateGenAiMessages;
exports.truncateGenAiStringInput = truncateGenAiStringInput;
//# sourceMappingURL=messageTruncation.js.map
