import fastify from 'fastify'

import { env } from './env'
import { ZodError } from 'zod'

export const app = fastify()

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation error.',
      issues: error.format(),
    })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Here we should log to an external service such as Sentry/DataDog/NewRelic
  }

  return reply.status(500).send({
    message: 'Internal server error.',
  })
})
