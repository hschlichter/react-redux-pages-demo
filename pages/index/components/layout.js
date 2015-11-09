import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snip from './snip';

export default class Layout extends Component {
	render() {
		return (
			<div>
				<header className="c-box c-box--dark">
					<a className="c-box--dark" href="/"><strong>React Redux Pages Demo</strong></a>
				</header>
				<div className="c-box c-box--scroll">
					<div className="o-layout o-layout--center-horizontal">
						<div className="c-box">
							<p>{this.props.dummy.welcome}</p>
						</div>
					</div>
					<div className="c-box">
						<div className="o-pack o-pack--equal o-pack--top">
							<Snip article={this.props.dummy.articles[0]} />
							<Snip article={this.props.dummy.articles[1]} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect((state) => {
	return {
		dummy: state.dummy
	};
})(Layout);
