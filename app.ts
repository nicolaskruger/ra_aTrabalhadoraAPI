
import * as path from 'node:path';
import AutoLoad from '@fastify/autoload';
import { FastifyInstance } from 'fastify';

const options = {}

export default async function(fastify: FastifyInstance, opts: any) {

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}

export { options }
