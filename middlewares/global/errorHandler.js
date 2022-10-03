const createError = require("http-errors");

// 404 not found handler
const notFoundHandler = (req, res, next) => {
    next(createError(404, "Page not found!"));
}

// error handler
const errorHandler = (err, req, res, next) => {
    const errData = {
        title: "Error Page",
        message: process.env.NODE_ENV === 'development' ? err : err.message
    };

    res.status(err.status || 500)

    if(res.locals.html){
        res.render("error", errData);
    }
    else{
        res.json(errData);
    }
}

module.exports = {
    notFoundHandler,
    errorHandler
}