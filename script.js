var movies = [
	{
		id:1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		src: 'http://www.geocities.ws/grupo_30_e_uns/HarryPotter1Gra.jpg'
	},
	{	
		id:2,
		title:'Król Lew',
		desc: 'Film o królu sawanny',
		src: 'http://vignette4.wikia.nocookie.net/dzieje/images/2/20/Kr%C3%B3l_Lew.jpg/revision/latest?cb=20151223174455&path-prefix=pl'
	},
	{
		id:3,
		title:'Strażnicy Galaktyki',
		desc: 'film o kosmitach',
		src: 'http://1.fwcdn.pl/po/21/46/722146/7779933.6.jpg'
	},
	{	
		id:4,
		title:'Piraci z karaibów',
		desc: 'film o piratach defakto',
		src: 'http://1.fwcdn.pl/po/65/42/606542/7785907.6.jpg'
	}
]

var moviesElements = movies.map(function(movie){
	return React.createElement('li',{key: movie.id},
		React.createElement('h2',{}, movie.title),
		React.createElement('p',{},movie.desc),
		React.createElement('img',{src:movie.src})
	);
});

var element = 
	React.createElement('div',{},
		React.createElement('h1',{},'Lista filmów'),
		React.createElement('ul',{}, moviesElements )
	);

ReactDOM.render(element, document.getElementById('app'));

/*
var element = 
	React.createElement('div',{}, 
		React.createElement('h1',{},'Lista filmów'),
		React.createElement('ul',{},
			React.createElement('li',{},
				React.createElement('h2',{},'Harry Potter'),
				React.createElement('p',{},'film o czarodzieju')
			),
			React.createElement('li',{},
				React.createElement('h2',{},'Harry Potter'),
				React.createElement('p',{},'film opowiadający hist..krila sawanny'),
			)
		)

	); */
