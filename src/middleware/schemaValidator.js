
const schemaValidator = (schema) => {
  console.log('schemaValidator', schema)
  return async (ctx, next) => {
    const { error } = schema.validate(ctx.request.body)
    const valid = error == null
    if (valid) {
      console.log('schemaValidator valido', next)
      await next()
    } else {
      const { details } = error
      const message = details.map(i => i.message).join(',')
      console.log('schemaValidator no valido', message)
      ctx.throw('body parse error', 422)
    }
  }
}

export default schemaValidator
