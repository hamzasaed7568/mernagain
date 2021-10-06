import express from "express"
import {signinProcess,signupProcess} from "../Controller/userController.js"

const router = express.Router();


router.route("/signin").post(signinProcess)

router.route("/signup").post(signupProcess)



export default router;