import Joi from '@hapi/joi'

const personSchema = Joi.object().keys({
  index: Joi.number().required(),
  age: Joi.number().min(10).max(100).required(),
  eyeColor: Joi.string().valid('black', 'blue', 'green', 'brown', 'grey').required(),
  name: Joi.string().required(),
  gender: Joi.string().valid('male', 'female'),
  company: Joi.string().required(),
  country: Joi.string().length(2).uppercase(),
  email: Joi.string().email(),
  phone: Joi.string(),
  address: Joi.string()

})

export default personSchema
