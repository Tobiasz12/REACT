
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

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
 	},
 	render: function() {
		return React.createElement('h1',{}, movie.title);
	 }
});

var MovieDescription = React.createClass({
	propTypes: {
    	desc: React.PropTypes.string.isRequired,
 	},
	render: function() {
	  	return React.createElement('p',{}, movie.desc);
	 }
});


var movie = {
	id:1,
	title: 'Piraci z Karaibów',
	desc: 'film o piratach',
	img: 'http://1.fwcdn.pl/po/65/42/606542/7785907.6.jpg'
}

var element = React.createElement(Movie, {movie:movie});
ReactDOM.render(element, document.getElementById('app'));

