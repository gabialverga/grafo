function geraGrafo(){
	var qnt = document.getElementById("qntNos").value;
	var v = [];
	var e = [];
	for(var i=0;i<qnt;i++){
		v.push({
			data:{
				id: i,
				name: i
			}
		});
	}
	for(var i=0;i<qnt;i++){
		for(var j=0;j<qnt;j++){
			var id = ((i*qnt)+j).toString();
			if(document.getElementById(id).checked){
				document.getElementById(((j*qnt)+i)).checked = true;
				e.push({
					data:{
						source: i,
						target: j
					}
				});
			}
		}
	}
	var elms = {nodes: v,edges: e};
	var cy = cytoscape({
		container: document.getElementById('cy'),
		elements: elms
	});
	cy.layout({
		name: 'circle'
	}).run();
}

function matriz(){
	var qnt = document.getElementById("qntNos").value;
	var container = document.getElementById("tabela");
	var html = [];
	html.push('<table><tr><td></td>');
	for(var j=0;j<qnt;j++){
		html.push('<td>'+(j+1)+'</td>');
	}
	html.push('</tr>');
	for(var i=0;i<qnt;i++){
		html.push('<tr><td>'+(i+1)+'</td>');
		for(var j=0;j<qnt;j++){
			html.push('<td><input type="checkbox" id="' + ((i*qnt)+j) +'"></td>');
		}
		html.push('</tr>');
	}
	html.push('</table>');
	html.push('<br><input type="button" id ="gera" value="Gerar Grafo" onclick="geraGrafo()"/>');
	container.innerHTML = html.join("\n");
}
