---
title: Identify Basic Internet Problems with Ping
---
![Sonar screen](//discourse-user-assets.s3.amazonaws.com/original/2X/b/b1bfc671722851eed4adfe2d4ec24eb9ab8a875b.png)

Next time you call your help desk, do you want to wow them with your networking knowledge? Using a command called "ping", built right into your existing Mac, Windows, or Linux computer, will help identify basic connection problems. Okay, this might not be enough to "wow" your fellow team members, however they will appreciate that you started the debug process. And please remember that your Support personnel are debug specialists, so follow their instructions when they step you through the troubleshooting sequence.

## TL;DR:

You can use the `ping` command built into your Mac OS X, Windows, or Linux computer to identify basic network connectivity issues. This can help you solve the problem and/or gain valuable debug information as a first step before calling support. Read below for details on how to launch a command line window and run `ping` from your Mac OS X or Windows machine.

## The `ping` command:

The `ping` command is a simple way to verify that another computer can receive information from you. The original author, <a href='https://en.wikipedia.org/wiki/Mike_Muuss' target='_blank' rel='nofollow'>Mike Muuss</a>, actually <a href='https://en.wikipedia.org/wiki/Ping_%28networking_utility%29#History' target='_blank' rel='nofollow'>named the program after the "ping" sound</a> that a submarine sends to detect objects in the water. If an echo of the ping comes back, it means that there is something out there. In fact, `ping` uses the "<a href='https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol' target='_blank' rel='nofollow'>Internet Control Message Protocol Echo Request</a>" as part of its underlying software design.

In its simplest form, the `ping` command provides two valuable pieces of information, whether the message was echoed back (`64 bytes from…`) and how long it takes to receive the message back (e.g., `time=6.396 ms`). Depending on what type of computer you are using, you may even get a summary containing minimum, maximum, average, and more. The response time is shown in "ms", or millisecond, which is 1/1000th of a second. A response time of 10ms or less is pretty fast, however values are often in the 100ms range. At much above 200ms you'll probably notice that you have a sluggish connection.

## When all is well:

This is what my `ping` response looks like on my Mac OS X computer when everything is working normally here in Malaysia:

    MacBook-Pro:~ ajm$ ping Google.com
    PING google.com (216.58.196.46): 56 data bytes
    64 bytes from 216.58.196.46: icmp\_seq=0 ttl=55 time=6.396 ms
    64 bytes from 216.58.196.46: icmp\_seq=1 ttl=55 time=6.368 ms
    64 bytes from 216.58.196.46: icmp\_seq=2 ttl=55 time=26.773 ms
    64 bytes from 216.58.196.46: icmp\_seq=3 ttl=55 time=6.984 ms
    ^C
    --- google.com ping statistics ---
    4 packets transmitted, 4 packets received, 0.0% packet loss
    round-trip min/avg/max/stddev = 6.368/11.630/26.773/8.746 ms

This is what my `ping` response looks like on a Windows computer when everything is working well:

    C:\Users\BJM>ping Google.com
    Pinging google.com [216.58.196.46] with 32 bytes of data:
    Reply from 216.58.196.46: bytes=32 time=6ms TTL=128
    Reply from 216.58.196.46: bytes=32 time=15ms TTL=128
    Reply from 216.58.196.46: bytes=32 time=6ms TTL=128
    Reply from 216.58.196.46: bytes=32 time=6ms TTL=128
    Ping statistics for 216.58.196.46:
        Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
    Approximate round trip times in milli-seconds:
        Minimum = 6ms, Maximum = 15ms, Average = 8ms

You can see from these examples that the connection is pretty good with average response times under 10ms.

### When something is wrong (three examples):

So what would happen if I could not connect to `Google.com`? For example <span class="hashtag">#1</span>, I simulate a broken network connection to my Mac by unplugging my router from the wall, and re-run the command. The first thing I notice is that it takes a _lot_ longer for the command to respond:

    MacBook-Pro:~ ajm$ ping google.com
    ping: cannot resolve google.com: Unknown host
    MacBook-Pro:~ ajm$

Or, for example <span class="hashtag">#2</span>, depending on exactly how the connection is failing:

    PING google.com (216.58.196.46): 56 data bytes
    Request timeout for icmp\_seq 0
    Request timeout for icmp\_seq 1
    Request timeout for icmp\_seq 2
    ^C

And sometimes, if I have a particularly flaky connection, I'll see a mixture of these messages. For example <span class="hashtag">#3</span>, I can simulate this by connecting my Mac computer to a public Wi-Fi connection that is across the street:

    PING google.com (216.58.196.206): 56 data bytes
    64 bytes from 216.58.196.206: icmp\_seq=0 ttl=57 time=273.655 ms
    64 bytes from 216.58.196.206: icmp\_seq=1 ttl=57 time=808.546 ms
    64 bytes from 216.58.196.206: icmp\_seq=2 ttl=57 time=179.613 ms
    Request timeout for icmp\_seq 3
    Request timeout for icmp\_seq 4
    64 bytes from 216.58.196.206: icmp\_seq=5 ttl=57 time=374.612 ms
    Request timeout for icmp\_seq 6
    ping: sendto: No route to host
    Request timeout for icmp\_seq 7
    ping: sendto: No route to host
    Request timeout for icmp\_seq 8
    ^C

In the first test, `ping` told me that my machine could not even find the Internet address (IP `216.58.196.46`) for `Google.com`. In the second test, my computer remembered Google's IP address, but could not actually reach the Google servers (`Request timeout`). In the third test, `sendto: No route to host` means that the network device knows where the Google servers are, but something along the digital pathway is broken.

## Mac Users: How to run the `ping` command:

On a Mac, you typically run `ping` from the terminal command line. To start the terminal, click the OS X Spotlight magnifying glass icon in the upper right of the desktop:

![Mac Spotlight](//discourse-user-assets.s3.amazonaws.com/original/2X/9/924e9346b5f92fe41127f6b3e403f454773edae9.png)

When the search window appears, type "terminal", highlight "Terminal – Utilities", and double-click (or hit

<kbd>return</kbd>

): ![Mac Terminal Launch](//discourse-user-assets.s3.amazonaws.com/original/2X/9/976e1fb628c0d0bf2a6a9b57504305fd844716d4.png)

That will launch the terminal command window, and you can enter the command `ping Google.com` shown in my examples: ![Mac Command Line](//discourse-user-assets.s3.amazonaws.com/original/2X/0/05d1e4d360c14921f7bd7ab871358b956f1e7d03.png)

**Important Mac Tip** : The `ping` command will run forever if you don't tell it to stop. To do that, press the

`control`

key (lower right on keyboard) and the

`c`

key. That will interrupt the test with a Control-C (`^C`) and give back command line control. For Windows user, the command will stop by itself after a few iterations.

## Windows Users: How to run the `ping` command:

Opening the Command Prompt differs between Windows versions 10, 8.1, 8, and 7; here's a great guide at <a href='http://pcsupport.about.com/od/commandlinereference/f/open-command-prompt.htm' target='_blank' rel='nofollow'>How To Open Command Prompt</a>. On a Windows 7 machine, for example, click on the lower left Windows "Start" icon, and select "Command Prompt" and double-click (or hit

`enter`

):

![Win Terminal Launch](//discourse-user-assets.s3.amazonaws.com/original/2X/4/4e0b18755930ad0d64e6e38763f0b96054fd76fb.png)

This will launch the command window, and you can enter the command `ping Google.com` shown in the examples:

![Win Command Line](//discourse-user-assets.s3.amazonaws.com/original/2X/9/94d8ed91d29574497ad0f2eb2cd235050132851e.png)

Now that you know how to use the `ping` command, you can do basic troubleshooting of your network connection. With a little bit of creativity, you can work with your local IT support person or knowledge of your network topology and IP address (e.g., `ping` the router, `ping` your ISP) to further identify network issues.