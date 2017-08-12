import { Router } from 'express'
import Publication from '../models/publication'

export default ({ config, db }) => {
  let router = Router()

  router.param('publication', (req, resp, next, id) => {
    req.publication = Publication.get(id)
    next()
  })

  router.get('/', async ({ params }, res) => {
    try {
      res.json(await Publication.run())
    } catch (err) {
      res.status(404).json({ error: err.name })
    }
  })

  router.get('/:publication', async ({ publication }, res) => {
    try {
      res.json(await publication)
    } catch (err) {
      res.status(404).json({ error: err.name })
    }
  })

  router.post('/', async ({ body }, res) => {
    try {
      res.json(await Publication.save(body.publication))
    } catch (err) {
      res.status(404).json({ error: err.name })
    }
  })

  router.put('/:publication', async ({ publication, body }, res) => {
    try {
      let doc = await publication
      res.json(await doc.merge(body.publication).save())
    } catch (err) {
      res.status(404).json({ error: err.name })
    }
  })

  router.delete('/:publication', async ({ publication }, res) => {
    try {
      res.json(await publication.delete())
    } catch (err) {
      res.status(404).json({ error: err.name })
    }
  })

  return router
}
