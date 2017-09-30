
var slide_div = document.getElementById('slides');

var how_to_go_ahead = function (x) {
	return '<div class="nav_div">' + '<a href="#/' + x + '/2"><span class="nav_span">' +
	'Non sai come fare?<br>Clicca qui &#8675;</span></a>' +
	'<a href="#/' + (x+1) + '"><span class="nav_span">' +
	'Già fatto.<br>Vai avanti! &#8674;</span></a></div>'
	}

var sl = {
	'1_fork': 'Per <a href="https://github.com/strumet/labmod17/tree/' +
		'master/ex1#proposta-delloggetto">proporre l\'oggetto da modellare</a> ' +
		'per l\'esercitazione è ' +
		'necessario creare un <strong><em>fork</em></strong> del ' +
		'repository principale del corso' + how_to_go_ahead(0),
	'2_clone': 'Ora nella tua pagina <em>github</em> è presente una perfetta copia ' +
		'del repository del corso.<br>' +
		'Per aggiungere i tuoi file nel repository appena <em>forkato</em>, devi ' +
		'<strong><em>clonarlo</em></strong> sul tuo computer.' + how_to_go_ahead(1),
	'3_commit': 'Adesso inserisci la foto dell\'oggetto scelto ' +
		'<a href="https://github.com/strumet/labmod17/tree/master/ex1/obj">' +
		'nella cartella indicata</a> dalle istruzioni di lavoro e, per ' +
		'confermare la modifica, effettua un <strong><em>commit</em></strong>.<br>' +
		'Ricordati di <strong>nominare correttamente il file!</strong>' +
		how_to_go_ahead(2),
	'4_push': 'Bene.<br>Ora puoi pubblicare le modifiche sul tuo repository ' +
		'remoto: questa operazione si chiama <strong><em>push</em></strong>.' +
		how_to_go_ahead(3),
	'5_pull_request': 'Abbiamo quasi finito.<br>L\'ultima cosa da fare è un ' +
		'<strong><em>pull request</em></strong>: è questo il comando che ti ' +
		'consente di segnalare le modifiche effettuate alla cartella forkata.' +
		how_to_go_ahead(4),
	'6_wait_for': 'Perfetto!<br>Adesso non resta che aspettare la risposta ' +
		'del docente...',
}

var slides = {
	'1_fork': {
		'fork_capt': {
			'title': '1.',
			'content': sl['1_fork'],
		},
		'fork_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/1_fork.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'2_clone': {
		'clone_capt': {
			'title': '2.',
			'content': sl['2_clone'],
		},
		'clone_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/2_clone.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'3_commit': {
		'commit_capt': {
			'title': '3.',
			'content': sl['3_commit'],
		},
		'commit_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/3_commit.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'4_push': {
		'push_capt': {
			'title': '4.',
			'content': sl['4_push'],
		},
		'commit_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/4_push.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'5_pull_request': {
		'push_capt': {
			'title': '5.',
			'content': sl['5_pull_request'],
		},
		'commit_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/5_pull_request.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'6_wait_for': {
		'title': '6.',
		'content': sl['6_wait_for'],
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

