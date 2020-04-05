import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import json from 'koa-json'
import logger from 'koa-logger'
import yenv from 'yenv'
import mongoose from 'mongoose'
import routes from './routes'
import docs from './utils/api-docs'
import apiError from './utils/api-error'

const { PORT, MONGODB_URL } = yenv()
const server = new Koa()

server
  .use(bodyParser())
  .use(json())
  .use(logger())
  .use(apiError)
  .use(docs)

routes.map(r => {
  server
    .use(r.routes())
    .use(r.allowedMethods())
})

mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`)
    })
  })
  .catch(err => console.error(err))
