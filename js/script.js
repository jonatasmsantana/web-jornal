
//Essa função exibe a data acima do slider.
function mostra_data(){
	var data_hoje = new Date();
	var dia_data = data_hoje.getDay(); 
	var dia_mes = data_hoje.getDate();
	var mes_data = data_hoje.getMonth(); 
	var ano = data_hoje.getFullYear();
	var dia_semana;
	var mes;

	switch(dia_data){
		case 0: 
		dia_semana = "Domingo";
		break;

		case 1: 
		dia_semana = "Segunda";
		break;

		case 2: 
		dia_semana = "Terça";
		break;

		case 3: 
		dia_semana = "Quarta";
		break;

		case 4: 
		dia_semana = "Quinta";
		break;

		case 5: 
		dia_semana = "Sexta";
		break;

		case 6: 
		dia_semana = "Sábado";
		break;
	}

	switch(mes_data){
		case 0:
		mes = "Janeiro";
		break;

		case 1:
		mes = "Fevereiro";
		break;

		case 2:
		mes = "Março";
		break;

		case 3:
		mes = "Abril";
		break;

		case 4:
		mes = "Maio";
		break;

		case 5:
		mes = "Junho";
		break;

		case 6:
		mes = "Julho";
		break;

		case 7:
		mes = "Agosto";
		break;

		case 8:
		mes = "Setembro";
		break;

		case 9:
		mes = "Outubro";
		break;

		case 10:
		mes = "Novembro";
		break;

		case 11:
		mes = "Dezembro";
		break;
	}

	document.getElementById("dia-data").innerHTML = dia_semana + ", "+ dia_mes + " de "+ mes + " de " + ano;
}
		
//Essa função controla a exibição do menu quando o ícone de menu é clicado.		
function showMenu(){
	let menu = document.getElementById('menu-flut');
	let span1, span2,span3;
	if(menu.className === "menu-flut1"){
		menu.className += " menu-flut2";				
	}
	else{
		menu.className = "menu-flut1"
	}
}

// Esse trecho controla a transição automática das imagens do slider.
var contador = 1;
		setInterval(function(){
			document.getElementById("radio" + contador).checked = true;
			contador++;
			if(contador > 4){
				contador = 1;
			}
		}, 5000);

//Essa função desmarca o checkbox do menu quando a página é recarregada.
function limpaCheck(){
	var check = document.getElementById("check");
	if(check.checked == true){
		check.checked = false;
	}
}