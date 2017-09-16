<!--installing mongoDB:-->
<!--https://community.c9.io/t/setting-up-mongodb/1717-->
$ sudo apt-get install -y mongodb-org
$ mkdir data
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
$ chmod a+x mongod

<!--CAN NOW USE CURRENT VERSION OF MONGOOSE AND USE THE CODE BELOW TO CONNECT AND FIX ERRORS-->
// replaces the deprecated mongoose.Promise library with the JavaScript global.Promise library
mongoose.Promise = global.Promise;
// add useMongoClient:true to fix the open() =>v4.11.0 deprecation warning
mongoose.connect("mongodb://localhost/db_name", {useMongoClient: true});


<!--I DON'T THINK YOU NEED THIS NOW-->
// added an error catcher
mongoose.connect("mongodb://localhost/sample_blog", {
    useMongoClient: true
}).then(function () {
    console.log('MongoDB has been connected');
}).catch(function (err) {
    console.log('Error while trying to connect with MongoDB');
    console.log(err);
});


may have accidentally created new heroku app?
https://git.heroku.com/thawing-tor-15991.git