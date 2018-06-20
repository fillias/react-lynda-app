
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

module.exports = {
	entry: path.resolve(__dirname, 'app'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	devServer: {
		port: 3000,
		contentBase: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node-modules/,
				use: ['babel-loader']
			}
		]
	}
};
