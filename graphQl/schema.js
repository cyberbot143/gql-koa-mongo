const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require("graphql");
import gadgetGraphQLType from "./Gadget";
import Gadget from "../models/gadget";
import Mutations from "./mutations";

const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    gadgets: {
      type: new GraphQLList(gadgetGraphQLType),
      args: {},
      resolve() {
        return Gadget.find({});
      }
    },
    gadget: {
      type: gadgetGraphQLType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args, ctx) {
        console.log(`parent => ${parent}, args => ${args}, ctx => ${ctx}`);
        return Gadget.findById(args.id);
      }
    }
  }
});

const rootSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});

export default rootSchema;
