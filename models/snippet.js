'use strict'
/*
* modulo snippet
*/
module.exports = (mysql) => {
	var allSnippet = (user, callback) => {
		user = user || false
		let query = "SELECT p.*, u.imagen, count(m.ID_post) as totalMensajes, count(v.IDv_post) as totalVotos FROM app_snippets AS p LEFT JOIN app_mensajes as m ON (m.ID_post = p.hash) LEFT JOIN app_votes as v ON (v.IDv_post = p.hash) LEFT JOIN app_usuarios AS u ON (p.creador = u.usuario) WHERE type = ? GROUP BY p.ID ORDER BY p.ID DESC"
		let startQuery = Promise.resolve(mysql.Consultar(query, user))
		Promise.race([startQuery])
		.then(data => {
			callback(data);
		}).catch(err => console.log(err))
	}

	var insertSnippet = (params) => {
		params = params || {}
	}

	return {
		allSnippet : allSnippet,
		insertSnippet : insertSnippet
	}
}
