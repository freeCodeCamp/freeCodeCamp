---
title: Cloud Storage
---

## STORAGE AS A SERVICE (StAAS) 
When we use the storage of cloud, that is the StAAS. In this, cloud system has storage and the user use that storage on his system and can use that to store data.
Cloud system should have the capability of Storage Scaling.
We can integrate all storage. For example, if we have multiple pen-drives then we can integrate all pen-drive storages in a single one. 
 
There are mainly two types of storage 
1. Object
2. Block 
 
### Object Storage
  - We can not a make partition in cloud storage. We can only store files and folders there. This is called object storage. We can’t install OS there as there are no partitions.
  - **Example**
    - Google drive (google compute engine, GCE), OneDrive, drop box, Microsoft azure.
    - Amazon has its own cloud service AWS. S3(Simple Storage Service, SSS) is the product of amazon that provides StAAS. It’s a public cloud. Anyone can use their services.
    - OpenStack is the biggest private cloud. OpenStack has product swift (Object Storage). 

### Block Storage
  - If we’re able to make partitions in provided storage, then we can install OS. We have a hard-disk and we can make partitions in them, this type of storage is known as block storage.
  - **Example**
    - Block storage service of AWS – EBS (Elastic Block Storage) 
    - Cloud provides facility of scaling storage that’s the elastic property of cloud.
    - Block storage of OpenStack – Cinder
