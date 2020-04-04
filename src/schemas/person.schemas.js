import Joi from '@hapi/joi'

const post = Joi.object()
  .keys({
    index: Joi
      .number()
      .required(),
    age: Joi
      .number()
      .min(10)
      .max(100)
      .required(),
    eyeColor: Joi
      .string()
      .valid('black', 'blue', 'green', 'brown', 'grey')
      .required(),
    name: Joi
      .string()
      .required(),
    gender: Joi
      .string()
      .valid('male', 'female')
      .required(),
    company: Joi
      .string()
      .required(),
    country: Joi
      .string()
      .length(2)
      .uppercase()
      .required(),
    email: Joi
      .string()
      .email()
      .required(),
    phone: Joi
      .string(),
    address: Joi
      .string()
  })

const byEmail = Joi.object()
  .keys({
    email: Joi
      .string()
      .email()
      .required()
  })

const deleteByIndex = Joi.object()
  .keys({
    index: Joi
      .number()
      .min(1)
      .required()
  })

const byQuery = Joi.object()
  .keys({
    country: Joi
      .string()
      .length(2)
      .uppercase()
      .required(),
    gender: Joi
      .string()
      .valid('male', 'female'),
    eye: Joi
      .string()
      .valid('black', 'blue', 'green', 'brown', 'grey')
  })

export default {
  post,
  byEmail,
  deleteByIndex,
  byQuery
}
