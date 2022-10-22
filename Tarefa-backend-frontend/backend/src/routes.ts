import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import PostController from "./controllers/PostController";
import AccountController from "./controllers/AccountController";

const routes = Router();
const upload = multer(uploadConfig);

routes.post("/account", AccountController.create);
routes.get("/account", AccountController.index);
routes.get("/accounts/:id", AccountController.show);
routes.delete("/account/:id", AccountController.delete);

routes.get("/posts", PostController.index);
routes.get("/posts/:id", PostController.show);
routes.post("/posts", upload.array("images"), PostController.create);


export default routes;