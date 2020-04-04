import PersonService from '../services/person.service'
import _ from 'lodash'
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

  async delete (ctx) {
    try {
      const index = parseInt(ctx.params.index)
      await service.delete(index)
      ctx.status = 200
      ctx.body = {
        status: 'success'
      }
    } catch (error) {
      ctx.throw(500, `An error has ocurred: ${error}`)
    }
  }

  async getByFiler (ctx) {
    const filter = { country: ctx.params.country }
    if (ctx.query.eye) {
      filter.eyeColor = ctx.query.eye
    }
    if (ctx.query.gender) {
      filter.gender = ctx.query.gender
    }
    ctx.body = await service.getByFilter(filter)
  }
}
