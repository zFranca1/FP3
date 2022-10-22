import express from "express";
<<<<<<< HEAD
import { getRepository } from "typeorm";

import "./database/connection";
import User from "./models/User";

const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
  console.log(req.body);
  
  const { nome, salario } = req.body;

  const userRepository = getRepository(User);

  const user = userRepository.create({
    nome,
    salario,
  });

  await userRepository.save(user);

  return res.status(201).json(user);
});

app.listen(3333);
=======
import { AppDataSource } from "./data-source";
var cors = require('cors')
import routes from "./routes";

const PORT = process.env.PORT || 3333;

const app = express();

var corsOptions = {
  origin: 'http://localhost:8100',
  optionsSuccessStatus: 200 
}
app.use(cors());
app.use(express.json());

app.use(routes);

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT as number, () =>
      console.log(`Listening on all interfaces:${PORT}`)
    );
  })
  .catch((error) => console.log(error));


>>>>>>> 5c0f297 (a)
