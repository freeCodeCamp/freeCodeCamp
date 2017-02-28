/*! cal-heatmap v3.5.3 (Thu Jul 23 2015 01:27:26)
 *  ---------------------------------------------
 *  Cal-Heatmap is a javascript module to create calendar heatmap to visualize time series data
 *  https://github.com/kamisama/cal-heatmap
 *  Licensed under the MIT license
 *  Copyright 2014 Wan Qi Chen
 */

var d3 = typeof require === "function" ? require("d3") : window.d3;

var CalHeatMap = function() {
	"use strict";

	var self = this;

	this.allowedDataType = ["json", "csv", "tsv", "txt"];

	// Default settings
	this.options = {
		// selector string of the container to append the graph to
		// Accept any string value accepted by document.querySelector or CSS3
		// or an Element object
		itemSelector: "#cal-heatmap",

		// Whether to paint the calendar on init()
		// Used by testsuite to reduce testing time
		paintOnLoad: true,

		// ================================================
		// DOMAIN
		// ================================================

		// Number of domain to display on the graph
		range: 12,

		// Size of each cell, in pixel
		cellSize: 10,

		// Padding between each cell, in pixel
		cellPadding: 2,

		// For rounded subdomain rectangles, in pixels
		cellRadius: 0,

		domainGutter: 2,

		domainMargin: [0, 0, 0, 0],

		domain: "hour",

		subDomain: "min",

		// Number of columns to split the subDomains to
		// If not null, will takes precedence over rowLimit
		colLimit: null,

		// Number of rows to split the subDomains to
		// Will be ignored if colLimit is not null
		rowLimit: null,

		// First day of the week is Monday
		// 0 to start the week on Sunday
		weekStartOnMonday: true,

		// Start date of the graph
		// @default now
		start: new Date(),

		minDate: null,

		maxDate: null,

		// ================================================
		// DATA
		// ================================================

		// Data source
		// URL, where to fetch the original datas
		data: "",

		// Data type
		// Default: json
		dataType: this.allowedDataType[0],

		// Payload sent when using POST http method
		// Leave to null (default) for GET request
		// Expect a string, formatted like "a=b;c=d"
		dataPostPayload: null,

		// Whether to consider missing date:value from the datasource
		// as equal to 0, or just leave them as missing
		considerMissingDataAsZero: false,

		// Load remote data on calendar creation
		// When false, the calendar will be left empty
		loadOnInit: true,

		// Calendar orientation
		// false: display domains side by side
		// true : display domains one under the other
		verticalOrientation: false,

		// Domain dynamic width/height
		// The width on a domain depends on the number of
		domainDynamicDimension: true,

		// Domain Label properties
		label: {
			// valid: top, right, bottom, left
			position: "bottom",

			// Valid: left, center, right
			// Also valid are the direct svg values: start, middle, end
			align: "center",

			// By default, there is no margin/padding around the label
			offset: {
				x: 0,
				y: 0
			},

			rotate: null,

			// Used only on vertical orientation
			width: 100,

			// Used only on horizontal orientation
			height: null
		},

		// ================================================
		// LEGEND
		// ================================================

		// Threshold for the legend
		legend: [10, 20, 30, 40],

		// Whether to display the legend
		displayLegend: true,

		legendCellSize: 10,

		legendCellPadding: 2,

		legendMargin: [0, 0, 0, 0],

		// Legend vertical position
		// top: place legend above calendar
		// bottom: place legend below the calendar
		legendVerticalPosition: "bottom",

		// Legend horizontal position
		// accepted values: left, center, right
		legendHorizontalPosition: "left",

		// Legend rotation
		// accepted values: horizontal, vertical
		legendOrientation: "horizontal",

		// Objects holding all the heatmap different colors
		// null to disable, and use the default css styles
		//
		// Examples:
		// legendColors: {
		//		min: "green",
		//		max: "red",
		//		empty: "#ffffff",
		//		base: "grey",
		//		overflow: "red"
		// }
		legendColors: null,

		// ================================================
		// HIGHLIGHT
		// ================================================

		// List of dates to highlight
		// Valid values:
		// - []: don't highlight anything
		// - "now": highlight the current date
		// - an array of Date objects: highlight the specified dates
		highlight: [],

		// ================================================
		// TEXT FORMATTING / i18n
		// ================================================

		// Name of the items to represent in the calendar
		itemName: ["item", "items"],

		// Formatting of the domain label
		// @default: null, will use the formatting according to domain type
		// Accept a string used as specifier by d3.time.format()
		// or a function
		//
		// Refer to https://github.com/mbostock/d3/wiki/Time-Formatting
		// for accepted date formatting used by d3.time.format()
		domainLabelFormat: null,

		// Formatting of the title displayed when hovering a subDomain cell
		subDomainTitleFormat: {
			empty: "{date}",
			filled: "{count} {name} {connector} {date}"
		},

		// Formatting of the {date} used in subDomainTitleFormat
		// @default: null, will use the formatting according to subDomain type
		// Accept a string used as specifier by d3.time.format()
		// or a function
		//
		// Refer to https://github.com/mbostock/d3/wiki/Time-Formatting
		// for accepted date formatting used by d3.time.format()
		subDomainDateFormat: null,

		// Formatting of the text inside each subDomain cell
		// @default: null, no text
		// Accept a string used as specifier by d3.time.format()
		// or a function
		//
		// Refer to https://github.com/mbostock/d3/wiki/Time-Formatting
		// for accepted date formatting used by d3.time.format()
		subDomainTextFormat: null,

		// Formatting of the title displayed when hovering a legend cell
		legendTitleFormat: {
			lower: "less than {min} {name}",
			inner: "between {down} and {up} {name}",
			upper: "more than {max} {name}"
		},

		// Animation duration, in ms
		animationDuration: 500,

		nextSelector: false,

		previousSelector: false,

		itemNamespace: "cal-heatmap",

		tooltip: false,

		// ================================================
		// EVENTS CALLBACK
		// ================================================

		// Callback when clicking on a time block
		onClick: null,

		// Callback after painting the empty calendar
		// Can be used to trigger an API call, once the calendar is ready to be filled
		afterLoad: null,

		// Callback after loading the next domain in the calendar
		afterLoadNextDomain: null,

		// Callback after loading the previous domain in the calendar
		afterLoadPreviousDomain: null,

		// Callback after finishing all actions on the calendar
		onComplete: null,

		// Callback after fetching the datas, but before applying them to the calendar
		// Used mainly to convert the datas if they're not formatted like expected
		// Takes the fetched "data" object as argument, must return a json object
		// formatted like {timestamp:count, timestamp2:count2},
		afterLoadData: function(data) { return data; },

		// Callback triggered after calling next().
		// The `status` argument is equal to true if there is no
		// more next domain to load
		//
		// This callback is also executed once, after calling previous(),
		// only when the max domain is reached
		onMaxDomainReached: null,

		// Callback triggered after calling previous().
		// The `status` argument is equal to true if there is no
		// more previous domain to load
		//
		// This callback is also executed once, after calling next(),
		// only when the min domain is reached
		onMinDomainReached: null
	};

	this._domainType = {
		"min": {
			name: "minute",
			level: 10,
			maxItemNumber: 60,
			defaultRowNumber: 10,
			defaultColumnNumber: 6,
			row: function(d) { return self.getSubDomainRowNumber(d); },
			column: function(d) { return self.getSubDomainColumnNumber(d); },
			position: {
				x: function(d) { return Math.floor(d.getMinutes() / self._domainType.min.row(d)); },
				y: function(d) { return d.getMinutes() % self._domainType.min.row(d); }
			},
			format: {
				date: "%H:%M, %A %B %-e, %Y",
				legend: "",
				connector: "at"
			},
			extractUnit: function(d) {
				return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()).getTime();
			}
		},
		"hour": {
			name: "hour",
			level: 20,
			maxItemNumber: function(d) {
				switch(self.options.domain) {
				case "day":
					return 24;
				case "week":
					return 24 * 7;
				case "month":
					return 24 * (self.options.domainDynamicDimension ? self.getDayCountInMonth(d): 31);
				}
			},
			defaultRowNumber: 6,
			defaultColumnNumber: function(d) {
				switch(self.options.domain) {
				case "day":
					return 4;
				case "week":
					return 28;
				case "month":
					return self.options.domainDynamicDimension ? self.getDayCountInMonth(d): 31;
				}
			},
			row: function(d) { return self.getSubDomainRowNumber(d); },
			column: function(d) { return self.getSubDomainColumnNumber(d); },
			position: {
				x: function(d) {
					if (self.options.domain === "month") {
						if (self.options.colLimit > 0 || self.options.rowLimit > 0) {
							return Math.floor((d.getHours() + (d.getDate()-1)*24) / self._domainType.hour.row(d));
						}
						return Math.floor(d.getHours() / self._domainType.hour.row(d)) + (d.getDate()-1)*4;
					} else if (self.options.domain === "week") {
						if (self.options.colLimit > 0 || self.options.rowLimit > 0) {
							return Math.floor((d.getHours() + self.getWeekDay(d)*24) / self._domainType.hour.row(d));
						}
						return Math.floor(d.getHours() / self._domainType.hour.row(d)) + self.getWeekDay(d)*4;
					}
					return Math.floor(d.getHours() / self._domainType.hour.row(d));
				},
				y: function(d) {
					var p = d.getHours();
					if (self.options.colLimit > 0 || self.options.rowLimit > 0) {
						switch(self.options.domain) {
						case "month":
							p += (d.getDate()-1) * 24;
							break;
						case "week":
							p += self.getWeekDay(d) * 24;
							break;
						}
					}
					return Math.floor(p % self._domainType.hour.row(d));
				}
			},
			format: {
				date: "%Hh, %A %B %-e, %Y",
				legend: "%H:00",
				connector: "at"
			},
			extractUnit: function(d) {
				return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours()).getTime();
			}
		},
		"day": {
			name: "day",
			level: 30,
			maxItemNumber: function(d) {
				switch(self.options.domain) {
				case "week":
					return 7;
				case "month":
					return self.options.domainDynamicDimension ? self.getDayCountInMonth(d) : 31;
				case "year":
					return self.options.domainDynamicDimension ? self.getDayCountInYear(d) : 366;
				}
			},
			defaultColumnNumber: function(d) {
				d = new Date(d);
				switch(self.options.domain) {
				case "week":
					return 1;
				case "month":
					return (self.options.domainDynamicDimension && !self.options.verticalOrientation) ? (self.getWeekNumber(new Date(d.getFullYear(), d.getMonth()+1, 0)) - self.getWeekNumber(d) + 1): 6;
				case "year":
					return (self.options.domainDynamicDimension ? (self.getWeekNumber(new Date(d.getFullYear(), 11, 31)) - self.getWeekNumber(new Date(d.getFullYear(), 0)) + 1): 54);
				}
			},
			defaultRowNumber: 7,
			row: function(d) { return self.getSubDomainRowNumber(d); },
			column: function(d) { return self.getSubDomainColumnNumber(d); },
			position: {
				x: function(d) {
					switch(self.options.domain) {
					case "week":
						return Math.floor(self.getWeekDay(d) / self._domainType.day.row(d));
					case "month":
						if (self.options.colLimit > 0 || self.options.rowLimit > 0) {
							return Math.floor((d.getDate() - 1)/ self._domainType.day.row(d));
						}
						return self.getWeekNumber(d) - self.getWeekNumber(new Date(d.getFullYear(), d.getMonth()));
					case "year":
						if (self.options.colLimit > 0 || self.options.rowLimit > 0) {
							return Math.floor((self.getDayOfYear(d) - 1) / self._domainType.day.row(d));
						}
						return self.getWeekNumber(d);
					}
				},
				y: function(d) {
					var p = self.getWeekDay(d);
					if (self.options.colLimit > 0 || self.options.rowLimit > 0) {
						switch(self.options.domain) {
						case "year":
							p = self.getDayOfYear(d) - 1;
							break;
						case "week":
							p = self.getWeekDay(d);
							break;
						case "month":
							p = d.getDate() - 1;
							break;
						}
					}
					return Math.floor(p % self._domainType.day.row(d));
				}
			},
			format: {
				date: "%A %B %-e, %Y",
				legend: "%e %b",
				connector: "on"
			},
			extractUnit: function(d) {
				return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
			}
		},
		"week": {
			name: "week",
			level: 40,
			maxItemNumber: 54,
			defaultColumnNumber: function(d) {
				d = new Date(d);
				switch(self.options.domain) {
				case "year":
					return self._domainType.week.maxItemNumber;
				case "month":
					return self.options.domainDynamicDimension ? self.getWeekNumber(new Date(d.getFullYear(), d.getMonth()+1, 0)) - self.getWeekNumber(d) : 5;
				}
			},
			defaultRowNumber: 1,
			row: function(d) { return self.getSubDomainRowNumber(d); },
			column: function(d) { return self.getSubDomainColumnNumber(d); },
			position: {
				x: function(d) {
					switch(self.options.domain) {
					case "year":
						return Math.floor(self.getWeekNumber(d) / self._domainType.week.row(d));
					case "month":
						return Math.floor(self.getMonthWeekNumber(d) / self._domainType.week.row(d));
					}
				},
				y: function(d) {
					return self.getWeekNumber(d) % self._domainType.week.row(d);
				}
			},
			format: {
				date: "%B Week #%W",
				legend: "%B Week #%W",
				connector: "in"
			},
			extractUnit: function(d) {
				var dt = new Date(d.getFullYear(), d.getMonth(), d.getDate());
				// According to ISO-8601, week number computation are based on week starting on Monday
				var weekDay = dt.getDay()-1;
				if (weekDay < 0) {
					weekDay = 6;
				}
				dt.setDate(dt.getDate() - weekDay);
				return dt.getTime();
			}
		},
		"month": {
			name: "month",
			level: 50,
			maxItemNumber: 12,
			defaultColumnNumber: 12,
			defaultRowNumber: 1,
			row: function() { return self.getSubDomainRowNumber(); },
			column: function() { return self.getSubDomainColumnNumber(); },
			position: {
				x: function(d) { return Math.floor(d.getMonth() / self._domainType.month.row(d)); },
				y: function(d) { return d.getMonth() % self._domainType.month.row(d); }
			},
			format: {
				date: "%B %Y",
				legend: "%B",
				connector: "in"
			},
			extractUnit: function(d) {
				return new Date(d.getFullYear(), d.getMonth()).getTime();
			}
		},
		"year": {
			name: "year",
			level: 60,
			row: function() { return self.options.rowLimit || 1; },
			column: function() { return self.options.colLimit || 1; },
			position: {
				x: function() { return 1; },
				y: function() { return 1; }
			},
			format: {
				date: "%Y",
				legend: "%Y",
				connector: "in"
			},
			extractUnit: function(d) {
				return new Date(d.getFullYear()).getTime();
			}
		}
	};

	for (var type in this._domainType) {
		if (this._domainType.hasOwnProperty(type)) {
			var d = this._domainType[type];
			this._domainType["x_" + type] = {
				name: "x_" + type,
				level: d.type,
				maxItemNumber: d.maxItemNumber,
				defaultRowNumber: d.defaultRowNumber,
				defaultColumnNumber: d.defaultColumnNumber,
				row: d.column,
				column: d.row,
				position: {
					x: d.position.y,
					y: d.position.x
				},
				format: d.format,
				extractUnit: d.extractUnit
			};
		}
	}

	// Record the address of the last inserted domain when browsing
	this.lastInsertedSvg = null;

	this._completed = false;

	// Record all the valid domains
	// Each domain value is a timestamp in milliseconds
	this._domains = d3.map();

	this.graphDim = {
		width: 0,
		height: 0
	};

	this.legendDim = {
		width: 0,
		height: 0
	};

	this.NAVIGATE_LEFT = 1;
	this.NAVIGATE_RIGHT = 2;

	// Various update mode when using the update() API
	this.RESET_ALL_ON_UPDATE = 0;
	this.RESET_SINGLE_ON_UPDATE = 1;
	this.APPEND_ON_UPDATE = 2;

	this.DEFAULT_LEGEND_MARGIN = 10;

	this.root = null;
	this.tooltip = null;

	this._maxDomainReached = false;
	this._minDomainReached = false;

	this.domainPosition = new DomainPosition();
	this.Legend = null;
	this.legendScale = null;

	// List of domains that are skipped because of DST
	// All times belonging to these domains should be re-assigned to the previous domain
	this.DSTDomain = [];

	/**
	 * Display the graph for the first time
	 * @return bool True if the calendar is created
	 */
	this._init = function() {

		self.getDomain(self.options.start).map(function(d) { return d.getTime(); }).map(function(d) {
			self._domains.set(d, self.getSubDomain(d).map(function(d) { return {t: self._domainType[self.options.subDomain].extractUnit(d), v: null}; }));
		});

		self.root = d3.select(self.options.itemSelector).append("svg").attr("class", "cal-heatmap-container");

		self.tooltip = d3.select(self.options.itemSelector)
			.attr("style", function() {
				var current = d3.select(self.options.itemSelector).attr("style");
				return (current !== null ? current : "") + "position:relative;";
			})
			.append("div")
			.attr("class", "ch-tooltip")
		;

		self.root.attr("x", 0).attr("y", 0).append("svg").attr("class", "graph");

		self.Legend = new Legend(self);

		if (self.options.paintOnLoad) {
			_initCalendar();
		}

		return true;
	};

	function _initCalendar() {
		self.verticalDomainLabel = (self.options.label.position === "top" || self.options.label.position === "bottom");

		self.domainVerticalLabelHeight = self.options.label.height === null ? Math.max(25, self.options.cellSize*2): self.options.label.height;
		self.domainHorizontalLabelWidth = 0;

		if (self.options.domainLabelFormat === "" && self.options.label.height === null) {
			self.domainVerticalLabelHeight = 0;
		}

		if (!self.verticalDomainLabel) {
			self.domainVerticalLabelHeight = 0;
			self.domainHorizontalLabelWidth = self.options.label.width;
		}

		self.paint();

		// =========================================================================//
		// ATTACHING DOMAIN NAVIGATION EVENT										//
		// =========================================================================//
		if (self.options.nextSelector !== false) {
			d3.select(self.options.nextSelector).on("click." + self.options.itemNamespace, function() {
				d3.event.preventDefault();
				return self.loadNextDomain(1);
			});
		}

		if (self.options.previousSelector !== false) {
			d3.select(self.options.previousSelector).on("click." + self.options.itemNamespace, function() {
				d3.event.preventDefault();
				return self.loadPreviousDomain(1);
			});
		}

		self.Legend.redraw(self.graphDim.width - self.options.domainGutter - self.options.cellPadding);
		self.afterLoad();

		var domains = self.getDomainKeys();

		// Fill the graph with some datas
		if (self.options.loadOnInit) {
			self.getDatas(
				self.options.data,
				new Date(domains[0]),
				self.getSubDomain(domains[domains.length-1]).pop(),
				function() {
					self.fill();
					self.onComplete();
				}
			);
		} else {
			self.onComplete();
		}

		self.checkIfMinDomainIsReached(domains[0]);
		self.checkIfMaxDomainIsReached(self.getNextDomain().getTime());
	}

	// Return the width of the domain block, without the domain gutter
	// @param int d Domain start timestamp
	function w(d, outer) {
		var width = self.options.cellSize*self._domainType[self.options.subDomain].column(d) + self.options.cellPadding*self._domainType[self.options.subDomain].column(d);
		if (arguments.length === 2 && outer === true) {
			return width += self.domainHorizontalLabelWidth + self.options.domainGutter + self.options.domainMargin[1] + self.options.domainMargin[3];
		}
		return width;
	}

	// Return the height of the domain block, without the domain gutter
	function h(d, outer) {
		var height = self.options.cellSize*self._domainType[self.options.subDomain].row(d) + self.options.cellPadding*self._domainType[self.options.subDomain].row(d);
		if (arguments.length === 2 && outer === true) {
			height += self.options.domainGutter + self.domainVerticalLabelHeight + self.options.domainMargin[0] + self.options.domainMargin[2];
		}
		return height;
	}

	/**
	 *
	 *
	 * @param int navigationDir
	 */
	this.paint = function(navigationDir) {

		var options = self.options;

		if (arguments.length === 0) {
			navigationDir = false;
		}

		// Painting all the domains
		var domainSvg = self.root.select(".graph")
			.selectAll(".graph-domain")
			.data(
				function() {
					var data = self.getDomainKeys();
					return navigationDir === self.NAVIGATE_LEFT ? data.reverse(): data;
				},
				function(d) { return d; }
			)
		;

		var enteringDomainDim = 0;
		var exitingDomainDim = 0;

		// =========================================================================//
		// PAINTING DOMAIN															//
		// =========================================================================//

		var svg = domainSvg
			.enter()
			.append("svg")
			.attr("width", function(d) {
				return w(d, true);
			})
			.attr("height", function(d) {
				return h(d, true);
			})
			.attr("x", function(d) {
				if (options.verticalOrientation) {
					self.graphDim.width = Math.max(self.graphDim.width, w(d, true));
					return 0;
				} else {
					return getDomainPosition(d, self.graphDim, "width", w(d, true));
				}
			})
			.attr("y", function(d) {
				if (options.verticalOrientation) {
					return getDomainPosition(d, self.graphDim, "height", h(d, true));
				} else {
					self.graphDim.height = Math.max(self.graphDim.height, h(d, true));
					return 0;
				}
			})
			.attr("class", function(d) {
				var classname = "graph-domain";
				var date = new Date(d);
				switch(options.domain) {
				case "hour":
					classname += " h_" + date.getHours();
					/* falls through */
				case "day":
					classname += " d_" + date.getDate() + " dy_" + date.getDay();
					/* falls through */
				case "week":
					classname += " w_" + self.getWeekNumber(date);
					/* falls through */
				case "month":
					classname += " m_" + (date.getMonth() + 1);
					/* falls through */
				case "year":
					classname += " y_" + date.getFullYear();
				}
				return classname;
			})
		;

		self.lastInsertedSvg = svg;

		function getDomainPosition(domainIndex, graphDim, axis, domainDim) {
			var tmp = 0;
			switch(navigationDir) {
			case false:
				tmp = graphDim[axis];

				graphDim[axis] += domainDim;
				self.domainPosition.setPosition(domainIndex, tmp);
				return tmp;

			case self.NAVIGATE_RIGHT:
				self.domainPosition.setPosition(domainIndex, graphDim[axis]);

				enteringDomainDim = domainDim;
				exitingDomainDim = self.domainPosition.getPositionFromIndex(1);

				self.domainPosition.shiftRightBy(exitingDomainDim);
				return graphDim[axis];

			case self.NAVIGATE_LEFT:
				tmp = -domainDim;

				enteringDomainDim = -tmp;
				exitingDomainDim = graphDim[axis] - self.domainPosition.getLast();

				self.domainPosition.setPosition(domainIndex, tmp);
				self.domainPosition.shiftLeftBy(enteringDomainDim);
				return tmp;
			}
		}

		svg.append("rect")
			.attr("width", function(d) { return w(d, true) - options.domainGutter - options.cellPadding; })
			.attr("height", function(d) { return h(d, true) - options.domainGutter - options.cellPadding; })
			.attr("class", "domain-background")
		;

		// =========================================================================//
		// PAINTING SUBDOMAINS														//
		// =========================================================================//
		var subDomainSvgGroup = svg.append("svg")
			.attr("x", function() {
				if (options.label.position === "left") {
					return self.domainHorizontalLabelWidth + options.domainMargin[3];
				} else {
					return options.domainMargin[3];
				}
			})
			.attr("y", function() {
				if (options.label.position === "top") {
					return self.domainVerticalLabelHeight + options.domainMargin[0];
				} else {
					return options.domainMargin[0];
				}
			})
			.attr("class", "graph-subdomain-group")
		;

		var rect = subDomainSvgGroup
			.selectAll("g")
			.data(function(d) { return self._domains.get(d); })
			.enter()
			.append("g")
		;

		rect
			.append("rect")
			.attr("class", function(d) {
				return "graph-rect" + self.getHighlightClassName(d.t) + (options.onClick !== null ? " hover_cursor": "");
			})
			.attr("width", options.cellSize)
			.attr("height", options.cellSize)
			.attr("x", function(d) { return self.positionSubDomainX(d.t); })
			.attr("y", function(d) { return self.positionSubDomainY(d.t); })
			.on("click", function(d) {
				if (options.onClick !== null) {
					return self.onClick(new Date(d.t), d.v);
				}
			})
			.call(function(selection) {
				if (options.cellRadius > 0) {
					selection
						.attr("rx", options.cellRadius)
						.attr("ry", options.cellRadius)
					;
				}

				if (self.legendScale !== null && options.legendColors !== null && options.legendColors.hasOwnProperty("base")) {
					selection.attr("fill", options.legendColors.base);
				}

				if (options.tooltip) {
					selection.on("mouseover", function(d) {
						var domainNode = this.parentNode.parentNode;

						self.tooltip
						.html(self.getSubDomainTitle(d))
						.attr("style", "display: block;")
						;

						var tooltipPositionX = self.positionSubDomainX(d.t) - self.tooltip[0][0].offsetWidth/2 + options.cellSize/2;
						var tooltipPositionY = self.positionSubDomainY(d.t) - self.tooltip[0][0].offsetHeight - options.cellSize/2;

						// Offset by the domain position
						tooltipPositionX += parseInt(domainNode.getAttribute("x"), 10);
						tooltipPositionY += parseInt(domainNode.getAttribute("y"), 10);

						// Offset by the calendar position (when legend is left/top)
						tooltipPositionX += parseInt(self.root.select(".graph").attr("x"), 10);
						tooltipPositionY += parseInt(self.root.select(".graph").attr("y"), 10);

						// Offset by the inside domain position (when label is left/top)
						tooltipPositionX += parseInt(domainNode.parentNode.getAttribute("x"), 10);
						tooltipPositionY += parseInt(domainNode.parentNode.getAttribute("y"), 10);

						self.tooltip.attr("style",
						"display: block; " +
						"left: " + tooltipPositionX + "px; " +
						"top: " + tooltipPositionY + "px;")
						;
					});

					selection.on("mouseout", function() {
						self.tooltip
						.attr("style", "display:none")
						.html("");
					});
				}
			})
		;

		// Appending a title to each subdomain
		if (!options.tooltip) {
			rect.append("title").text(function(d){ return self.formatDate(new Date(d.t), options.subDomainDateFormat); });
		}

		// =========================================================================//
		// PAINTING LABEL															//
		// =========================================================================//
		if (options.domainLabelFormat !== "") {
			svg.append("text")
				.attr("class", "graph-label")
				.attr("y", function(d) {
					var y = options.domainMargin[0];
					switch(options.label.position) {
					case "top":
						y += self.domainVerticalLabelHeight/2;
						break;
					case "bottom":
						y += h(d) + self.domainVerticalLabelHeight/2;
					}

					return y + options.label.offset.y *
					(
						((options.label.rotate === "right" && options.label.position === "right") ||
						(options.label.rotate === "left" && options.label.position === "left")) ?
						-1: 1
					);
				})
				.attr("x", function(d){
					var x = options.domainMargin[3];
					switch(options.label.position) {
					case "right":
						x += w(d);
						break;
					case "bottom":
					case "top":
						x += w(d)/2;
					}

					if (options.label.align === "right") {
						return x + self.domainHorizontalLabelWidth - options.label.offset.x *
						(options.label.rotate === "right" ? -1: 1);
					}
					return x + options.label.offset.x;

				})
				.attr("text-anchor", function() {
					switch(options.label.align) {
					case "start":
					case "left":
						return "start";
					case "end":
					case "right":
						return "end";
					default:
						return "middle";
					}
				})
				.attr("dominant-baseline", function() { return self.verticalDomainLabel ? "middle": "top"; })
				.text(function(d) { return self.formatDate(new Date(d), options.domainLabelFormat); })
				.call(domainRotate)
			;
		}

		function domainRotate(selection) {
			switch (options.label.rotate) {
			case "right":
				selection
				.attr("transform", function(d) {
					var s = "rotate(90), ";
					switch(options.label.position) {
					case "right":
						s += "translate(-" + w(d) + " , -" + w(d) + ")";
						break;
					case "left":
						s += "translate(0, -" + self.domainHorizontalLabelWidth + ")";
						break;
					}

					return s;
				});
				break;
			case "left":
				selection
				.attr("transform", function(d) {
					var s = "rotate(270), ";
					switch(options.label.position) {
					case "right":
						s += "translate(-" + (w(d) + self.domainHorizontalLabelWidth) + " , " + w(d) + ")";
						break;
					case "left":
						s += "translate(-" + (self.domainHorizontalLabelWidth) + " , " + self.domainHorizontalLabelWidth + ")";
						break;
					}

					return s;
				});
				break;
			}
		}

		// =========================================================================//
		// PAINTING DOMAIN SUBDOMAIN CONTENT										//
		// =========================================================================//
		if (options.subDomainTextFormat !== null) {
			rect
				.append("text")
				.attr("class", function(d) { return "subdomain-text" + self.getHighlightClassName(d.t); })
				.attr("x", function(d) { return self.positionSubDomainX(d.t) + options.cellSize/2; })
				.attr("y", function(d) { return self.positionSubDomainY(d.t) + options.cellSize/2; })
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "central")
				.text(function(d){
					return self.formatDate(new Date(d.t), options.subDomainTextFormat);
				})
			;
		}

		// =========================================================================//
		// ANIMATION																//
		// =========================================================================//

		if (navigationDir !== false) {
			domainSvg.transition().duration(options.animationDuration)
				.attr("x", function(d){
					return options.verticalOrientation ? 0: self.domainPosition.getPosition(d);
				})
				.attr("y", function(d){
					return options.verticalOrientation? self.domainPosition.getPosition(d): 0;
				})
			;
		}

		var tempWidth = self.graphDim.width;
		var tempHeight = self.graphDim.height;

		if (options.verticalOrientation) {
			self.graphDim.height += enteringDomainDim - exitingDomainDim;
		} else {
			self.graphDim.width += enteringDomainDim - exitingDomainDim;
		}

		// At the time of exit, domainsWidth and domainsHeight already automatically shifted
		domainSvg.exit().transition().duration(options.animationDuration)
			.attr("x", function(d){
				if (options.verticalOrientation) {
					return 0;
				} else {
					switch(navigationDir) {
					case self.NAVIGATE_LEFT:
						return Math.min(self.graphDim.width, tempWidth);
					case self.NAVIGATE_RIGHT:
						return -w(d, true);
					}
				}
			})
			.attr("y", function(d){
				if (options.verticalOrientation) {
					switch(navigationDir) {
					case self.NAVIGATE_LEFT:
						return Math.min(self.graphDim.height, tempHeight);
					case self.NAVIGATE_RIGHT:
						return -h(d, true);
					}
				} else {
					return 0;
				}
			})
			.remove()
		;

		// Resize the root container
		self.resize();
	};
};

CalHeatMap.prototype = {

	/**
	 * Validate and merge user settings with default settings
	 *
	 * @param  {object} settings User settings
	 * @return {bool} False if settings contains error
	 */
	/* jshint maxstatements:false */
	init: function(settings) {
		"use strict";

		var parent = this;

		var options = parent.options = mergeRecursive(parent.options, settings);

		// Fatal errors
		// Stop script execution on error
		validateDomainType();
		validateSelector(options.itemSelector, false, "itemSelector");

		if (parent.allowedDataType.indexOf(options.dataType) === -1) {
			throw new Error("The data type '" + options.dataType + "' is not valid data type");
		}

		if (d3.select(options.itemSelector)[0][0] === null) {
			throw new Error("The node '" + options.itemSelector + "' specified in itemSelector does not exists");
		}

		try {
			validateSelector(options.nextSelector, true, "nextSelector");
			validateSelector(options.previousSelector, true, "previousSelector");
		} catch(error) {
			console.log(error.message);
			return false;
		}

		// If other settings contains error, will fallback to default

		if (!settings.hasOwnProperty("subDomain")) {
			this.options.subDomain = getOptimalSubDomain(settings.domain);
		}

		if (typeof options.itemNamespace !== "string" || options.itemNamespace === "") {
			console.log("itemNamespace can not be empty, falling back to cal-heatmap");
			options.itemNamespace = "cal-heatmap";
		}

		// Don't touch these settings
		var s = ["data", "onComplete", "onClick", "afterLoad", "afterLoadData", "afterLoadPreviousDomain", "afterLoadNextDomain"];

		for (var k in s) {
			if (settings.hasOwnProperty(s[k])) {
				options[s[k]] = settings[s[k]];
			}
		}

		options.subDomainDateFormat = (typeof options.subDomainDateFormat === "string" || typeof options.subDomainDateFormat === "function" ? options.subDomainDateFormat : this._domainType[options.subDomain].format.date);
		options.domainLabelFormat = (typeof options.domainLabelFormat === "string" || typeof options.domainLabelFormat === "function" ? options.domainLabelFormat : this._domainType[options.domain].format.legend);
		options.subDomainTextFormat = ((typeof options.subDomainTextFormat === "string" && options.subDomainTextFormat !== "") || typeof options.subDomainTextFormat === "function" ? options.subDomainTextFormat : null);
		options.domainMargin = expandMarginSetting(options.domainMargin);
		options.legendMargin = expandMarginSetting(options.legendMargin);
		options.highlight = parent.expandDateSetting(options.highlight);
		options.itemName = expandItemName(options.itemName);
		options.colLimit = parseColLimit(options.colLimit);
		options.rowLimit = parseRowLimit(options.rowLimit);
		if (!settings.hasOwnProperty("legendMargin")) {
			autoAddLegendMargin();
		}
		autoAlignLabel();

		/**
		 * Validate that a queryString is valid
		 *
		 * @param  {Element|string|bool} selector   The queryString to test
		 * @param  {bool}	canBeFalse	Whether false is an accepted and valid value
		 * @param  {string} name		Name of the tested selector
		 * @throws {Error}				If the selector is not valid
		 * @return {bool}				True if the selector is a valid queryString
		 */
		function validateSelector(selector, canBeFalse, name) {
			if (((canBeFalse && selector === false) || selector instanceof Element || typeof selector === "string") && selector !== "") {
				return true;
			}
			throw new Error("The " + name + " is not valid");
		}

		/**
		 * Return the optimal subDomain for the specified domain
		 *
		 * @param  {string} domain a domain name
		 * @return {string}        the subDomain name
		 */
		function getOptimalSubDomain(domain) {
			switch(domain) {
			case "year":
				return "month";
			case "month":
				return "day";
			case "week":
				return "day";
			case "day":
				return "hour";
			default:
				return "min";
			}
		}

		/**
		 * Ensure that the domain and subdomain are valid
		 *
		 * @throw {Error} when domain or subdomain are not valid
		 * @return {bool} True if domain and subdomain are valid and compatible
		 */
		function validateDomainType() {
			if (!parent._domainType.hasOwnProperty(options.domain) || options.domain === "min" || options.domain.substring(0, 2) === "x_") {
				throw new Error("The domain '" + options.domain + "' is not valid");
			}

			if (!parent._domainType.hasOwnProperty(options.subDomain) || options.subDomain === "year") {
				throw new Error("The subDomain '" + options.subDomain + "' is not valid");
			}

			if (parent._domainType[options.domain].level <= parent._domainType[options.subDomain].level) {
				throw new Error("'" + options.subDomain + "' is not a valid subDomain to '" + options.domain +  "'");
			}

			return true;
		}

		/**
		 * Fine-tune the label alignement depending on its position
		 *
		 * @return void
		 */
		function autoAlignLabel() {
			// Auto-align label, depending on it's position
			if (!settings.hasOwnProperty("label") || (settings.hasOwnProperty("label") && !settings.label.hasOwnProperty("align"))) {
				switch(options.label.position) {
				case "left":
					options.label.align = "right";
					break;
				case "right":
					options.label.align = "left";
					break;
				default:
					options.label.align = "center";
				}

				if (options.label.rotate === "left") {
					options.label.align = "right";
				} else if (options.label.rotate === "right") {
					options.label.align = "left";
				}
			}

			if (!settings.hasOwnProperty("label") || (settings.hasOwnProperty("label") && !settings.label.hasOwnProperty("offset"))) {
				if (options.label.position === "left" || options.label.position === "right") {
					options.label.offset = {
						x: 10,
						y: 15
					};
				}
			}
		}

		/**
		 * If not specified, add some margin around the legend depending on its position
		 *
		 * @return void
		 */
		function autoAddLegendMargin() {
			switch(options.legendVerticalPosition) {
			case "top":
				options.legendMargin[2] = parent.DEFAULT_LEGEND_MARGIN;
				break;
			case "bottom":
				options.legendMargin[0] = parent.DEFAULT_LEGEND_MARGIN;
				break;
			case "middle":
			case "center":
				options.legendMargin[options.legendHorizontalPosition === "right" ? 3 : 1] = parent.DEFAULT_LEGEND_MARGIN;
			}
		}

		/**
		 * Expand a number of an array of numbers to an usable 4 values array
		 *
		 * @param  {integer|array} value
		 * @return {array}        array
		 */
		function expandMarginSetting(value) {
			if (typeof value === "number") {
				value = [value];
			}

			if (!Array.isArray(value)) {
				console.log("Margin only takes an integer or an array of integers");
				value = [0];
			}

			switch(value.length) {
			case 1:
				return [value[0], value[0], value[0], value[0]];
			case 2:
				return [value[0], value[1], value[0], value[1]];
			case 3:
				return [value[0], value[1], value[2], value[1]];
			case 4:
				return value;
			default:
				return value.slice(0, 4);
			}
		}

		/**
		 * Convert a string to an array like [singular-form, plural-form]
		 *
		 * @param  {string|array} value Date to convert
		 * @return {array}       An array like [singular-form, plural-form]
		 */
		function expandItemName(value) {
			if (typeof value === "string") {
				return [value, value + (value !== "" ? "s" : "")];
			}

			if (Array.isArray(value)) {
				if (value.length === 1) {
					return [value[0], value[0] + "s"];
				} else if (value.length > 2) {
					return value.slice(0, 2);
				}

				return value;
			}

			return ["item", "items"];
		}

		function parseColLimit(value) {
			return value > 0 ? value : null;
		}

		function parseRowLimit(value) {
			if (value > 0 && options.colLimit > 0) {
				console.log("colLimit and rowLimit are mutually exclusive, rowLimit will be ignored");
				return null;
			}
			return value > 0 ? value : null;
		}

		return this._init();

	},

	/**
	 * Convert a keyword or an array of keyword/date to an array of date objects
	 *
	 * @param  {string|array|Date} value Data to convert
	 * @return {array}       An array of Dates
	 */
	expandDateSetting: function(value) {
		"use strict";

		if (!Array.isArray(value)) {
			value = [value];
		}

		return value.map(function(data) {
			if (data === "now") {
				return new Date();
			}
			if (data instanceof Date) {
				return data;
			}
			return false;
		}).filter(function(d) { return d !== false; });
	},

	/**
	 * Fill the calendar by coloring the cells
	 *
	 * @param array svg An array of html node to apply the transformation to (optional)
	 *                  It's used to limit the painting to only a subset of the calendar
	 * @return void
	 */
	fill: function(svg) {
		"use strict";

		var parent = this;
		var options = parent.options;

		if (arguments.length === 0) {
			svg = parent.root.selectAll(".graph-domain");
		}

		var rect = svg
			.selectAll("svg").selectAll("g")
			.data(function(d) { return parent._domains.get(d); })
		;

		/**
		 * Colorize the cell via a style attribute if enabled
		 */
		function addStyle(element) {
			if (parent.legendScale === null) {
				return false;
			}

			element.attr("fill", function(d) {
				if (d.v === null && (options.hasOwnProperty("considerMissingDataAsZero") && !options.considerMissingDataAsZero)) {
					if (options.legendColors.hasOwnProperty("base")) {
						return options.legendColors.base;
					}
				}

				if (options.legendColors !== null && options.legendColors.hasOwnProperty("empty") &&
					(d.v === 0 || (d.v === null && options.hasOwnProperty("considerMissingDataAsZero") && options.considerMissingDataAsZero))
				) {
					return options.legendColors.empty;
				}

				if (d.v < 0 && options.legend[0] > 0 && options.legendColors !== null && options.legendColors.hasOwnProperty("overflow")) {
					return options.legendColors.overflow;
				}

				return parent.legendScale(Math.min(d.v, options.legend[options.legend.length-1]));
			});
		}

		rect.transition().duration(options.animationDuration).select("rect")
			.attr("class", function(d) {

				var htmlClass = parent.getHighlightClassName(d.t).trim().split(" ");
				var pastDate = parent.dateIsLessThan(d.t, new Date());

				if (parent.legendScale === null ||
					(d.v === null && (options.hasOwnProperty("considerMissingDataAsZero") && !options.considerMissingDataAsZero) &&!options.legendColors.hasOwnProperty("base"))
				) {
					htmlClass.push("graph-rect");
				}

				if (!pastDate && htmlClass.indexOf("now") === -1) {
					htmlClass.push("future");
				}

				if (d.v !== null) {
					htmlClass.push(parent.Legend.getClass(d.v, (parent.legendScale === null)));
				} else if (options.considerMissingDataAsZero && pastDate) {
					htmlClass.push(parent.Legend.getClass(0, (parent.legendScale === null)));
				}

				if (options.onClick !== null) {
					htmlClass.push("hover_cursor");
				}

				return htmlClass.join(" ");
			})
			.call(addStyle)
		;

		rect.transition().duration(options.animationDuration).select("title")
			.text(function(d) { return parent.getSubDomainTitle(d); })
		;

		function formatSubDomainText(element) {
			if (typeof options.subDomainTextFormat === "function") {
				element.text(function(d) { return options.subDomainTextFormat(d.t, d.v); });
			}
		}

		/**
		 * Change the subDomainText class if necessary
		 * Also change the text, e.g when text is representing the value
		 * instead of the date
		 */
		rect.transition().duration(options.animationDuration).select("text")
			.attr("class", function(d) { return "subdomain-text" + parent.getHighlightClassName(d.t); })
			.call(formatSubDomainText)
		;
	},

	// =========================================================================//
	// EVENTS CALLBACK															//
	// =========================================================================//

	/**
	 * Helper method for triggering event callback
	 *
	 * @param  string	eventName       Name of the event to trigger
	 * @param  array	successArgs     List of argument to pass to the callback
	 * @param  boolean  skip			Whether to skip the event triggering
	 * @return mixed	True when the triggering was skipped, false on error, else the callback function
	 */
	triggerEvent: function(eventName, successArgs, skip) {
		"use strict";

		if ((arguments.length === 3 && skip) || this.options[eventName] === null) {
			return true;
		}

		if (typeof this.options[eventName] === "function") {
			if (typeof successArgs === "function") {
				successArgs = successArgs();
			}
			return this.options[eventName].apply(this, successArgs);
		} else {
			console.log("Provided callback for " + eventName + " is not a function.");
			return false;
		}
	},

	/**
	 * Event triggered on a mouse click on a subDomain cell
	 *
	 * @param  Date		d		Date of the subdomain block
	 * @param  int		itemNb	Number of items in that date
	 */
	onClick: function(d, itemNb) {
		"use strict";

		return this.triggerEvent("onClick", [d, itemNb]);
	},

	/**
	 * Event triggered after drawing the calendar, byt before filling it with data
	 */
	afterLoad: function() {
		"use strict";

		return this.triggerEvent("afterLoad");
	},

	/**
	 * Event triggered after completing drawing and filling the calendar
	 */
	onComplete: function() {
		"use strict";

		var response = this.triggerEvent("onComplete", [], this._completed);
		this._completed = true;
		return response;
	},

	/**
	 * Event triggered after shifting the calendar one domain back
	 *
	 * @param  Date		start	Domain start date
	 * @param  Date		end		Domain end date
	 */
	afterLoadPreviousDomain: function(start) {
		"use strict";

		var parent = this;
		return this.triggerEvent("afterLoadPreviousDomain", function() {
			var subDomain = parent.getSubDomain(start);
			return [subDomain.shift(), subDomain.pop()];
		});
	},

	/**
	 * Event triggered after shifting the calendar one domain above
	 *
	 * @param  Date		start	Domain start date
	 * @param  Date		end		Domain end date
	 */
	afterLoadNextDomain: function(start) {
		"use strict";

		var parent = this;
		return this.triggerEvent("afterLoadNextDomain", function() {
			var subDomain = parent.getSubDomain(start);
			return [subDomain.shift(), subDomain.pop()];
		});
	},

	/**
	 * Event triggered after loading the leftmost domain allowed by minDate
	 *
	 * @param  boolean  reached True if the leftmost domain was reached
	 */
	onMinDomainReached: function(reached) {
		"use strict";

		this._minDomainReached = reached;
		return this.triggerEvent("onMinDomainReached", [reached]);
	},

	/**
	 * Event triggered after loading the rightmost domain allowed by maxDate
	 *
	 * @param  boolean  reached True if the rightmost domain was reached
	 */
	onMaxDomainReached: function(reached) {
		"use strict";

		this._maxDomainReached = reached;
		return this.triggerEvent("onMaxDomainReached", [reached]);
	},

	checkIfMinDomainIsReached: function(date, upperBound) {
		"use strict";

		if (this.minDomainIsReached(date)) {
			this.onMinDomainReached(true);
		}

		if (arguments.length === 2) {
			if (this._maxDomainReached && !this.maxDomainIsReached(upperBound)) {
				this.onMaxDomainReached(false);
			}
		}
	},

	checkIfMaxDomainIsReached: function(date, lowerBound) {
		"use strict";

		if (this.maxDomainIsReached(date)) {
			this.onMaxDomainReached(true);
		}

		if (arguments.length === 2) {
			if (this._minDomainReached && !this.minDomainIsReached(lowerBound)) {
				this.onMinDomainReached(false);
			}
		}
	},

	// =========================================================================//
	// FORMATTER																//
	// =========================================================================//

	formatNumber: d3.format(",g"),

	formatDate: function(d, format) {
		"use strict";

		if (arguments.length < 2) {
			format = "title";
		}

		if (typeof format === "function") {
			return format(d);
		} else {
			var f = d3.time.format(format);
			return f(d);
		}
	},

	getSubDomainTitle: function(d) {
		"use strict";

		if (d.v === null && !this.options.considerMissingDataAsZero) {
			return (this.options.subDomainTitleFormat.empty).format({
				date: this.formatDate(new Date(d.t), this.options.subDomainDateFormat)
			});
		} else {
			var value = d.v;
			// Consider null as 0
			if (value === null && this.options.considerMissingDataAsZero) {
				value = 0;
			}

			return (this.options.subDomainTitleFormat.filled).format({
				count: this.formatNumber(value),
				name: this.options.itemName[(value !== 1 ? 1: 0)],
				connector: this._domainType[this.options.subDomain].format.connector,
				date: this.formatDate(new Date(d.t), this.options.subDomainDateFormat)
			});
		}
	},

	// =========================================================================//
	// DOMAIN NAVIGATION														//
	// =========================================================================//

	/**
	 * Shift the calendar one domain forward
	 *
	 * The new domain is loaded only if it's not beyond maxDate
	 *
	 * @param int n Number of domains to load
	 * @return bool True if the next domain was loaded, else false
	 */
	loadNextDomain: function(n) {
		"use strict";

		if (this._maxDomainReached || n === 0) {
			return false;
		}

		var bound = this.loadNewDomains(this.NAVIGATE_RIGHT, this.getDomain(this.getNextDomain(), n));

		this.afterLoadNextDomain(bound.end);
		this.checkIfMaxDomainIsReached(this.getNextDomain().getTime(), bound.start);

		return true;
	},

	/**
	 * Shift the calendar one domain backward
	 *
	 * The previous domain is loaded only if it's not beyond the minDate
	 *
	 * @param int n Number of domains to load
	 * @return bool True if the previous domain was loaded, else false
	 */
	loadPreviousDomain: function(n) {
		"use strict";

		if (this._minDomainReached || n === 0) {
			return false;
		}

		var bound = this.loadNewDomains(this.NAVIGATE_LEFT, this.getDomain(this.getDomainKeys()[0], -n).reverse());

		this.afterLoadPreviousDomain(bound.start);
		this.checkIfMinDomainIsReached(bound.start, bound.end);

		return true;
	},

	loadNewDomains: function(direction, newDomains) {
		"use strict";

		var parent = this;
		var backward = direction === this.NAVIGATE_LEFT;
		var i = -1;
		var total = newDomains.length;
		var domains = this.getDomainKeys();

		function buildSubDomain(d) {
			return {t: parent._domainType[parent.options.subDomain].extractUnit(d), v: null};
		}

		// Remove out of bound domains from list of new domains to prepend
		while (++i < total) {
			if (backward && this.minDomainIsReached(newDomains[i])) {
				newDomains = newDomains.slice(0, i+1);
				break;
			}
			if (!backward && this.maxDomainIsReached(newDomains[i])) {
				newDomains = newDomains.slice(0, i);
				break;
			}
		}

		newDomains = newDomains.slice(-this.options.range);

		for (i = 0, total = newDomains.length; i < total; i++) {
			this._domains.set(
				newDomains[i].getTime(),
				this.getSubDomain(newDomains[i]).map(buildSubDomain)
			);

			this._domains.remove(backward ? domains.pop() : domains.shift());
		}

		domains = this.getDomainKeys();

		if (backward) {
			newDomains = newDomains.reverse();
		}

		this.paint(direction);

		this.getDatas(
			this.options.data,
			newDomains[0],
			this.getSubDomain(newDomains[newDomains.length-1]).pop(),
			function() {
				parent.fill(parent.lastInsertedSvg);
			}
		);

		return {
			start: newDomains[backward ? 0 : 1],
			end: domains[domains.length-1]
		};
	},

	/**
	 * Return whether a date is inside the scope determined by maxDate
	 *
	 * @param int datetimestamp The timestamp in ms to test
	 * @return bool True if the specified date correspond to the calendar upper bound
	 */
	maxDomainIsReached: function(datetimestamp) {
		"use strict";

		return (this.options.maxDate !== null && (this.options.maxDate.getTime() < datetimestamp));
	},

	/**
	 * Return whether a date is inside the scope determined by minDate
	 *
	 * @param int datetimestamp The timestamp in ms to test
	 * @return bool True if the specified date correspond to the calendar lower bound
	 */
	minDomainIsReached: function (datetimestamp) {
		"use strict";

		return (this.options.minDate !== null && (this.options.minDate.getTime() >= datetimestamp));
	},

	/**
	 * Return the list of the calendar's domain timestamp
	 *
	 * @return Array a sorted array of timestamp
	 */
	getDomainKeys: function() {
		"use strict";

		return this._domains.keys()
			.map(function(d) { return parseInt(d, 10); })
			.sort(function(a,b) { return a-b; });
	},

	// =========================================================================//
	// POSITIONNING																//
	// =========================================================================//

	positionSubDomainX: function(d) {
		"use strict";

		var index = this._domainType[this.options.subDomain].position.x(new Date(d));
		return index * this.options.cellSize + index * this.options.cellPadding;
	},

	positionSubDomainY: function(d) {
		"use strict";

		var index = this._domainType[this.options.subDomain].position.y(new Date(d));
		return index * this.options.cellSize + index * this.options.cellPadding;
	},

	getSubDomainColumnNumber: function(d) {
		"use strict";

		if (this.options.rowLimit > 0) {
			var i = this._domainType[this.options.subDomain].maxItemNumber;
			if (typeof i === "function") {
				i = i(d);
			}
			return Math.ceil(i / this.options.rowLimit);
		}

		var j = this._domainType[this.options.subDomain].defaultColumnNumber;
		if (typeof j === "function") {
			j = j(d);

		}
		return this.options.colLimit || j;
	},

	getSubDomainRowNumber: function(d) {
		"use strict";

		if (this.options.colLimit > 0) {
			var i = this._domainType[this.options.subDomain].maxItemNumber;
			if (typeof i === "function") {
				i = i(d);
			}
			return Math.ceil(i / this.options.colLimit);
		}

		var j = this._domainType[this.options.subDomain].defaultRowNumber;
		if (typeof j === "function") {
			j = j(d);

		}
		return this.options.rowLimit || j;
	},

	/**
	 * Return a classname if the specified date should be highlighted
	 *
	 * @param  timestamp date Date of the current subDomain
	 * @return String the highlight class
	 */
	getHighlightClassName: function(d) {
		"use strict";

		d = new Date(d);

		if (this.options.highlight.length > 0) {
			for (var i in this.options.highlight) {
				if (this.options.highlight[i] instanceof Date && this.dateIsEqual(this.options.highlight[i], d)) {
					return " highlight" + (this.isNow(this.options.highlight[i]) ? " now": "");
				}
			}
		}
		return "";
	},

	/**
	 * Return whether the specified date is now,
	 * according to the type of subdomain
	 *
	 * @param  Date d The date to compare
	 * @return bool True if the date correspond to a subdomain cell
	 */
	isNow: function(d) {
		"use strict";

		return this.dateIsEqual(d, new Date());
	},

	/**
	 * Return whether 2 dates are equals
	 * This function is subdomain-aware,
	 * and dates comparison are dependent of the subdomain
	 *
	 * @param  Date dateA First date to compare
	 * @param  Date dateB Secon date to compare
	 * @return bool true if the 2 dates are equals
	 */
	/* jshint maxcomplexity: false */
	dateIsEqual: function(dateA, dateB) {
		"use strict";

		switch(this.options.subDomain) {
		case "x_min":
		case "min":
			return dateA.getFullYear() === dateB.getFullYear() &&
				dateA.getMonth() === dateB.getMonth() &&
				dateA.getDate() === dateB.getDate() &&
				dateA.getHours() === dateB.getHours() &&
				dateA.getMinutes() === dateB.getMinutes();
		case "x_hour":
		case "hour":
			return dateA.getFullYear() === dateB.getFullYear() &&
				dateA.getMonth() === dateB.getMonth() &&
				dateA.getDate() === dateB.getDate() &&
				dateA.getHours() === dateB.getHours();
		case "x_day":
		case "day":
			return dateA.getFullYear() === dateB.getFullYear() &&
				dateA.getMonth() === dateB.getMonth() &&
				dateA.getDate() === dateB.getDate();
		case "x_week":
		case "week":
			return dateA.getFullYear() === dateB.getFullYear() &&
				this.getWeekNumber(dateA) === this.getWeekNumber(dateB);
		case "x_month":
		case "month":
			return dateA.getFullYear() === dateB.getFullYear() &&
				dateA.getMonth() === dateB.getMonth();
		default:
			return false;
		}
	},


	/**
	 * Returns wether or not dateA is less than or equal to dateB. This function is subdomain aware.
	 * Performs automatic conversion of values.
	 * @param dateA may be a number or a Date
	 * @param dateB may be a number or a Date
	 * @returns {boolean}
	 */
	dateIsLessThan: function(dateA, dateB) {
		"use strict";

		if(!(dateA instanceof Date)) {
			dateA = new Date(dateA);
		}

		if (!(dateB instanceof Date)) {
			dateB = new Date(dateB);
		}


		function normalizedMillis(date, subdomain) {
			switch(subdomain) {
			case "x_min":
			case "min":
				return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()).getTime();
			case "x_hour":
			case "hour":
				return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()).getTime();
			case "x_day":
			case "day":
				return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
			case "x_week":
			case "week":
			case "x_month":
			case "month":
				return new Date(date.getFullYear(), date.getMonth()).getTime();
			default:
				return date.getTime();
			}
		}

		return normalizedMillis(dateA, this.options.subDomain) < normalizedMillis(dateB, this.options.subDomain);
	},


	// =========================================================================//
	// DATE COMPUTATION															//
	// =========================================================================//

	/**
	 * Return the day of the year for the date
	 * @param	Date
	 * @return  int Day of the year [1,366]
	 */
	getDayOfYear: d3.time.format("%j"),

	/**
	 * Return the week number of the year
	 * Monday as the first day of the week
	 * @return int	Week number [0-53]
	 */
	getWeekNumber: function(d) {
		"use strict";

		var f = this.options.weekStartOnMonday === true ? d3.time.format("%W"): d3.time.format("%U");
		return f(d);
	},

	/**
	 * Return the week number, relative to its month
	 *
	 * @param  int|Date d Date or timestamp in milliseconds
	 * @return int Week number, relative to the month [0-5]
	 */
	getMonthWeekNumber: function (d) {
		"use strict";

		if (typeof d === "number") {
			d = new Date(d);
		}

		var monthFirstWeekNumber = this.getWeekNumber(new Date(d.getFullYear(), d.getMonth()));
		return this.getWeekNumber(d) - monthFirstWeekNumber - 1;
	},

	/**
	 * Return the number of weeks in the dates' year
	 *
	 * @param  int|Date d Date or timestamp in milliseconds
	 * @return int Number of weeks in the date's year
	 */
	getWeekNumberInYear: function(d) {
		"use strict";

		if (typeof d === "number") {
			d = new Date(d);
		}
	},

	/**
	 * Return the number of days in the date's month
	 *
	 * @param  int|Date d Date or timestamp in milliseconds
	 * @return int Number of days in the date's month
	 */
	getDayCountInMonth: function(d) {
		"use strict";

		return this.getEndOfMonth(d).getDate();
	},

	/**
	 * Return the number of days in the date's year
	 *
	 * @param  int|Date d Date or timestamp in milliseconds
	 * @return int Number of days in the date's year
	 */
	getDayCountInYear: function(d) {
		"use strict";

		if (typeof d === "number") {
			d = new Date(d);
		}
		return (new Date(d.getFullYear(), 1, 29).getMonth() === 1) ? 366 : 365;
	},

	/**
	 * Get the weekday from a date
	 *
	 * Return the week day number (0-6) of a date,
	 * depending on whether the week start on monday or sunday
	 *
	 * @param  Date d
	 * @return int The week day number (0-6)
	 */
	getWeekDay: function(d) {
		"use strict";

		if (this.options.weekStartOnMonday === false) {
			return d.getDay();
		}
		return d.getDay() === 0 ? 6 : (d.getDay()-1);
	},

	/**
	 * Get the last day of the month
	 * @param  Date|int	d	Date or timestamp in milliseconds
	 * @return Date			Last day of the month
	 */
	getEndOfMonth: function(d) {
		"use strict";

		if (typeof d === "number") {
			d = new Date(d);
		}
		return new Date(d.getFullYear(), d.getMonth()+1, 0);
	},

	/**
	 *
	 * @param  Date date
	 * @param  int count
	 * @param  string step
	 * @return Date
	 */
	jumpDate: function(date, count, step) {
		"use strict";

		var d = new Date(date);
		switch(step) {
		case "hour":
			d.setHours(d.getHours() + count);
			break;
		case "day":
			d.setHours(d.getHours() + count * 24);
			break;
		case "week":
			d.setHours(d.getHours() + count * 24 * 7);
			break;
		case "month":
			d.setMonth(d.getMonth() + count);
			break;
		case "year":
			d.setFullYear(d.getFullYear() + count);
		}

		return new Date(d);
	},

	// =========================================================================//
	// DOMAIN COMPUTATION														//
	// =========================================================================//

	/**
	 * Return all the minutes between 2 dates
	 *
	 * @param  Date	d	date	A date
	 * @param  int|date	range	Number of minutes in the range, or a stop date
	 * @return array	An array of minutes
	 */
	getMinuteDomain: function (d, range) {
		"use strict";

		var start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours());
		var stop = null;
		if (range instanceof Date) {
			stop = new Date(range.getFullYear(), range.getMonth(), range.getDate(), range.getHours());
		} else {
			stop = new Date(+start + range * 1000 * 60);
		}
		return d3.time.minutes(Math.min(start, stop), Math.max(start, stop));
	},

	/**
	 * Return all the hours between 2 dates
	 *
	 * @param  Date	d	A date
	 * @param  int|date	range	Number of hours in the range, or a stop date
	 * @return array	An array of hours
	 */
	getHourDomain: function (d, range) {
		"use strict";

		var start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours());
		var stop = null;
		if (range instanceof Date) {
			stop = new Date(range.getFullYear(), range.getMonth(), range.getDate(), range.getHours());
		} else {
			stop = new Date(start);
			stop.setHours(stop.getHours() + range);
		}

		var domains = d3.time.hours(Math.min(start, stop), Math.max(start, stop));

		// Passing from DST to standard time
		// If there are 25 hours, let's compress the duplicate hours
		var i = 0;
		var total = domains.length;
		for(i = 0; i < total; i++) {
			if (i > 0 && (domains[i].getHours() === domains[i-1].getHours())) {
				this.DSTDomain.push(domains[i].getTime());
				domains.splice(i, 1);
				break;
			}
		}

		// d3.time.hours is returning more hours than needed when changing
		// from DST to standard time, because there is really 2 hours between
		// 1am and 2am!
		if (typeof range === "number" && domains.length > Math.abs(range)) {
			domains.splice(domains.length-1, 1);
		}

		return domains;
	},

	/**
	 * Return all the days between 2 dates
	 *
	 * @param  Date		d		A date
	 * @param  int|date	range	Number of days in the range, or a stop date
	 * @return array	An array of weeks
	 */
	getDayDomain: function (d, range) {
		"use strict";

		var start = new Date(d.getFullYear(), d.getMonth(), d.getDate());
		var stop = null;
		if (range instanceof Date) {
			stop = new Date(range.getFullYear(), range.getMonth(), range.getDate());
		} else {
			stop = new Date(start);
			stop = new Date(stop.setDate(stop.getDate() + parseInt(range, 10)));
		}

		return d3.time.days(Math.min(start, stop), Math.max(start, stop));
	},

	/**
	 * Return all the weeks between 2 dates
	 *
	 * @param  Date	d	A date
	 * @param  int|date	range	Number of minutes in the range, or a stop date
	 * @return array	An array of weeks
	 */
	getWeekDomain: function (d, range) {
		"use strict";

		var weekStart;

		if (this.options.weekStartOnMonday === false) {
			weekStart = new Date(d.getFullYear(), d.getMonth(), d.getDate() - d.getDay());
		} else {
			if (d.getDay() === 1) {
				weekStart = new Date(d.getFullYear(), d.getMonth(), d.getDate());
			} else if (d.getDay() === 0) {
				weekStart = new Date(d.getFullYear(), d.getMonth(), d.getDate());
				weekStart.setDate(weekStart.getDate() - 6);
			} else {
				weekStart = new Date(d.getFullYear(), d.getMonth(), d.getDate()-d.getDay()+1);
			}
		}

		var endDate = new Date(weekStart);

		var stop = range;
		if (typeof range !== "object") {
			stop = new Date(endDate.setDate(endDate.getDate() + range * 7));
		}

		return (this.options.weekStartOnMonday === true) ?
			d3.time.mondays(Math.min(weekStart, stop), Math.max(weekStart, stop)):
			d3.time.sundays(Math.min(weekStart, stop), Math.max(weekStart, stop))
		;
	},

	/**
	 * Return all the months between 2 dates
	 *
	 * @param  Date		d		A date
	 * @param  int|date	range	Number of months in the range, or a stop date
	 * @return array	An array of months
	 */
	getMonthDomain: function (d, range) {
		"use strict";

		var start = new Date(d.getFullYear(), d.getMonth());
		var stop = null;
		if (range instanceof Date) {
			stop = new Date(range.getFullYear(), range.getMonth());
		} else {
			stop = new Date(start);
			stop = stop.setMonth(stop.getMonth()+range);
		}

		return d3.time.months(Math.min(start, stop), Math.max(start, stop));
	},

	/**
	 * Return all the years between 2 dates
	 *
	 * @param  Date	d	date	A date
	 * @param  int|date	range	Number of minutes in the range, or a stop date
	 * @return array	An array of hours
	 */
	getYearDomain: function(d, range){
		"use strict";

		var start = new Date(d.getFullYear(), 0);
		var stop = null;
		if (range instanceof Date) {
			stop = new Date(range.getFullYear(), 0);
		} else {
			stop = new Date(d.getFullYear()+range, 0);
		}

		return d3.time.years(Math.min(start, stop), Math.max(start, stop));
	},

	/**
	 * Get an array of domain start dates
	 *
	 * @param  int|Date date A random date included in the wanted domain
	 * @param  int|Date range Number of dates to get, or a stop date
	 * @return Array of dates
	 */
	getDomain: function(date, range) {
		"use strict";

		if (typeof date === "number") {
			date = new Date(date);
		}

		if (arguments.length < 2) {
			range = this.options.range;
		}

		switch(this.options.domain) {
		case "hour" :
			var domains = this.getHourDomain(date, range);

			// Case where an hour is missing, when passing from standard time to DST
			// Missing hour is perfectly acceptabl in subDomain, but not in domains
			if (typeof range === "number" && domains.length < range) {
				if (range > 0) {
					domains.push(this.getHourDomain(domains[domains.length-1], 2)[1]);
				} else {
					domains.shift(this.getHourDomain(domains[0], -2)[0]);
				}
			}
			return domains;
		case "day"  :
			return this.getDayDomain(date, range);
		case "week" :
			return this.getWeekDomain(date, range);
		case "month":
			return this.getMonthDomain(date, range);
		case "year" :
			return this.getYearDomain(date, range);
		}
	},

	/* jshint maxcomplexity: false */
	getSubDomain: function(date) {
		"use strict";

		if (typeof date === "number") {
			date = new Date(date);
		}

		var parent = this;

		/**
		 * @return int
		 */
		var computeDaySubDomainSize = function(date, domain) {
			switch(domain) {
			case "year":
				return parent.getDayCountInYear(date);
			case "month":
				return parent.getDayCountInMonth(date);
			case "week":
				return 7;
			}
		};

		/**
		 * @return int
		 */
		var computeMinSubDomainSize = function(date, domain) {
			switch (domain) {
			case "hour":
				return 60;
			case "day":
				return 60 * 24;
			case "week":
				return 60 * 24 * 7;
			}
		};

		/**
		 * @return int
		 */
		var computeHourSubDomainSize = function(date, domain) {
			switch(domain) {
			case "day":
				return 24;
			case "week":
				return 168;
			case "month":
				return parent.getDayCountInMonth(date) * 24;
			}
		};

		/**
		 * @return int
		 */
		var computeWeekSubDomainSize = function(date, domain) {
			if (domain === "month") {
				var endOfMonth = new Date(date.getFullYear(), date.getMonth()+1, 0);
				var endWeekNb = parent.getWeekNumber(endOfMonth);
				var startWeekNb = parent.getWeekNumber(new Date(date.getFullYear(), date.getMonth()));

				if (startWeekNb > endWeekNb) {
					startWeekNb = 0;
					endWeekNb++;
				}

				return endWeekNb - startWeekNb + 1;
			} else if (domain === "year") {
				return parent.getWeekNumber(new Date(date.getFullYear(), 11, 31));
			}
		};

		switch(this.options.subDomain) {
		case "x_min":
		case "min"  :
			return this.getMinuteDomain(date, computeMinSubDomainSize(date, this.options.domain));
		case "x_hour":
		case "hour" :
			return this.getHourDomain(date, computeHourSubDomainSize(date, this.options.domain));
		case "x_day":
		case "day"  :
			return this.getDayDomain(date, computeDaySubDomainSize(date, this.options.domain));
		case "x_week":
		case "week" :
			return this.getWeekDomain(date, computeWeekSubDomainSize(date, this.options.domain));
		case "x_month":
		case "month":
			return this.getMonthDomain(date, 12);
		}
	},

	/**
	 * Get the n-th next domain after the calendar newest (rightmost) domain
	 * @param  int n
	 * @return Date The start date of the wanted domain
	 */
	getNextDomain: function(n) {
		"use strict";

		if (arguments.length === 0) {
			n = 1;
		}
		return this.getDomain(this.jumpDate(this.getDomainKeys().pop(), n, this.options.domain), 1)[0];
	},

	/**
	 * Get the n-th domain before the calendar oldest (leftmost) domain
	 * @param  int n
	 * @return Date The start date of the wanted domain
	 */
	getPreviousDomain: function(n) {
		"use strict";

		if (arguments.length === 0) {
			n = 1;
		}
		return this.getDomain(this.jumpDate(this.getDomainKeys().shift(), -n, this.options.domain), 1)[0];
	},


	// =========================================================================//
	// DATAS																	//
	// =========================================================================//

	/**
	 * Fetch and interpret data from the datasource
	 *
	 * @param string|object source
	 * @param Date startDate
	 * @param Date endDate
	 * @param function callback
	 * @param function|boolean afterLoad function used to convert the data into a json object. Use true to use the afterLoad callback
	 * @param updateMode
	 *
	 * @return mixed
	 * - True if there are no data to load
	 * - False if data are loaded asynchronously
	 */
	getDatas: function(source, startDate, endDate, callback, afterLoad, updateMode) {
		"use strict";

		var self = this;
		if (arguments.length < 5) {
			afterLoad = true;
		}
		if (arguments.length < 6) {
			updateMode = this.APPEND_ON_UPDATE;
		}
		var _callback = function(data) {
			if (afterLoad !== false) {
				if (typeof afterLoad === "function") {
					data = afterLoad(data);
				} else if (typeof (self.options.afterLoadData) === "function") {
					data = self.options.afterLoadData(data);
				} else {
					console.log("Provided callback for afterLoadData is not a function.");
				}
			} else if (self.options.dataType === "csv" || self.options.dataType === "tsv") {
				data = this.interpretCSV(data);
			}
			self.parseDatas(data, updateMode, startDate, endDate);
			if (typeof callback === "function") {
				callback();
			}
		};

		switch(typeof source) {
		case "string":
			if (source === "") {
				_callback({});
				return true;
			} else {
				var url = this.parseURI(source, startDate, endDate);
				var requestType = "GET";
				if (self.options.dataPostPayload !== null ) {
					requestType = "POST";
				}
				var payload = null;
				if (self.options.dataPostPayload !== null) {
					payload = this.parseURI(self.options.dataPostPayload, startDate, endDate);
				}

				switch(this.options.dataType) {
				case "json":
					d3.json(url, _callback).send(requestType, payload);
					break;
				case "csv":
					d3.csv(url, _callback).send(requestType, payload);
					break;
				case "tsv":
					d3.tsv(url, _callback).send(requestType, payload);
					break;
				case "txt":
					d3.text(url, "text/plain", _callback).send(requestType, payload);
					break;
				}
			}
			return false;
		case "object":
			if (source === Object(source)) {
				_callback(source);
				return false;
			}
			/* falls through */
		default:
			_callback({});
			return true;
		}
	},

	/**
	 * Populate the calendar internal data
	 *
	 * @param object data
	 * @param constant updateMode
	 * @param Date startDate
	 * @param Date endDate
	 *
	 * @return void
	 */
	parseDatas: function(data, updateMode, startDate, endDate) {
		"use strict";

		if (updateMode === this.RESET_ALL_ON_UPDATE) {
			this._domains.forEach(function(key, value) {
				value.forEach(function(element, index, array) {
					array[index].v = null;
				});
			});
		}

		var temp = {};

		var extractTime = function(d) { return d.t; };

		/*jshint forin:false */
		for (var d in data) {
			var date = new Date(d*1000);
			var domainUnit = this.getDomain(date)[0].getTime();

			// The current data belongs to a domain that was compressed
			// Compress the data for the two duplicate hours into the same hour
			if (this.DSTDomain.indexOf(domainUnit) >= 0) {

				// Re-assign all data to the first or the second duplicate hours
				// depending on which is visible
				if (this._domains.has(domainUnit - 3600 * 1000)) {
					domainUnit -= 3600 * 1000;
				}
			}

			// Skip if data is not relevant to current domain
			if (isNaN(d) || !data.hasOwnProperty(d) || !this._domains.has(domainUnit) || !(domainUnit >= +startDate && domainUnit < +endDate)) {
				continue;
			}

			var subDomainsData = this._domains.get(domainUnit);

			if (!temp.hasOwnProperty(domainUnit)) {
				temp[domainUnit] = subDomainsData.map(extractTime);
			}

			var index = temp[domainUnit].indexOf(this._domainType[this.options.subDomain].extractUnit(date));

			if (updateMode === this.RESET_SINGLE_ON_UPDATE) {
				subDomainsData[index].v = data[d];
			} else {
				if (!isNaN(subDomainsData[index].v)) {
					subDomainsData[index].v += data[d];
				} else {
					subDomainsData[index].v = data[d];
				}
			}
		}
	},

	parseURI: function(str, startDate, endDate) {
		"use strict";

		// Use a timestamp in seconds
		str = str.replace(/\{\{t:start\}\}/g, startDate.getTime()/1000);
		str = str.replace(/\{\{t:end\}\}/g, endDate.getTime()/1000);

		// Use a string date, following the ISO-8601
		str = str.replace(/\{\{d:start\}\}/g, startDate.toISOString());
		str = str.replace(/\{\{d:end\}\}/g, endDate.toISOString());

		return str;
	},

	interpretCSV: function(data) {
		"use strict";

		var d = {};
		var keys = Object.keys(data[0]);
		var i, total;
		for (i = 0, total = data.length; i < total; i++) {
			d[data[i][keys[0]]] = +data[i][keys[1]];
		}
		return d;
	},

	/**
	 * Handle the calendar layout and dimension
	 *
	 * Expand and shrink the container depending on its children dimension
	 * Also rearrange the children position depending on their dimension,
	 * and the legend position
	 *
	 * @return void
	 */
	resize: function() {
		"use strict";

		var parent = this;
		var options = parent.options;
		var legendWidth = options.displayLegend ? (parent.Legend.getDim("width") + options.legendMargin[1] + options.legendMargin[3]) : 0;
		var legendHeight = options.displayLegend ? (parent.Legend.getDim("height") + options.legendMargin[0] + options.legendMargin[2]) : 0;

		var graphWidth = parent.graphDim.width - options.domainGutter - options.cellPadding;
		var graphHeight = parent.graphDim.height - options.domainGutter - options.cellPadding;

		this.root.transition().duration(options.animationDuration)
			.attr("width", function() {
				if (options.legendVerticalPosition === "middle" || options.legendVerticalPosition === "center") {
					return graphWidth + legendWidth;
				}
				return Math.max(graphWidth, legendWidth);
			})
			.attr("height", function() {
				if (options.legendVerticalPosition === "middle" || options.legendVerticalPosition === "center") {
					return Math.max(graphHeight, legendHeight);
				}
				return graphHeight + legendHeight;
			})
		;

		this.root.select(".graph").transition().duration(options.animationDuration)
			.attr("y", function() {
				if (options.legendVerticalPosition === "top") {
					return legendHeight;
				}
				return 0;
			})
			.attr("x", function() {
				if (
					(options.legendVerticalPosition === "middle" || options.legendVerticalPosition === "center") &&
					options.legendHorizontalPosition === "left") {
					return legendWidth;
				}
				return 0;

			})
		;
	},

	// =========================================================================//
	// PUBLIC API																//
	// =========================================================================//

	/**
	 * Shift the calendar forward
	 */
	next: function(n) {
		"use strict";

		if (arguments.length === 0) {
			n = 1;
		}
		return this.loadNextDomain(n);
	},

	/**
	 * Shift the calendar backward
	 */
	previous: function(n) {
		"use strict";

		if (arguments.length === 0) {
			n = 1;
		}
		return this.loadPreviousDomain(n);
	},

	/**
	 * Jump directly to a specific date
	 *
	 * JumpTo will scroll the calendar until the wanted domain with the specified
	 * date is visible. Unless you set reset to true, the wanted domain
	 * will not necessarily be the first (leftmost) domain of the calendar.
	 *
	 * @param Date date Jump to the domain containing that date
	 * @param bool reset Whether the wanted domain should be the first domain of the calendar
	 * @param bool True of the calendar was scrolled
	 */
	jumpTo: function(date, reset) {
		"use strict";

		if (arguments.length < 2) {
			reset = false;
		}
		var domains = this.getDomainKeys();
		var firstDomain = domains[0];
		var lastDomain = domains[domains.length-1];

		if (date < firstDomain) {
			return this.loadPreviousDomain(this.getDomain(firstDomain, date).length);
		} else {
			if (reset) {
				return this.loadNextDomain(this.getDomain(firstDomain, date).length);
			}

			if (date > lastDomain) {
				return this.loadNextDomain(this.getDomain(lastDomain, date).length);
			}
		}

		return false;
	},

	/**
	 * Navigate back to the start date
	 *
	 * @since  3.3.8
	 * @return void
	 */
	rewind: function() {
		"use strict";

		this.jumpTo(this.options.start, true);
	},

	/**
	 * Update the calendar with new data
	 *
	 * @param  object|string		dataSource		The calendar's datasource, same type as this.options.data
	 * @param  boolean|function		afterLoad		Whether to execute afterLoad() on the data. Pass directly a function
	 * if you don't want to use the afterLoad() callback
	 */
	update: function(dataSource, afterLoad, updateMode) {
		"use strict";

		if (arguments.length < 2) {
			afterLoad = true;
		}
		if (arguments.length < 3) {
			updateMode = this.RESET_ALL_ON_UPDATE;
		}

		var domains = this.getDomainKeys();
		var self = this;
		this.getDatas(
			dataSource,
			new Date(domains[0]),
			this.getSubDomain(domains[domains.length-1]).pop(),
			function() {
				self.fill();
			},
			afterLoad,
			updateMode
		);
	},

	/**
	 * Set the legend
	 *
	 * @param array legend an array of integer, representing the different threshold value
	 * @param array colorRange an array of 2 hex colors, for the minimum and maximum colors
	 */
	setLegend: function() {
		"use strict";

		var oldLegend = this.options.legend.slice(0);
		if (arguments.length >= 1 && Array.isArray(arguments[0])) {
			this.options.legend = arguments[0];
		}
		if (arguments.length >= 2) {
			if (Array.isArray(arguments[1]) && arguments[1].length >= 2) {
				this.options.legendColors = [arguments[1][0], arguments[1][1]];
			} else {
				this.options.legendColors = arguments[1];
			}
		}

		if ((arguments.length > 0 && !arrayEquals(oldLegend, this.options.legend)) || arguments.length >= 2) {
			this.Legend.buildColors();
			this.fill();
		}

		this.Legend.redraw(this.graphDim.width - this.options.domainGutter - this.options.cellPadding);
	},

	/**
	 * Remove the legend
	 *
	 * @return bool False if there is no legend to remove
	 */
	removeLegend: function() {
		"use strict";

		if (!this.options.displayLegend) {
			return false;
		}
		this.options.displayLegend = false;
		this.Legend.remove();
		return true;
	},

	/**
	 * Display the legend
	 *
	 * @return bool False if the legend was already displayed
	 */
	showLegend: function() {
		"use strict";

		if (this.options.displayLegend) {
			return false;
		}
		this.options.displayLegend = true;
		this.Legend.redraw(this.graphDim.width - this.options.domainGutter - this.options.cellPadding);
		return true;
	},

	/**
	 * Highlight dates
	 *
	 * Add a highlight class to a set of dates
	 *
	 * @since  3.3.5
	 * @param  array Array of dates to highlight
	 * @return bool True if dates were highlighted
	 */
	highlight: function(args) {
		"use strict";

		if ((this.options.highlight = this.expandDateSetting(args)).length > 0) {
			this.fill();
			return true;
		}
		return false;
	},

	/**
	 * Destroy the calendar
	 *
	 * Usage: cal = cal.destroy();
	 *
	 * @since  3.3.6
	 * @param function A callback function to trigger after destroying the calendar
	 * @return null
	 */
	destroy: function(callback) {
		"use strict";

		this.root.transition().duration(this.options.animationDuration)
			.attr("width", 0)
			.attr("height", 0)
			.remove()
			.each("end", function() {
				if (typeof callback === "function") {
					callback();
				} else if (typeof callback !== "undefined") {
					console.log("Provided callback for destroy() is not a function.");
				}
			})
		;

		return null;
	},

	getSVG: function() {
		"use strict";

		var styles = {
			".cal-heatmap-container": {},
			".graph": {},
			".graph-rect": {},
			"rect.highlight": {},
			"rect.now": {},
			"text.highlight": {},
			"text.now": {},
			".domain-background": {},
			".graph-label": {},
			".subdomain-text": {},
			".q0": {},
			".qi": {}
		};

		for (var j = 1, total = this.options.legend.length+1; j <= total; j++) {
			styles[".q" + j] = {};
		}

		var root = this.root;

		var whitelistStyles = [
			// SVG specific properties
			"stroke", "stroke-width", "stroke-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-miterlimit",
			"fill", "fill-opacity", "fill-rule",
			"marker", "marker-start", "marker-mid", "marker-end",
			"alignement-baseline", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "kerning", "text-anchor",
			"shape-rendering",

			// Text Specific properties
			"text-transform", "font-family", "font", "font-size", "font-weight"
		];

		var filterStyles = function(attribute, property, value) {
			if (whitelistStyles.indexOf(property) !== -1) {
				styles[attribute][property] = value;
			}
		};

		var getElement = function(e) {
			return root.select(e)[0][0];
		};

		/* jshint forin:false */
		for (var element in styles) {
			if (!styles.hasOwnProperty(element)) {
				continue;
			}

			var dom = getElement(element);

			if (dom === null) {
				continue;
			}

			// The DOM Level 2 CSS way
			/* jshint maxdepth: false */
			if ("getComputedStyle" in window) {
				var cs = getComputedStyle(dom, null);
				if (cs.length !== 0) {
					for (var i = 0; i < cs.length; i++) {
						filterStyles(element, cs.item(i), cs.getPropertyValue(cs.item(i)));
					}

				// Opera workaround. Opera doesn"t support `item`/`length`
				// on CSSStyleDeclaration.
				} else {
					for (var k in cs) {
						if (cs.hasOwnProperty(k)) {
							filterStyles(element, k, cs[k]);
						}
					}
				}

			// The IE way
			} else if ("currentStyle" in dom) {
				var css = dom.currentStyle;
				for (var p in css) {
					filterStyles(element, p, css[p]);
				}
			}
		}

		var string = "<svg xmlns=\"http://www.w3.org/2000/svg\" "+
		"xmlns:xlink=\"http://www.w3.org/1999/xlink\"><style type=\"text/css\"><![CDATA[ ";

		for (var style in styles) {
			string += style + " {\n";
			for (var l in styles[style]) {
				string += "\t" + l + ":" + styles[style][l] + ";\n";
			}
			string += "}\n";
		}

		string += "]]></style>";
		string += new XMLSerializer().serializeToString(this.root[0][0]);
		string += "</svg>";

		return string;
	}
};

// =========================================================================//
// DOMAIN POSITION COMPUTATION												//
// =========================================================================//

/**
 * Compute the position of a domain, relative to the calendar
 */
var DomainPosition = function() {
	"use strict";

	this.positions = d3.map();
};

DomainPosition.prototype.getPosition = function(d) {
	"use strict";

	return this.positions.get(d);
};

DomainPosition.prototype.getPositionFromIndex = function(i) {
	"use strict";

	var domains = this.getKeys();
	return this.positions.get(domains[i]);
};

DomainPosition.prototype.getLast = function() {
	"use strict";

	var domains = this.getKeys();
	return this.positions.get(domains[domains.length-1]);
};

DomainPosition.prototype.setPosition = function(d, dim) {
	"use strict";

	this.positions.set(d, dim);
};

DomainPosition.prototype.shiftRightBy = function(exitingDomainDim) {
	"use strict";

	this.positions.forEach(function(key, value) {
		this.set(key, value - exitingDomainDim);
	});

	var domains = this.getKeys();
	this.positions.remove(domains[0]);
};

DomainPosition.prototype.shiftLeftBy = function(enteringDomainDim) {
	"use strict";

	this.positions.forEach(function(key, value) {
		this.set(key, value + enteringDomainDim);
	});

	var domains = this.getKeys();
	this.positions.remove(domains[domains.length-1]);
};

DomainPosition.prototype.getKeys = function() {
	"use strict";

	return this.positions.keys().sort(function(a, b) {
		return parseInt(a, 10) - parseInt(b, 10);
	});
};

// =========================================================================//
// LEGEND																	//
// =========================================================================//

var Legend = function(calendar) {
	"use strict";

	this.calendar = calendar;
	this.computeDim();

	if (calendar.options.legendColors !== null) {
		this.buildColors();
	}
};

Legend.prototype.computeDim = function() {
	"use strict";

	var options = this.calendar.options; // Shorter accessor for variable name mangling when minifying
	this.dim = {
		width:
			options.legendCellSize * (options.legend.length+1) +
			options.legendCellPadding * (options.legend.length),
		height:
			options.legendCellSize
	};
};

Legend.prototype.remove = function() {
	"use strict";

	this.calendar.root.select(".graph-legend").remove();
	this.calendar.resize();
};

Legend.prototype.redraw = function(width) {
	"use strict";

	if (!this.calendar.options.displayLegend) {
		return false;
	}

	var parent = this;
	var calendar = this.calendar;
	var legend = calendar.root;
	var legendItem;
	var options = calendar.options; // Shorter accessor for variable name mangling when minifying

	this.computeDim();

	var _legend = options.legend.slice(0);
	_legend.push(_legend[_legend.length-1]+1);

	var legendElement = calendar.root.select(".graph-legend");
	if (legendElement[0][0] !== null) {
		legend = legendElement;
		legendItem = legend
			.select("g")
			.selectAll("rect").data(_legend)
		;
	} else {
		// Creating the new legend DOM if it doesn't already exist
		legend = options.legendVerticalPosition === "top" ? legend.insert("svg", ".graph") : legend.append("svg");

		legend
			.attr("x", getLegendXPosition())
			.attr("y", getLegendYPosition())
		;

		legendItem = legend
			.attr("class", "graph-legend")
			.attr("height", parent.getDim("height"))
			.attr("width", parent.getDim("width"))
			.append("g")
			.selectAll().data(_legend)
		;
	}

	legendItem
		.enter()
		.append("rect")
		.call(legendCellLayout)
		.attr("class", function(d){ return calendar.Legend.getClass(d, (calendar.legendScale === null)); })
		.attr("fill-opacity", 0)
		.call(function(selection) {
			if (calendar.legendScale !== null && options.legendColors !== null && options.legendColors.hasOwnProperty("base")) {
				selection.attr("fill", options.legendColors.base);
			}
		})
		.append("title")
	;

	legendItem.exit().transition().duration(options.animationDuration)
	.attr("fill-opacity", 0)
	.remove();

	legendItem.transition().delay(function(d, i) { return options.animationDuration * i/10; })
		.call(legendCellLayout)
		.attr("fill-opacity", 1)
		.call(function(element) {
			element.attr("fill", function(d, i) {
				if (calendar.legendScale === null) {
					return "";
				}

				if (i === 0) {
					return calendar.legendScale(d - 1);
				}
				return calendar.legendScale(options.legend[i-1]);
			});

			element.attr("class", function(d) { return calendar.Legend.getClass(d, (calendar.legendScale === null)); });
		})
	;

	function legendCellLayout(selection) {
		selection
			.attr("width", options.legendCellSize)
			.attr("height", options.legendCellSize)
			.attr("x", function(d, i) {
				return i * (options.legendCellSize + options.legendCellPadding);
			})
		;
	}

	legendItem.select("title").text(function(d, i) {
		if (i === 0) {
			return (options.legendTitleFormat.lower).format({
				min: options.legend[i],
				name: options.itemName[1]
			});
		} else if (i === _legend.length-1) {
			return (options.legendTitleFormat.upper).format({
				max: options.legend[i-1],
				name: options.itemName[1]
			});
		} else {
			return (options.legendTitleFormat.inner).format({
				down: options.legend[i-1],
				up: options.legend[i],
				name: options.itemName[1]
			});
		}
	})
	;

	legend.transition().duration(options.animationDuration)
		.attr("x", getLegendXPosition())
		.attr("y", getLegendYPosition())
		.attr("width", parent.getDim("width"))
		.attr("height", parent.getDim("height"))
	;

	legend.select("g").transition().duration(options.animationDuration)
		.attr("transform", function() {
			if (options.legendOrientation === "vertical")	{
				return "rotate(90 " + options.legendCellSize/2 + " " + options.legendCellSize/2 + ")";
			}
			return "";
		})
	;

	function getLegendXPosition() {
		switch(options.legendHorizontalPosition) {
		case "right":
			if (options.legendVerticalPosition === "center" || options.legendVerticalPosition === "middle") {
				return width + options.legendMargin[3];
			}
			return width - parent.getDim("width") - options.legendMargin[1];
		case "middle":
		case "center":
			return Math.round(width/2 - parent.getDim("width")/2);
		default:
			return options.legendMargin[3];
		}
	}

	function getLegendYPosition() {
		if (options.legendVerticalPosition === "bottom") {
			return calendar.graphDim.height + options.legendMargin[0] - options.domainGutter - options.cellPadding;
		}
		return options.legendMargin[0];
	}

	calendar.resize();
};

/**
 * Return the dimension of the legend
 *
 * Takes into account rotation
 *
 * @param  string axis Width or height
 * @return int height or width in pixels
 */
Legend.prototype.getDim = function(axis) {
	"use strict";

	var isHorizontal = (this.calendar.options.legendOrientation === "horizontal");

	switch(axis) {
	case "width":
		return this.dim[isHorizontal ? "width": "height"];
	case "height":
		return this.dim[isHorizontal ? "height": "width"];
	}
};

Legend.prototype.buildColors = function() {
	"use strict";

	var options = this.calendar.options; // Shorter accessor for variable name mangling when minifying

	if (options.legendColors === null) {
		this.calendar.legendScale = null;
		return false;
	}

	var _colorRange = [];

	if (Array.isArray(options.legendColors)) {
		_colorRange = options.legendColors;
	} else if (options.legendColors.hasOwnProperty("min") && options.legendColors.hasOwnProperty("max")) {
		_colorRange = [options.legendColors.min, options.legendColors.max];
	} else {
		options.legendColors = null;
		return false;
	}

	var _legend = options.legend.slice(0);

	if (_legend[0] > 0) {
		_legend.unshift(0);
	} else if (_legend[0] < 0) {
		// Let's guess the leftmost value, it we have to add one
		_legend.unshift(_legend[0] - (_legend[_legend.length-1] - _legend[0])/_legend.length);
	}

	var colorScale = d3.scale.linear()
		.range(_colorRange)
		.interpolate(d3.interpolateHcl)
		.domain([d3.min(_legend), d3.max(_legend)])
	;

	var legendColors = _legend.map(function(element) { return colorScale(element); });
	this.calendar.legendScale = d3.scale.threshold().domain(options.legend).range(legendColors);

	return true;
};

/**
 * Return the classname on the legend for the specified value
 *
 * @param integer n Value associated to a date
 * @param bool withCssClass Whether to display the css class used to style the cell.
 *                          Disabling will allow styling directly via html fill attribute
 *
 * @return string Classname according to the legend
 */
Legend.prototype.getClass = function(n, withCssClass) {
	"use strict";

	if (n === null || isNaN(n)) {
		return "";
	}

	var index = [this.calendar.options.legend.length + 1];

	for (var i = 0, total = this.calendar.options.legend.length-1; i <= total; i++) {

		if (this.calendar.options.legend[0] > 0 && n < 0) {
			index = ["1", "i"];
			break;
		}

		if (n <= this.calendar.options.legend[i]) {
			index = [i+1];
			break;
		}
	}

	if (n === 0) {
		index.push(0);
	}

	index.unshift("");
	return (index.join(" r") + (withCssClass ? index.join(" q"): "")).trim();
};

/**
 * Sprintf like function
 * @source http://stackoverflow.com/a/4795914/805649
 * @return String
 */
String.prototype.format = function () {
	"use strict";

	var formatted = this;
	for (var prop in arguments[0]) {
		if (arguments[0].hasOwnProperty(prop)) {
			var regexp = new RegExp("\\{" + prop + "\\}", "gi");
			formatted = formatted.replace(regexp, arguments[0][prop]);
		}
	}
	return formatted;
};

/**
 * #source http://stackoverflow.com/a/383245/805649
 */
function mergeRecursive(obj1, obj2) {
	"use strict";

	/*jshint forin:false */
	for (var p in obj2) {
		try {
			// Property in destination object set; update its value.
			if (obj2[p].constructor === Object) {
				obj1[p] = mergeRecursive(obj1[p], obj2[p]);
			} else {
				obj1[p] = obj2[p];
			}
		} catch(e) {
			// Property in destination object not set; create it and set its value.
			obj1[p] = obj2[p];
		}
	}

	return obj1;
}

/**
 * Check if 2 arrays are equals
 *
 * @link http://stackoverflow.com/a/14853974/805649
 * @param  array array the array to compare to
 * @return bool true of the 2 arrays are equals
 */
function arrayEquals(arrayA, arrayB) {
	"use strict";

	// if the other array is a falsy value, return
	if (!arrayB || !arrayA) {
		return false;
	}

	// compare lengths - can save a lot of time
	if (arrayA.length !== arrayB.length) {
		return false;
	}

	for (var i = 0; i < arrayA.length; i++) {
		// Check if we have nested arrays
		if (arrayA[i] instanceof Array && arrayB[i] instanceof Array) {
			// recurse into the nested arrays
			if (!arrayEquals(arrayA[i], arrayB[i])) {
				return false;
			}
		}
		else if (arrayA[i] !== arrayB[i]) {
			// Warning - two different object instances will never be equal: {x:20} != {x:20}
			return false;
		}
	}
	return true;
}

/**
 * AMD Loader
 */
if (typeof define === "function" && define.amd) {
	define(["d3"], function() {
		"use strict";

		return CalHeatMap;
	});
} else if (typeof module === "object" && module.exports) {
	module.exports = CalHeatMap;
} else {
	window.CalHeatMap = CalHeatMap;
}
