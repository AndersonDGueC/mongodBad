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

let userProgrammer = function(done) {
	return new Person({
	name: "FullStack Programmer",
	age: "28",
	favoriteFoods: ["Pizza", "HotDogs"]
});
	if(error) return done(error);
	done(null, result);
};
