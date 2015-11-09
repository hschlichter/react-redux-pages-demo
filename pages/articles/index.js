import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from '../../shared/store/serverstore';
import { addData } from '../../shared/actions/dummy';
import reducers from './reducers';
import Layout from './components/layout';

let router = express.Router();

router.get('/articles/:id', function(req, res, next) {
	const store = configureStore(reducers);

	store.dispatch(addData());

	let main = ReactDOM.renderToString(
		<Provider store={store}>
			<Layout articleId={req.params.id}/>
		</Provider>
	);

	let context = {
		params: req.params,
		state: store.getState()
	};

	res.render('basetemplate', {
		title: 'Demo - Events',
		context: JSON.stringify(context),
		bundle: '/js/articles.bundle.js',
		main: main
	});
});

module.exports = router;
