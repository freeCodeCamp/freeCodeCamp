window.common = (function(global) {
const {
$,
common = { init: [] }
} = global;

// *****************************HTML5 & CSS**********************************

// Say Hello to HTML Elements

$('.def-code').popover({title: 'Code',
	content: 'Instructions for a computer. <br><br>In this case,' +
      ' what content to show on a webpage, and how to present it. ',
	html: true,
	placement: 'bottom',
	trigger: 'focus'
});

$('.def-text-editor').popover({title: 'Text Editor',
	content: 'A system or program that allows a user to edit text. ',
	html: true,
	placement: 'bottom',
	trigger: 'focus'
});

$('.def-element').popover({title: 'HTML Element',
	content: 'An individual component of an HTML document or web page. ',
	html: true,
      placement: 'bottom',
      trigger: 'focus'
});
// Headline with the h2 Element

$('.def-html5').popover({title: 'HTML5',
	content: 'A markup language used for structuring and presenting' +
      ' content on the World Wide Web. It is the fifth ' +
      'and current version of the HTML standard. ',
	html: true,
      placement: 'bottom',
      trigger: 'focus'
});

$('.def-browser').popover({title: 'Browser',
	content: 'A web browser (commonly referred to as a browser)' +
      ' is a software application for retrieving,' +
      ' presenting, and traversing information ' +
      'resources on the World Wide Web',
	html: true,
      placement: 'bottom',
      trigger: 'focus'
});

$('.def-heading').popover({title: 'Heading',
	content: 'A title at the head of a page or section. ',
	html: true,
      placement: 'bottom',
      trigger: 'focus'
});

// Use CSS Selectors to Style HTML Elements

$('.def-css').popover({title: 'CSS',
	content: 'Cascading Style Sheets <strong>(CSS)</strong> is a style' +
      ' sheet language used for describing the presentation' +
      ' of a document written in a markup language. ',
	html: true,
      placement: 'bottom',
      trigger: 'focus'
});

// Change the Font Size of an Element

$('.def-pixel').popover({title: 'Pixel',
	content: 'A pixel (a word invented from ' +
      '\"picture element\") is the basic' +
      ' unit of programmable color on a computer display or' +
      ' in a computer image. ',
	html: true,
      placement: 'bottom',
      trigger: 'focus'
});

// Import a Google Font

$('.def-call').popover({title: 'Call',
	content: 'Also known as an HTTP request, is when a website/app' +
      ' requests a file from a remote source. ',
	html: true,
      placement: 'bottom',
      trigger: 'focus'
});

// Add Images to your Website

$('.def-url').popover({title: 'URL',
	content: 'A URL (aka Web address) is one type of Uniform Resource ' +
      'Identifier (URI); the generic term for all types' +
      ' of names and addresses that refer to objects on the World Wide Web.',
	html: true,
      placement: 'bottom',
      trigger: 'focus'
});

// Make Dead Links using the Hash Symbol

$('.def-jquery').popover({title: 'jQuery',
	content: 'jQuery is a cross-platform JavaScript library designed to' +
      ' simplify the client-side scripting of HTML. jQuery ' +
      'is the most popular JavaScript library in use today. ',
	html: true,
      placement: 'bottom',
      trigger: 'focus'
});

// Create a Form Element

$('.def-server').popover({title: 'Server',
	content: 'In computing, a server is a computer program or a device that' +
      'provides functionality for other' +
      ' programs or devices. ',
	html: true,
      placement: 'bottom',
      trigger: 'focus'
});

// *****************************Bootstrap**********************************

// Use Responsive Design with Bootstrap Fluid Containers 

$('.def-framework').popover({title: 'Framework',
      content: 'a framework is defined as a package made up of a structure' +
      ' of files and folders of standardized code (HTML, CSS, JavaScript' +
      ' documents etc.) which can be used to support the development of ' +
      'websites, as a basis to start building a site. ',
      html: true,
      placement: 'bottom',
      trigger: 'focus'
});

// Add Font Awesome Icons to our Buttons

$('.def-svg').popover({title: 'SVG',
      content: 'Scalable Vector Graphics are an XML-based vector image format' +
      ' for two-dimensional graphics with support for interactivity' +
      ' and animation.',
      html: true,
      placement: 'bottom',
      trigger: 'focus'
});

// ******************************jQuery********************************

// Learn how Script Tags and Document Ready Work

$('.def-bug').popover({title: 'Bug',
      content: 'A software <strong>bug</strong> is an error, flaw, failure, ' +
      'or fault in a computer program or system that causes it to produce an ' +
      'incorrect or unexpected result, or to behave in unintended ways.',
      html: true,
      placement: 'bottom',
      trigger: 'focus'
});

// Clone an Element Using jQuery

$('.def-chaining').popover({title: 'Method Chaining',
      content: 'Method chaining is a common syntax for invoking multiple' +
      ' method calls in object-oriented programming languages, ' +
      'such as JavaScript.',
      html: true,
      placement: 'bottom',
      trigger: 'focus'
});

return common;
}(window));
