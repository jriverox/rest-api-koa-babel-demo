import PersonModel from '../models/person.model'

export default class PersonRepository {
  async findByEmail (email) {
    return await PersonModel.findOne({ email: email })
  }

  async save (person) {
    await PersonModel.create(person)
  }
}
