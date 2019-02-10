import Koa from "koa";
import mount from "koa-mount";
import graphqlHTTP from "koa-graphql";

import schema from "../graphQl/schema";
import initDB from "../config/dbConnect";

initDB();

const app = new Koa();

app.use(
  mount(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true
    })
  )
);

app.listen(process.env.PORT || 3000, () => {
  console.log(`server started on ${process.env.PORT}`);
});

app.on("error", err => {
  log.error("server error", err);
});
