module.exports = async function (context, req) {
  const name = req.query.name || "User";

  context.res = {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      message: `Hello ${name}, welcome to wealth management!`,
      project: "Azure Function App demo"
    }
  };
};
