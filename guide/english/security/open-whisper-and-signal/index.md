---
title: Open Whisper Systems and Signal
---

![signal blue icon](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Signal_Blue_Icon.png/400px-Signal_Blue_Icon.png)

## Open Whisper Systems and Signal

Open Whisper Systems (abbreviated as OWS) is a software organization that was founded by Moxie Marlinspike in 2013. Its main focus is the development of the Signal Protocol. The organization is funded by a combination of donations and grants, and all of its products are published as free and open-source software.

It also maintains an encrypted communications application called Signal for Android and iOS. It uses the Internet to send one-to-one and group messages, which can include files, voice notes, images and videos, and make one-to-one voice and video calls.

Signal uses standard cellular mobile numbers as identifiers, and uses end-to-end encryption to secure all communications to other Signal users. The applications include mechanisms by which users can independently verify the identity of their messaging correspondents and the integrity of the data channel.

The clients are published as free and open-source software under the GPLv3 license. The server code is published under the AGPLv3 license.

### Signal
Signal is an encrypted communications app for Android and iOS. A desktop version is also available for Linux, Windows and macOS. Signal uses the internet to send one-to-one and group messages. The messages can include files, voice notes, images and videos.

### Encryption protocols of Signal
Signal messages are encrypted with the signal protocol. The protocol combines the Double ratchet Algorithm, 3XDH and prekeys. It also uses AES-256, HMAC-SHA256 and Curve25519 as primitives. 

A group of researchers from “Ruhr University Bochum” published an analysis of the Signal Protocol on October 2014 where they found that it was secure. Another study by researchers of the “University of Oxford” concluded on October 2016 that the protocol was cryptographically sound.

The protocol now has been implemented by many other companies for there applications like WhatsApp, Facebook Messenger and Skype. This wide use of this protocol makes it possible for conversations of more than billion people worldwide to be end-to-end encrypted. The protocol is not used as default but is offered as an optional mode in these applications.

### The Authentication of a Signal user
Signal verifies that the correspondent is really the person that they claim to be, this is done by comparing the key fingerprint that Is sent independent from the main in band data stream also known as **Out-of-band data**. The app uses a trust on first use mechanism in order to make it possible of the correspondent key changes. 

### The servers of Signal
To make the app more secure and away from prying eyes, the company Open Whisper uses their own centralized servers. The company has set up dozens of servers in more than 10 countries to minimize the latency in the app. The servers are used to facilitate the discover of contacts who are also registered Signal users and the automatic exchange of user’s public keys. 

### Licensing of Signal
The complete source code of the Signal clients is easily available on GitHub under the GPLv3 license. This enables people that are interested to examine all of the code and help the Open Whisper Systems company verify that everything is behaving as expected. It also allows to make an own copy of the application and compare them with the versions of Open Whisper Systems.

### Distribution of Signal
As described above is Signal available for Android, iOS, Windows, Linux and macOS. The Android version is distributed through the Google Play store and on iOS at the apple’s app store. But can also be download on the official website of Signal. The apps on both stores are signed by the developers so the operating system can check of the updates are signed with the same key.
The desktop version of the applications can be download on the official website of Signal.

### More information: 
Official website: https://signal.org/
Free Software foundation: https://www.fsf.org/campaigns/priority-projects/voicevideochat
