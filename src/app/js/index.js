var jsonName = "disciplinas.json"
var disc
var iraSpan 
var nome,nota,semestre,carga,trancada,table

function addDisciplina()
{
	var obj = {
		"nome":nome.value,
		"nota":Number(nota.value),
		"carga":Number(carga.value),
		"semestre":Number(semestre.value)
	}
	if(trancada.checked)
	{
		obj.nota = 0
		disc.trancadas.push(obj)
	}
	else
		disc.completas.push(obj)
	atualizarIra()
	saveJson(jsonName,disc)
	addRow(obj)
}

function addRow(obj)
{
	var row = table.insertRow()	
	var l = []
	for(var i = 0; i < 5; ++i)
		l.push(row.insertCell())
	l[0].textContent = obj.nome
	l[1].textContent = obj.semestre 
	l[2].textContent = obj.carga 
	l[3].textContent = obj.nota 
}

function atualizarIra()
{
	iraSpan.textContent = calcIra(disc)
}

window.onload = function()
{
	disc = loadJson(jsonName)
	
	iraSpan = document.getElementById("nbr_ira")
	nome = document.getElementById("nome")
	nota = document.getElementById("nota")
	semestre = document.getElementById("semestre")
	carga = document.getElementById("carga")
	trancada = document.getElementById("trancada")
	table = document.getElementById("table_disc")
	for(var v of disc.completas)
		addRow(v)
	for(var v of disc.trancadas)
		addRow(v)
	atualizarIra()
}
