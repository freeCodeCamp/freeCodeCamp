---
title: Reinforcement Learning
---
#### Suggested Reading:
<!-- Please add any articles you think might be helpful to read before writing the article -->

- [Reinforcement Learning: An Introduction](http://incompleteideas.net/book/the-book-2nd.html)

#### Reinforcement Learning
<!-- Please add your working draft below in GitHub-flavored Markdown -->

Reinforcement Learning refers to a field of Machine Learning that applies to agents that you reinforce by giving them reward and punishment. It gives a nice gradual learning and can simplify the learning of agent in tasks where you cannot determine a proper error value.

Reinforcement Learning can be used to solve any decision-making process. It falls somewhere between supervised and unsupervised learning; rewarding an agent implies that there is a process to determine the value of a state that could be used to reward the agent more for taking actions that resulted in "good" states and less for those that resulted in "bad" states (relative to the problem definition).

Many Reinforcement Learning algorithms depend on a state-action value matrix, commonly denoted as a Q-matrix or Q-function, which at a given time represents the agent's best estimation of the sum of future rewards to be gathered if the agent were to take a specific action from a specific state. Most algorithms update this Q-matrix quite often, and in real-world applications, keeping this information in an actual matrix in memory would have spacial complexity `n * m` where `n` is the number of states possible and `m` is the number of actions the agent could take. Even in low-dimensional descretized state-action spaces, this quickly becomes intractible.

Instead of storing the Q-matrix in memory, a common approach in modern reinforcement learning is to approximate the Q-function using some sort of nonlinear function approximation algorithm such as a neural network. With this approach, one only needs to store the network parameters in memory, greatly reducing the space complexity of the agent. Using neural networks in part as a form of spacial reduction or compression is not unique to Reinforcement Learning; Autoencoder networks are a type of network structure designed to compress information by training a network to represent information using bottleneck-shaped networks. 

Example:
A bot is given a task to play Space Invaders, it tries to learn to play it by interacting with game and in return getting a reward for the points that it scored at end of the game. Greater the reward, greater are its chances of doing the similar gameplay. In that way, it learns how to play the game and perform in the best possible way.

In industries robot uses deep reinforcement learning to pick a device from one box and putting it in a container. Whether it succeeds or fails, it memorizes the object and gains knowledge and train’s itself to do this job with great speed and precision. Learning on its own is a kind of reinforcement learning provided the learning is in positive dimension.

The best example, and one which you will hear a lot in this field, is AlphaGo developed by Google. This uses reinforcement learning to learn the patterns, rules and semantics of the board game, Go. This bot defeated the World No. 1 Go player, Lee Sedol, in what was the first time a computer program defeated a professional player. AlphaGo won by 4-1 in a five game series. This was a huge victory for AI and kickstarted the field of Reinforcement learning. 

## List of Common Algorithms
* Q-Learning
* State-Action-Reward-State-Action (SARSA)
* Temporal Difference (TD)
* Deep Adversarial Networks

## Use cases:
Some applications of the reinforcement learning algorithms are computer played board games (Chess, Go), robotic hands, and self-driving cars.

## More information:
* [David Silver's RL course](http://www0.cs.ucl.ac.uk/staff/d.silver/web/Teaching.html)

