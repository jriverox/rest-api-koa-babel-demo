import util from 'util'
const schemaValidator = (schema) => {
  return async (ctx, next) => {
    const method = ctx.request.method
    const data = method === 'GET' ? JSON.parse(JSON.stringify(ctx.request.query)) : ctx.request.body
    console.log(`schemaValidator method: ${method} data: ${util.inspect(data)}`)
    const { error } = schema.validate(data)
    const valid = error == null
    if (valid) {
      await next()
    } else {
      const { details } = error
      const message = details.map(i => i.message).join(',')
      ctx.throw(message, 422)
    }
  }
}

export default schemaValidator
