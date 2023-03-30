const express = require('express')
const app = express()
const userRouter = require('./routers/userRouter')
const pool = require('./db')

const { secure } = require('./middlewares/secureMiddleware')

app.use(express.json())

// app.use(secure);
console.log('ddd')

app.get('/verify/:token', async (req, res) => {
  try {
    const data = await pool.query(
      'SELECT * from users JOIN token ON token_id=token.id WHERE token.value=$1',
      [req.params.token]
    )
    if (data.rows.length > 0) {
      res.send('token valid');
    } else {
      res.status(401).send('invalid token');
    }
  } catch (e) {
    console.log(e)
    res.status(500).send('error!');
  }
})

app.use('/users', userRouter)

module.exports = app
