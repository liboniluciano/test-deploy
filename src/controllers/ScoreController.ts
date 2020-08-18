import { Request, Response } from "express";

import db from "../database/connection";

export default class ScoreController {
  async index(req: Request, res: Response) {
    const trx = await db.transaction();

    try {
      const ranking = await db('users').orderBy('score', 'desc').limit(10);

      await trx.commit();
      return res.json(ranking);

    } catch(err){
      return res.status(400).json({
        error: "Erro inesperado ao buscar a pontuação",
      });
    }
  }

  async create(req: Request, res: Response) {
    const { email, name, score } = req.body;
    const trx = await db.transaction();

    const exists = await db("users").where("email", email);

    try {
      /** Verificando se o e-mail já existe */
      if (exists.length > 0) {
        const { id } = exists[0];
        const scoreBefore = exists[0].score;

        if(score > scoreBefore) {
          await db("users").update({ score }).where("id", id);
        } else {
          return res.json({ message: `Você possui uma pontuação maior ou igual que ${score}, portanto ela não foi atualizada`});
        }

      } else {
        await trx("users").insert({
          name,
          email,
          score,
        });
      }

      await trx.commit();
      return res.status(201).send();

    } catch (err) {
      await trx.rollback();
      return res.status(400).json({
        error: "Erro inesperado ao salvar a pontuação",
      });
    }
  }
}