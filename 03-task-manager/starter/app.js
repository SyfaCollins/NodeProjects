/** @format */

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


/**
 * middleware
 * express json
 */
app.use(express.json());

/**
 * routes
 * plus route structures
 */

app.get("/api", (req, res) => {
  res.send("Task Manager");
  // res.end();
});

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
