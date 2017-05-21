
var MovieTitle = React.createClass({

 	render: function() {
		return React.createElement('h1',{}, movie.title);
	 }
});

var MovieTitle2 = React.createClass({

 	render: function() {
		return React.createElement('h1',{}, movie2.title);
	 }
});

var MovieTitle3 = React.createClass({

 	render: function() {
		return React.createElement('h1',{}, movie3.title);
	 }
});

var MovieDescription = React.createClass({

	render: function() {
	  	return React.createElement('p',{}, movie.desc);
	 }
});

var MovieDescription2 = React.createClass({

	render: function() {
	  	return React.createElement('p',{}, movie2.desc);
	 }
});

var MovieDescription3 = React.createClass({

	render: function() {
	  	return React.createElement('p',{}, movie3.desc);
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
			React.createElement('img', { src: this.props.movie.img })
		);
	}
});

var Movie2 = React.createClass({
	propTypes: {
		movie2: React.PropTypes.object.isRequired,
	},
	render: function() {
		return React.createElement('li', {key: this.props.movie2.id},
			React.createElement(MovieTitle2, {title: this.props.movie2.title} ),
			React.createElement(MovieDescription2, {desc: this.props.movie2.desc}),
			React.createElement('img', { src: this.props.movie2.img })
		);
	}
});

var Movie3 = React.createClass({
	propTypes: {
		movie3: React.PropTypes.object.isRequired,
	},
	render: function() {
		return React.createElement('li', {key: this.props.movie3.id},
			React.createElement(MovieTitle3, {title: this.props.movie3.title} ),
			React.createElement(MovieDescription3, {desc: this.props.movie3.desc}),
			React.createElement('img', { src: this.props.movie3.img })
		);
	}
});

var movie3 = {
	id:1,
	title: 'Rage',
	desc: 'film o zabojcach',
	img: 'http://cdn1.stopklatka.pl/dat/movie/0000000021/0000021451/thumbs_plakat_size200_0000021451.jpg'
}

var movie2 = 
  {
   	id:2,
	title: 'Harry Potter',
	desc: 'film o czarodziejach',
	img: 'http://www.film.gildia.pl/_n_/film/filmy/harry_potter_4/poster-200.jpg'
  }
 

var movie = {
	id:1,
	title: 'Piraci z Karaibów',
	desc: 'film o piratach',
	img: 'http://1.fwcdn.pl/po/65/42/606542/7785907.6.jpg'
}

var MoviesList = React.createClass({
	render: function() {
	  	return (
	  		React.createElement('ul', {},
        	React.createElement(Movie, {movie: movie}),
			React.createElement(Movie2, {movie2: movie2}),
			React.createElement(Movie3, {movie3: movie3}),
        	)
	  	)
	 }
});


var element = React.createElement(MoviesList);
ReactDOM.render(element, document.getElementById('app'));

