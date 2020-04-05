import PersonRespository from '../repositories/person.repository'

const repository = new PersonRespository()

export default class PersonService {
  async getByEmail (email) {
    return repository.findByEmail(email)
  }

  async save (person) {
    const filter = { index: person.index }
    await repository.save(filter, person, true)
  }

  async delete (index = 0) {
    await repository.delete(index)
  }

  async getByFilter (filter) {
    return await repository.find(filter)
  }
}
