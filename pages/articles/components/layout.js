'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from './article';

export default class Layout extends Component {
	render() {
		let data = this.props.dummy.articles.find((elem, i, arr) => {
			if (elem.id == this.props.articleId) {
				return elem;
			}
		});

		return (
			<div>
				<header className="c-box c-box--dark">
					<a className="c-box--dark" href="/"><strong>React Redux Pages Demo</strong></a>
				</header>
				<Article data={data}/>
			</div>
		);
	}
}

export default connect((state) => {
	return {
		dummy: state.dummy
	};
})(Layout);
