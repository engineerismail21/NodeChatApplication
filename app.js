const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

// load custom modules
const {notFoundHandler, errorHandler} = require("./middlewares/global/errorHandler");
const loginRouter = require("./routes/loginRouter");
const userRouter = require("./routes/userRouter");
const inboxRouter = require("./routes/inboxRouter");

const app = express();
dotenv.config();

// database connection
mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Mongo connection successfully!");
})
.catch((err) => {
    console.log("Mongo conn err:", err.message);
});

// request parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// set view engine
app.set("view engine", "ejs");

// set static folders
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use("/", loginRouter);
app.use("/users", userRouter);
app.use("/inbox", inboxRouter);

// 404 not found handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

// server listining
app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Listining on http://${process.env.HOST}:${process.env.PORT}`);
});