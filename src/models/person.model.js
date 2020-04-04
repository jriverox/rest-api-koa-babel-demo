import mongoose from 'mongoose'
const schema = new mongoose.Schema({
  index: Number,
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  company: String,
  country: String,
  email: String,
  phone: String,
  address: String
},
{
  collection: 'people'
})

const Person = mongoose.model('Person', schema)
export default Person
