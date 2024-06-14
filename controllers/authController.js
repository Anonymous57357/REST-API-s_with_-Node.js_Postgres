const signUp = async (req, res) => {
  res.status(201).json({
    message: "signup route",
    status: "Pass",
  });
};

module.exports = { signUp };

// const signUp = async () => {
//   return res.status(201).json({
//     message: "signup route",
//     status: "Pass",
//   });
// };
