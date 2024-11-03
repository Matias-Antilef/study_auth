const  express = require("express")
const { ping } = require("../controllers/pingController")
const { login } = require("../controllers/loginController")
const router = express.Router()

router.get("/ping", ping);

router.post("/login", login)

module.exports = router
