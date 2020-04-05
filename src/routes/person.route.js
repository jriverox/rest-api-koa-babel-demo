import KoaRouter from 'koa-router'
import PersonController from '../controllers/person.controller'
import personSchemas from '../schemas/person.schemas'
import schemaValidator from '../utils/schema-validator'

const controller = new PersonController()
const router = new KoaRouter({ prefix: '/person' })
const byEmailValidator = schemaValidator({ params: personSchemas.byEmail })
const byQueryValidator = schemaValidator({ params: personSchemas.byQuery })
const postValidator = schemaValidator({ body: personSchemas.post })
const deleteValidator = schemaValidator({ params: personSchemas.deleteByIndex })

router.get('/:email', byEmailValidator, controller.getByEmail)
router.get('/:country/:gender/:eye?', byQueryValidator, controller.getByFiler)
router.post('/', postValidator, controller.save)
router.delete('delete', '/:index', deleteValidator, controller.delete)

export default router
