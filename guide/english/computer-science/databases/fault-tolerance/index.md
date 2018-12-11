---
title: Fault Tolerance
---
## Fault Tolerance

Fault tolerance is the property that enables a system to continue its intended operation, possibly at a reduced level, rather than failing completely, when some portion of the system fails.

A **database** is fault-tolerant when it can access a secondary shard when the primary is unavailable. 

This is achieved through:

* Database Replication
* Fault Detection & Failover

A database that maintains multiple copies of all data in different physical nodes located across independent physical sub-systems, such as server racks and network routers, has a higher probability to continue operating when the primary copy of the data is unavailable due to its ability to read data from multiple replications.

In large-scale distribution systems, it becomes increasingly important to have reliable failure detection systems that can identify failing storage drives and provide failover units in order to maximise service uptime.


