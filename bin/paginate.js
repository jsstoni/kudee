'use strict'

module.exports = {
	paginate : (getID, totalRegistro, limite) => {
		if(getID == 0) getID = 1 
		//atras
		let revPage = parseInt(getID) - 1;
		//siguiente
		let nextPage = parseInt(getID) + 1;
		//ultima pagina
		let ultimaPagina = Math.ceil(totalRegistro / limite);
		let Respuesta = totalRegistro % limite;

		if(Respuesta > 0) ultimaPagina = Math.floor(ultimaPagina) + 1;
		
		var nextLink = 0, revLink = 0;
		if(getID > 1 && ultimaPagina >= getID) {
			revLink = 1;
		} if(parseInt(getID) < ultimaPagina) {
			nextLink = 1;
		}

		if (getID <= 0) { getID = 1; }
		if (getID > 0) {
			var registroTotal = getID * limite;
			var paginaInicial = registroTotal - limite;
		}
			
		if (totalRegistro < registroTotal) {
			var res = registroTotal - totalRegistro;
			var terminar = registroTotal - res;
		}else {
			var terminar = registroTotal;
		}

		let result = {
			start : paginaInicial,
			stop : terminar,
			linkSiguiente : nextLink,
			linkAtras: revLink
		}
		return result
	}
}