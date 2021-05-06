import React, { Component } from "react";
import PropTypes from 'prop-types';
import './tiles.scss';
import noImage from '../../images/noimage.png';

class Tiles extends Component {
	state = {
		logoHeight: 0
	}
	
	componentDidMount() {
		if (this.logoRef) this.setState({
			logoHeight: this.logoRef.clientWidth
		})
	}
	
	render() {
		const { logoHeight } = this.state;
		const { data } = this.props;
		const { id, date, title, subject, image, details } = data;
		
		const logo = <div
			ref={ ref => this.logoRef = ref }
			className="logo"
			style={ {
				backgroundImage: `url(${ image || noImage })`,
				height: `${ logoHeight }px`
			} } />;
		
		return <div id={ id } className="WorkTiles">
			<div className="logo-wrapper">
				{
					subject.website &&
					<a
						rel="noreferrer"
						href={ subject.website || "#" }
						target="_blank"
						className="website">
						{ logo }
					</a>
				}
				{
					!subject.website &&
					logo
				}
			</div>
			<div className="details" style={ {
				height: `calc(100% - ${ logoHeight }px)`
			} }>
				<div>
					<h3 className="title">{ title }</h3>
					<h5 className="subject">{ subject.name }</h5>
					<h5 className="date-range">{ date }</h5>
				</div>
				{
					details &&
					<span className="read-more" onClick={ this.readMoreClick }>... read more</span>
				}
			</div>
		</div>
	}
	
	readMoreClick = () => {
		const { data, history, logHistory } = this.props;
		const { id } = data;
		const path = `${ history.location.pathname }/${ id }`;
		
		history.push(path)
		logHistory();
	};
}

Tiles.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string.isRequired,
		date: PropTypes.string,
		title: PropTypes.string.isRequired,
		subject: PropTypes.shape({
			name: PropTypes.string.isRequired,
			website: PropTypes.string,
			address: PropTypes.string
		})
	})
};

export default Tiles;