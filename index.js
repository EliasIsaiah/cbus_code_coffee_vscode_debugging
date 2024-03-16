import express from "express";
import bodyParser from "body-parser";

const cars = [
  { id: 1, firstName: "Lightning McQueen", lastName: "smith", color: "red" },
  {
    id: 2,
    firstName: "tow",
    lastName: "mater",
    color: "brown",
  },
];

const app = express();

app.use(bodyParser.json());

app.get("/car/:id", (req, res) => {
  console.log(req.body);
  searchResult = cars.find((car) => (car.id = req.params.id));
  res.status(200).send(searchResult);
});

app.get("/cars", (req, res) => {
  res.send({ cars: cars });
});

app.listen(3000, () => {
  console.log("app is listening on port 3000 👂");
});
