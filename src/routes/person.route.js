import KoaRouter from 'koa-router'
import PersonController from '../controllers/person.controller'
import personSchema from '../schemas/person.schema'
import validatorSchema from '../middleware/schemaValidator'

const controller = new PersonController()
const router = new KoaRouter({ prefix: '/person' })
const fx = validatorSchema(personSchema)

router.get('person/byEmail', '/:email', controller.getByEmail)
router.post('/', fx, controller.save)
export default router
