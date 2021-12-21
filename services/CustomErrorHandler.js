class CustomErrorHandler extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
  static serverError(message = "Internal Server Error") {
    return new CustomErrorHandler(500, message);
  }
}

module.exports = CustomErrorHandler;
