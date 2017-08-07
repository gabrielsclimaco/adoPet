import { Router } from 'express'
import Invite from '../models/invite'
import { parseError } from './helper'

export default ({ config, db }) => {
  let router = Router()

  router.param('invite', (req, resp, next, id) => {
    req.invite = Invite.get(id)
    next()
  })

  router.get('/', ({ params }, res) => {
    Invite.getJoin({tags: true}).run()
      .then(data => res.json(data))
      .catch(parseError(err => res.status(404).json(err)))
  })

  router.get('/:invite', ({ invite }, res) => {
    invite.getJoin({tags: true}).then(data => res.json(data))
      .catch(parseError(err => res.status(404).json(err)))
  })

  router.post('/', ({ body }, res) => {
    Invite.save(body.invite)
      .then(data => res.json(data))
      .catch(parseError(err => res.status(404).json(err)))
  })

  router.put('/:invite', ({ invite, body }, res) => {
    invite.then(doc => doc.merge(body.invite).save())
      .then(data => res.json(data))
      .catch(parseError(err => res.status(404).json(err)))
  })

  router.delete('/:invite', ({ invite }, res) => {
    invite.then(doc => doc.delete())
      .then(data => res.json(data))
      .catch(parseError(err => res.status(404).json(err)))
  })

  return router
}
