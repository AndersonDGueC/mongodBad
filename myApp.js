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

//==================create many record with same model======
let arrayPeople=[
{
name: 'edwar', age:29, favoriteFoods:['vine','chicken']
},
{
name: 'javier', age:15, favoriteFoods:['meat', 'vegetable']
},
{
name: 'esteban', age:32, favoriteFoods:['jamon', 'cheese']
}];

let createManyPeople=(arrayPeople, done)=>{
	Person.create(arrayPeople,(err,people)=>{
	if(err) return console.log(err);
	done(null,people);
});
};
//use function find to name with model.find

let findPersonByName=(personName, done)=>{
	Person.find({name:personName},(err,personFound)=>{
	if(err) return console.log(err)
	done(null,personFound);
	});
};

// use function findOne to food with model.findOne
let findFoodByName=(food, done)=>{
	Person.findOne({favoriteFoods:food},(err,respFood)=>{
	if(err) return console.log(err);
	done(null,respFood);
	})
}
//use funcion model.findId
let findPersonById=(personId, done)=>{
	Person.findById(personId,(err,respId)=>{
	if(err) return console.log(err);
	done(null,respId);
	})
}

/*============exports function to server execution======
*/
exports.PersonModel=Person;
exports.createAndSavePerson=createAndSavePerson;
exports.createManyPeople=createManyPeople;
exports.findPersonByName=findPersonByName;
exports.findFoodByName=findFoodByName;
exports.findPersonById=findPersonById;
