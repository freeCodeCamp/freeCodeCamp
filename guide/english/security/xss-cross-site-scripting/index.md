---
title: XSS Cross Site Scripting
---
## XSS Cross Site Scripting

Cross Site Scripting (XSS) is is a type of code injection. It is one of the most common vulnerabilities on the web. 

XSS usually involves entering code into an form, url parameter or anywhere else that accepts user input that is displayed back to users. For example imagine a website that showed your user profile, and you entered `<script>alert("HELLO!");</script>` as your username. If the site did not prevent XSS, then every person that visited your profile would get an alert pop-up.

#### Different types of XSS

There are 3 different types of XSS.

* Stored XSS
* Reflective XSS
* DOM Based XSS

#### Dangers of XSS

Of course, the above example does not present any immediate danger to those viewing your profile. But, what if you had more sinister intentions? You could execute some javascript to show a fake log in page, and gather usernames and passwords for other users of the site, or simply read the session cookie if it is not secure. You could force them to visit other websites or perform an action. 

#### Defend against XSS

* Never trust user data
* Validate untrusted data (check for valid data, if invalid, reject rather than process)
* Whitelist safe values (rather than blacklist)
* Always encode output
* Encode for the correct context (HTML / HTML attributes / CSS / JSS are all different)
* Protect cookies (HTTP only and secure can only be read by the server)
* Implement a Content-Security Policy

#### More Information:

Read on more information on XSS and the steps you can take to protect against is from:

<a href='https://www.owasp.org/index.php/Cross-site_Scripting_(XSS' target='_blank' rel='nofollow'>Cross-site Scripting (XSS)</a>)

<a href='https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting' target='_blank' rel='nofollow'>OWASP XSS (Cross Site Scripting) Prevention Cheat Sheet</a>

<a href='https://www.hacksplaining.com/exercises/xss-stored' target='_blank' rel='nofollow'>Hacksplaining XSS Lesson</a>
