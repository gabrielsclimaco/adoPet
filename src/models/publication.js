import { thinky, type } from '../db'
import env from '../config'

let Publication = thinky.createModel('Publications', {
  id: type.string(),
  title: type.string(),
  description: type.string(),
  uf: type.string(),
  animal: type.string(),
  images: [type.string()]
}, { init: env.db.init })

export default Publication
