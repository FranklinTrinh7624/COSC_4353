const router = express.Router();
const userControl = require("../controllers/user");

router.get("/", userControl.gatherAllLogin);
router.post("/login", userControl.validate("loginUser"), userControl.login);

router.post("/register", userControl.validate("createUser"), userControl.registration);

module.exports = router;