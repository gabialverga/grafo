function completo(){
	var qnt = document.getElementById("qntNos").value;
	console.log(qnt);
	var v = [];
	var e = [];
	for(var i=0;i<qnt;i++){
		v.push({
			data:{
				id:i
			} 
		});
	}
	/*for(var i=0;i<qnt;i++){
		for(var j=0;j<qnt;j++){
			if(j!==i){
				e.push({
					data:{
						source: i,
						target: j
					}
				});
			}
		}
	}*/
	if(document.getElementById("00").checked){
		e.push({
			data:{
				source: 0,
				target: 0
			}
		});
	}
	if(document.getElementById("01").checked){
		e.push({
			data:{
				source: 0,
				target: 1
			}
		});
	}
	if(document.getElementById("02").checked){
		e.push({
			data:{
				source: 0,
				target: 2
			}
		});
	}
	if(document.getElementById("10").checked){
		e.push({
			data:{
				source: 1,
				target: 0
			}
		});
	}
	if(document.getElementById("11").checked){
		e.push({
			data:{
				source: 1,
				target: 1
			}
		});
	}
	if(document.getElementById("12").checked){
		e.push({
			data:{
				source: 1,
				target: 2
			}
		});
	}
	if(document.getElementById("20").checked){
		e.push({
			data:{
				source: 2,
				target: 0
			}
		});
	}
	if(document.getElementById("21").checked){
		e.push({
			data:{
				source: 2,
				target: 1
			}
		});
	}
	if(document.getElementById("22").checked){
		e.push({
			data:{
				source: 2,
				target: 2
			}
		});
	}
	var elms = { nodes: v,edges: e};
	var cy = cytoscape({
	    container: document.getElementById('cy'),
	    elements: elms
	});
	cy.layout({
	    name: 'circle'
	}).run();
}
function matriz(){
	
}