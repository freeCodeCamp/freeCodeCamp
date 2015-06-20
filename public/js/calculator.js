$(document).ready(function () {
  var bootcamps = ''
  $.getJSON('/coding-bootcamp-cost-calculator.json', function(data) {
    bootcamps = data;
  });
  var city = "";
  $("body").data("state", "stacked");
  $('#city-buttons').on("click", "button", function () {
    $(this).addClass('animated pulse');
    city = $(this).attr("id");
    $('#chosen').text('Coming from ' + city.replace(/-/g, ' ').replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }) + ', and making $_______, your true costs will be:');
    setTimeout(function () {
      $('#city-buttons').hide();
      $('#income').addClass('animated fadeIn').show();
    }, 1000);
  });
  $('#income').on("click", "button", function () {
    $(this).addClass('animated pulse');
    setTimeout(function () {
      $('#income').hide();
      $('#chart').addClass('animated fadeIn').show();
      $('#chart-controls').addClass('animated fadeIn').show();
      $('#explanation').addClass('animated fadeIn').show();
    }, 1000);
    var lastYearsIncome = parseInt($(this).attr("id"));
    $('#chosen').text('Coming from ' + city.replace(/-/g, ' ').replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }) + ', and making $' + lastYearsIncome.toString().replace(/0000$/, '0,000') + ', your true costs will be:');
    var categoryNames = ['Lost Wages', 'Financing Cost', 'Housing Cost', 'Tuition / Wage Garnishing'];
    bootcamps.forEach(function (camp) {
      var x0 = 0;
      if (camp.cities.indexOf(city) > -1) {
        weeklyHousing = 0;
      } else {
        weeklyHousing = +camp.housing;
      }
      camp.mapping = [{
        name: camp.name,
        label: 'Tuition / Wage Garnishing',
        value: +camp.cost,
        x0: x0,
        x1: x0 += +camp.cost
      }, {
        name: camp.name,
        label: 'Financing Cost',
        value: +Math.floor(camp.cost * .09519),
        x0: +camp.cost,
        x1: camp.finance ? x0 += +Math.floor(camp.cost * .09519) : 0
      }, {
        name: camp.name,
        label: 'Housing Cost',
        value: +weeklyHousing * camp.weeks,
        x0: camp.finance ? +Math.floor(camp.cost * 1.09519) : camp.cost,
        x1: x0 += weeklyHousing * camp.weeks
      }, {
        name: camp.name,
        label: 'Lost Wages',
        value: +(Math.floor(camp.weeks * lastYearsIncome / 50)),
        x0: camp.finance ? +(Math.floor(camp.cost * 1.09519) + weeklyHousing * camp.weeks) : +camp.cost + weeklyHousing * camp.weeks,
        x1: x0 += +(Math.floor(camp.weeks * lastYearsIncome / 50))
      }];
      camp.total = camp.mapping[camp.mapping.length - 1].x1;
    });
    bootcamps.sort(function (a, b) {
      return a.total - b.total;
    });
    maxValue = 0;
    bootcamps.forEach(function (camp) {
      camp.mapping.forEach(function (elem) {
        if (elem.value > maxValue) {
          maxValue = elem.value;
        }
      });
    });
    var xStackMax = d3.max(bootcamps, function (d) {
        return d.total;
      }), //Scale for Stacked
      xGroupMax = bootcamps.map(function (camp) {
        return camp.mapping.reduce(function (a, b) {
          return a.value > b.value ? a.value : b.value;
        });
      }).reduce(function (a, b) {
        return a > b ? a : b;
      });
    var margin = {
        top: 30,
        right: 60,
        bottom: 50,
        left: 140
      },
      width = 800 - margin.left - margin.right,
      height = 1200 - margin.top - margin.bottom;
    var barHeight = 20;
    var xScale = d3.scale.linear()
      .domain([0, xStackMax])
      .rangeRound([0, width]);
    var y0Scale = d3.scale.ordinal()
      .domain(bootcamps.map(function (d) {
        return d.name;
      }))
      .rangeRoundBands([0, height], .1);
    var y1Scale = d3.scale.ordinal()
      .domain(categoryNames).rangeRoundBands([0, y0Scale.rangeBand()]);
    var color = d3.scale.ordinal()
      .range(["#215f1e", "#5f5c1e", "#1e215f", "#5c1e5f"])
      .domain(categoryNames);
    var svg = d3.select("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var selection = svg.selectAll(".series")
      .data(bootcamps)
      .enter().append("g")
      .attr("class", "series")
      .attr("transform", function (d) {
        return "translate(0," + y0Scale(d.name) + ")";
      });
    var rect = selection.selectAll("rect")
      .data(function (d) {
        return d.mapping;
      })
      .enter().append("rect")
      .attr("x", 0)
      .attr("width", 0)
      .attr("height", y0Scale.rangeBand())
      .style("fill", function (d) {
        return color(d.label);
      })
      .style("stroke", "white")
      .on("mouseover", function (d) {
        showPopover.call(this, d);
      })
      .on("mouseout", function (d) {
        removePopovers();
      });
    rect.transition()
      .delay(function (d, i) {
        return i * 10;
      })
      .attr("x", function (d) {
        return xScale(d.x0);
      })
      .attr("width", function (d) {
        return xScale((d.x1) - (d.x0));
      });
    d3.selectAll("#transform").on("click", function () {
      $('#transform').addClass('animated pulse');
      change();
      setTimeout(function () {
        $('#transform').removeClass('animated pulse');
      }, 1000);
    });

    d3.selectAll("#chart").on("click", function () {
      change();
    });

    function change() {
      if ($("body").data("state") === "stacked") {
        transitionGrouped();
        $("body").data("state", "grouped");
      } else {
        transitionStacked();
        $("body").data("state", "stacked");
      }
    }

    function transitionGrouped() {
      xScale.domain = ([0, xGroupMax]);
      rect.transition()
        .duration(500)
        .delay(function (d, i) {
          return i * 10;
        })
        .attr("width", function (d) {
          return xScale((d.x1) - (d.x0));
        })
        .transition()
        .attr("y", function (d) {
          return y1Scale(d.label);
        })
        .attr("x", 0)
        .attr("height", y1Scale.rangeBand())
    }

    function transitionStacked() {
      xScale.domain = ([0, xStackMax]);
      rect.transition()
        .duration(500)
        .delay(function (d, i) {
          return i * 10;
        })
        .attr("x", function (d) {
          return xScale(d.x0);
        })
        .transition()
        .attr("y", function (d) {
          return y0Scale(d.label);
        })
        .attr("height", y0Scale.rangeBand())
    }

    //axes
    var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient("bottom");
    var yAxis = d3.svg.axis()
      .scale(y0Scale)
      .orient("left");
    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .append("text")
      .attr("x", 300)
      .attr("y", 35)
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .text("Cost in $USD");
    //tooltips
    function removePopovers() {
      $('.popover').each(function () {
        $(this).remove();
      });
    }

    function showPopover(d) {
      $(this).popover({
        title: d.name,
        placement: 'auto top',
        container: 'body',
        trigger: 'manual',
        html: true,
        content: function () {
          return d.label +
            "<br/>$" +
            d3.format(",")(d.value ? d.value : d.x1 - d.x0);
        }
      });
      $(this).popover('show')
    }

    //legends
    var legend = svg.selectAll(".legend")
      .data(categoryNames.slice().reverse())
      .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function (d, i) {
        return "translate(30," + i * y0Scale.rangeBand() * 1.1 + ")";
      });
    legend.append("rect")
      .attr("x", width - y0Scale.rangeBand())
      .attr("width", y0Scale.rangeBand())
      .attr("height", y0Scale.rangeBand())
      .style("fill", color)
      .style("stroke", "white");
    legend.append("text")
      .attr("x", width - y0Scale.rangeBand() * 1.2)
      .attr("y", 12)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function (d) {
        return d;
      });
  });
});
