
const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

function convertMarkdown() {
  let value = markdownInput.value;
  
  const heading1 = /(?<![#+\w+\W+]+)(?:^|\s+)#{1}\s*(?:\s|$)(?![\*]+|[_]+)/;
  const heading1MultiplesInclNewLineChar = /(?:^|\s*)#{1}\s(?:)(.*?)\n[\#]\s(.+)/;
  const heading1MultiplesInclNewLine = /(?:^|\s*)#{1}\s(?:)(.*?)[\\]n[\#]\s(.+)/;
  const heading2 = /(?<![#+\w+\W+]+)(?:^|\s+)#{2}(?:\s|$)/;
  const heading2MultiplesInclNewLineChar = /(?:^|\s*)#{2}\s(?:)(.*?)\n[\#]{2}\s(.+)/;
  const heading2MultiplesInclNewLine = /(?:^|\s*)#{2}\s(?:)(.*?)[\\]n[\#]{2}\s(.+)/;
  const heading3 = /(?<![#+\w+\W+]+)(?:^|\s+)#{3}(?:\s|$)/;
  const heading3MultiplesInclNewLineChar = /(?:^|\s*)#{3}\s(?:)(.*?)\n[\#]{3}\s(.+)/;
  const heading3MultiplesInclNewLine = /(?:^|\s*)#{3}\s(?:)(.*?)[\\]n[\#]{3}\s(.+)/;

  const heading4 = /(?<![#+\w+\W+]+)(?:^|\s+)#{4}(?:\s|$)/;
  const heading4MultiplesInclNewLine = /(?:^|\s*)#{4}\s(?:)(.*?)[\\]n[\#]{4}\s(.+)/;
  const heading5 = /(?<![#+\w+\W+]+)(?:^|\s+)#{5}(?:\s|$)/;
  const heading5MultiplesInclNewLine = /(?:^|\s*)#{5}\s(?:)(.*?)[\\]n[\#]{5}\s(.+)/;
  const heading6 = /(?<![#+\w+\W+]+)(?:^|\s+)#{6}(?:\s|$)/;
  const heading6MultiplesInclNewLine = /(?:^|\s*)#{6}\s(?:)(.*?)[\\]n[\#]{6}\s(.+)/;

  const bold1 = /(?<![#+\w+\W+]+)(?:^|\s)(\*\*(.*?)\*\*)/;
  const bold1MultiplesInclNewLineChar = /(?:^|\s*)\*{2}[\s]*(?:)(.*?)\*{2}\n\*{2}[\s]*(.+)\*{2}/;
  const bold1MultiplesInclNewLine = /(?:^|\s*)\*{2}[\s]*(?:)(.*?)\*{2}[\\]n\*{2}[\s]*(.+)\*{2}/;
  const bold1Heading = /(?<![#+\w+\W+]+)(?:^|\s)#{1}\s+(?:\*\*(.*?)\*\*)(?:\s|$)/;
  const bold2 = /(\*\*(.*?)\*\*|__(.*?)__)/g;  
  const bold2MultiplesInclNewLineChar = /(?:^|\s*)_{2}[\s]*(?:)(.*?)_{2}\n_{2}[\s]*(.+)_{2}/;
  const bold2MultiplesInclNewLine = /(?:^|\s*)_{2}[\s]*(?:)(.*?)_{2}[\\]n_{2}[\s]*(.+)_{2}/;
  const bold2Heading = /(?<![#+\w+\W+]+)(?:^|\s)#{1}\s+(?:__(.*?)__)(?:\s|$)/;
  const italic1 = /(?<![#+\w+\W+]+)(?:^|\s)(\*(.*?)\*)/;
  const italic1MultiplesInclNewLineChar = /(?:^|\s*)\*{1}[\s]*(?:)(.*?)\*{1}\n\*{1}[\s]*(.+)\*{1}/;
  const italic1MultiplesInclNewLine = /(?:^|\s*)\*{1}[\s]*(?:)(.*?)\*{1}[\\]n\*{1}[\s]*(.+)\*{1}/;
  const italic2 = /(?<![#+\w+\W+]+)(?:^|\s)(_(.*?)_)/;
  const italic2MultiplesInclNewLineChar = /(?:^|\s*)_{1}[\s]*(?:)(.*?)_{1}\n_{1}[\s]*(.+)_{1}/;
  const italic2MultiplesInclNewLine = /(?:^|\s*)_{1}[\s]*(?:)(.*?)_{1}[\\]n_{1}[\s]*(.+)_{1}/;

  const img = /(?<![#+\w+\W+]+)(?:^|\s)!\[(.*?)\]\((.*?)\)/;
  const imgMultiplesInclNewLineChar = /!\[(.*?)\]\((.*?)\)\n!\[(.*?)\]\((.*?)\)/;
  const imgMultiplesInclNewLine = /(?<![#+\w+\W+]+)(?:^|\s)!\[(.*?)\]\((.*?)\)[\\]n!\[(.*?)\]\((.*?)\)/;
  const link = /(?<![#+\w+\W+]+)(?:^|\s)\[(.*?)\]\((.*?)\)/;
  const linkMultiplesInclNewLineChar = /\[(.*?)\]\((.*?)\)\n\[(.*?)\]\((.*?)\)/;
  const linkMultiplesInclNewLine = /(?<![#+\w+\W+]+)(?:^|\s)\[(.*?)\]\((.*?)\)[\\]n\[(.*?)\]\((.*?)\)/;
  const quote = /(?<![#+\w+\W+]+)(?:^|\s)>(\s(.??))(?![\*]+|[_]+)/;
  const quoteMultiplesInclNewLineChar = />\s(.*?)\n>\s+(.+)/;
  const quoteMultiplesInclNewLine = /(?<![#+\w+\W+]+)(?:^|\s)>\s(.*?)[\\]n>\s(.+)/;
  const quoteBoldItalic = /(?<![#+\w+\W+]+)(?:^|\s)>{1}\s(?:\*\*(.+)\*(.+)\*)\*\*(?:\s|$)/;
  
  if (value.match(heading1) && !value.match(heading1MultiplesInclNewLineChar) && !value.match(heading1MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(heading1, "<h1>") + "</h1>";
    htmlPreview.innerHTML = value.replace(heading1, "<h1>") + "</h1>";
  } else if (value.match(heading1MultiplesInclNewLineChar) || value.match(heading1MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(heading1MultiplesInclNewLineChar, "<h1>$1</h1><h1>$2") + "</h1>";
    htmlPreview.innerHTML = value.replace(heading1MultiplesInclNewLine, "<h1>$1</h1><h1>$2") + "</h1>";
  } else if (value.match(heading2) && !value.match(heading2MultiplesInclNewLineChar) && !value.match(heading2MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(heading2, "<h2>") + "</h2>";
    htmlPreview.innerHTML = value.replace(heading2, "<h2>") + "</h2>";
  } else if (value.match(heading2MultiplesInclNewLineChar) || value.match(heading2MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(heading2MultiplesInclNewLineChar, "<h2>$1</h2><h2>$2") + "</h2>";
    htmlPreview.innerHTML = value.replace(heading2MultiplesInclNewLine, "<h2>$1</h2><h2>$2") + "</h2>";
  }  else if (value.match(heading3) && !value.match(heading3MultiplesInclNewLineChar) && !value.match(heading3MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(heading3, "<h3>") + "</h3>";
    htmlPreview.innerHTML = value.replace(heading3, "<h3>") + "</h3>";
  } else if (value.match(heading3MultiplesInclNewLineChar) || value.match(heading3MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(heading3MultiplesInclNewLineChar, "<h3>$1</h3><h3>$2") + "</h3>";
    htmlPreview.innerHTML = value.replace(heading3MultiplesInclNewLine, "<h3>$1</h3><h3>$2") + "</h3>";
  }  
  else if (value.match(heading4) && !value.match(heading4MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(heading4, "<h4>") + "</h4>";
    htmlPreview.innerHTML = value.replace(heading4, "<h4>") + "</h4>";
  } else if (value.match(heading4MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(heading4MultiplesInclNewLine, "<h4>$1</h4><h4>$2") + "</h4>";
    htmlPreview.innerHTML = value.replace(heading4MultiplesInclNewLine, "<h4>$1</h4><h4>$2") + "</h4>";
  }  else if (value.match(heading5) && !value.match(heading5MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(heading5, "<h5>") + "</h5>";
    htmlPreview.innerHTML = value.replace(heading5, "<h5>") + "</h5>";
  } else if (value.match(heading5MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(heading5MultiplesInclNewLine, "<h5>$1</h5><h5>$2") + "</h5>";
    htmlPreview.innerHTML = value.replace(heading5MultiplesInclNewLine, "<h5>$1</h5><h5>$2") + "</h5>";
  }  else if (value.match(heading6) && !value.match(heading6MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(heading6, "<h6>") + "</h6>";
    htmlPreview.innerHTML = value.replace(heading6, "<h6>") + "</h6>";
  } else if (value.match(heading6MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(heading6MultiplesInclNewLine, "<h6>$1</h6><h6>$2") + "</h6>";
    htmlPreview.innerHTML = value.replace(heading6MultiplesInclNewLine, "<h6>$1</h6><h6>$2") + "</h6>";
  }  
  else if (value.match(bold1) && !value.match(bold1Heading) && !value.match(bold1MultiplesInclNewLineChar) && !value.match(bold1MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(bold1, "<p><strong>$2</strong>") + "</p>";
    htmlPreview.innerHTML = value.replace(bold1, "<p><strong>$2</strong>") + "</p>";
  } else if (value.match(bold1Heading) && !value.match(bold1) && !value.match(bold1MultiplesInclNewLineChar) && !value.match(bold1MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(bold1Heading, "<h1><strong>$1</strong>") + "</h1>";
    htmlPreview.innerHTML = value.replace(bold1Heading, "<h1><strong>$1</strong>") + "</h1>";
  } else if (value.match(bold1MultiplesInclNewLineChar) || value.match(bold1MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(bold1MultiplesInclNewLineChar, "<strong>$1</strong><strong>$2</strong>");
    htmlPreview.innerHTML = value.replace(bold1MultiplesInclNewLine, "<p><strong>$1</strong><strong>$2</strong>") + "</p>";
  }  else if (value.match(bold2) && !value.match(bold2Heading) && !value.match(bold2MultiplesInclNewLineChar) && !value.match(bold2MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(bold2, "<strong>$1</strong>");
    htmlPreview.innerHTML = value.replace(bold2, (_, g1, g2, g3)=>`<strong>${g1 || g2 || g3}</strong>`);
    const formatted = htmlPreview.innerHTML;
    while (htmlPreview.firstChild) {
      htmlPreview.removeChild(htmlPreview.firstChild);
    }
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = formatted;
    Array.from(tempDiv.childNodes).forEach((node) => htmlPreview.appendChild(node));
  } else if (value.match(bold2Heading) && !value.match(bold2) && !value.match(bold2MultiplesInclNewLineChar) && !value.match(bold2MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(bold2Heading, "<h1><strong>$1</strong>") + "</h1>";
    htmlPreview.innerHTML = value.replace(bold2Heading, "<h1><strong>$1</strong>") + "</h1>";
  }  else if (value.match(bold2MultiplesInclNewLineChar) || value.match(bold2MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(bold2MultiplesInclNewLineChar, "<strong>$1</strong><strong>$2</strong>");
    htmlPreview.innerHTML = value.replace(bold2MultiplesInclNewLine, "<p><strong>$1</strong><strong>$2</strong>") + "</p>";
  } else if (value.match(italic1) && !value.match(italic1MultiplesInclNewLineChar) && !value.match(italic1MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(italic1, "<p><em>$2</em>") + "</p>";
    htmlPreview.innerHTML = value.replace(italic1, "<p><em>$2</em>") + "</p>";
  } else if (value.match(italic1MultiplesInclNewLineChar) || value.match(italic1MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(italic1MultiplesInclNewLineChar, "<em>$1</em><em>$2</em>");
    htmlPreview.innerHTML = value.replace(italic1MultiplesInclNewLine, "<p><em>$1</em><em>$2</em>") + "</p>";
  }  else if (value.match(italic2) && !value.match(italic2MultiplesInclNewLineChar) && !value.match(italic2MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(italic2, "<p><em>$2</em>") + "</p>";
    htmlPreview.innerHTML = value.replace(italic2, "<p><em>$2</em>") + "</p>";
  }  else if (value.match(italic2MultiplesInclNewLineChar) || value.match(italic2MultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(italic2MultiplesInclNewLineChar, "<em>$1</em><em>$2</em>");
    htmlPreview.innerHTML = value.replace(italic2MultiplesInclNewLine, "<p><em>$1</em><em>$2</em>") + "</p>";
  }
  else if (value.match(img) && !value.match(imgMultiplesInclNewLineChar) && !value.match(imgMultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(img, "<img alt='$1' src='$2'>");
    htmlPreview.innerHTML = value.replace(img, "<img alt='$1' src='$2'>");
  } else if (value.match(imgMultiplesInclNewLineChar) || value.match(imgMultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(imgMultiplesInclNewLineChar, "<img alt='$1' src='$2'><img alt='$3' src='$4'>");
    htmlPreview.innerHTML = value.replace(imgMultiplesInclNewLine, "<img alt='$1' src='$2'><img alt='$3' src='$4'>");
  } else if (value.match(link) && !value.match(linkMultiplesInclNewLineChar) && !value.match(linkMultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(link, '<a href="$2">$1</a>');
    htmlPreview.innerHTML = value.replace(link, '<a href="$2">$1</a>');
  } else if (value.match(linkMultiplesInclNewLineChar) || value.match(linkMultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(linkMultiplesInclNewLineChar, '<a href="$2">$1</a><a href="$4">$3</a>');
    htmlPreview.innerHTML = value.replace(linkMultiplesInclNewLine, '<a href="$2">$1</a><a href="$4">$3</a>');
  } else if (value.match(quote) && !value.match(quoteMultiplesInclNewLineChar) && !value.match(quoteMultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(quote, '<blockquote>') + "</blockquote>";
    htmlPreview.innerHTML = value.replace(quote, '<blockquote>') + "</blockquote>";
  } else if (value.match(quoteMultiplesInclNewLineChar) || value.match(quoteMultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(quoteMultiplesInclNewLineChar, '<blockquote>$1</blockquote><blockquote>$2</blockquote>');
    htmlPreview.innerHTML = value.replace(quoteMultiplesInclNewLine, '<blockquote>$1</blockquote><blockquote>$2</blockquote>');
  } else if (value.match(quoteBoldItalic) && !value.match(quote) && !value.match(quoteMultiplesInclNewLineChar) && !value.match(quoteMultiplesInclNewLine)) {
    htmlOutput.textContent = value.replace(quoteBoldItalic, '<blockquote><strong>$1<em>$2</em></strong></blockquote>');
    htmlPreview.innerHTML = value.replace(quoteBoldItalic, '<blockquote><strong>$1<em>$2</em></strong></blockquote>');
  } else {
    htmlOutput.textContent = value;
  }
  console.log(markdownInput.value);
  return htmlOutput.textContent;
}

markdownInput.addEventListener("keyup", () => convertMarkdown());
