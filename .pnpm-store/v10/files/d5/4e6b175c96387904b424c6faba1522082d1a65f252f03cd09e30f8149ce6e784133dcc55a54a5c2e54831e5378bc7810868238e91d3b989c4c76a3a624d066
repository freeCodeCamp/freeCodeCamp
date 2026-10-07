### How to generate new metrics
-------------------------------

There are several requirements for generating the metrics used by KaTeX.

- You need to have an installation of TeX which supports kpathsea. You can check
  this by running `tex --version`, and seeing if it has a line that looks like
  > kpathsea version 6.2.0

- You need the Perl module `JSON`. You can install this either from CPAN
  (e.g. using the `cpan` command line tool: `cpan install JSON`)
  or with your package manager.

- You need the Python module `fonttools`. You can install this either from PyPI
  (using `easy_install` or `pip`: `pip install fonttools`)
  or with your package manager.

Once you have these things, run the following command from the root directory:

    sh ./dockers/fonts/buildMetrics.sh

which should generate new metrics and place them into `fontMetricsData.json`.
You're done!
