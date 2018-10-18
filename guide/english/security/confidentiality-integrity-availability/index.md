---
title: Confidentiality Integrity Availability
---
## Confidentiality, Integrity, Availability (CIA)
Confidentiality, Integrity, and Availability or the CIA triad is the most fundamental concept in cyber security. It serves as guiding principles or goals for information security for organizations and individuals to keep information safe from prying eyes.

### Confidentiality
Confidentiality is about ensuring access to data is restricted to only the intended audience and not others. As you may expect, the more sensitive the information is, the more stringent the security measures should be.  Many privacy laws rely on confidentiality security controls to enforce legal requirements.

Some measures to keep information confidential are:
- Encryption
- Password
- Two-factor authentication
- Biometric
- Security tokens

### Integrity
Integrity refers to maintaining the accuracy, and completeness of data. In other words, it is about protecting data from being modified by unauthorized parties, accidentally by authorized parties, or by non-human-caused events such as electromagnetic pulse or server crash. For example, a hacker may intercept data and modify it before sending it on to the intended recipient.

Measures to maintain the integrity of information include:
- Encryption
- Hashing 
- User Access Controls
- Checksums
- Version Control
- Backups

### Availability
Lastly, information must be available when it is needed. To ensure high data availability, you must maintain a correctly functioning hardware and software and provide adequate bandwidth. But these measures alone are not enough because there are external forces at play; data availability can further be compromised by:
- Denial of Service (DoS)
- Power outages
- Natural disasters

DoS, for example, might be employed by a rival company to break your website so that its own website becomes more popular. 

Measures to mitigate threats to availability include:
- Off-site backups
- Disaster recovery
- Redundancy
- Failover
- RAID
- High-availability clusters

### Challenges for the CIA Triad

Special challenges for the CIA triad:

**Big data** poses extra challenges to the CIA paradigm because of the sheer volume of information that needs to be safe guarded, the multiplicity of sources it comes from and the variety of formats in which it exists. Duplicate data sets and disaster recovery plans can multiply the already high costs. Furthermore, because the main concern of big data is collecting and making some kind of useful interpretation of all this information, responsible data oversight is often lacking. 

**Internet of Things privacy** is the special considerations required to protect the information of individuals from exposure in the IoT environment, in which almost any physical or logical entity or object can be given a unique identifier and the ability to communicate autonomously over the Internet or a similar network. The data transmitted by a given endpoint might not cause any privacy issues on its own. However, when even fragmented data from multiple endpoints is gathered, collated and analyzed, it can yield sensitive information. 

**Internet of Things security** is also a special challenge because the IoT consists of so many Internet-enabled devices other than computers, which often go unpatched and are often configured with default or weak passwords. Unless adequately protected, IoT things could be used as separate attack vectors or part of a thingbot. As more and more products are developed with the capacity to be networked, it’s important to routinely consider security in product development.  

### More Information: [Confidentiality, integrity, and availability (CIA triad)](http://whatis.techtarget.com/definition/Confidentiality-integrity-and-availability-CIA)
Other than the CIA triad, there are also other frequently recurring themes in information security:  
- non-repudiation: assurance that someone/ something cannot deny something (e.g. one cannot deny the authenticity of a digital signature) 
- authentication: proving that a person is who they claim to be
- reliability: confidence that one can depend on a system or process
- privacy: a generalised counterpart of confidentiality which also address the social consequence of failing to meet the requirement 