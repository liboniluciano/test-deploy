import express from 'express';


const routes = express.Router();

routes.get('/ping', (req, res) => {
  return res.json({ message: 'pong' });
})

export default routes;