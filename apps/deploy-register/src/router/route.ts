import express from "express";
import { signup } from "../controllers/form";


const router=express.Router()

router.route('/users').post(signup)

export default router