import d3 from 'd3-3';

export function updateCalculator(d3Node, bootcamps, city, lastYearsIncome) {
  d3Node.className = 'd3-chart';
  var categoryNames = [
    'Lost Wages',
    'Financing Cost',
    'Housing Cost',
    'Tuition / Est. Wage Garnishing'
  ];
  // Tooltips
  var tip = d3.select(d3Node).select('div.tooltip');
  if (tip.empty()) {
    tip = d3
      .select(d3Node)
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);
  }
  var xAxis = d3.svg.axis().orient('bottom');
  var yAxis = d3.svg.axis().orient('left');
  bootcamps.forEach(function(camp) {
    var x0 = 0;
    var weeklyHousing;
    if (camp.cities.indexOf(city) > -1) {
      weeklyHousing = 0;
    } else {
      weeklyHousing = +camp.housing;
    }
    camp.mapping = [
      {
        name: camp.name,
        label: 'Tuition / Est. Wage Garnishing',
        value: +camp.cost,
        x0: x0,
        x1: (x0 += +camp.cost)
      },
      {
        name: camp.name,
        label: 'Financing Cost',
        value: camp.finance ? +Math.floor(camp.cost * 0.09519) : 0,
        x0: camp.finance ? +camp.cost : 0,
        x1: camp.finance ? (x0 += +Math.floor(camp.cost * 0.09519)) : 0
      },
      {
        name: camp.name,
        label: 'Housing Cost',
        value: +weeklyHousing * camp.weeks,
        x0: camp.finance ? +Math.floor(camp.cost * 1.09519) : camp.cost,
        x1: (x0 += weeklyHousing * camp.weeks)
      },
      {
        name: camp.name,
        label: 'Lost Wages',
        value: +Math.floor((camp.weeks * lastYearsIncome) / 50),
        x0: camp.finance
          ? +(Math.floor(camp.cost * 1.09519) + weeklyHousing * camp.weeks)
          : +camp.cost + weeklyHousing * camp.weeks,
        x1: (x0 += +(Math.floor(camp.weeks * lastYearsIncome) / 50))
      }
    ];
    camp.total = camp.mapping[camp.mapping.length - 1].x1;
  });
  bootcamps.sort(function(a, b) {
    return a.total - b.total;
  });
  var xStackMax = d3.max(bootcamps, function(d) {
    return d.total;
  });
  var margin = {
      top: 30,
      right: 60,
      bottom: 60,
      left: 155
    },
    width = 650 - margin.left - margin.right,
    height = 1200 - margin.top - margin.bottom;
  var xScale = d3.scale
    .linear()
    .domain([0, xStackMax])
    .rangeRound([0, width]);
  var y0Scale = d3.scale
    .ordinal()
    .domain(
      bootcamps.map(function(d) {
        return d.name;
      })
    )
    .rangeRoundBands([0, height], 0.1);
  var color = d3.scale
    .ordinal()
    .range(['#215f1e', '#5f5c1e', '#1e215f', '#5c1e5f'])
    .domain(categoryNames);
  var svg = d3
    .select(d3Node)
    .select('svg')
    .select('g');
  var selection, rect;
  if (svg.empty()) {
    svg = d3
      .select(d3Node)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    // Legends
    var legend = svg
      .selectAll('.legend')
      .data(categoryNames.slice().reverse())
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', function(d, i) {
        return 'translate(30,' + i * y0Scale.rangeBand() * 1.1 + ')';
      });
    legend
      .append('rect')
      .attr('x', width - y0Scale.rangeBand())
      .attr('width', y0Scale.rangeBand())
      .attr('height', y0Scale.rangeBand())
      .style('fill', color)
      .style('stroke', 'white');
    legend
      .append('text')
      .attr('x', width - y0Scale.rangeBand() * 1.2)
      .attr('y', 12)
      .attr('dy', '.35em')
      .style('text-anchor', 'end')
      .text(function(d) {
        return d;
      });
  }
  selection = svg.selectAll('.series').data(bootcamps);
  if (!selection.empty()) {
    selection.exit().remove();
  }
  selection
    .enter()
    .append('g')
    .attr('class', 'series')
    .attr('transform', function(d) {
      return 'translate(0,' + y0Scale(d.name) + ')';
    });
  rect = selection.selectAll('rect').data(function(d) {
    return d.mapping;
  });
  if (!rect.empty()) {
    rect.exit().remove();
  }
  rect
    .enter()
    .append('rect')
    .attr('class', 'series-part')
    .attr('x', 0)
    .attr('width', 0)
    .attr('height', y0Scale.rangeBand())
    .style('fill', function(d) {
      return color(d.label);
    })
    .style('stroke', 'white')
    .on('mouseover', function(d) {
      var component = d3.select('.d3-chart');
      var componentPos = component[0][0].getBoundingClientRect();
      var box = this.getBoundingClientRect();
      var tooltip = component.select('.tooltip');

      component
        .select('.tooltip')
        .transition()
        .duration(200)
        .style('opacity', 0.9);
      component
        .select('.tooltip')
        .html('<div>' + d.label + '<br />$' + d.value + '</div>')
        .style(
          'left',
          box.left +
            box.width / 2 -
            componentPos.left -
            tooltip[0][0].offsetWidth / 2 +
            'px'
        )
        .style(
          'top',
          box.top - componentPos.top - tooltip[0][0].offsetHeight - 10 + 'px'
        );
    })
    .on('mouseout', function() {
      d3.select('.d3-chart')
        .select('.tooltip')
        .transition()
        .duration(500)
        .style('opacity', 0);
    });
  rect
    .transition()
    .delay(function(d, i) {
      return i * 10;
    })
    .attr('x', function(d) {
      return xScale(d.x0);
    })
    .attr('width', function(d) {
      return xScale(d.x1 - d.x0);
    });

  // Axes
  var svgXAxis = svg.select('.x.axis');
  var svgYAxis = svg.select('.y.axis');
  xAxis.scale(xScale);
  yAxis.scale(y0Scale);
  if (svgXAxis.empty() || svgYAxis.empty()) {
    svg
      .append('g')
      .attr('class', 'y axis')
      .call(yAxis);
    svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .attr('transform', 'rotate(-45)');
  } else {
    svgXAxis
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .attr('transform', 'rotate(-45)');
    svgYAxis.call(yAxis);
  }

  return d3Node;
}
