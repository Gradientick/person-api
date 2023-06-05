import express from "express";
import personController from "../controllers/personController.js";
import bcrypt from "bcrypt";

const userRouter = express.Router();

// userRouter.get("/", personController.getPersons);
// userRouter.get("/:id", personController.getPerson);
userRouter.post("/", personController.createPerson);
// userRouter.put("/:id", personController.updatePerson);
// userRouter.delete("/:id", personController.deletePerson);

export default userRouter;
