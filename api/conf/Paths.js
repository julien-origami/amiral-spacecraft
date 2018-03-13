require('dotenv').config()

const path = process.env.BASIC_PATH

module.exports = {
    intern: {
        path: path,
        code: `${path}code`,
        fleet: `${path}fleet`
    }
}
