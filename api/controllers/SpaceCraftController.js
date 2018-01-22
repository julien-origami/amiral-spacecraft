'use-strict'
import Paths from '../conf/Paths'
import DbController from './DbController'
import Boom from 'boom'
import fetch from 'node-fetch'
import server from '../../index'
import moment from 'moment'

require('dotenv').config()

const SpaceCraftController = {

    getNewCode: (request, reply) => {
        const generatedCode = SpaceCraftController.generatedCode
        const spaceCraft = `${request.info.remoteAddress}:${request.info.remotePort}`
        DbController.getCode(request.payload.code, row => {
            if (row) {
                DbController.updateSpaceCraft(spaceCraft, generatedCode, () => {
                    reply({
                        newCode: generatedCode,
                        idFleet: process.env.FLEET_ID
                    })
                    SpaceCraftController.shareStatus()
                })
            } else {
                DbController.deleteSpaceCraft(spaceCraft, () => {
                    const badRequest = Boom.badRequest()
                    badRequest.output.payload = { idErr: 3 }
                    reply(badRequest)
                    SpaceCraftController.shareStatus()
                })
            }
        })
    },

    getFleet: (request, reply) => {
        DbController.getFleetSpaceCraft(rows => {
            reply({
                fleet: rows,
                token: SpaceCraftController.generatedCode
            })
        })
    },

    shareStatus: generatedCode => {
        DbController.getFleetSpaceCraft(rows => {
            SpaceCraftController.broadcast({
                fleet: rows,
                token: SpaceCraftController.generatedCode
            })
        })
    },

    codeGenerator: () => {
        const generateCode = () => {
            const generatedCode = `${Date.now()*43}`.substr(3, 8).split('').reverse().join('')
            DbController.insertCode(generatedCode, () => {
                console.log(generatedCode)
                SpaceCraftController.generatedCode = generatedCode
                const oldDate = moment().subtract(1.5, 'hours').format('YYYY-MM-DD HH:mm:ss')
                console.log(oldDate)
                DbController.deleteOldTokens(oldDate)
                DbController.deleteOldSpaceCraft(oldDate)
                SpaceCraftController.shareStatus()
            })
        }
        generateCode()
        setInterval(() => {
            generateCode()
        }, 5*60*1000)
    },

    generatedCode: '',

    boradcast: data => console.log('Broadcast not ready =======> ', data)

}

export default SpaceCraftController
