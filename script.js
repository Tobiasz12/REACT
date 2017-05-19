var Movie = React.createClass('Movie', function() {
	render(){
		return (
	      	React.createElement('div', {},
	       		React.createElement('h2', {}, this.props.movie.name),
	        	React.createElement('p', {}, this.props.movie.disc)
	      	)
	    )
	}
})

propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

var movie = {
	name: 'Predator',
	disc: 'o kosmitach'
}

var element = React.createElement(Movie, {movie: movie});
ReactDOM.render(element, document.getElementById('app'));

