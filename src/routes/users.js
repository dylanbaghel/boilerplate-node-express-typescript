"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
    return res.send('Users fetching....');
});
exports["default"] = router;
