
Exemplo de model
=====

```js
import { thinky, type } from '../db'
import env from '../config'

let Tag = thinky.createModel('Tag', {
  id: type.string(),
  name: type.string(),
  color: type.string()
}, { init: env.db.init })

export default Tag
```
