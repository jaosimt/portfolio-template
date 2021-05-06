import { Component } from "react";
import './about.scss';

class About extends Component {
	componentDidMount() {
		window.scrollTo({ top: 0 });
	}
	
	render() {
		const { offset: o } = this.props;
		const offset = o.header + o.footer + o.margin;
		
		return <div
			className={ 'About' }
			style={ {
				minHeight: `calc(100vh - ${ offset }px)`
			} }>
			<div className="wrapper">
				<div className="banner text-shadow-white">About me</div>
				<div className="content">
					<h1>I am <span className='gold'>Your Name</span>, I am a <span className="gold">Your Title</span>.</h1>
					<p>
						Described yourself here
					</p>
					
					<p>
						and further here
					</p>
					
					<p>
						and here...
					</p>
					<p>
						and probably here too...
					</p>
				</div>
			</div>
		</div>
	}
}

export default About;
