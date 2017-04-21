import config from './config';
import express from 'express';
import contactsRouter from './api/contacts';
import bodyParser from 'body-parser';

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
server.use('/api/contacts', contactsRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
