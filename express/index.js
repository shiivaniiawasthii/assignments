// const express = require("express");
// const app = express();

// app.get("/getAs", function (req, res) {
//   const userName = req.headers.name;
//   const password = req.headers.password;
//   const id = req?.query?.id;
//   console.log(req, "req");
//   console.log(req.query.id, "req");

//   if (userName === "shivani" && password === "shivani") {
//     if (id == 1) {
//       res.status(200).json({
//         success: true,
//         message: "Authenticated",
//       });
//     } else {
//       res.status(404).json({
//         success: true,
//         message: "id not found",
//       });
//     }
//   } else {
//     res.status(500).json({
//       success: false,
//       message: " Not Authenticated",
//     });
//   }
// });
// app.listen(3000);

// ------------------------------------------------------------------

const express = require("express");
const zod = require("zod");
const schema = zod.array(zod.number());
const app = express();
app.use(express.json());
app.post("/abc", (req, res) => {
  const arr = req.body.arr;
  const response = schema.safeParse(arr);

  console.log(response, "array");
  res.send(response);
});

// -------------global catches
// app.use(function (err, req, res, next) {
//   res.json({
//     message: "something went wrong",
//     status: 500,
//   });
// });
app.listen(3000);
