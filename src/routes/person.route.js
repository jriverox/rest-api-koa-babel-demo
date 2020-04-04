import KoaRouter from 'koa-router'
import PersonController from '../controllers/person.controller'
import personSchemas from '../schemas/person.schemas'
import schemaValidator from '../middleware/schemaValidator'

const controller = new PersonController()
const router = new KoaRouter({ prefix: '/person' })
const byEmailValidator = schemaValidator(personSchemas.byEmail)
const postValidator = schemaValidator(personSchemas.post)

// router.get('person/byEmail', '/:email', byEmailValidator, controller.getByEmail)
router.get('/:email', byEmailValidator, controller.getByEmail)
router.post('/', postValidator, controller.save)
export default router
