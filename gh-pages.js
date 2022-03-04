import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/qscacheri/fetal-position.git', // Update to point to your repository
		user: {
			name: 'Quin Scacheri', // update to use your name
			email: 'quin.scacheri@nyu.edu' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
