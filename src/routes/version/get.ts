import { FastifyInstance } from 'fastify';

export default async (server: FastifyInstance) =>
  server.get(
    '/',
    async (req, reply) =>
      await reply.send({
        version: '1.0.0'
      })
  );
