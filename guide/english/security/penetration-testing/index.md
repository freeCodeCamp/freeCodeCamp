---
title: Penetration Testing
---

Penetration Testing is a method that many companies follow in order to minimize their security breaches. This is a controlled way of hiring a professional who will try to hack your system and show you the loopholes that you should fix. Penetration testing can occasionally bring down systems, and cause the company to lose uptime, it's best practice to penetration test on a pre-production version of the production enviroment.

Before doing a penetration test, it is mandatory to have an agreement that will explicitly mention the following parameters −

- what will be the time of penetration test,
- where will be the IP source of the attack, and
- what will be the penetration fields of the system.

Penetration testing is conducted by professional ethical hackers who mainly use commercial, open-source tools, automate tools and manual checks. There are no restrictions; the most important objective here is to uncover as many security flaws as possible. Many big companies offer rewards for anybody that can point out security vulnerabilities in their systems, through what is called [bug bounty programs](https://en.wikipedia.org/wiki/Bug_bounty_program). Google, for example, will offer tens of thousands of dollars through their Vulnerability Reward Program.

## Phases of Penetration Testing

There are five main phases of penetration testing. They are:

1.  **Reconnaissance**
    - This is where a penetration tester gathers as much information about your potential targets. Some methods used in this stage are Google/Bing searches, whois searches, Netcraft scans, and social engineering.
2.  **Scanning**
    - Once the penetration tester has gathered all the information and decided on which target(s) they would like to attack, they need to ensure the target(s) is alive and scan for things such as open ports, active services, and any current vulnerabilities that the target system has open.
3.  **Exploitation**
    - After the scanning is complete and vulnerabilities have been assessed, the penetration tester can use that information to figure out their attack vector. In this phase, the penetration tester looks for an exploit that uses one of the vulnerabilities that were found in the previous stage to gain access to the target system.
4.  **Maintaing Access**
    - This phase is where the penetration tester ensures that they will have enough time to test the target system. They may attempt to circumvent any intrusion detection/prevention countermeasures in order to finish their testing.
5.  **Covering Tracks**
    - After the attack is complete, the pentration tester may take steps to conceal their intrusion and may possiblly leave behind means of persistent access to allow a proof of concept to their client.

## Types of Penetration Testing

We have five types of penetration testing −

1.  **Black Box** − Here, the ethical hacker doesn’t have any information regarding the infrastructure or the network of the organization that he is trying to penetrate. In black-box penetration testing, the hacker tries to find the information by his own means.

2.  **Grey Box** − It is a type of penetration testing where the ethical hacker has a partial knowledge of the infrastructure, like its domain name server.

3.  **White Box** − In white-box penetration testing, the ethical hacker is provided with all the necessary information about the infrastructure and the network of the organization that he needs to penetrate.

4.  **External Penetration Testing** − This type of penetration testing mainly focuses on network infrastructure or servers and their software operating under the infrastructure. In this case, the ethical hacker tries the attack using public networks through the Internet. The hacker attempts to hack the company infrastructure by attacking their webpages, webservers, public DNS servers, etc.

5.  **Internal Penetration Testing** − In this type of penetration testing, the ethical hacker is inside the network of the company and conducts his tests from there.

Penetration testing can also cause problems such as system malfunctioning, system crashing, or data loss. Therefore, a company should take calculated risks before going ahead with penetration testing. The risk is calculated as follows and it is a management risk.

**RISK = Threat × Vulnerability**

## Example

You have an online e-commerce website that is in production. You want to do a penetration testing before making it live. Here, you have to weigh the pros and cons first. If you go ahead with penetration testing, it might cause interruption of service. On the contrary, if you do not wish to perform a penetration testing, then you can run the risk of having an unpatched vulnerability that will remain as a threat all the time.
Before doing a penetration test, it is recommended that you put down the scope of the project in writing. You should be clear about what is going to be tested. For example −

- Your company has a VPN or any other remote access techniques and you want to test that particular point.
- Your application has webservers with databases, so you might want to get it tested for SQL injection attacks which is one of the most crucial tests on a webserver. In addition, you can check if your webserver is immune to DoS attacks.

## Penetration testing tools

The most flexible and powerful tool used for penetration testing is **kali** linux operating system .With the kali linux os pentration tester gets a  flexible platform to perform the panoply of penetration task such as enumerating a target,identifying vulnerabilities,and exploiting targets in a networked environment 

## Quick Tips

Before going ahead with a penetration test, you should keep the following points in mind −
First understand your requirements and evaluate all the risks.

- Hire a certified person to conduct penetration test because they are trained to apply all the possible methods and techniques to uncover possible loopholes in a network or web application.
- Always sign an agreement before doing a penetration test.

## Resources

<a href='https://en.wikipedia.org/wiki/Penetration_test' target='_blank' rel='nofollow'>Penetration Testing</a>
