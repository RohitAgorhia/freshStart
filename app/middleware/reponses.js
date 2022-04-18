exports.sendSqlQueryFailResponse = function sendSqlQueryFailResponse(res, err) {
    res.status(200).send({
      status: "fail",
      message: err.message || "Something went wrong,Please try again!"
    });
}

exports.sendSuccessfullyFetcehdResponse =  function sendSuccessfullyFetcehdResponse(res, data, status, msg) {
    res.status(200).send({
      data: data,
      status: status,
      message: msg
    });
}