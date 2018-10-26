---
title: Latent Dirichlet Allocation
---
In natural language processing, latent Dirichlet allocation (LDA) is a generative statistical model that allows sets of observations to be explained by unobserved groups that explain why some parts of the data are similar. For example, if observations are words collected into documents, it posits that each document is a mixture of a small number of topics and that each word's creation is attributable to one of the document's topics. LDA is an example of a topic model.

Suppose you have the following set of sentences:

I ate a banana and spinach smoothie for breakfast
I like to eat broccoli and bananas.
Chinchillas and kittens are cute.
My sister adopted a kitten yesterday.
Look at this cute hamster munching on a piece of broccoli.

Latent Dirichlet allocation is a way of automatically discovering topics that these sentences contain. For example, given these sentences and asked for 2 topics, LDA might produce something like

Sentences 1 and 2: 100% Topic A
Sentences 3 and 4: 100% Topic B
Sentence 5: 60% Topic A, 40% Topic B
Topic A: 30% broccoli, 15% bananas, 10% breakfast, 10% munching, ... (at which point, you could interpret topic A to be about food)
Topic B: 20% chinchillas, 20% kittens, 20% cute, 15% hamster, ... (at which point, you could interpret topic B to be about cute animals)

The question, of course, is: how does LDA perform this discovery?

LDA Model

In more detail, LDA represents documents as mixtures of topics that spit out words with certain probabilities. It assumes that documents are produced in the following fashion: when writing each document, you

Decide on the number of words N the document will have (say, according to a Poisson distribution).
Choose a topic mixture for the document (according to a Dirichlet distribution over a fixed set of K topics). For example, assuming that we have the two food and cute animal topics above, you might choose the document to consist of 1/3 food and 2/3 cute animals.
Generate each word in the document by:
....First picking a topic (according to the multinomial distribution that you sampled above; for example, you might pick the food topic with 1/3 probability and the cute animals topic with 2/3 probability).
....Then using the topic to generate the word itself (according to the topic's multinomial distribution). For instance, the food topic might output the word "broccoli" with 30% probability, "bananas" with 15% probability, and so on.

Assuming this generative model for a collection of documents, LDA then tries to backtrack from the documents to find a set of topics that are likely to have generated the collection.

Example

Let's make an example. According to the above process, when generating some particular document D, you might

Decide that D will be 1/2 about food and 1/2 about cute animals.
Pick 5 to be the number of words in D.
Pick the first word to come from the food topic, which then gives you the word "broccoli".
Pick the second word to come from the cute animals topic, which gives you "panda".
Pick the third word to come from the cute animals topic, giving you "adorable".
Pick the fourth word to come from the food topic, giving you "cherries".
Pick the fifth word to come from the food topic, giving you "eating".

So the document generated under the LDA model will be "broccoli panda adorable cherries eating" (note that LDA is a bag-of-words model).

Learning

So now suppose you have a set of documents. You've chosen some fixed number of K topics to discover, and want to use LDA to learn the topic representation of each document and the words associated to each topic. How do you do this? One way (known as collapsed Gibbs sampling*) is the following:

Go through each document, and randomly assign each word in the document to one of the K topics.
Notice that this random assignment already gives you both topic representations of all the documents and word distributions of all the topics (albeit not very good ones).
So to improve on them, for each document d...
....Go through each word w in d...
........And for each topic t, compute two things: 1) p(topic t | document d) = the proportion of words in document d that are currently assigned to topic t, and 2) p(word w | topic t) = the proportion of assignments to topic t over all documents that come from this word w. Reassign w a new topic, where you choose topic t with probability p(topic t | document d) * p(word w | topic t) (according to our generative model, this is essentially the probability that topic t generated word w, so it makes sense that we resample the current word's topic with this probability). (Also, I'm glossing over a couple of things here, such as the use of priors/pseudocounts in these probabilities.)
........In other words, in this step, we're assuming that all topic assignments except for the current word in question are correct, and then updating the assignment of the current word using our model of how documents are generated.
After repeating the previous step a large number of times, you'll eventually reach a roughly steady state where your assignments are pretty good. So use these assignments to estimate the topic mixtures of each document (by counting the proportion of words assigned to each topic within that document) and the words associated to each topic (by counting the proportion of words assigned to each topic overall).

Layman's Explanation

In case the discussion above was a little eye-glazing, here's another way to look at LDA in a different domain.

Suppose you've just moved to a new city. You're a hipster and an anime fan, so you want to know where the other hipsters and anime geeks tend to hang out. Of course, as a hipster, you know you can't just ask, so what do you do?

Here's the scenario: you scope out a bunch of different establishments (documents) across town, making note of the people (words) hanging out in each of them (e.g., Alice hangs out at the mall and at the park, Bob hangs out at the movie theater and the park, and so on). Crucially, you don't know the typical interest groups (topics) of each establishment, nor do you know the different interests of each person.

So you pick some number K of categories to learn (i.e., you want to learn the K most important kinds of categories people fall into), and start by making a guess as to why you see people where you do. For example, you initially guess that Alice is at the mall because people with interests in X like to hang out there; when you see her at the park, you guess it's because her friends with interests in Y like to hang out there; when you see Bob at the movie theater, you randomly guess it's because the Z people in this city really like to watch movies; and so on.

Of course, your random guesses are very likely to be incorrect (they're random guesses, after all!), so you want to improve on them. One way of doing so is to:

Pick a place and a person (e.g., Alice at the mall).
Why is Alice likely to be at the mall? Probably because other people at the mall with the same interests sent her a message telling her to come.
In other words, the more people with interests in X there are at the mall and the stronger Alice is associated with interest X (at all the other places she goes to), the more likely it is that Alice is at the mall because of interest X.
So make a new guess as to why Alice is at the mall, choosing an interest with some probability according to how likely you think it is.

Go through each place and person over and over again. Your guesses keep getting better and better (after all, if you notice that lots of geeks hang out at the bookstore, and you suspect that Alice is pretty geeky herself, then it's a good bet that Alice is at the bookstore because her geek friends told her to go there; and now that you have a better idea of why Alice is probably at the bookstore, you can use this knowledge in turn to improve your guesses as to why everyone else is where they are), and so eventually you can stop updating. Then take a snapshot (or multiple snapshots) of your guesses, and use it to get all the information you want:

For each category, you can count the people assigned to that category to figure out what people have this particular interest. By looking at the people themselves, you can interpret the category as well (e.g., if category X contains lots of tall people wearing jerseys and carrying around basketballs, you might interpret X as the "basketball players" group).
For each place P and interest category C, you can compute the proportions of people at P because of C (under the current set of assignments), and these give you a representation of P. For example, you might learn that the people who hang out at Barnes & Noble consist of 10% hipsters, 50% anime fans, 10% jocks, and 30% college students.

Real-World Example

Finally, let's go through a real-world example. I applied LDA to a set of Sarah Palin's emails a little while ago (see http://blog.echen.me/2011/06/27/... for a blog post, or http://sarah-palin.heroku.com/ for an app that allows you to browse through the emails by the LDA-learned topics), so here are the some of the topics that the algorithm learned:

Trig/Family/Inspiration: family, web, mail, god, son, from, congratulations, children, life, child, down, trig, baby, birth, love, you, syndrome, very, special, bless, old, husband, years, thank, best, ...
Wildlife/BP Corrosion: game, fish, moose, wildlife, hunting, bears, polar, bear, subsistence, management, area, board, hunt, wolves, control, department, year, use, wolf, habitat, hunters, caribou, program, denby, fishing, ...
Energy/Fuel/Oil/Mining: energy, fuel, costs, oil, alaskans, prices, cost, nome, now, high, being, home, public, power, mine, crisis, price, resource, need, community, fairbanks, rebate, use, mining, villages, ...
Gas: gas, oil, pipeline, agia, project, natural, north, producers, companies, tax, company, energy, development, slope, production, resources, line, gasline, transcanada, said, billion, plan, administration, million, industry, ...
Education/Waste: school, waste, education, students, schools, million, read, email, market, policy, student, year, high, news, states, program, first, report, business, management, bulletin, information, reports, 2008, quarter, ...
Presidential Campaign/Elections: mail, web, from, thank, you, box, mccain, sarah, very, good, great, john, hope, president, sincerely, wasilla, work, keep, make, add, family, republican, support, doing, p.o, ...

#### Suggested Reading:
<!-- Please add any articles you think might be helpful to read before writing the article -->

- [Latent Dirichlet allocation](https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation)
- [Introduction to Latent Dirichlet Allocation](http://blog.echen.me/2011/08/22/introduction-to-latent-dirichlet-allocation/)
