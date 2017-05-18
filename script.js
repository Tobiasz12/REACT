var movies = [
	{
		title: 'Harry Potter',
		desc: 'film o czarodzieju'
	},
	{
		title:'Król Lew',
		desc: 'Film o królu sawanny'
	},
	{
		title:'Strażnicy Galaktyki',
		desc: 'film o kosmitach'
	},
	{
		title:'Piraci z karaibów',
		desc: 'film o piratach defakto'
	},
	{
		title:'Strzała wojny ',
		desc:'film o kolesiach z łukami',
		
	}
]

var moviesElements = movies.map(function(movie){
	return React.createElement('li',{},
		React.createElement('h2',{}, movie.title),
		React.createElement('p',{},movie.desc),
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
