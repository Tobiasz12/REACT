var movie = [
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

var MovieTitle = React.createClass({

 	render: function() {
		return React.createElement('h1',{}, movie.title);
	 }
});

var MovieDescription = React.createClass({

	render: function() {
	  	return React.createElement('p',{}, movie.desc);
	 }
});

var Movie = React.createClass({
	propTypes: {
 		movie: React.PropTypes.array.isRequired,
 	},
 	render: function() {
 		return React.createElement('li', {key: this.props.movie.id},
		    React.createElement(MovieTitle, {title: this.props.movie.title} ),
		    React.createElement(MovieDescription, {desc: this.props.movie.desc}),
		    React.createElement('img', { src: this.props.movie.img })
  		);
 	}
});

var MoviesList = React.createClass({
	render: function() {
	  	return (
	  		React.createElement('ul', {},
        	React.createElement(Movie, {movie: movie}),
        	)
	  	)
	 }
});

var element = React.createElement(MoviesList);
ReactDOM.render(element, document.getElementById('app'));

