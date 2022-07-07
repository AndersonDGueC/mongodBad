const mongoose = require('mongoose');
require('dotenv').config();
const {Schema} = mongoose;
//console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new Schema({
name: {type:String, required:true},
age: Number,
favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);
/*==============create user ===========
*/
/*let userProgrammer = function(done) {
	return new Person({
	name: "FullStack Programmer",
	age: "28",
	favoriteFoods: ["Pizza", "HotDogs"]
});
	if(error) return done(error);
	done(null, result);
};
*/
/*=====================================
*/

/*============create user and save=====
*/
let createAndSavePerson=(done)=>{
	let userProgrammer=new Person({
	name: "FullStack Programmer",
	age: 28,
	favoriteFoods: ["pizza", "hotdogs"]	
	});
	userProgrammer.save((err,data)=>{
	if(err) return console.log(err);
	done(null,data)
	});
}

/*============exports function to server execution======
*/
exports.PersonModel=Person;
exports.createAndSavePerson=createAndSavePerson;
