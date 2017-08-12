import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import * as db from './db'
import config from './config'
import api from './api'

const port = process.env.PORT || config.port || 3000

let app = express()

app.use(bodyParser.json({
  limit: '5mb'
}))

app.use(morgan('dev'))

db.init()
.then(db => {
  app.use('/api', api({ config, db }))
  app.listen(port)
  console.log('Server started on', port, '!')
})

export default app
