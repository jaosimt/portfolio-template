import React from 'react';
import PropTypes from 'prop-types';
import "./SocialMediaLinks.scss";

export default class SocialMediaLinks extends React.Component {
	render() {
		return <div className={ 'SocialMediaLinks' }>
			{
				this.props.socialMedia.map((s, i) => <div
					key={ i }
					className={ s.name }
					onClick={ () => window.open(s.url, '_blank') }
					style={ {
						width: `${ this.props.iconSize }px`,
						height: `${ this.props.iconSize }px`
					} }
				/>)
			}
		</div>
	}
}

SocialMediaLinks.propTypes = {
	socialMedia: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			url: PropTypes.string
		})
	),
	iconSize: PropTypes.number
};

SocialMediaLinks.defaultProps = {
	socialMedia: [
		{
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/sim-jao-65324677'
		},
		{
			name: 'facebook',
			url: 'https://www.facebook.com/jaosimt/'
		},
		{
			name: 'twitter',
			url: 'https://twitter.com/jaosimt/'
		},
		{
			name: 'instagram',
			url: 'https://www.instagram.com/jaosimt/'
		},
		//{
		//    name: 'youtube',
		//    url: 'https://www.youtube.com/channel/UCSC3hB2j_ymv9tP0r0mlK1Q'
		//}
	],
	iconSize: 35
};
