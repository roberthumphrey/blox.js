const request = require('request');
const http = require('http')

module.exports = {
    // USERS
    getUser(userId) {
        var options = {
            uri: `https://api.roblox.com/users/${userId}`,
            method: 'GET'
        }
		request(options, (error, response, body) => {
        	console.log(body);
    	});
    },
    getUserByUsername(username) {
        var options = {
            uri: `https://api.roblox.com/users/get-by-username?username=${username}`,
            method: 'GET',
        }
        request(options, (error, response, body) => {
            console.log(body)
        });
    },
    canManage(username, assetId) {
        var options = {
            uri: `https://api.roblox.com/users/${userId}/canmanage/${assetId}`,
            method: 'GET',
        }
        request(options, (error, response, body) => {
            console.log(body);
        });
    },



    // ASSETS

    // CURRENCY

    // FRIENDS
    
    // GROUPS

    setRank(groupId, roleSetId, userId) {
        var options = {
            uri: `www.roblox.com/groups/api/change-member-rank?groupId=${groupId}&newRoleSetId=${roleSetId}&targetUserId=${userId}`,
            method: 'POST',
            json: {
                "groupId": groupId,
                "newRoleSetId": roleSetId,
                "targetUserId": userId
            }
        }
        request(options, (error, response, body) => {
            console.log(`User Promoted:\n     User: ${userId}\n     Group: ${groupId}\n     Rank: ${roleSetId}`);
        });
    },
    
    // // MARKETPLACE
    
    // // OWNERSHIP

    // // LOGIN

    login(username, password) {
        var options = {
            uri: 'https://www.roblox.com/NewLogin',
            method: 'POST',
            json: {
                "username": username,
                "password": password
            }
        }
        request(options, (error, response, body) => {
            console.log(`Logged in as ${username}!`);
            if (error) console.log(error);
        });
    }
}