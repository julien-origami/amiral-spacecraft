'use strict'
require('dotenv').config()

const path = process.env.BASIC_PATH

module.exports = {
    extern: {
        /*gifService: {
            getRandomGif: (tag) => {
                return `http://192.168.43.20:4322/api/gif/random/${tag}`
            }
        }*/
    },
    intern: {
        path: path,
        code: `${path}code`,
        fleet: `${path}fleet`
        /*message: `${path}message/{id}`*/
    }
}
