const notFound = (req, res, next) => {
  const error = new Error(`Error Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const generalHandler = (error, req, res, next) => {
  const statusCode = req.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "🛹" : error.stack
  });
};

module.exports = {
  notFound,
  generalHandler
};
