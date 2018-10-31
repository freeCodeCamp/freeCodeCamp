---
title: Storage Drives
---

## Hard Disk Drives (HDD)

Hard drives are permanent storage devices for computers. There are several types of hard drives: traditional magnetic disks, new-generation, solid-state disks or hybrid disks which contain both SSD and magnetic storage.

Hard drives come in various storage capacities, with some even storing 10TB (10 trillion bytes). Typical computers come with 256GB (256 million bytes) to 1TB of storage space. Laptops usually use Solid State Drives (SSDs) because they are faster, lighter, and contain no moving parts, making them less likely to fail due to impact.

Magnetic heads are responsible for reading and writing data, which is physically stored on a set of magnetically coated discs stacked above one another, referred to as a platter. The heads are located at the end of an armature. The interior discs of the platter have two heads on a single arm. This allows data to be accessed from both the discs, beneath and above the arm. The top and bottom discs of the platter only have one head at the end of an arm. On the opposite end of the arm is an actuator. It provides movement of the arm to travel from the center of the platter, the spindle, to the outermost regions of the platter. The amount of time it takes to place the head in the correct concentric location is referred to as the seek time. Once the head is in the correct concentric spatial location more time is spent waiting for the disc to rotate such that the sector with the requested data is beneath the head. This amount of time is referred to as latency.

Hard drive performance is measured primarily by two key metrics 1) response time, which is how long it takes a read or write operation to complete and 2) IOPS which is an acronym for 'Input / Output Operations per Second'. As the name would suggest, IOPS is a measurement of the maximum IO operations in one second. The primary factor in achieving maximum IOPS at the lowest response time is the hard drive's rotational speed measured in revolutions per minute (RPM). Common rotational speeds are 5,400 RPM, 7,200 RPM, 10,000 RPM and 15,000 RPM (commonly notated as 5.4K, 7.2K, 10K and 15K).

Hard drives tend to be categorized by use case (capacity or performance). Home PC's and general use office workstations tend to use slower rotating hard drives (5.4K and 7.2K) which is fine for storing pictures and office files.  However large databases that support online banking transactions for instance, use the faster 10K and 15K RPM hard drives as they'll be components in an enterprise server or storage array. There's a tradeoff between a hard drive's performance and capacity, however.  For instance, the largest capacity 15K hard drive available today is only 600 GB, whereas the largest capacity hard drive for the both 5.4K and 7.2K RPM is 10 TB. The 600 GB 15K drive is capable of 250 IOPS @ 3 ms response time (averages).  Whereas the 10 TB 7.2K TB drive does not measure IOPS at a given response time, as it's not optimized nor intended for IOPS centric performance use cases. There are also other tradeoffs in price per GB, energy consumed and size (2.5" vs 3.5" inches).


## Solid State Drives (SSD)
Solid State Drives uses integrated circuits to store data. Therefore, an SSD has no moving parts like the HDD. This makes them less prone to physical shocks, run silently, and have faster read/write times thanks to not needing to locate the data physically.

SSDs are commonly used as boot drives or storage for the most used applications and files on a system. This is because even though prices have dropped in recent years, SSDs are still more expensive than a traditional hard drive when considering cost per unit of storage. Thus, HDDs are still used for bulk data such as entertainment media (pictures, videos, music) and in data centers or server farms. Though here it is common for the Hard Drives to be accelerated with an SSD.

While most Hard Drives use either a SATA or SAS connector Solid State Drives often use other connections that can handle higher bandwidth and lower latencies, with the most notable being PCI Express (PCI-e) where form factors such as M.2 or U.2 dominate. Though other form factors are available, such as Intel's 'Yard stick' form factor or PCI-e cards that look quite similar to a low end graphics card.

The one caviat to these is that they usually have a lower amount of full writes that the drives can do before starting to go bad.

## NVMe speed compare to SATA
Modern motherboards use SATA III which maxes out at a throughput of 600MB/s (or 300MB/s for SATA II, in which case, it’s time to upgrade). Via that connection, most SSDs will provide Read/Write speeds in the neighborhood of 530/500 MB/s. For comparison, a 7200 RPM SATA drive manages around 100MB/s depending on age, condition, and level of fragmentation. NVMe drives, on the other hand, provide write speeds as high as 3500MB/s. That’s 7x over SATA SSDs!

## Solid State Hard Drives (SSHD) a.k.a Hybrid Drives
Solid State Hard Drives fill a specific gap inbetween Solid State Drives and traditional hard drives.  It combines the relative affordable cost of cheap magnetic storage in traditional drives and pairs it with a smaller capacity Solid State Drive with the intent of using the SSD portion to cache frequently used data to increase performance over a plain traditional hard drive at a marginal cost. Hence the combination of the two technologies creates a "hybrid device" that is cost effectively but still is able to benenfit from the high performance of SSD drives primarily for low intensity workloads that mostly utilize read requests from the drive.

#### More Information:

* [Wikipedia - Hard Disk Drive](https://en.wikipedia.org/wiki/Hard_disk_drive)
* [Wikipedia - Flying height](https://en.wikipedia.org/wiki/Flying_height)
* [Wikipedia - Computer data storage](https://en.wikipedia.org/wiki/Computer_data_storage)
* [PCMag - SSD vs. HDD: What's the Difference?](https://www.pcmag.com/article2/0,2817,2404258,00.asp)
* [Digital Trends - SSD vs. HDD](https://www.digitaltrends.com/computing/solid-state-drives-vs-hard-disk-drives)
* [IOMeter Project](http://www.iometer.org)
