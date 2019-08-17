---
title: Coding Bootcamp Cost Calculator
component: calculators/CodingBootcampCostCalculator/CodingBootcampCostCalculator.js
---
## Coding Bootcamp Cost Calculator

<label class='h4' id='select-city'>
  Where do you <strong>live</strong>?
</label>
<div id='select-city'></div>

<label class='h4' id='select-income'>
  How much <strong>money</strong> did you make last year (in USD)?
</label>
<div id='select-income'></div>

### Coming from <span id='city-label'></span>, and making <span id='last-years-income-label'></span>, your true costs will be:
<div id='chart-component'></div>

<div class='text-center'>
  <a
    href='javascript:void(0)'
    download='bootcamps.json'
    id='bootcamps-data-link'
  >
    Save Data Source JSON
  </a>
</div>

### Notes:
<ol>
  <li>
    We assumed an APR of 6% and a term of 3 years. If you happen
    to have around $15,000 in cash set aside for a coding
    bootcamp, please ignore this cost.
  </li>
  <li>
    We assume a cost of living of $500 for cities like San
    Francisco and New York City, and $400 per week for
    everywhere else.
  </li>
  <li>
    The most substantial cost for most people is lost wages. A
    40-hour-per-week job at the US Federal minimum wage would
    pay at least $15,000 per year. You can read more about
    economic cost
    <a href='https://en.wikipedia.org/wiki/Economic_cost' rel='noopener noreferrer' target='_blank'>
      here
    </a>.
  </li>
</ol>

### Built by Suzanne Atkinson
<div class='col-sm-4 col-md-4'>
  <img alt='Suzanne Atkinson selfie in front of the pool' class='img-responsive testimonial-image img-center' src='https://www.evernote.com/l/AHRIBndcq-5GwZVnSy1_D7lskpH4OcJcUKUB/image.png' />
</div>
<div class='col-sm-8 col-md-8'>
  <p>
    Suzanne is an emergency medicine physician, triathlon
    coach and web developer from Pittsburgh. You should
    &thinsp;
    <a href='https://twitter.com/intent/user?screen_name=SteelCityCoach' rel='noopener noreferrer' target='_blank'>
      follow her on Twitter
    </a>.
  </p>
</div>

<script type="application/json" id="bootcamps">
[
  {
    "name": "Hack Reactor",
    "cost": "17780",
    "housing": "500",
    "weeks": "12",
    "finance": true,
    "cities": [
      "new-york-city",
      "san-francisco"
    ]
  },
  {
    "name": "Hack Reactor Online",
    "cost": "17780",
    "housing": "0",
    "weeks": "12",
    "finance": true,
    "cities": [
      "online"
    ]
  },
  {
    "name": "Hackbright Academy",
    "cost": "15000",
    "housing": "500",
    "weeks": "10",
    "finance": true,
    "cities": [
      "san-francisco"
    ]
  },
  {
    "name": "Dev Bootcamp",
    "cost": "13950",
    "finance": true,
    "housing": "500",
    "weeks": "19",
    "cities": [
      "new-york-city",
      "san-francisco",
      "chicago"
    ]
  },
  {
    "name": "General Asssembly",
    "cost": "11500",
    "housing": "500",
    "finance": true,
    "weeks": "12",
    "cities": [
      "washington-dc",
      "austin",
      "boston",
      "chicago",
      "hong-kong",
      "london",
      "los-angeles",
      "melbourne",
      "new-york-city",
      "san-francisco",
      "seattle",
      "singapore"
    ]
  },
  {
    "name": "Angel Hack",
    "cost": "14250",
    "housing": "500",
    "finance": true,
    "weeks": "12",
    "cities": [
      "san-francisco"
    ]
  },
  {
    "name": "Bitmaker Labs",
    "cost": "12000",
    "housing": "500",
    "finance": true,
    "weeks": "12",
    "cities": [
      "toronto"
    ]
  },
  {
    "name": "CoderVox",
    "cost": "9980",
    "housing": "400",
    "finance": true,
    "weeks": "12",
    "cities": [
      "austin"
    ]
  },
  {
    "name": "Coding Dojo",
    "cost": "12500",
    "housing": "500",
    "finance": true,
    "weeks": "12",
    "cities": [
      "new-york-city",
      "san-francisco",
      "chicago"
    ]
  },
  {
    "name": "DevMountain",
    "cost": "8900",
    "housing": "0",
    "finance": true,
    "weeks": "12",
    "cities": [
      "provo",
      "salt-lake-city",
      "dallas"
    ]
  },
  {
    "name": "Epicodus",
    "cost": "4500",
    "housing": "400",
    "finance": false,
    "weeks": "15",
    "cities": [
      "portland"
    ]
  },
  {
    "name": "Flat Iron School",
    "cost": "15000",
    "housing": "500",
    "finance": true,
    "weeks": "12",
    "cities": [
      "new-york-city"
    ]
  },
  {
    "name": "Galvanize",
    "cost": "21000",
    "housing": "500",
    "finance": true,
    "weeks": "24",
    "cities": [
      "boulder",
      "denver",
      "seattle",
      "san-francisco"
    ]
  },
  {
    "name": "The Iron Yard",
    "cost": "12000",
    "housing": "500",
    "finance": true,
    "weeks": "19",
    "cities": [
      "austin",
      "washington-dc",
      "raleigh-durham",
      "atlanta"
    ]
  },
  {
    "name": "Launch Academy",
    "cost": "12500",
    "housing": "500",
    "finance": true,
    "weeks": "10",
    "cities": [
      "boston"
    ]
  },
  {
    "name": "Maker Square",
    "cost": "16920",
    "housing": "500",
    "finance": true,
    "weeks": "12",
    "cities": [
      "los-angeles",
      "san-francisco",
      "austin"
    ]
  },
  {
    "name": "Refactor U",
    "cost": "13500",
    "housing": "400",
    "finance": true,
    "weeks": "10",
    "cities": [
      "boulder"
    ]
  },
  {
    "name": "Rocket U",
    "cost": "12500",
    "housing": "500",
    "finance": true,
    "weeks": "12",
    "cities": [
      "new-york-city",
      "san-francisco",
      "chicago"
    ]
  },
  {
    "name": "Sabio",
    "cost": "13450",
    "housing": "500",
    "finance": true,
    "weeks": "12",
    "cities": [
      "los-angeles"
    ]
  },
  {
    "name": "Shillington School",
    "cost": "12950",
    "housing": "500",
    "finance": true,
    "weeks": "12",
    "cities": [
      "new-york-city",
      "sydney",
      "brisbane",
      "london",
      "manchester",
      "melbourne"
    ]
  },
  {
    "name": "The Tech Academy",
    "cost": "9000",
    "housing": "400",
    "finance": true,
    "weeks": "20",
    "cities": [
      "portland"
    ]
  },
  {
    "name": "Viking Code School",
    "cost": "18000",
    "housing": "0",
    "finance": false,
    "weeks": "16",
    "cities": [
      "online"
    ]
  },
  {
    "name": "App Academy",
    "cost": "18000",
    "housing": "500",
    "finance": false,
    "weeks": "12",
    "cities": [
      "san-francisco"
    ]
  },
  {
    "name": "Turing School",
    "cost": "17500",
    "housing": "400",
    "finance": true,
    "weeks": "27",
    "cities": [
      "denver"
    ]
  }
]
</script>
