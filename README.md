pull-through-end
---

like `pull.onEnd` but as a trhough stream. Calls an async function when the stream is ending.

``` js
const onEnd = require('pull-through-end')

pull(
  source,
  onEnd( (err, cb) =>{
    // err is either null or an Error object
    if (err) console.error(err)
    cb() // arguments to cb are ignored
  }),
  sink
)
```

---
License: MIT
