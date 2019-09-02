const { Article } = require("./models");

exports.configureRoutes = server => {
  return server.route([
    {
      method: "GET",
      path: "/articles",
      handler: () => {
        return Article.findAll();
      }
    },
    {
      method: "GET",
      path: "/articles/{id}",
      handler: request => {
        return Article.findAll({
          where: {
            id: request.params.id
          }
        });
      }
    },
    {
      method: "POST",
      path: "/articles",
      handler: request => {
        return Article.create(request.payload);
      }
    },
    {
      method: "DELETE",
      path: "/articles/{id}",
      handler: request => {
        return Article.destroy({
          where: {
            id: request.params.id
          }
        });
      }
    }
  ]);
};
