const Hapi = require("hapi");
const { configureRoutes } = require("./routes");

const server = Hapi.server({
  host: "localhost",
  port: 3000
});

const main = async () => {
  await configureRoutes(server);
  await server.start();

  return server;
};

main()
  .then(server => console.log("server running on", server.info.uri))
  .catch(err => console.log(err));

// server.route({
//   method: "GET",
//   path: "/",
//   handler: () => {
// return Article.findAll()
// return Article.create({
//   title: "Welcome to my blog",
//   body: "The happiest place on earth"
// });
// return Article.findAll({
//   where: {
//     id: 1
//   }
// });
// return Article.update(
//   { title: "Learning Hapi", body: `JSON API's a breeze.` },
//   { where: { id: 1 } }
// );
// return Article.findAll();
// return Article.destroy({ where: { id: 1 } });
// return Article.findAll();
//   }
// });
