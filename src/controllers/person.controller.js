import PersonService from '../services/person.service'
const service = new PersonService()

export default class PersonController {
  async getByEmail (ctx) {
    const email = ctx.params.email
    const data = await service.getByEmail(email)
    if (data) {
      ctx.body = data
    } else {
      ctx.throw(404, `There are no people with email: ${email}`)
    }
  }

  async save (ctx) {
    console.log('controller.save')
    try {
      const data = ctx.request.body
      console.log(data)
      await service.save(data)
      ctx.status = 201
      ctx.body = {
        status: 'success',
        data: data
      }
    } catch (error) {
      ctx.throw(500, `An error has ocurred: ${error}`)
    }
  }
}
