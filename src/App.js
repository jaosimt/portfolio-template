import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import ContentContainer from "./components/ContentContainer";
import './App.scss';

function App() {
	const [ theme, setTheme ] = useState(localStorage.getItem('SIM_PORTFOLIO_THEME') || 'dark');
	const themeChangeHandler = e => {
		const newTheme = e.target.value || 'light';
		setTheme(newTheme);
		localStorage.setItem('SIM_PORTFOLIO_THEME', newTheme);
	};
	
	return (
		<div className={ `App ${ theme }` }>
			<Router>
				<ContentContainer
					theme={ theme }
					onThemeChange={ themeChangeHandler } />
			</Router>
		</div>
	);
}

export default App;
