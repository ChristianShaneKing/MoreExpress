var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Brock"},
		{title: "I need more pokeballs", author: "Misty"},
		{title: "Pikachu bit me!", author: "Ash"}
	];
	
	res.render("posts.ejs", {posts: posts});
});

app.listen(3000, function(){
	console.log("The server has started!");
});