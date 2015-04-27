var https = require('https');

function getOnlineSlackUsers() {
  https.get('https://slack.com/api/users.list?token=xoxp-4381818805-4397132349-4609633348-595a57', function(res) {
    res.setEncoding('utf-8');
    var obj = '';

    res.on('data', function(data) {
      obj += data;
    });

    var members = [];
    res.on('end', function() {
      var responseObject = JSON.parse(obj);
      var myObj = {};
      myObj = responseObject;
      myObj = myObj.members;
      var person = {};
      myObj.forEach(function(ele) {
        if (!ele.deleted) {
          person = {
            name: ele.name,
            id: ele.id
          };
          members.push(person);
        }

      });

      return members;
      
    });

    
  });     
};

var users = getOnlineSlackUsers();
