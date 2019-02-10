import mongoose from "mongoose";

import chalk from "chalk";

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

const dbUri =
  "mongodb://cyberbot143:cyberbot143@ds129045.mlab.com:29045/gadgets";

const initDB = () => {
  mongoose.connect(dbUri, { useNewUrlParser: true });

  mongoose.connection.once("open", () => {
    console.log("connected to database....");
  });

  mongoose.connection.on("connected", () => {
    console.log(connected("Mongoose default connection", dbUri));
  });

  // If the connection throws an error
  mongoose.connection.on("error", err => {
    console.log(error("Mongoose default connection error: " + err));
  });

  // When the connection is disconnected
  mongoose.connection.on("disconnected", function() {
    console.log(disconnected("Mongoose default connection disconnected"));
  });

  // If the Node process ends, close the Mongoose connection
  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log(
        termination(
          "Mongoose default connection disconnected through app termination"
        )
      );
      process.exit(0);
    });
  });
};

export default initDB;
