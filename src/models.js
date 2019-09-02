const path = require("path");
const Sequelize = require("sequelize");

//connection to database
const sequelize = new Sequelize(null, null, null, {
  dialect: "sqlite",
  storage: path.join("tmp", "db.sqlite")
});

//article model
const Article = sequelize.define("article", {
  title: Sequelize.STRING,
  body: Sequelize.TEXT
});

// Create table
Article.sync();

module.exports = {
  Article
};
