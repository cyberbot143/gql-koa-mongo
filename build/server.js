"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _koaMount = _interopRequireDefault(require("koa-mount"));

var _koaGraphql = _interopRequireDefault(require("koa-graphql"));

var _schema = _interopRequireDefault(require("../graphQl/schema"));

var _dbConnect = _interopRequireDefault(require("../config/dbConnect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dbConnect.default)();
var app = new _koa.default();
app.use((0, _koaMount.default)("/graphql", (0, _koaGraphql.default)({
  schema: _schema.default,
  graphiql: true
})));
app.listen(process.env.PORT || 3000, function () {
  console.log("server started on ".concat(process.env.PORT));
});
app.on("error", function (err) {
  log.error("server error", err);
});
//# sourceMappingURL=server.js.map