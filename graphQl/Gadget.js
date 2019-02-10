import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

const Gadget = new GraphQLObjectType({
  name: "Gadget",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    release_date: { type: GraphQLString },
    by_company: { type: GraphQLString },
    price: { type: GraphQLString }
  })
});

export default Gadget;
