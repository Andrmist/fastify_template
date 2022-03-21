import fastify from 'fastify';
import ajvErrors from 'ajv-errors';
import fastifyAutoload from 'fastify-autoload';
import path = require('path');

fastify({
  logger: { prettyPrint: true },
  ajv: { plugins: [ajvErrors], customOptions: { allErrors: true } }
})
  .register(fastifyAutoload, {
    dir: path.join(__dirname, 'routes'),
    routeParams: true,
    autoHooks: true
  })
  .listen(process.env.PORT || 8080, '0.0.0.0')
  // eslint-disable-next-line no-console
  .then(() => console.log('Server Started'))
  // eslint-disable-next-line no-console
  .catch(console.error);
