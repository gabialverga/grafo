function geraGrafo(){
	var qnt = document.getElementById("qntNos").value;
	var v = [];
	var e = [];
	for(var i=0;i<qnt;i++){
		v.push({
			data:{
				id: i
			} 
		});
	}
	for(var i=0;i<qnt;i++){
		for(var j=0;j<qnt;j++){
			var id = ((i*qnt)+j).toString();
			if(document.getElementById(id).checked){
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
	html.push('<table>');
	html.push('<tr>');
	html.push('<td></td>');
	for(var j=0;j<qnt;j++){
		html.push('<td>');
		html.push((j+1));
		html.push('</td>');
	}
	html.push('</tr>');
	for(var i=0;i<qnt;i++){
		html.push('<tr>');
		html.push('<td>');
		html.push(i+1);
		html.push('</td>');
		for(var j=0;j<qnt;j++){
			html.push('<td><input type="checkbox" id="' + ((i*qnt)+j) + '"></td>');
		}
		html.push('</tr>');
	}
	html.push('</table>');
	var gera = document.getElementById("gera");
	gera.style.visibility = 'visible';
	container.innerHTML = html.join("\n");

}