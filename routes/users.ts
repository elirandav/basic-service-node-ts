import {NextFunction, Request, Response} from "express";

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/version', function(req:Request, res:Response, next:NextFunction) {
  res.send(require('../package.json').version);
});

module.exports = router;
