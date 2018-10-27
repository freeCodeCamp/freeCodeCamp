---
title: Reinforcement Learning
---
#### Suggested Reading:
<!-- Please add any articles you think might be helpful to read before writing the article -->

- [Reinforcement Learning: An Introduction](http://incompleteideas.net/book/the-book-2nd.html)

#### Reinforcement Learning
<!-- Please add your working draft below in GitHub-flavored Markdown -->

Reinforcement Learning refers to a field of Machine Learning that applies to agents that you reinforce by giving them reward and punishment. It gives a nice gradual learning and can simplify the learning of agent in tasks where you cannot determine a proper error value.

Example:
A bot is given a task to play Space Invaders, it tries to learn to play it by interacting with game and in return getting a reward for the points that it scored at end of the game. Greater the reward, greater are its chances of doing the similar gameplay. In that way, it learns how to play the game and perform in the best possible way.

In industries robot uses deep reinforcement learning to pick a device from one box and putting it in a container. Whether it succeeds or fails, it memorizes the object and gains knowledge and train’s itself to do this job with great speed and precision. Learning on its own is a kind of reinforcement learning provided the learning is in positive dimension.

The best example, and one which you will hear a lot in this field, is AlphaGo developed by Google. This uses reinforcement learning to learn the patterns, rules and semantics of the board game, Go. This bot defeated the World No. 1 Go player, Lee Sedol, in what was the first time a computer program defeated a professional player. AlphaGo won by 4-1 in a five game series. This was a huge victory for AI and kickstarted the field of Reinforcement learning. 

## List of Common Algorithms
Q-Learning
Temporal Difference (TD)
Deep Adversarial Networks

## Use cases:
Some applications of the reinforcement learning algorithms are computer played board games (Chess, Go), robotic hands, and self-driving cars.

## More information:
* [David Silver's RL course](http://www0.cs.ucl.ac.uk/staff/d.silver/web/Teaching.html)

An implementation of Reinforcement Learning is used in neural networks called as third type of machine learning REinforcement Learning.

While neural networks are responsible for recent breakthroughs in problems like computer vision, machine translation and time series prediction – they can also combine with reinforcement learning algorithms to create something astounding like AlphaGo.

Reinforcement learning refers to goal-oriented algorithms, which learn how to attain a complex objective (goal) or maximize along a particular dimension over many steps; for example, maximize the points won in a game over many moves. They can start from a blank slate, and under the right conditions they achieve superhuman performance. Like a child incentivized by spankings and candy, these algorithms are penalized when they make the wrong decisions and rewarded when they make the right ones – this is reinforcement.

Reinforcement algorithms that incorporate deep learning can beat world champions at the game of Go as well as human experts playing numerous Atari video games. While that may sound trivial, it’s a vast improvement over their previous accomplishments, and the state of the art is progressing rapidly.

Reinforcement learning solves the difficult problem of correlating immediate actions with the delayed returns they produce. Like humans, reinforcement learning algorithms sometimes have to wait a while to see the fruit of their decisions. They operate in a delayed return environment, where it can be difficult to understand which action leads to which outcome over many time steps.

Reinforcement learning algorithms can be expected to perform better and better in more ambiguous, real-life environments while choosing from an arbitrary number of possible actions, rather than from the limited options of a video game. That is, with time we expect them to be valuable to achieve goals in the real world.

Reinforcement Learning Definitions
Reinforcement learning can be understand using the concepts of agents, environments, states, actions and rewards, all of which we’ll explain below. Capital letters tend to denote sets of things, and lower-case letters denote a specific instance of that thing; e.g. A is all possible actions, while a is a specific action contained in the set.

Agent: An agent takes actions; for example, a drone making a delivery, or Super Mario navigating a video game. The algorithm is the agent. In life, the agent is you.1
Action (A): A is the set of all possible moves the agent can make. An action is almost self-explanatory, but it should be noted that agents choose among a list of possible actions. In video games, the list might include running right or left, jumping high or low, crouching or standing still. In the stock markets, the list might include buying, selling or holding any one of an array of securities and their derivatives. When handling aerial drones, alternatives would include many different velocities and accelerations in 3D space.
Discount factor: The discount factor is multiplied with future rewards as discovered by the agent in order to dampen their effect on the agent’s choice of action. It makes future rewards worth less than immediate rewards; i.e. it enforces a kind of short-term hedonism on the agent. Often expressed with the lower-case Greek letter gamma: γ. If γ is .8, and there’s a reward of 10 points after 3 time steps, the present value of that reward is 0.8³ x 10. A discount factor of 1 would make future rewards worth just as much as immediate rewards.
Environment: The world through which the agent moves. The environment takes the agent’s current state and action as input, and returns as output the agent’s reward and next state. If you are the agent, the environment could be the laws of physics and the rules of society that process your actions and determine the consequences of them.
State (S): A state is a concrete and immediate situation in which the agent finds itself; i.e. a specific place and moment, an instantaneous configuration that puts the agent in relation to other significant things such as tools, obstacles, enemies or prizes. It can the current situation returned by the environment, or any future situation. Were you ever in the wrong place at the wrong time? That’s a state.
Reward (R): A reward is the feedback by which we measure the success or failure of an agent’s actions. For example, in a video game, when Mario touches a coin, he wins points. From any given state, an agent sends output in the form of actions to the environment, and the environment returns the agent’s new state (which resulted from acting on the previous state) as well as rewards, if there are any. Rewards can be immediate or delayed. They effectively evaluate the agent’s action.
Policy (π): The policy is the strategy that the agent employs to determine the next action based on the current state. It maps states to actions, the actions that promise the highest reward.
Value (V): The expected long-term return with discount, as opposed to the short-term reward R. Vπ(s) is defined as the expected long-term return of the current state under policy π. We discount rewards, or lower their estimated value, the further into the future they occur. See discount factor.
Q-value or action-value (Q): Q-value is similar to Value, except that it takes an extra parameter, the current action a. Qπ(s, a) refers to the long-term return of the current state s, taking action a under policy π. Q maps state-action pairs to rewards. Note the difference between Q and policy.
Trajectory: A sequence of states and actions that influence those states. From the Latin “to throw across.”

for more details read this amazing artice
https://skymind.ai/wiki/deep-reinforcement-learning
