const express = require("express");
const searchUsers = require("../controller/searchUsers");
const protect = require("../middleWare/authMiddleware");
const {accessChat,fetchChats, createGroup, renameGroup, addToGroup, removeFromGroup, listout} = require("../controller/accessChat");

const router = express.Router();

 router.route('/').post(protect,accessChat);
 router.route('/').get(protect,fetchChats);
 router.route('/group').post(protect,createGroup);
 router.route('/rename').put(protect,renameGroup);
 router.route('/groupadd').put(protect,addToGroup);
 router.route('/groupremove').put(protect,removeFromGroup);


router.route("/search").get(protect,searchUsers);
router.route("/listout").get(protect,listout);


module.exports=router;