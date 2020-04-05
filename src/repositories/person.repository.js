import PersonModel from '../models/person.model'

export default class PersonRepository {
  async findByEmail (email) {
    return await PersonModel.findOne({ email: email })
  }

  async save (filter, person, upsert = true) {
    const options = { upsert: upsert }
    await PersonModel.findOneAndUpdate(filter, person, options)
  }

  async delete (index = 0) {
    await PersonModel.deleteOne({ index: index })
  }

  async find (filter) {
    return await PersonModel.find(filter)
  }
}
