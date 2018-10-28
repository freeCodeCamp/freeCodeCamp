---
title: Tor (The Onion Router)
---

<p align="center">
  <img alt="Tor Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Tor-logo-2011-flat.svg/2000px-Tor-logo-2011-flat.svg.png" width="300">
</p>

## Tor

Tor stands for "The Onion Router", which is a free software that helps anonymize its users Internet usage, maintained by the Tor Project.

In addition to the Onion Router, the Tor Project maintains a bundle of software, most notably a web browser, which is often also
called Tor.

The Onion Network works by bouncing a user's requests through a large worldwide, volunteer network of computers. It sends the requests through the system encrypted, only decrypting them when they get to the 'exit node', the last computer in the network for any given request before the request is sent to its destination. This makes the message look like its coming from somewhere other than where it actually originated.

Tor has many use cases. Journalists reporting from areas where their lives may be endangered by the nature of the stories they are breaking, whistleblowers, and people living in oppressive regimes all fit into Tor's more benign use cases, along with anyone more interested in online anonymity.


Tor has gotten a lot of negative attention because of its criminal use case. Criminals, such as drug dealers, can and often do use Tor to cover their tracks, and to set up 'dark markets' to sell their wares without compromising themselves. The 2017 shutdowns of AlphaBay and Hansa certainly prove that this is hardly foolproof.

Edward Snowden, the NSA whistleblower, has mentioned Tor favorably as a very well put-together program. Famously, an internal NSA memo that was leaked referred to it as "the king of high-secure, low-latency internet anonymity There are no contenders to the throne in waiting".

Tor has many other usecases. Journalists reporting from areas where their lives may be endangered by the nature of the stories they are breaking, whistleblowers, and people living in oppressive regimes all fit into Tor's more benign usecases, along with anyone more interested in online anonymity. This is important because everyday things cause us to lose more and more of what little privacy we have left, things like TOR ensure a brighter future.

### Tor relay
Tor relays are used to receive traffic on the Tor network and pass it along. There are three kinds of relays that you can run in order to help the Tor network “Middle relays”, “Exit relays” and bridges.

### Middle relay
Tor traffic passes at least to three relays before it reaches its destination for optimal security.
The first two relays are the middle relays which receive traffic and pass it along to another relay in the Tor network. This middle relay adds to the speed and robustness of the Tor network but without making the owner of the relay look at the source of the traffic it receives. 

Middle relays advertise their presence to the rest of the network, so that any user of the Tor network can connect to them even if the user has malicious intend and wants to do something illegal, the IP address of this middle relay will not show up as the source of the traffic. This means that the middle relays are generally safe to run in your home in conjunction with other services. Before deciding please inform yourself and See the legal FAQ on tor for more info.

### Exit relay
The second relay is the exit relay and is the final really that Tor Traffic passes through before it reaches its destination. This exit relays also advertise their presence to the entire Tor network, so they can be used by any Tor Network user. The difference between middle and exit relay is that the exit relay IP address is interpreted as the source of the traffic, this means if a malicious user uses the network to do something illegal the exit relay MAY take the blame.

This means that people that run exit relays should be prepared to deal with complaints, copyright takedown notices and the possibility that their exit relay may attract law enforcement agencies. If you aren’t prepared to deal with this issue it advised to run a middle relay instead. If you are still interested in running an exit relay, please inform yourself as much as possible and visit the legal FAQ on tor for more information.

### Bridges
Last but certainly not least are Bridges this relay are not publicly listed as part of the Tor network. The bridges are used for censorship-circumvention tools in countries that regularly block the publicly listed Tor relays, countries like China are good example. People in these countries use the bridge to access the tor network so it’s an extra step for people that need to circumvent censorship and are not meant to use as daily relays.

The bridge is generally safe to run in your home in conjunction with other services or your personal computer. Before deciding please inform yourself and See the legal FAQ on tor for more info.

Legal FAQ tor: https://www.eff.org/torchallenge/faq.html


#### More Information:

<a href='https://www.torproject.org' target='_blank' rel='nofollow'>The Tor Project</a><br />
<a href='https://www.theguardian.com/world/2013/oct/04/nsa-gchq-attack-tor-network-encryption' target='_blank' rel='nofollow'>NSA and GCHQ try to crack Tor</a>
