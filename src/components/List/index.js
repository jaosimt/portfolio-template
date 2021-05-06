import React, { Component } from "react";
import './list.scss';
import Tiles from "../Tiles";

class List extends Component {
	componentDidMount() {
		const { history } = this.props;
		const { logHistory } = this.props;
		logHistory();
		
		
		if (history.location.hash) {
			const target = document.querySelector(history.location.hash);
			if (target) setTimeout(() => {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
					inline: 'center'
				});
			}, 300);
		} else window.scrollTo({ top: 0 });
	}
	
	render() {
		const { offset: o, history, logHistory, data, title, banner } = this.props;
		const offset = o.header + o.footer + o.margin;
		
		return <div
			className={ 'List' }
			style={ {
				minHeight: `calc(100vh - ${ offset }px)`
			} }>
			<div className="banner text-shadow-white" style={ {
				backgroundImage: `url(${ banner })`
			} }>{ title }</div>
			<div className="list-items">
				{
					data.map((w, i) => <Tiles key={ i } data={ w } history={ history } logHistory={ logHistory } />)
				}
			</div>
		</div>
	}
}

export default List;