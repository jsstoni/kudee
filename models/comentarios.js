'use strict'
/*
* modulo comentarios
*/
module.exports = (mysql) => {
	var selectComentID = (id, callback) => {
		id = id || false
		let query = "SELECT m.*, u.imagen FROM app_mensajes m, app_usuarios u WHERE  m.name = u.usuario AND m.ID_post = ? ORDER BY m.ID_mensaje DESC"
		let startQuery = Promise.resolve(mysql.Consultar(query, id))
		Promise.race([startQuery])
		.then(data => {
			callback(data)
		}).catch(err => console.log(err))
	}

	return {
		selectComentID : selectComentID
	}
}
