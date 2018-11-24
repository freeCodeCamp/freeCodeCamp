---
title: Partitions
---

## PARTITIONS
 
 - Without creating partitions in hard-disk, we can’t create folder. 
 
 - Partitions in Linux
    - **df**
	- **df -h** (human readable)  

 - Shows size in MiB, GiB	
   - **lvdisplay**
 
 - Shows information about partition of disk
   - **fdisk -l**
   - **fdisk -l /dev/sda** (sda is the name of hard-disk) 
 
 - For practicing partition, insert virtual hard-disk in Linux using virtual-box. 
 
 - Some points to remember:
   - Hard-disk doesn’t understand GB or MB, it’s unit is sector.</br>
     1 sector = 512 bytes.</br>
	 To find actual size of hard-disk, find number of sectors * 512.</br>
	 Allocates space in hard-disk in sectors.
   - Only 4 partitions can be created in a single hard-disk. 

</br>
 
## MAKING PARTITIONS IN HARD-DISK 
 
 1. Opens hard-disk prompt.
    - **fdisk /dev/sdb**
 2. Print partitions information of hard-disk.
    - **p**
 3. Create a new partition.
    - **n**
 4. Choose primary partition.
 5. Press 1 (1st partition).
 6. Initial some sectors (0-2047 = 2048 sectors = 1 MB) are reserved in hard-disk.
 7. Actual space starts with 2048th sector.
 8. **+1G**
 9. Create 4 partitions like this. 
 10. After 4th partition you can’t create more partitions. 
 
 11. Press **w** for save.
 12. Press **q** for quit without saving any partition. 
     This will Remove all partitions made because that was temporary. 
 
 13. For deleting partition - 
     - **d**   
   
</br>
   
## WHY THERE IS LIMIT OF 4? 
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

## INCREASING NUMBER OF PARTITIONS
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

## FORMAT PARTITION
 - Partition must create an index for every new file for faster processing.
 - Whenever a file is to be opened, find that file in index.
 - This index is formed in partition when its formatted first time. It’s also called file system.
 - This index table is known as inode (index node) table.  So, every partition has to be formatted.
 - OS reads only inode table to show sizes of folders, files, drives etc.
 - This inode table can be changed, then OS will show different sizes then the actual size.
 - When we remove a file, it only removes inode entry of that file.
 - For example, remove a file of size 1GB and 100 GB, time will be same.
 - When we format a partition, it only removes index page, data will not be removed. So, we can recover data from that partition.
 - File system creates inode table to manage files. 
 
 - To format partition - 
   - **mkfs.ext4 /dev/sdb1**
 
 - Example - NTFS, ext2, ext3, ext4, xfs etc. 
 
</br>

## Mounting or Activating
 - Only two kinds of thing can be used in a OS - File and folder 
 - We cannot go directly in a device. So, the created device has to be converted in a folder Or link with a folder Or mount with a folder in order to use this. 
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
