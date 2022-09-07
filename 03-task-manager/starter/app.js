/** @format */

/**
 * The app.js primary file helps to connect our
 * routes to the database with the help of the express
 * framework
 *
 * It pull the routes from the associated folder
 * It pulls the database model from the associated folder
 * It Holds and async function the takes in two parameters
 * the database URL and the port on which to listen on
 *
 *
 */

// console.log('Task Manager App')
/**
 * Connect the database
 */
// require('./db/connect')
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/notFound");

/**
 * middleware
 * express json
 */
app.use(express.static("./public"));
app.use(express.json());

/**
 * routes
 * plus route structures
 */

app.use("/api/v1/tasks", tasks);

//app.get('/api/v1/tasks')  --get all the tasks
//app.post('/api/v1/tasks')  --create a new task
//app.get('/api/v1/task:id')  --get a single task
//app.patch('/api/v1/task:id')  --update a task
//app.get('/api/v1/task:id')  --delete a task

/**
 * standard server
 */
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
