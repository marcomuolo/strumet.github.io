
var slide_div = document.getElementById('slides');

var how_to_go_ahead = function (x) {
	return '<div class="nav_div">' + '<a href="#/' + x + '/2"><span class="nav_span">' +
	'Non sai come fare?<br>Clicca qui &#8675;</span></a>' +
	'<a href="#/' + (x+1) + '"><span class="nav_span">' +
	'Già fatto.<br>Vai avanti! &#8674;</span></a></div>'
	}

var sl = {
	'0_add_remote': '<ul>' +
		'<li>lanciare <em>Git Bash</em> dalla cartella <em>labmod17</em></li>' +
		'<li>verificare i repository remoti esistenti digitando <pre>git remote -v</pre></li>' +
		'<div class="note" style="margin-top:0px">(dovrebbero comparire due righe riportanti il link relativo al fork presente sul proprio account)</div>' + 
		'<li>per aggiungere il nuovo <em>remote</em> digitare <pre>git remote add strumet https://github.com/strumet/labmod17.git</pre></li>' +
		'<li>verificare i <em>remote</em> connessi digitando nuovamente <pre>git remote -v</pre></li>' +
		'<div class="note" style="margin-top:0px">(adesso dovrebbero comparire altre due righe relative al repository principale)</div>' +
		'</ul>' + how_to_go_ahead(0),
	'1_pull_strumet_master': '<ul>' +
		'<li>per aggiornare il repository digitare <pre>git pull strumet master</pre></li>' +
		'<div class="note" style="margin-top:0px">(il download dei file potrebbe durare diversi minuti)</div>' + 
		'</ul>' + how_to_go_ahead(1),
	'2_merge': 'Alla fine dell\'operazione il terminale mostrerà una schermata in cui si legge:<pre><em>Merge branch \'master\' of https://github.com/strumet/...</em></pre>' +
		'<ul>' +
		'<li>confermare il <em>merging</em> digitando <pre>:q</pre></li>' +
		'<div class="note" style="margin-top:0px">(il testo digitato apparirà nella parte inferiore della finestra)</div>' +
		'<li>adesso la cartella <em>labmod17</em> sarà aggiornata</li>' +
		'</ul>' + how_to_go_ahead(2),
}

var slides = {
	'0_add_remote': {
		'0_add_remote': {
			'title': '1.',
			'content': sl['0_add_remote'],
		},
		'0_add_remote_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/0_add_remote.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'1_pull_strumet_master': {
		'1_pull_strumet_master': {
			'title': '2.',
			'content': sl['1_pull_strumet_master'],
		},
		'1_pull_strumet_master_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/1_pull_strumet_master.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'2_merge': {
		'2_merge': {
			'title': '3.',
			'content': sl['2_merge'],
		},
		'2_merge_img': {
			'title': '',
			'content': '',
			'properties': {
				'data-background': 'img/2_merge.gif',
				'data-background-transition': 'zoom',
			}
		},
	},
	'3_0': {
		'3': {
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

