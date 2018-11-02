---
title: Install and Configure Apache Server in Linux
---

Apache HTTP Server, colloquially called Apache, is free and open-source 
cross-platform web server software.
Apache is developed and maintained by an 
open community of developers under the auspices of the Apache Software Foundation.</div>

## Install and Configure Apache Server in Linux

Step 1: Install Apache Server<br>
`yum install httpd`

Step 2: Configuring http web sever <br>
`cd /etc/httpd/conf.d`

Step 3: Create a custom configration file with .conf extension.<br> 
`vim *.conf`

Step 4: Starting Apache Server<br>
`systemctl start httpd.service`

Step 5: Automatically Start Apache Server when Operating System start.<br>
`systemctl enable httpd.service`

Step 6: Add firewall permission.<br> 
`firewall-cmd --add-service=http --permanent`
