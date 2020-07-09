const express = require("express")
const routes = express.Router()
const cats = require("./cats-data")


routes.get("/pets", (req, res) => {
    res.render("pets/index.njk", { cats })
})


module.exports = routes
