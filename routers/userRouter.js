const { Router } = require('express')
const pool = require('../db')

const userRouter = Router()

userRouter.post(
  '/',

  async (req, res) => {
    try {
      const body = req.body
      const tokenData = await pool.query(
        'INSERT INTO token (value) VALUES ($1) returning id ',
        [body.tokenValue]
      )
     const tokenID= tokenData.rows[0].id;
     const data = await pool.query(
        'INSERT INTO users (first_name, last_name, age,token_id) VALUES ($1, $2, $3,$4);',
        [body.first_name, body.last_name, body.age,tokenID]
      )
      res.json(data)
    } catch (e) {
      console.log(e)
      res.sendStatus(500)
    }
  }
)


module.exports = userRouter
