

const secure = (req, res, next) => {
  if (req.query.token) {
    next()
  } else {
    return res.sendStatus(403)
  }
}

module.exports = { secure }
