const upload = require("../middleware/upload")


exports.uploadFile = async (req, res) => {
  try {
    await upload(req, res)

    console.log(req.file)
    if (req.file == undefined) {
      return res.send(`You must select a file.`)
    }

  } catch (e) {
    console.log(e)
    return res.send(`Error when trying upload image: ${e}`)
  }
}
