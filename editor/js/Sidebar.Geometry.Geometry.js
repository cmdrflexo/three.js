Sidebar.Geometry.Geometry = function ( signals ) {

	var container = new UI.Panel();

	// vertices

	var verticesRow = new UI.Panel();
	var vertices = new UI.Text().setColor( '#444' ).setFontSize( '12px' );

	verticesRow.add( new UI.Text( 'Vertices' ).setWidth( '90px' ) );
	verticesRow.add( vertices );

	container.add( verticesRow );

	// faces

	var facesRow = new UI.Panel();
	var faces = new UI.Text().setColor( '#444' ).setFontSize( '12px' );

	facesRow.add( new UI.Text( 'Faces' ).setWidth( '90px' ) );
	facesRow.add( faces );

	container.add( facesRow );

	//

	var update = function ( object ) {

		var geometry = object.geometry;

		if ( geometry instanceof THREE.Geometry ) { 

			container.setDisplay( 'block' );

			vertices.setValue( geometry.vertices.length );
			faces.setValue( geometry.faces.length );

		} else {

			container.setDisplay( 'none' );

		}

	};

	signals.objectSelected.add( update );
	signals.objectChanged.add( update );

	return container;

}
