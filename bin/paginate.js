'use strict'

module.exports = {
	paginate : (getID, totalRegistro, limite) => {
		if(getID == 0) getID = 1 
		//atras
		let revPage = parseInt(getID) - 1;
		//siguiente
		let nextPage = parseInt(getID) + 1;
		//ultima pagina
		let ultimaPagina = Math.round(totalRegistro / limit);

		let result = {
			ultimaPagina : ultimaPagina
		}
		return result
	}
}