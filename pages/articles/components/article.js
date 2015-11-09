'use strict';

import React, { Component } from 'react';

export default class Article extends Component {
	render() {
		if (!this.props.data) {
			return (
				<p>Undefined!</p>
			)
		}

		const texts = this.props.data.texts.map((elem, index) => {
			return (
				<div key={index} className="o-layout__item u-width-1\/1 u-width-4\/5\@m u-width-3\/4\@l u-width-2\/3\@h ">
					<div className="c-box">
						<p>{elem}</p>
					</div>
				</div>
			)
		});

		return (
			<div className="c-box c-box--scroll">
				<div className="o-layout o-layout--center-horizontal">
					<div className="c-box">
						<h3>{this.props.data.title}</h3>
					</div>
				</div>
				<div className="o-layout o-layout--vertical">
					{texts}
				</div>
			</div>
		);
	}
}