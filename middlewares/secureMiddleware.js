

const secure = (req, res, next) => {
  if (req.params.token && req.params.token.length>3) {
    console.log("dddf")
    next()
  } else {
    return res.sendStatus(403)
  }
}

module.exports = { secure }
