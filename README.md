Adding the feature to /pair-coding to allow users to collabarate and pair program.

When someone is free and want to pair up to dual code they could go 'online'. They could either A)list what they were working on with 'tags' such as 'node', 'express', 'mongo', 'bonfires', etc so other people could see them or B) search/browse other people.

I feel like this would help stimulate the community and provide a catalyst for learning

https://github.com/FreeCodeCamp/freecodecamp/issues/207



TODO:

	Intial Database Setup
	Query for online users
		get screenhero username
		get time started for being online

	Tags for 
	Apax call to pair-code/online/:username to put user online



API
	pair-coding/getOnline 
		- return Object of online users
	
	pair-coding/setOnline 
		- set current user 
		- set (send Array of) tags 
		- set time online 
		- user comment (title / description of what they are working on in addition to tags)
	
	pair-coding/setOffline
		- remove user - DELETE or POST to pair-code/online
	
	pair-coding/getTags
		- return Array of usable tags

	pair-coding/setPair
		- set Pair is active



Main Path - /pair-coding
API Path - /pair-coding/APIHERE

Global variable names
	??
	??