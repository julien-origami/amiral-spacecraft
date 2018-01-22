import Db from '../conf/Db'

const emptyFunc = () => {}

module.exports = {
    getCode: (token, then = emptyFunc) => {
        return Db.queryFirst('SELECT * FROM TOKENHISTORY WHERE token = $1', [token], then)
    },
    insertCode: (token, then = emptyFunc) => {
        return Db.queryAll('INSERT INTO TOKENHISTORY (token) values ($1)', [token], then)
    },
    updateSpaceCraft: (name, token, then = emptyFunc) => {
        return Db.queryAll('INSERT OR REPLACE INTO FLEETSPACECRAFT (name, lasttoken) values ($1, $2)', [name, token], then)
    },
    getFleetSpaceCraft: (then = emptyFunc) => {
        return Db.queryAll('SELECT * FROM FLEETSPACECRAFT', [], then)
    },
    deleteOldTokens: (date, then = emptyFunc) => {
        return Db.queryAll('DELETE FROM TOKENHISTORY WHERE date < $1', [date], then)
    },
    deleteOldSpaceCraft: (date, then = emptyFunc) => {
        return Db.queryAll('DELETE FROM FLEETSPACECRAFT WHERE lastconnection < $1', [date], then)
    },
    deleteSpaceCraft: (name, then = emptyFunc) => {
        return Db.queryAll('DELETE FROM FLEETSPACECRAFT WHERE name = $1', [name], then)
    }
    /*,
    createMessage: (message, sender = false) => {
        return Db.query('insert into message(content, creationdate, iduser, sender) values($1, $2, $3, $4) RETURNING *', [message.content, message.creationdate, message.iduser, sender])
    }*/
}
