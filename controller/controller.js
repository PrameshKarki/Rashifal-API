const scrapRashifal = require("../helpers/scrap_rashifal");

const CustomErrorHandler = require("../services/CustomErrorHandler");

exports.getHoroscope = async (req, res, next) => {
  try {
    const rashifal = await scrapRashifal();
    res.status(200).json(rashifal);
  } catch (error) {
    console.log(error);
    return next(CustomErrorHandler.serverError());
  }
};
