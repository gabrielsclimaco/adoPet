import { Router } from 'express'
import Tag from '../models/tag'

export default ({ config, db }) => {
  let router = Router({ mergeParams: true })

  router.param('tag', (req, resp, next, id) => {
    req.tag = Tag.get(id)
    next()
  })

  router.get('/', async ({ invite, params }, res) => {
    try {
      res.json((await invite.getJoin({tags: true})).tags || [])
    } catch (err) {
      res.status(404).json({ error: err.name })
    }
  })

  router.post('/:tag', async ({ invite, tag }, res) => {
    try {
      res.json(await invite.addRelation('tags', await tag))
    } catch (err) {
      res.status(404).json({ error: err.name })
    }
  })

  router.delete('/:tag', async ({ invite, tag }, res) => {
    try {
      res.json(await invite.removeRelation('tags', await tag))
    } catch (err) {
      res.status(404).json({ error: err.name })
    }
  })

  return router
}
