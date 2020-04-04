import PersonRespository from '../repositories/person.repository'

const repository = new PersonRespository()

export default class PersonService {
  async getByEmail (email) {
    return repository.findByEmail(email)
  }

  async save (person) {
    await repository.save(person)
  }
}
