import React  from "react";
import './footer.scss';
// import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

function Footer(props) {
	const { setRef, currentPath } = props;
	
	console.log('[Footer] currentPath:', currentPath);
	
	return <div className="Footer" ref={ setRef }>
			<span className="current-page">{ currentPath !== "/" ? currentPath.replace(/^\//, '').split("/").join(".") : <span className='bybyn'>
					<span title="Bisaya"><strong>ᜊᜒᜐᜌᜓ</strong></span>&nbsp;|&nbsp;
				<span title="Filipino">ᜉᜒᜎᜒᜉᜒᜈᜓ</span>
				</span> }</span>
		{/*<SocialMediaLinks iconSize={ 28 } />*/}
	</div>
}

export default Footer;
