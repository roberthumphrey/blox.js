blox.js
=========
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)


## About
blox.js is a library that is built to connect an application to the [Roblox](https://www.roblox.com/) [API](https://api.roblox.com/docs)

## Installation
`npm install blox.js`

## Example Usage
Here's an example of a promotion bot.

```js
const blox = require('blox.js');

blox.login('username', 'password');

blox.setRank(2809456, 19475061, 42170032);
```

The output, if done correctly, should be something like this:
```json
{
	"LoginMessage": "Logged in as EternaIEmpire!",
	"UPM": "User Promoted!",
	"User": 42170032,
	"Group": 2809456,
	"Rank": 19475061
```