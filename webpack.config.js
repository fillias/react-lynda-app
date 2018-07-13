
const path = require('path');
console.log('__dirname: ', __dirname);

/* tady je konfigurace webpacku, 
** bez konfigurace je default entry 'src' folder
** default output je dist folder
** defalut filename je stejne jako vstupni filename

** devServer -- je konfigurace webpack-dev-server
** ten se bude automaticky updatovat a buildit 
** kdykoliv zmenim source file
** contentBase je adresar odkud ma server servrit


** module:  specifikuje jak se budou moduly chovat
** 		rules:  specifikuje jak se budou moduly chovat 
				kdyz jsou vytvorne uvnitr webpacku
			test: tady musime babelu rict jaky druhy souboru 
				  ma brat tak, ze dodame testovaci podminku
			exclude: vezme to kazdy js v projektu, proto musime
				     pridat exclude
			use:  tady modulu rikame co ma delat, 
				  bere to array of loaders

** konfigurace babelu je v .babelrc
** tam je klic "presets", a v nem natahnem "env" preset


*/

/***
historyApiFallback: true,
a
publicPath: '/'
je kvuli routovani v react router, jinak nefungovalo:
https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url/43212553
https://tylermcginnis.com/react-router-cannot-get-url-refresh/
*/

module.exports = {
	entry: path.resolve(__dirname, 'src'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	devServer: {
		port: 3000,
		contentBase: path.resolve(__dirname, 'build'),
		historyApiFallback: true,
	},
	
	watchOptions: {
	    aggregateTimeout: 300,
	    poll: 1000, // How often check for changes (in milliseconds)
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node-modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: [
		          {
		            loader: "style-loader" // creates style nodes from JS strings
		          },
		          {
		            loader: "css-loader" // translates CSS into CommonJS
		          }
		        ]

			
			},
			{
				test: /\.scss$/,
				use: [
		          {
		            loader: "style-loader" // creates style nodes from JS strings
		          },
		          {
		            loader: "css-loader" // translates CSS into CommonJS
		          },
		          {
		            loader: "sass-loader" // compiles Sass to CSS
		          }
		        ]
			}

		]
	}
};

/* autoprefixer blbne v tyhle verzi webpacku
		          {
		            loader: "autoprefixer-loader" 
		          },
		          */