const express = require('express');
const path = require('path');
const app = express();

const reservations = [];
const waitlist = [];

app.get("/", (req, res) => {
	res.redirect("/home");
});


app.get("/home", (req, res) => {
	res.sendFile(path.join(__dirname,"home.html"));
});

app.get("/tables", (req, res) => {
	res.sendFile(path.join(__dirname,"tables.html"));
});

app.get("/reserve", (req, res) => {
	res.sendFile(path.join(__dirname,"reserve.html"));
});

app.post("/reserve", (req, res) => {
	reservations.push(req.body);
});



app.listen(3000, () => {
	console.log("Listening on port 3000");
});
