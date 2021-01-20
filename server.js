const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV != 'production'
const app = next({ dev })

app.prepare()
  .then(() => {
    server.get('*', (req, res) => {
    return handle(req, res)
    })
    
    sever.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})