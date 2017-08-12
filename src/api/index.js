import { version } from '../../package.json'
import { Router } from 'express'
import PublicationRouter from './publications'

export default ({ config, db }) => {
  let api = Router()

  // Add model routes

  api.use('/publications', PublicationRouter({ config, db }))

  api.get('/', (req, res) => {
    res.json({ version })
  })

  return api
}
