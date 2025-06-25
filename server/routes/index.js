const indexRoutes = {
  index: (req,res) => {
    res.json({
      greeting:'Hello World'
    })
  }
}

module.exports = indexRoutes