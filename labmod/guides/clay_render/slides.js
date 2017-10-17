
var slide_div = document.getElementById('slides');

var how_to_go_ahead = function (x) {
	return '<div class="nav_div">' + '<a href="#/' + x + '/2"><span class="nav_span">' +
	'Non sai come fare?<br>Clicca qui &#8675;</span></a>' +
	'<a href="#/' + (x+1) + '"><span class="nav_span">' +
	'Già fatto.<br>Vai avanti! &#8674;</span></a></div>'
	}

var sl = {
	'1_1': '<ul>' +
		'<li>aprire la finestra delle <b>impostazioni del rendering</b> ' +
		'(<em>F10</em>)</li>' +
		'<li>scegliere il motore di rendering <b><em>Scanline rendering' +
		'</em></b></li>' +
		'<li>impostare la <b>risoluzione</b> del rendering alla dimensione ' +
		'<b>3508 x 2480</b></li>' +
		'</ul>' +
		'<div class="note"><b>NOTA:</b> è possibile scegliere sia un orientamento ' +
		'orizzontale (3508 x 2480) che un orientamento verticale (2480 x 3508). ' +
		'Si consiglia di impostare tale risoluzione solo per il rendering ' +
		'definitivo ed utilizzare la dimensione ridotta 877 x 620 (1/4 della ' +
		'risoluzione) per tutte le prove preliminari.</div>' + how_to_go_ahead(1),
	'1_2': '<ul>' +
		'<li>rendere visibile l\'inquadratura nella viewport ' +
		'(<b><em>safe frame</em></b>)</li>' +
		'<li>impostare in bianco il colore dello sfondo del rendering ' +
		'(<b><em>Environment</em></b>, 8)</li>' +
		'</ul>' + how_to_go_ahead(2),
	'1_3': '<ul>' +
		'<li>aggiungere un box alla scena che faccia da <b>base per l\'oggetto</b></li>' +
		'<li>aggiungere una luce di tipo <b>Skylight</b> alla scena per ottenere l\'' +
		'effetto <b><em>Ambient Occlusion</em></b></li>' +
		'</ul>' +
		'<div class="note"><b>NOTA:</b> l\'opzione <b><em>Cast Shadow</em></b> ' +
		'della luce deve essere attiva. La posizione della luce è indifferente.</div>' +
		how_to_go_ahead(3),
	'2_1': '<ul>' +
		'<li>Attivare l\'opzione <b><em>Isoline Display</em></b> nell\'' +
		'ultimo <em>TurboSmooth</em> presente nel <em>Modifier Stack</em></li>' +
		'<li>Aggiungere un modificatore di tipo <b><em>Edit Poly</em></b></li>' +
		'<li>Selezionare tutti i bordi (<em>Edges</em>) e richiamare il comando ' +
		'<b><em>Create Shape From Edges</em></b></li>' +
		'<li>Scegliere il tipo di shape <b><em>Linear</em></b> e rimuovere il ' +
		'modificatore appena aggiunto</li>' +
		'</ul>' + how_to_go_ahead(5),
	'2_2': '<ul>' +
		'<li>selezionare la spline appena creata</li>' +
		'<li>attivare l\'opzione <b><em>Enable In Renderer</em></b></li>' +
		'<li>impostare a <b>4</b> il numero dei lati (<b><em>Sides</em></b>) della ' +
		'spline</li>' +
		'</ul>' + how_to_go_ahead(6),
	'3_1': '<div style="text-align: left">Dalla finestra dei materiali(<em>M</em>) ' +
		'creare 3 diversi materiali:</div>' +
		'<ul>' +
		'<li>un materiale con <b><em>Diffuse</em></b> bianco</li>' +
		'<li>un materiale con <b><em>Diffuse</em></b> bianco e ' +
		'<b><em>Self-Illumination</em></b> a <b>100</b></li>' +
		'<li>un materiale con <b><em>Diffuse</em></b> nero</li>' +
		'</ul>' + how_to_go_ahead(8),
	'3_2': '<ul>' +
		'<li>assegnare il materiale con <em>Diffuse</em> bianco al modello ' +
		'dell\'oggetto</li>' +
		'<li>assegnare il materiale con <em>Self-Illumination</em> al box che ' +
		'fa da base dell\'oggetto</li>' +
		'<li>assegnare il materiale nero alla <em>shape</em> creata</li>' +
		'</ul>' + how_to_go_ahead(9),
	'4_1': '<ul>' +
		'<li>creare un clone (<b><em>Instance</b></em>) del modello e della ' +
		'<em>shape</em> creata</li>' +
		'<li>ruotare e disporre i duplicati in modo da mostrare <b>il fianco dell\'' +
		'oggetto</b></li>' +
		'</ul>' + how_to_go_ahead(11),
	'4_2': '<ul>' +
		'<li>ripetere l\'operazione per mostrare il modello <b>dall\'alto</b></li>' +
		'</ul>' + how_to_go_ahead(12),
	'4_3': '<ul>' +
		'<li>aggiungere un\'<b>immagine fotografica</b> che mostri l\'oggetto ' +
		'nella sua volumetria</li>' +
		'<li>regolare la posizione dell\'inquadratura per <b>massimizzare la ' +
		'dimensione degli elementi</b></li>' + 
		'</ul>' + how_to_go_ahead(13),
	'5_1': '<ul>' +
		'<li>lanciare il <b><em>rendering</em></b>(<em>Shift+Q</em>)</li>' +
		'</ul>' + how_to_go_ahead(15),
	'5_2': '<ul>' +
		'<li>salvare l\'immagine in formato <b><em>png</em></b> usando <b>il proprio ' +
		'numero di matricola per nominare il file</b> prodotto</li>' +
		'</ul>' +
		'<div class="note"><b>NOTA:</b> Durante il salvataggio <b>disabilitare il ' +
		'<em>canale alpha</em></b> del file png</div>' + how_to_go_ahead(16),
	'5_3': '<ul>' +
		'<li>selezionare il modello <b>prima che venga applicato il modificatore ' +
		'<em>TurboSmooth</em></b></li>' +
		'<li>esportare la superficie selezionata in <b><em>formato obj</em></b></li>' +
		'<li>nominare il file prodotto con il proprio numero di matricola</li>' +
		'</ul>' +
		'<div class="note"><b>NOTA:</b> Nel caso in cui il modello fosse composto ' +
		'da più parti duplicare i singoli componenti e congiungerli in un\'' +
		'unica superficie attraverso il comando <em>Attach</em></div>' +
		how_to_go_ahead(17),
}

var slides = {
	'1_0': {
		'1': {
			'title': '1.<br>Impostare il set ed il rendering',
			'content': '',
		},
	},
	'1_1': {
		'1_1': {
			'title': '1.1',
			'content': sl['1_1'],
		},
		'1_1_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/1_1.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'1_2': {
		'1_2': {
			'title': '1.2',
			'content': sl['1_2'],
		},
		'1_2_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/1_2.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'1_3': {
		'1_3': {
			'title': '1.3',
			'content': sl['1_3'],
		},
		'1_3_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/1_3.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'2_0': {
		'2': {
			'title': '2.<br>Predisporre il modello',
			'content': '',
		},
	},
	'2_1': {
		'2_1': {
			'title': '2.1',
			'content': sl['2_1'],
		},
		'commit_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/2_1.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'2_2': {
		'2_2': {
			'title': '2.2',
			'content': sl['2_2'],
		},
		'commit_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/2_2.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'3_0': {
		'3': {
			'title': '3.<br>Impostare i materiali',
			'content': '',
		},
	},
	'3_1': {
		'3_1': {
			'title': '3.1',
			'content': sl['3_1'],
		},
		'commit_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/3_1.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'3_2': {
		'3_2': {
			'title': '3.2',
			'content': sl['3_2'],
		},
		'commit_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/3_2.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'4_0': {
		'4': {
			'title': '4.<br>Preparare la scena',
			'content': '',
		},
	},
	'4_1': {
		'4_1': {
			'title': '4.1',
			'content': sl['4_1'],
		},
		'commit_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/4_1.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'4_2': {
		'4_2': {
			'title': '4.2',
			'content': sl['4_2'],
		},
		'commit_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/4_2.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'4_3': {
		'4_3': {
			'title': '4.3',
			'content': sl['4_3'],
		},
		'commit_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/4_3.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'5_0': {
		'5': {
			'title': '5.<br>Lanciare il rendering e salvare i file',
			'content': '',
		},
	},
	'5_1': {
		'5_1': {
			'title': '5.1',
			'content': sl['5_1'],
		},
		'commit_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/5_1.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'5_2': {
		'5_2': {
			'title': '5.2',
			'content': sl['5_2'],
		},
		'commit_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/5_2.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'5_3': {
		'5_3': {
			'title': '5.3',
			'content': sl['5_3'],
		},
		'commit_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/5_3.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'6_0': {
		'6': {
			'title': 'Fine',
			'content': '',
		},
	},
}

console.log(slides);

var get_slide = function (x) {
	return "<h1 " + x['title_options'] + ">" + x['title'] + "</h1>" + 
		"<div>" + x['content'] + "</div>";
}

var get_slide_properties = function (x) {
	return (typeof x == 'undefined') ? '' : Object.keys(x).map(function (y) {
		return y + '=' + x[y];
	}).join(' ');
};

var slide_container = function (x) {
	if (x['title'] != null){
		return '<div class="inner_div">' + get_slide(x) + '</div>';
	}
	else {
		return sections(x);
	}
}

var sections = function (dict) {return Object.keys(dict).map(function (x) {
		return '<section id="' + x + '" ' + get_slide_properties(dict[x]['properties']) +
			'>' + slide_container(dict[x]) + '</section>';
	}).join('');
}

slide_div.innerHTML = sections(slides);

