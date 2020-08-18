import express from 'express';

import ScoreController from './controllers/ScoreController';

const routes = express.Router();
const scoreController = new ScoreController();

routes.get('/score', scoreController.index);
routes.post('/score', scoreController.create);

routes.get('/ping', (req, res) => {
  return res.json({ message: 'Pong'});
})

export default routes;