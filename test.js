( function() {
	

	var dynamicImportSource, config, src,
		FILEPATH = "/test/jquery.js",
		activeScript = [].slice.call( document.getElementsByTagName( "script" ), -1 )[ 0 ],
		parentUrl = activeScript && activeScript.src ?
			activeScript.src.replace( /[?#].*/, "" ) + FILEPATH.replace( /[^/]+/g, ".." ) + "/" :
			"../",
		QUnit = window.QUnit,
		require = window.require;

	function getQUnitConfig() {
		var config = Object.create( null );

		
		if ( !QUnit ) {
			config.dev = true;
		} else {

			
			QUnit.config.urlConfig.forEach( function( entry ) {
				config[ entry.id ] = QUnit.config[ entry.id ] != null ?
					QUnit.config[ entry.id ] :
					QUnit.urlParams[ entry.id ];
			} );
		}

		return config;
	}

	
	if ( QUnit ) {
		QUnit.config.urlConfig.push( {
			id: "esmodules",
			label: "Load as modules",
			tooltip: "Load the jQuery module file (and its dependencies)"
		}, {
			id: "amd",
			label: "Load with AMD",
			tooltip: "Load the AMD jQuery file (and its dependencies)"
		}, {
			id: "dev",
			label: "Load unminified",
			tooltip: "Load the development (unminified) jQuery file"
		} );
	}

	config = getQUnitConfig();

	src = config.dev ?
		"dist/jquery.js" :
		"dist/jquery.min.js";

	
	if ( config.esmodules && QUnit ) {

		
		dynamicImportSource = "" +
			"import( `${ parentUrl }src/jquery.js` )\n" +
			"	.then( ( { default: jQuery } ) => {\n" +
			"		window.jQuery = jQuery;\n" +
			"		if ( typeof loadTests === \"function\" ) {\n" +
			"			// Include tests if specified\n" +
			"			loadTests();\n" +
			"		}\n" +
			"	} )\n" +
			"	.catch( error => {\n" +
			"		console.error( error );\n" +
			"		QUnit.done();\n" +
			"	} );";

		eval( dynamicImportSource );

	// Apply similar treatment for AMD modules
	} else if ( config.amd && QUnit ) {
		require.config( {
			baseUrl: parentUrl
		} );
		src = "amd/jquery";

		// Include tests if specified
		if ( typeof loadTests !== "undefined" ) {
			require( [ src ], loadTests );
		} else {
			require( [ src ] );
		}

	// Otherwise, load synchronously
	} else {
		document.write( "<script id='jquery-js' nonce='jquery+hardcoded+nonce' src='" + parentUrl + src + "'><\x2Fscript>" );
	}

} )();