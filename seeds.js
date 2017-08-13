var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Jenny Lake",
        image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg",
        description: "Ennui iPhone messenger bag man bun readymade, church-key hot chicken chambray literally blue bottle disrupt small batch. Poutine migas mlkshk tofu leggings woke, bitters kitsch franzen authentic craft beer chartreuse. Unicorn yuccie PBR&B tilde. Live-edge yr freegan quinoa. Heirloom cloud bread mumblecore helvetica scenester cliche sustainable ethical wayfarers. Iceland thundercats biodiesel, jean shorts tattooed cred tbh vaporware hexagon disrupt single-origin coffee migas hashtag try-hard. Trust fund keytar celiac, cold-pressed bicycle rights hot chicken gastropub wayfarers. Shabby chic squid scenester pop-up, polaroid fanny pack brooklyn air plant letterpress authentic. Pok pok hot chicken humblebrag street art kale chips hashtag disrupt af. Godard irony lyft freegan franzen quinoa synth, kitsch master cleanse hella chambray iceland. Tattooed shabby chic locavore wayfarers XOXO literally butcher vexillologist everyday carry prism listicle cardigan man bun. Actually fam polaroid mustache whatever franzen. Kogi succulents ennui bicycle rights, iPhone chillwave tbh man bun pour-over art party. Edison bulb pour-over yuccie gastropub. Pork belly chillwave palo santo pickled asymmetrical offal food truck plaid beard."
    },
    {
        name: "Cloud's Rest",
        image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg",
        description: "Ennui iPhone messenger bag man bun readymade, church-key hot chicken chambray literally blue bottle disrupt small batch. Poutine migas mlkshk tofu leggings woke, bitters kitsch franzen authentic craft beer chartreuse. Unicorn yuccie PBR&B tilde. Live-edge yr freegan quinoa. Heirloom cloud bread mumblecore helvetica scenester cliche sustainable ethical wayfarers. Iceland thundercats biodiesel, jean shorts tattooed cred tbh vaporware hexagon disrupt single-origin coffee migas hashtag try-hard. Trust fund keytar celiac, cold-pressed bicycle rights hot chicken gastropub wayfarers. Shabby chic squid scenester pop-up, polaroid fanny pack brooklyn air plant letterpress authentic. Pok pok hot chicken humblebrag street art kale chips hashtag disrupt af. Godard irony lyft freegan franzen quinoa synth, kitsch master cleanse hella chambray iceland. Tattooed shabby chic locavore wayfarers XOXO literally butcher vexillologist everyday carry prism listicle cardigan man bun. Actually fam polaroid mustache whatever franzen. Kogi succulents ennui bicycle rights, iPhone chillwave tbh man bun pour-over art party. Edison bulb pour-over yuccie gastropub. Pork belly chillwave palo santo pickled asymmetrical offal food truck plaid beard."
    },
    {
        name: "Desert Mesa  ",
        image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg",
        description: "Ennui iPhone messenger bag man bun readymade, church-key hot chicken chambray literally blue bottle disrupt small batch. Poutine migas mlkshk tofu leggings woke, bitters kitsch franzen authentic craft beer chartreuse. Unicorn yuccie PBR&B tilde. Live-edge yr freegan quinoa. Heirloom cloud bread mumblecore helvetica scenester cliche sustainable ethical wayfarers. Iceland thundercats biodiesel, jean shorts tattooed cred tbh vaporware hexagon disrupt single-origin coffee migas hashtag try-hard. Trust fund keytar celiac, cold-pressed bicycle rights hot chicken gastropub wayfarers. Shabby chic squid scenester pop-up, polaroid fanny pack brooklyn air plant letterpress authentic. Pok pok hot chicken humblebrag street art kale chips hashtag disrupt af. Godard irony lyft freegan franzen quinoa synth, kitsch master cleanse hella chambray iceland. Tattooed shabby chic locavore wayfarers XOXO literally butcher vexillologist everyday carry prism listicle cardigan man bun. Actually fam polaroid mustache whatever franzen. Kogi succulents ennui bicycle rights, iPhone chillwave tbh man bun pour-over art party. Edison bulb pour-over yuccie gastropub. Pork belly chillwave palo santo pickled asymmetrical offal food truck plaid beard."
    }
]

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function (err){
        if(err){
            console.log(err);
        }
        console.log("Removed Campgrounds!");
        // add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                    // create a comment
                    Comment.create({
                        text: "This place is greate but I wish there was internet",
                        author: "Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                        
                    });
                }
            });
        });
    });
    // add a few comments
}



module.exports = seedDB;