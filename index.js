const express = require('express');
const mysql = require('mysql2');
const app = express();
const path = require('path');
const db = require("./models");
const { Movie, Sequelize } = require('./models');
const { Actor, Junction } = require('./models');
const Op = Sequelize.Op
const { QueryTypes } = require('sequelize');

app.get("/insertmovie", (req, res) => {
    Movie.create({
        name: "John Wick"
    }).catch((err) => {
        if (err) {
            console.log(err);
        }
    })
    res.send("inserted");
})

app.get("/insertactor", (req, res) => {
    Actor.create({
        name: "Daniel Radcliff"
    }).catch((err) => {
        if (err) {
            console.log(err);
        }
    })
    res.send("inserted");
})

app.get("/insertjunction", (req, res) => {
    Junction.create({
        "movieId": 6,
        "actorId": 3
    }).catch((err) => {
        if (err) {
            console.log(err);
        }
    })
    res.send("inserted");
})


// eager loding
app.get("/select", (req, res) => {
    Junction.findAll({
        attributes: ['id'],
        include: [{
            model: db.Movie,
            attributes: ['name'],
        }, {
            model: db.Actor,
            attributes: ['name'],
        }],
    }).then((junction) => {
        res.send(junction);
    }).catch((err) => {
        if (err) {
            console.log(err);
        }
    })
})


app.use(express.json());
Actor.belongsToMany(Actor,{ through: Movie,as: "to", foreignKey: "id" });
Actor.belongsToMany(Actor, { through: Movie, as: "from", foreignKey: "id" });

db.sequelize.sync().then((req) => {
    app.listen(5000, () => {
        console.log("App is listening to port 5000");
    });
});