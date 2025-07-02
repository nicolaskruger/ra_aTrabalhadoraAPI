import fastify from 'fastify'
import { user_conf } from './src/route/user.route'

const server = fastify()

user_conf(server)

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})

export { server }
