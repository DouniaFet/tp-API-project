const mongoose = require("mongoose")//nbniw schema mokhatat jadewal
const Schema = mongoose.Schema

const articleSchema = new Schema({
title:String,
body:String,
numberOfLikes:Number
//ta9der tzidi ay haja t7tajiha f schema 


})
// rah ndiro model fih 2 hwayj ism jadwel w tkhtit jadwel(schema)
const Article =mongoose.model("Article",articleSchema)// f BD semah Articls
// hna nsadro ay haja mn variable li drnahom lfog 
module.exports = Article;