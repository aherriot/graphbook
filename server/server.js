const express = require('express')
const path = require('path')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')

const db = require('./database')
const servicesLoader = require('./services')

const utils = {
  db
}

// pass db to services
const services = servicesLoader(utils)

const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use(compression())

  // set up some security config to prevent common vulnerabilities
  app.use(helmet())
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', '*.amazonaws.com']
      }
    })
  )
  app.use(helmet.referrerPolicy({ policy: 'same-origin' }))
}

app.use(cors())

for (let serviceName in services) {
  if (serviceName === 'graphql') {
    services[serviceName].applyMiddleware({ app })
  } else {
    app.use(`/${serviceName}`, services[serviceName])
  }
}

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')))
// app.use('/uploads', express.static(path.join(root, 'uploads')))

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})

const port = process.env.PORT || 3001
app.listen(port, () =>
  console.log(
    `Server started successfully on port ${port} with NODE_ENV=${
      process.env.NODE_ENV
    }.`
  )
)
