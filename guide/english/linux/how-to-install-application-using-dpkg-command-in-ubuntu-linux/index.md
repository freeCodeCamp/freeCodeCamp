---
title: How to Install Application using dpkg command in Ubuntu Linux.
---

# How to Install Applications using dpkg command in Ubuntu Linux.

There are a couple of ways to install software package(s) or applications installed in Ubuntu Linux. The common and easiest way is through the Ubuntu software centre. It is basically a point-and-click style.

But some very appliactions cannot be found (and installed) in the official Ubuntu software repository. Also some app distributors for the Ubuntu platform would rather choose to distribute their apps by providing downloadable Ubuntu package(.deb) from their websites.

This deb package contains all the dependencies an application needs to be successfully installed, which can be done through the terminal using the following steps:

# Step 1.
Open the terminal ( SHOTCUT ON UBUNTU: Ctrl+Alt+T) and enter the command:

`sudo dpkg –i /path/to/deb/file`

The `dpkg` utility is a low-level package tool used in Ubuntu (and other debian-based distributions) for directly installing software packages.

# Step 2.
Then enter;

`sudo apt-get install –f`

You should be able to see the application installed on your system.
