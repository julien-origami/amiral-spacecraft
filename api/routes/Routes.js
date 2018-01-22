import Joi from 'joi'
import path from 'path'
import SpaceCraftController from '../controllers/SpaceCraftController.js'
import Paths from '../conf/Paths'

module.exports = server => {

    server.route({
        method: 'PUT',
        path: Paths.intern.code,
        config: {
            tags: ['api'],
            validate: {
                payload: {
                    code: Joi.string().regex(/^[0-9]+$/, 'numbers').length(8).required().description('code')
                },
                failAction: (request, reply, source, error) => {
                    reply({
                        idErr: request.payload && request.payload.code ? 2 : 1
                    })
                }
            },
            handler: SpaceCraftController.getNewCode
        }
    })

    server.route({
        method: 'GET',
        path: Paths.intern.fleet,
        config: {
            tags: ['api'],
            handler: SpaceCraftController.getFleet
        }
    })
}
