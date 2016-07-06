'use strict'
const mysql = require('mysql');

module.exports = (option) => {
	option = option || {}

	var conectar = mysql.createPool({
		connectionLimit: 100,
		host: option.host,
		user: option.user,
		password: option.password,
		database: option.database
	})
/**
* @param sQuery : query sql consulta string
* @param arg : argumentos valores para insertar
*/
	var Consultar = (sQuery, arg) => {
		arg = arg || false;
		return new Promise((success, fail) => {
			conectar.getConnection((errConnection, connect) => {
				if (errConnection) {
					return fail(errConnection)
				}
				connect.release()
				connect.query(sQuery, arg, (err, data) => (err ? fail(err) : success(data)))
			})
		})
	}

	return {
		Consultar: Consultar
	}
}
