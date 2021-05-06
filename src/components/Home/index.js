import { Component } from 'react';
import './home.scss';
import imgOne from './hoSeok.jpg';
import imgTwo from './jiMin.jpg';
import imgThree from './jin.jpg';
import imgFour from './jungKook.jpg';
import imgFive from './namJoon.jpg';
import imgSix from './taeHyung.jpg';
import imgSeven from './yoonGi.jpg';

class Home extends Component {
	state = {
		imageIndex: 0,
		imageOpacity: 0
	}
	
	imageArray = [ imgTwo, imgOne, imgThree, imgFour, imgFive, imgSix, imgSeven ];
	
	componentDidMount() {
		let idxs = [],
			timeout = 49;
		
		const rotateImgIndex = () => {
			const { imageIndex } = this.state;
			let nextIndex = imageIndex + 1;
			if (nextIndex === this.imageArray.length) nextIndex = 0;
			
			setTimeout(() => {
				this.setState({
					imageIndex: nextIndex
				});
				
				if (idxs.length !== this.imageArray.length) {
					if (!idxs.includes(imageIndex)) idxs.push(imageIndex);
					console.log('idxs:', idxs);
				} else {
					timeout = 14000;
					this.setState({ imageOpacity: 1});
				}
				rotateImgIndex();
			}, timeout);
		}
		rotateImgIndex();
	}
	
	render() {
		const { imageIndex, imageOpacity } = this.state;
		
		return <div className="Home">
			<h2 title="Greetings" className="greetings bybyn">ᜃᜋᜓᜐ᜔ᜆ</h2>
			<div className="profile-image" style={ {
				backgroundImage: `url(${this.imageArray[ imageIndex ]})`,
				opacity: imageOpacity
			} } />
			<div className="profile-description">
				<div className="greetings bybyn">ᜃᜋᜓᜐ᜔ᜆ</div>
				<h1 className="name gold">Your Name</h1>
				<p>
					Add short description about yourself... 3 lines at least
				</p>
			</div>
		</div>
	}
}

export default Home;
