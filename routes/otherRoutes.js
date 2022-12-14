const Router = require("express");
const router = Router();

const otherController = require("../controllers/otherController")

router.get('/test', otherController.getAllProductsTest);

router.post("/api/randoms", otherController.getRandom);

router.get("/info", otherController.getInfo);

// router.get("*", otherController);

module.exports = router;

