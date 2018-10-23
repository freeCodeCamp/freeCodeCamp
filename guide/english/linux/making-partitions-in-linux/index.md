---
title: Partitions
---

## Partitions
 
 - You need to create partitions on your hard disk before you can use it and create folders. 
 
 You can use the following commands to see information about your file systems and disks:
 - See how much space is used and how much space is available for the file system.
    - **df**
	- **df -h** (human readable)  

 - Show size of logical volumes in in MiB, GiB 	
   - **lvdisplay**
 
 - Shows information about partition of disk - 
   - **fdisk -l**
   - **fdisk -l /dev/sda** (sda is the name of hard-disk) 
 
 - To practice working with partitions, you can use Virtual Box to insert a virtual hard disk to your Linux system. 
 
 - Some points to remember
   - Hard-disk doesn’t understand GB or MB, it’s unit is sector.</br>
     1 sector = 512 bytes.</br>
	 To find actual size of hard-disk, find number of sectors * 512.</br>
	 Allocates space in hard-disk in sectors.
   - Only 4 partitions can be created in a single hard-disk. 

</br>
 
## Creating partitions on a hard disk with fdisk
 
 1. Run the `fdisk` commmand. Replace `sdb**` with the disk that you want to use.
    - **fdisk /dev/sdb**
 2. Display (print) the partition information for the hard disk. 
    - **p**
 3. Create a new partition. 
    - **n**
 4. Choose the primary partition.
 5. Press 1 (1st partition)  
 6. Note that some initial  sectors (0-2047 = 2048 sectors = 1 MB) are reserved on the hard-disk.
 7. The actual space starts with the 2048th sector.
 8. **+1G**
 9. Create 4 partitions like this. 
 10. After 4th partition you can’t create more partitions. 
 
 11. Press **w** to save.
 12. Press **q** to quit without saving any partitiosn. 
     When fdisk quits, no partitions are created and the disk is unchanged. 
 
 13. For deleting partition - 
     - **d**   
   
</br>
   
## Why is there a limit of 4 partitions? 
- Because where we store the information of partitions, metadata of partitions, is fixed and of 64 bytes. This information is stored in partition table. 
- 1 partition required 16 bytes so only 4 partitions can be created. 
- In 1 MB (2048 sectors) reserved in hard-disk, 64 bytes are reserved for storing this information.
- To see partition table-  
  - **fdisk -l**
- When we first time use hard-disk, it is initialized or formatted. That format decides number of partitions in hard-disk.
- OS creates a format of hard-disk when it was first initialized and that format decides number of partitions. 
- Format of partition that we use is DOS format = 64 bytes 
- GPT format = 128 partitions can be created.  
  - Partition table --> format : DOS --> 4 partitions 
  - Partition table --> format : GPT --> 128 partitions   

</br>

## Increasing the number of partitions
 - Create a new partition table in hard-disk. 
 - P4 partition will be created in such a way that it’s a separate hard-disk.
 - This partition is extended partition in which we can create more partitions.
 - Logical partition takes space in extended partition. Information or the partition table will be stored in extended partition. 
 
 - Create 3 primary and last 1 extended partition. 
 - Total 64 partitions can be made now. 3 primary + 60 logical + 1 extended.
 - But 63 partitions can be used for data storage (remove 1 extended partition).
 - There is no difference between primary and logical partition except that no one controls primary but logical is controlled by extended. So if we remove extended partition then all logical partitions will be removed. 
 
 - To see partitions information - 
   - **lsblk** (list of block devices)
   - Hard-disk is also known as block devices 
 
 - Extended partition can’t be used for data storage only logical and primary can be used. 
 - If partition has to be used for storage then follow these 3 steps - 
   1. Create physical partition.
   2. Format it.
   3. Activate/mount. 

</br>

## Formatting a partition
 - Partition must create an index for every new file for faster processing.
 - Whenever a file is to be opened, find that file in the index.
 - This index is formed in partition when its formatted first time. It’s also called a file system.
 - This index table is known as inode (index node) table. So, every partition has to be formatted.
 - The operating system reads only the inode table to show sizes of folders, files, drives etc.
 - This inode table can be changed. Then the operating system will show different sizes than the actual size.
 - When we remove a file, it only removes inode entry of that file.
 - For example, remove a file of size 1GB and 100 GB, time will be same.
 - When we format a partition, it only removes index page, data will not be removed. So, we can recover data from that partition.
 - File system creates inode table to manage files. 
 
 - To format ab ext4 partition, run the following command:
   - **mkfs.ext4 /dev/sdb1**
 
 There are similar commands for other file systems.
 - Example - NTFS, ext2, ext3, ext4, xfs etc. 
 
</br>

## Mounting or Activating
 - Only two kinds of objects can be used by an operating system: files and folders. 
 - Linux cannot directly access a device. The created device must linked or mounted with a folder with a folder.<br>
 Here is an example of hoow to mount a device:
 - **mkdir /data**
 - **mount /dev/sdb1 /data** (This data is like a pen drive mount and unmount) 
 - **cd /data**
 - **cat > adarsh.txt** 
 - **umount /dev/sdb1** 
 - **cd /data/** 
 - **ls**
 - Mount again 
 
 - To know about which partition is mounted on which folder. 
   - **df -h** 
 
 - Shows inode table. 
   - **ls -l** 
 
 - Shows inode number. 
   - ls -il 
