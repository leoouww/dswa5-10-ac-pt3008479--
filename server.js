var http = require('http');
var express = require('express');
var app = express();
require('./config/express')(app);
require('./config/passport')();
require('./config/database')('mongodb://localhost/contatooh');
http.createServer(app).listen(app.get('port'), function(){
console.log('Express Server escutando na porta ' + app.get('port'));

});

var GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
    var app = require('./config/express')();
    const url = 'mongodb://dswa5:dswa5@clusterleonardo-shard-00-00.3fhkc.mongodb.net:27017,clusterleonardo-shard-00-01.3fhkc.mongodb.net:27017,clusterleonardo-shard-00-02.3fhkc.mongodb.net:27017/ifsp?replicaSet=atlas-4go5n9-shard-0&ssl=true&authSource=admin';
    require('./config/database.js')(url);
    http.createServer(app).listen(app.get('port'), function() {
        console.log('Express Server escutando na porta ' + app.get('port'));    
    });
  }
));
