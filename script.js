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

var Header = React.createClass({
	propTypes: {
  		title: React.PropTypes.string.isRequired,
 	},
 	render: function() {
		return React.createElement('h1',{},'Lista Filmów');
	 }
});

var MovieTitle = React.createClass({
	propTypes: {
  		title: React.PropTypes.string.isRequired,
 	},
 	render: function() {
		return React.createElement('h2',{},this.props.title);
	 }
});

var MovieDescription = React.createClass({
	propTypes: {
  		title: React.PropTypes.string.isRequired,
 	},
	render: function() {
	  	return React.createElement('p',{}, this.props.desc);
	 }
});

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
 	},
	render: function() { 
		return React.createElement('li', {key: this.props.movie.id},
			React.createElement(MovieTitle, {title: this.props.movie.title} ),
    		React.createElement(MovieDescription, {desc: this.props.movie.desc}),
		    React.createElement('img', { src: this.props.movie.src })
 		 );
	}
});

var MovieList = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
	},
	render: function(){
		var movies = this.props.items.map(function(movie){
			return React.createElement(Movie, {movie: movie, key: movie.id});
		});
		return React.createElement('ul', {}, movies);
	}
});

var App = React.createClass({ 
	render: function() {
 		return ( 
			React.createElement('div', {}, 
			React.createElement(Header), 
			React.createElement(MovieList, {items: movies}) ) 
 	); 
 } 
});

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));
