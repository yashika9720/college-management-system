// const app = require("./routes/route");
const app = require("./modules")
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
