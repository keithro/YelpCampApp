var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Campground = require("../models/campground");

// Root Route
router.get("/", function(req, res){
	res.render("landing");
});

// Show Register Form Route
router.get("/register", function(req, res) {
	res.render("register", {page: 'register'});
});

// handle sign up logic
router.post("/register", function(req, res) {
	var newUser = new User({
		username: req.body.username,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		avatar: req.body.avatar
	});
	
	if( req.body.adminCode === 'topsecret321code') {
		newUser.isAdmin = true; //in iN app use if === her email (which will be user)
	}
	User.register(newUser, req.body.password, function(err, user){
		if(err){
			return res.render("register", {"error": err.message});
			/* also could have changed 
			return res.render("register"); 
			to 
			return res.redirect("/register");
			and left flash message on previous line */
		}
		passport.authenticate("local")(req, res, function(){
			req.flash("success", "Welcome to YelpCamp " + user.username);
			res.redirect("/campgrounds");
		});
	});
});

// show login form
router.get("/login", function(req, res) {
	res.render("login", {page: 'login'});
});

// handle login logic
router.post("/login", passport.authenticate("local", 
	{
		successRedirect: "/campgrounds",
		failureRedirect: "/login",
		failureFlash: "Invalid username or password"
	}), function(req, res) {
});

// logout route
router.get("/logout", function(req, res) {
	req.logout();
	req.flash("success", "Logged you out!");
	res.redirect("/campgrounds");
});

// User Profile Routes
router.get("/users/:id", function(req, res) {
	User.findById(req.params.id, function(err, foundUser) {
		if(err) {
			req.flash("error", "Something went wrong.");
			res.redirect("/");
		}
		Campground.find().where('author.id').equals(foundUser._id).exec(function(err, campgrounds) {
			if(err) {
				req.flash("error", "Something went wrong.");
				res.redirect("/");
			}
			res.render("users/show", {user: foundUser, campgrounds: campgrounds});
		})
	});
});


module.exports = router;