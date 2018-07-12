build prostredi s webpack a babelem a react, kompiluje i css 

apka na pocitani dnu na lyzich

webpack buildi dev i produkci, viz package.json
babel transpiluje do es5


pouziti:

	npm run start 
	- spusti dev server na portu 3000 co servri obsah adresare 'build'. Kouka to do adresare 'src' a bere js file odtamtad. S kazdym save reloadne server i aplikaci

	npm run build
	- zbuildi aplikaci, transpiluje do es5, minifikuje a ulozi jako bundle.js v adresari build


dev dependence:

    "babel-core": primarni transpiler

    "babel-loader": zarizuje import a export js files jako kompinenty a moduly

    "babel-preset-env": pridava babelu support es6 funkci na zaklade toho a toho browseru

    "webpack": 

    "webpack-cli": cli

    "webpack-dev-server": devovy web server

dependence
 react-icons
