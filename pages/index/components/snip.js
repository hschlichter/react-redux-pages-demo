'use strict';

import React, { Component } from 'react';

export default class Snip extends Component {
	render() {
		const link = '/articles/' + this.props.article.id;
		return <div className="o-pack__item u-width-1\/2">
			<h3>{this.props.article.title}</h3>
			<p>{this.props.article.short}</p>
			<a className="c-button" href={link}>Open</a>
		</div>
	}
}
