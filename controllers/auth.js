exports.register = (req, res, next) => {
  res.send("Register Route");
};

exports.login = (req, res, next) => {
  res.send("Login Route");
};

exports.forgotPassword = (req, res, next) => {
  res.send("ForgotPassword Route");
};

exports.resetPassword = (req, res, next) => {
  res.send("ResetPassword Route");
};
