/* Object part of VImage class
 *
 * 30/12/14
 * 	- allow set enum value from string
 * 10/6/16
 * 	- missing implementation of VImage::write()
 * 11/6/16
 * 	- added arithmetic assignment overloads, += etc.
 */

/*

    Copyright (C) 1991-2001 The National Gallery

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
    02110-1301  USA

 */

/*

    These files are distributed with VIPS - http://www.vips.ecs.soton.ac.uk

 */

#ifdef HAVE_CONFIG_H
#include <config.h>
#endif /*HAVE_CONFIG_H*/

#include <vips/vips8>

#include <vips/debug.h>

/*
#define VIPS_DEBUG
#define VIPS_DEBUG_VERBOSE
 */

VIPS_NAMESPACE_START

/**
 * \namespace vips
 *
 * General docs for the vips namespace.
 */

std::vector<double>
to_vectorv( int n, ... )
{
	std::vector<double> vector( n );
	va_list ap;

	va_start( ap, n );
	for( int i = 0; i < n; i++ )
		vector[i] = va_arg( ap, double );
	va_end( ap );

	return( vector );
}

std::vector<double>
to_vector( double value )
{
	return( to_vectorv( 1, value ) );
}

std::vector<double>
to_vector( int n, double array[] )
{
	std::vector<double> vector( n );

	for( int i = 0; i < n; i++ )
		vector[i] = array[i];

	return( vector );
}

std::vector<double>
negate( std::vector<double> vector )
{
	std::vector<double> new_vector( vector.size() );

	for( std::vector<double>::size_type i = 0; i < vector.size(); i++ )
		new_vector[i] = vector[i] * -1;

	return( new_vector );
}

std::vector<double>
invert( std::vector<double> vector )
{
	std::vector<double> new_vector( vector.size() );

	for( std::vector<double>::size_type i = 0; i < vector.size(); i++ )
		new_vector[i] = 1.0 / vector[i];

	return( new_vector );
}

VOption::~VOption()
{
	std::list<Pair *>::iterator i;

	for( i = options.begin(); i != options.end(); ++i )
		delete *i;
}

// input bool
VOption *
VOption::set( const char *name, bool value )
{
	Pair *pair = new Pair( name );

	pair->input = true;
	g_value_init( &pair->value, G_TYPE_BOOLEAN );
	g_value_set_boolean( &pair->value, value );
	options.push_back( pair );

	return( this );
}

// input int ... this path is used for enums as well
VOption *
VOption::set( const char *name, int value )
{
	Pair *pair = new Pair( name );

	pair->input = true;
	g_value_init( &pair->value, G_TYPE_INT );
	g_value_set_int( &pair->value, value );
	options.push_back( pair );

	return( this );
}

// input guint64
VOption *
VOption::set( const char *name, guint64 value )
{
	Pair *pair = new Pair( name );

	pair->input = true;
	g_value_init( &pair->value, G_TYPE_UINT64 );
	g_value_set_uint64( &pair->value, value );
	options.push_back( pair );

	return( this );
}

// input double
VOption *
VOption::set( const char *name, double value )
{
	Pair *pair = new Pair( name );

	pair->input = true;
	g_value_init( &pair->value, G_TYPE_DOUBLE );
	g_value_set_double( &pair->value, value );
	options.push_back( pair );

	return( this );
}

VOption *
VOption::set( const char *name, const char *value )
{
	Pair *pair = new Pair( name );

	pair->input = true;
	g_value_init( &pair->value, G_TYPE_STRING );
	g_value_set_string( &pair->value, value );
	options.push_back( pair );

	return( this );
}

// input vips object (image, source, target, etc. etc.)
VOption *
VOption::set( const char *name, const VObject value )
{
	Pair *pair = new Pair( name );
	VipsObject *object = value.get_object();
	GType type = G_OBJECT_TYPE( object );

	pair->input = true;
	g_value_init( &pair->value, type );
	g_value_set_object( &pair->value, object );
	options.push_back( pair );

	return( this );
}

// input int array
VOption *
VOption::set( const char *name, std::vector<int> value )
{
	Pair *pair = new Pair( name );

	int *array;

	pair->input = true;

	g_value_init( &pair->value, VIPS_TYPE_ARRAY_INT );
	vips_value_set_array_int( &pair->value, NULL,
		static_cast< int >( value.size() ) );
	array = vips_value_get_array_int( &pair->value, NULL );

	for( std::vector<double>::size_type i = 0; i < value.size(); i++ ) 
		array[i] = value[i];

	options.push_back( pair );

	return( this );
}

// input double array
VOption *
VOption::set( const char *name, std::vector<double> value )
{
	Pair *pair = new Pair( name );

	double *array;

	pair->input = true;

	g_value_init( &pair->value, VIPS_TYPE_ARRAY_DOUBLE );
	vips_value_set_array_double( &pair->value, NULL,
		static_cast< int >( value.size() ) );
	array = vips_value_get_array_double( &pair->value, NULL );

	for( std::vector<double>::size_type i = 0; i < value.size(); i++ ) 
		array[i] = value[i];

	options.push_back( pair );

	return( this );
}

// input image array
VOption *
VOption::set( const char *name, std::vector<VImage> value )
{
	Pair *pair = new Pair( name );

	VipsImage **array;

	pair->input = true;

	g_value_init( &pair->value, VIPS_TYPE_ARRAY_IMAGE );
	vips_value_set_array_image( &pair->value,
		static_cast< int >( value.size() ) );
	array = vips_value_get_array_image( &pair->value, NULL );

	for( std::vector<double>::size_type i = 0; i < value.size(); i++ ) {
		VipsImage *vips_image = value[i].get_image();

		array[i] = vips_image;
		g_object_ref( vips_image ); 
	}

	options.push_back( pair );

	return( this );
}

// input blob
VOption *
VOption::set( const char *name, VipsBlob *value )
{
	Pair *pair = new Pair( name );

	pair->input = true;
	g_value_init( &pair->value, VIPS_TYPE_BLOB );
	g_value_set_boxed( &pair->value, value );
	options.push_back( pair );

	return( this );
}

// output bool
VOption *
VOption::set( const char *name, bool *value )
{
	Pair *pair = new Pair( name );

	pair->input = false;
	pair->vbool = value;
	g_value_init( &pair->value, G_TYPE_BOOLEAN );

	options.push_back( pair );

	return( this );
}

// output int
VOption *
VOption::set( const char *name, int *value )
{
	Pair *pair = new Pair( name );

	pair->input = false;
	pair->vint = value;
	g_value_init( &pair->value, G_TYPE_INT );

	options.push_back( pair );

	return( this );
}

// output double
VOption *
VOption::set( const char *name, double *value )
{
	Pair *pair = new Pair( name );

	pair->input = false;
	pair->vdouble = value;
	g_value_init( &pair->value, G_TYPE_DOUBLE );

	options.push_back( pair );

	return( this );
}

// output image
VOption *
VOption::set( const char *name, VImage *value )
{
	Pair *pair = new Pair( name );

	pair->input = false;
	pair->vimage = value;
	g_value_init( &pair->value, VIPS_TYPE_IMAGE );

	options.push_back( pair );

	return( this );
}

// output doublearray
VOption *
VOption::set( const char *name, std::vector<double> *value )
{
	Pair *pair = new Pair( name );

	pair->input = false;
	pair->vvector = value;
	g_value_init( &pair->value, VIPS_TYPE_ARRAY_DOUBLE );

	options.push_back( pair );

	return( this );
}

// output blob
VOption *
VOption::set( const char *name, VipsBlob **value )
{
	Pair *pair = new Pair( name );

	pair->input = false;
	pair->vblob = value;
	g_value_init( &pair->value, VIPS_TYPE_BLOB );

	options.push_back( pair );

	return( this );
}

// just g_object_set_property(), except we allow set enum from string
static void
set_property( VipsObject *object, const char *name, const GValue *value )
{
	VipsObjectClass *object_class = VIPS_OBJECT_GET_CLASS( object );
	GType type = G_VALUE_TYPE( value );

	GParamSpec *pspec;
	VipsArgumentClass *argument_class;
	VipsArgumentInstance *argument_instance;

	if( vips_object_get_argument( object, name,
		&pspec, &argument_class, &argument_instance ) ) {
		g_warning( "%s", vips_error_buffer() );
		vips_error_clear();
		return;
	}

	if( G_IS_PARAM_SPEC_ENUM( pspec ) &&
		type == G_TYPE_STRING ) {
		GType pspec_type = G_PARAM_SPEC_VALUE_TYPE( pspec );

		int enum_value;
		GValue value2 = { 0 };

		if( (enum_value = vips_enum_from_nick( object_class->nickname,
			pspec_type, g_value_get_string( value ) )) < 0 ) {
			g_warning( "%s", vips_error_buffer() );
			vips_error_clear();
			return;
		}

		g_value_init( &value2, pspec_type );
		g_value_set_enum( &value2, enum_value );
		g_object_set_property( G_OBJECT( object ), name, &value2 );
		g_value_unset( &value2 );
	}
	else
		g_object_set_property( G_OBJECT( object ), name, value );
}

// walk the options and set props on the operation
void
VOption::set_operation( VipsOperation *operation )
{
	std::list<Pair *>::iterator i;

	for( i = options.begin(); i != options.end(); ++i )
		if( (*i)->input ) {
#ifdef VIPS_DEBUG_VERBOSE
			printf( "set_operation: " );
			vips_object_print_name( VIPS_OBJECT( operation ) );
			char *str_value =
				g_strdup_value_contents( &(*i)->value );
			printf( ".%s = %s\n", (*i)->name, str_value );
			g_free( str_value );
#endif /*VIPS_DEBUG_VERBOSE*/

			set_property( VIPS_OBJECT( operation ),
				(*i)->name, &(*i)->value );
		}
}

// walk the options and fetch any requested outputs
void
VOption::get_operation( VipsOperation *operation )
{
	std::list<Pair *>::iterator i;

	for( i = options.begin(); i != options.end(); ++i )
		if( ! (*i)->input ) {
			const char *name = (*i)->name;

			g_object_get_property( G_OBJECT( operation ),
				name, &(*i)->value );

#ifdef VIPS_DEBUG_VERBOSE
			printf( "get_operation: " );
			vips_object_print_name( VIPS_OBJECT( operation ) );
			char *str_value = g_strdup_value_contents(
				&(*i)->value );
			printf( ".%s = %s\n", name, str_value );
			g_free( str_value );
#endif /*VIPS_DEBUG_VERBOSE*/

			GValue *value = &(*i)->value;
			GType type = G_VALUE_TYPE( value );

			if( type == VIPS_TYPE_IMAGE ) {
				// rebox object
				VipsImage *image = VIPS_IMAGE(
					g_value_get_object( value ) ); 
				*((*i)->vimage) = VImage( image );
			}
			else if( type == G_TYPE_INT )
				*((*i)->vint) = g_value_get_int( value );
			else if( type == G_TYPE_BOOLEAN )
				*((*i)->vbool) = g_value_get_boolean( value );
			else if( type == G_TYPE_DOUBLE )
				*((*i)->vdouble) = g_value_get_double( value );
			else if( type == VIPS_TYPE_ARRAY_DOUBLE ) {
				int length;
				double *array =
					vips_value_get_array_double( value,
					&length );

				((*i)->vvector)->resize( length );
				for( int j = 0; j < length; j++ )
					(*((*i)->vvector))[j] = array[j];
			}
			else if( type == VIPS_TYPE_BLOB ) {
				// our caller gets a reference
				*((*i)->vblob) =
					(VipsBlob *) g_value_dup_boxed( value );
			}
		}
}

void
VImage::call_option_string( const char *operation_name,
	const char *option_string, VOption *options )
{
	VipsOperation *operation;

	VIPS_DEBUG_MSG( "call_option_string: starting for %s ...\n",
		operation_name );

	if( !(operation = vips_operation_new( operation_name )) ) {
		delete options;
		throw( VError() );
	}

	/* Set str options before vargs options, so the user can't
	 * override things we set deliberately.
	 */
	if( option_string &&
		vips_object_set_from_string( VIPS_OBJECT( operation ),
			option_string ) ) {
		vips_object_unref_outputs( VIPS_OBJECT( operation ) );
		g_object_unref( operation );
		delete options;
		throw( VError() );
	}

	if( options )
		options->set_operation( operation );

	/* Build from cache.
	 */
	if( vips_cache_operation_buildp( &operation ) ) {
		vips_object_unref_outputs( VIPS_OBJECT( operation ) );
		g_object_unref( operation );
		delete options;
		throw( VError() );
	}

	/* Walk args again, writing output.
	 */
	if( options )
		options->get_operation( operation );

	/* We're done with options!
	 */
	delete options;

	/* The operation we have built should now have been reffed by
	 * one of its arguments or have finished its work. Either
	 * way, we can unref.
	 */
	g_object_unref( operation );
}

void
VImage::call( const char *operation_name, VOption *options )
{
	call_option_string( operation_name, NULL, options );
}

VImage
VImage::new_from_file( const char *name, VOption *options )
{
	char filename[VIPS_PATH_MAX];
	char option_string[VIPS_PATH_MAX];
	const char *operation_name;

	VImage out;

	vips__filename_split8( name, filename, option_string );
	if( !(operation_name = vips_foreign_find_load( filename )) ) {
		delete options;
		throw VError();
	}

	call_option_string( operation_name, option_string,
		(options ? options : VImage::option())->
			set( "filename", filename )->
			set( "out", &out ) );

	return( out );
}

VImage
VImage::new_from_buffer( const void *buf, size_t len, const char *option_string,
	VOption *options )
{
	const char *operation_name;
	VipsBlob *blob;
	VImage out;

	if( !(operation_name = vips_foreign_find_load_buffer( buf, len )) ) {
		delete options;
		throw( VError() );
	}

	/* We don't take a copy of the data or free it.
	 */
	blob = vips_blob_new( NULL, buf, len );
	options = (options ? options : VImage::option())->
		set( "buffer", blob )->
		set( "out", &out );
	vips_area_unref( VIPS_AREA( blob ) );

	call_option_string( operation_name, option_string, options );

	return( out );
}

VImage
VImage::new_from_buffer( const std::string &buf, const char *option_string,
	VOption *options )
{
	return( new_from_buffer( buf.c_str(), buf.size(),
		option_string, options ) );
}

VImage
VImage::new_from_source( VSource source, const char *option_string,
	VOption *options )
{
	const char *operation_name;
	VImage out;

	if( !(operation_name = vips_foreign_find_load_source(
		source.get_source() )) ) {
		delete options;
		throw( VError() );
	}

	options = (options ? options : VImage::option())->
		set( "source", source )->
		set( "out", &out );

	call_option_string( operation_name, option_string, options );

	return( out );
}

VImage 
VImage::new_from_memory_steal( void *data, size_t size,
	int width, int height, int bands, VipsBandFormat format )
{
	VipsImage *image;

	if( !(image = vips_image_new_from_memory( data, size, 
		width, height, bands, format )) )
		throw( VError() );

	g_signal_connect( image, "postclose",
		G_CALLBACK( vips_image_free_buffer ), data);

	return( VImage( image ) ); 
}

VImage
VImage::new_matrix( int width, int height )
{
	return( VImage( vips_image_new_matrix( width, height ) ) );
}

VImage
VImage::new_matrixv( int width, int height, ... )
{
	VImage matrix = new_matrix( width, height );
	VipsImage *vips_matrix = matrix.get_image();

	va_list ap;

	va_start( ap, height );
	for( int y = 0; y < height; y++ )
		for( int x = 0; x < width; x++ )
			*VIPS_MATRIX( vips_matrix, x, y ) =
				va_arg( ap, double );
	va_end( ap );

	return( matrix );
}

VImage
VImage::write( VImage out ) const
{
	if( vips_image_write( this->get_image(), out.get_image() ) )
		throw VError();

	return( out );
}

void
VImage::write_to_file( const char *name, VOption *options ) const
{
	char filename[VIPS_PATH_MAX];
	char option_string[VIPS_PATH_MAX];
	const char *operation_name;

	vips__filename_split8( name, filename, option_string );
	if( !(operation_name = vips_foreign_find_save( filename )) ) {
		delete options;
		throw VError();
	}

	call_option_string( operation_name, option_string,
		(options ? options : VImage::option())->
			set( "in", *this )->
			set( "filename", filename ) );
}

void
VImage::write_to_buffer( const char *suffix, void **buf, size_t *size,
	VOption *options ) const
{
	char filename[VIPS_PATH_MAX];
	char option_string[VIPS_PATH_MAX];
	const char *operation_name;
	VipsBlob *blob;

	/* Save with the new target API if we can. Fall back to the older
	 * mechanism in case the saver we need has not been converted yet.
	 *
	 * We need to hide any errors from this first phase.
	 */
	vips__filename_split8( suffix, filename, option_string );

	vips_error_freeze();
	operation_name = vips_foreign_find_save_target( filename );
	vips_error_thaw();

	if( operation_name ) {
		VTarget target = VTarget::new_to_memory();

		call_option_string( operation_name, option_string,
			(options ? options : VImage::option())->
				set( "in", *this )->
				set( "target", target ) );

		g_object_get( target.get_target(), "blob", &blob, (void *) NULL );
	}
	else if( (operation_name = vips_foreign_find_save_buffer( filename )) ) {
		call_option_string( operation_name, option_string,
			(options ? options : VImage::option())->
				set( "in", *this )->
				set( "buffer", &blob ) );
	}
	else {
		delete options;
		throw VError();
	}

	if( blob ) {
		if( buf ) {
			*buf = VIPS_AREA( blob )->data;
			VIPS_AREA( blob )->free_fn = NULL;
		}
		if( size )
			*size = VIPS_AREA( blob )->length;

		vips_area_unref( VIPS_AREA( blob ) );
	}
}

void
VImage::write_to_target( const char *suffix, VTarget target,
	VOption *options ) const
{
	char filename[VIPS_PATH_MAX];
	char option_string[VIPS_PATH_MAX];
	const char *operation_name;

	vips__filename_split8( suffix, filename, option_string );
	if( !(operation_name = vips_foreign_find_save_target( filename )) ) {
		delete options;
		throw VError();
	}

	call_option_string( operation_name, option_string,
		(options ? options : VImage::option())->
			set( "in", *this )->
			set( "target", target ) );
}

VRegion
VImage::region() const
{
	return VRegion::new_from_image( *this );
}

VRegion
VImage::region( VipsRect *rect ) const
{
	VRegion region = VRegion::new_from_image( *this );

	region.prepare( rect );

	return region;
}

VRegion
VImage::region( int left, int top, int width, int height ) const
{
	VRegion region = VRegion::new_from_image( *this );

	region.prepare( left, top, width, height );

	return region;
}

#include "vips-operators.cpp"

std::vector<VImage>
VImage::bandsplit( VOption *options ) const
{
	std::vector<VImage> b;
	b.reserve(bands());

	for( int i = 0; i < bands(); i++ )
		b.push_back( extract_band( i ) );

	return( b );
}

VImage
VImage::bandjoin( VImage other, VOption *options ) const
{
	VImage v[2] = { *this, other };
	std::vector<VImage> vec( v, v + VIPS_NUMBER( v ) );

	return( bandjoin( vec, options ) );
}

VImage
VImage::composite( VImage other, VipsBlendMode mode, VOption *options ) const
{
	VImage v[2] = { *this, other };
	std::vector<VImage> ivec( v, v + VIPS_NUMBER( v ) );
	int m[1] = { static_cast<int>( mode ) };
	std::vector<int> mvec( m, m + VIPS_NUMBER( m ) );

	return( composite( ivec, mvec, options ) );
}

std::complex<double>
VImage::minpos( VOption *options ) const
{
	double x, y;

	(void) min(
		(options ? options : VImage::option()) ->
			set( "x", &x ) ->
			set( "y", &y ) );

	return( std::complex<double>( x, y ) );
}

std::complex<double>
VImage::maxpos( VOption *options ) const
{
	double x, y;

	(void) max(
		(options ? options : VImage::option()) ->
			set( "x", &x ) ->
			set( "y", &y ) );

	return( std::complex<double>( x, y ) );
}

// Operator overloads

VImage
VImage::operator[]( int index ) const
{
	return( this->extract_band( index ) );
}

std::vector<double>
VImage::operator()( int x, int y ) const
{
	return( this->getpoint( x, y ) );
}

VImage
operator+( const VImage a, const VImage b )
{
	return( a.add( b ) );
}

VImage
operator+( double a, const VImage b )
{
	return( b.linear( 1.0, a ) );
}

VImage
operator+( const VImage a, double b )
{
	return( a.linear( 1.0, b ) );
}

VImage
operator+( const std::vector<double> a, const VImage b )
{
	return( b.linear( 1.0, a ) );
}

VImage
operator+( const VImage a, const std::vector<double> b )
{
	return( a.linear( 1.0, b ) );
}

VImage &
operator+=( VImage &a, const VImage b )
{
	return( a = a + b );
}

VImage &
operator+=( VImage &a, const double b )
{
	return( a = a + b );
}

VImage &
operator+=( VImage &a, const std::vector<double> b )
{
	return( a = a + b );
}

VImage
operator-( const VImage a, const VImage b )
{
	return( a.subtract( b ) );
}

VImage
operator-( double a, const VImage b )
{
	return( b.linear( -1.0, a ) );
}

VImage
operator-( const VImage a, double b )
{
	return( a.linear( 1.0, -b ) );
}

VImage
operator-( const std::vector<double> a, const VImage b )
{
	return( b.linear( -1.0, a ) );
}

VImage
operator-( const VImage a, const std::vector<double> b )
{
	return( a.linear( 1.0, vips::negate( b ) ) );
}

VImage &
operator-=( VImage &a, const VImage b )
{
	return( a = a - b );
}

VImage &
operator-=( VImage &a, const double b )
{
	return( a = a - b );
}

VImage &
operator-=( VImage &a, const std::vector<double> b )
{
	return( a = a - b );
}

VImage
operator-( const VImage a )
{
	return( a * -1 );
}

VImage
operator*( const VImage a, const VImage b )
{
	return( a.multiply( b ) );
}

VImage
operator*( double a, const VImage b )
{
	return( b.linear( a, 0.0 ) );
}

VImage
operator*( const VImage a, double b )
{
	return( a.linear( b, 0.0 ) );
}

VImage
operator*( const std::vector<double> a, const VImage b )
{
	return( b.linear( a, 0.0 ) );
}

VImage
operator*( const VImage a, const std::vector<double> b )
{
	return( a.linear( b, 0.0 ) );
}

VImage &
operator*=( VImage &a, const VImage b )
{
	return( a = a * b );
}

VImage &
operator*=( VImage &a, const double b )
{
	return( a = a * b );
}

VImage &
operator*=( VImage &a, const std::vector<double> b )
{
	return( a = a * b );
}

VImage
operator/( const VImage a, const VImage b )
{
	return( a.divide( b ) );
}

VImage
operator/( double a, const VImage b )
{
	return( b.pow( -1.0 ).linear( a, 0.0 ) );
}

VImage
operator/( const VImage a, double b )
{
	return( a.linear( 1.0 / b, 0.0 ) );
}

VImage
operator/( const std::vector<double> a, const VImage b )
{
	return( b.pow( -1.0 ).linear( a, 0.0 ) );
}

VImage
operator/( const VImage a, const std::vector<double> b )
{
	return( a.linear( vips::invert( b ), 0.0 ) );
}

VImage &
operator/=( VImage &a, const VImage b )
{
	return( a = a / b );
}

VImage &
operator/=( VImage &a, const double b )
{
	return( a = a / b );
}

VImage &
operator/=( VImage &a, const std::vector<double> b )
{
	return( a = a / b );
}

VImage
operator%( const VImage a, const VImage b )
{
	return( a.remainder( b ) );
}

VImage
operator%( const VImage a, const double b )
{
	return( a.remainder_const( to_vector( b ) ) );
}

VImage
operator%( const VImage a, const std::vector<double> b )
{
	return( a.remainder_const( b ) );
}

VImage &
operator%=( VImage &a, const VImage b )
{
	return( a = a % b );
}

VImage &
operator%=( VImage &a, const double b )
{
	return( a = a % b );
}

VImage &
operator%=( VImage &a, const std::vector<double> b )
{
	return( a = a % b );
}

VImage
operator<( const VImage a, const VImage b )
{
	return( a.relational( b, VIPS_OPERATION_RELATIONAL_LESS ) );
}

VImage
operator<( const double a, const VImage b )
{
	return( b.relational_const( VIPS_OPERATION_RELATIONAL_MORE,
		to_vector( a ) ) );
}

VImage
operator<( const VImage a, const double b )
{
	return( a.relational_const( VIPS_OPERATION_RELATIONAL_LESS,
		to_vector( b ) ) ); 
}

VImage
operator<( const std::vector<double> a, const VImage b )
{
	return( b.relational_const( VIPS_OPERATION_RELATIONAL_MORE,
		a ) ); 
}

VImage
operator<( const VImage a, const std::vector<double> b )
{
	return( a.relational_const( VIPS_OPERATION_RELATIONAL_LESS,
		b ) );
}

VImage
operator<=( const VImage a, const VImage b )
{
	return( a.relational( b, VIPS_OPERATION_RELATIONAL_LESSEQ ) );
}

VImage
operator<=( const double a, const VImage b )
{
	return( b.relational_const( VIPS_OPERATION_RELATIONAL_MOREEQ,
		to_vector( a ) ) ); 
}

VImage
operator<=( const VImage a, const double b )
{
	return( a.relational_const( VIPS_OPERATION_RELATIONAL_LESSEQ,
		to_vector( b ) ) ); 
}

VImage
operator<=( const std::vector<double> a, const VImage b )
{
	return( b.relational_const( VIPS_OPERATION_RELATIONAL_MOREEQ,
		a ) );
}

VImage
operator<=( const VImage a, const std::vector<double> b )
{
	return( a.relational_const( VIPS_OPERATION_RELATIONAL_LESSEQ,
		b ) );
}

VImage
operator>( const VImage a, const VImage b )
{
	return( a.relational( b, VIPS_OPERATION_RELATIONAL_MORE ) );
}

VImage
operator>( const double a, const VImage b )
{
	return( b.relational_const( VIPS_OPERATION_RELATIONAL_LESS,
		to_vector( a ) ) );
}

VImage
operator>( const VImage a, const double b )
{
	return( a.relational_const( VIPS_OPERATION_RELATIONAL_MORE,
		to_vector( b ) ) );
}

VImage
operator>( const std::vector<double> a, const VImage b )
{
	return( b.relational_const( VIPS_OPERATION_RELATIONAL_LESS,
		a ) );
}

VImage
operator>( const VImage a, const std::vector<double> b )
{
	return( a.relational_const( VIPS_OPERATION_RELATIONAL_MORE,
		b ) );
}

VImage
operator>=( const VImage a, const VImage b )
{
	return( a.relational( b, VIPS_OPERATION_RELATIONAL_MOREEQ ) );
}

VImage
operator>=( const double a, const VImage b )
{
	return( b.relational_const( VIPS_OPERATION_RELATIONAL_LESSEQ,
		to_vector( a ) ) ); 
}

VImage
operator>=( const VImage a, const double b )
{
	return( a.relational_const( VIPS_OPERATION_RELATIONAL_MOREEQ,
		to_vector( b ) ) );
}

VImage
operator>=( const std::vector<double> a, const VImage b )
{
	return( b.relational_const( VIPS_OPERATION_RELATIONAL_LESSEQ,
		a ) );
}

VImage
operator>=( const VImage a, const std::vector<double> b )
{
	return( a.relational_const( VIPS_OPERATION_RELATIONAL_MOREEQ,
		b ) );
}

VImage
operator==( const VImage a, const VImage b )
{
	return( a.relational( b, VIPS_OPERATION_RELATIONAL_EQUAL ) );
}

VImage
operator==( const double a, const VImage b )
{
	return( b.relational_const( VIPS_OPERATION_RELATIONAL_EQUAL,
		to_vector( a ) ) );
}

VImage
operator==( const VImage a, const double b )
{
	return( a.relational_const( VIPS_OPERATION_RELATIONAL_EQUAL,
		to_vector( b ) ) );
}

VImage
operator==( const std::vector<double> a, const VImage b )
{
	return( b.relational_const( VIPS_OPERATION_RELATIONAL_EQUAL,
		a ) );
}

VImage
operator==( const VImage a, const std::vector<double> b )
{
	return( a.relational_const( VIPS_OPERATION_RELATIONAL_EQUAL,
		b ) );
}

VImage
operator!=( const VImage a, const VImage b )
{
	return( a.relational( b, VIPS_OPERATION_RELATIONAL_NOTEQ ) );
}

VImage
operator!=( const double a, const VImage b )
{
	return( b.relational_const( VIPS_OPERATION_RELATIONAL_NOTEQ,
		to_vector( a ) ) ); 
}

VImage
operator!=( const VImage a, const double b )
{
	return( a.relational_const( VIPS_OPERATION_RELATIONAL_NOTEQ,
		to_vector( b ) ) );
}

VImage
operator!=( const std::vector<double> a, const VImage b )
{
	return( b.relational_const( VIPS_OPERATION_RELATIONAL_NOTEQ,
		a ) );
}

VImage
operator!=( const VImage a, const std::vector<double> b )
{
	return( a.relational_const( VIPS_OPERATION_RELATIONAL_NOTEQ,
		b ) );
}

VImage
operator&( const VImage a, const VImage b )
{
	return( a.boolean( b, VIPS_OPERATION_BOOLEAN_AND ) );
}

VImage
operator&( const double a, const VImage b )
{
	return( b.boolean_const( VIPS_OPERATION_BOOLEAN_AND,
		to_vector( a ) ) ); 
}

VImage
operator&( const VImage a, const double b )
{
	return( a.boolean_const( VIPS_OPERATION_BOOLEAN_AND,
		to_vector( b ) ) );
}

VImage
operator&( const std::vector<double> a, const VImage b )
{
	return( b.boolean_const( VIPS_OPERATION_BOOLEAN_AND, a ) );
}

VImage
operator&( const VImage a, const std::vector<double> b )
{
	return( a.boolean_const( VIPS_OPERATION_BOOLEAN_AND, b ) );
}

VImage &
operator&=( VImage &a, const VImage b )
{
	return( a = a & b );
}

VImage &
operator&=( VImage &a, const double b )
{
	return( a = a & b );
}

VImage &
operator&=( VImage &a, const std::vector<double> b )
{
	return( a = a & b );
}

VImage
operator|( const VImage a, const VImage b )
{
	return( a.boolean( b, VIPS_OPERATION_BOOLEAN_OR ) );
}

VImage
operator|( const double a, const VImage b )
{
	return( b.boolean_const( VIPS_OPERATION_BOOLEAN_OR,
		to_vector( a ) ) );
}

VImage
operator|( const VImage a, const double b )
{
	return( a.boolean_const( VIPS_OPERATION_BOOLEAN_OR,
		to_vector( b ) ) );
}

VImage
operator|( const std::vector<double> a, const VImage b )
{
	return( b.boolean_const( VIPS_OPERATION_BOOLEAN_OR,
		a ) );
}

VImage
operator|( const VImage a, const std::vector<double> b )
{
	return( a.boolean_const( VIPS_OPERATION_BOOLEAN_OR,
		b ) );
}

VImage &
operator|=( VImage &a, const VImage b )
{
	return( a = a | b );
}

VImage &
operator|=( VImage &a, const double b )
{
	return( a = a | b );
}

VImage &
operator|=( VImage &a, const std::vector<double> b )
{
	return( a = a | b );
}

VImage
operator^( const VImage a, const VImage b )
{
	return( a.boolean( b, VIPS_OPERATION_BOOLEAN_EOR ) );
}

VImage
operator^( const double a, const VImage b )
{
	return( b.boolean_const( VIPS_OPERATION_BOOLEAN_EOR,
		to_vector( a ) ) );
}

VImage
operator^( const VImage a, const double b )
{
	return( a.boolean_const( VIPS_OPERATION_BOOLEAN_EOR,
		to_vector( b ) ) );
}

VImage
operator^( const std::vector<double> a, const VImage b )
{
	return( b.boolean_const( VIPS_OPERATION_BOOLEAN_EOR,
		a ) );
}

VImage
operator^( const VImage a, const std::vector<double> b )
{
	return( a.boolean_const( VIPS_OPERATION_BOOLEAN_EOR,
		b ) );
}

VImage &
operator^=( VImage &a, const VImage b )
{
	return( a = a ^ b );
}

VImage &
operator^=( VImage &a, const double b )
{
	return( a = a ^ b );
}

VImage &
operator^=( VImage &a, const std::vector<double> b )
{
	return( a = a ^ b );
}

VImage
operator<<( const VImage a, const VImage b )
{
	return( a.boolean( b, VIPS_OPERATION_BOOLEAN_LSHIFT ) );
}

VImage
operator<<( const VImage a, const double b )
{
	return( a.boolean_const( VIPS_OPERATION_BOOLEAN_LSHIFT,
		to_vector( b ) ) );
}

VImage
operator<<( const VImage a, const std::vector<double> b )
{
	return( a.boolean_const( VIPS_OPERATION_BOOLEAN_LSHIFT,
		b ) );
}

VImage &
operator<<=( VImage &a, const VImage b )
{
	return( a = a << b );
}

VImage &
operator<<=( VImage &a, const double b )
{
	return( a = a << b );
}

VImage &
operator<<=( VImage &a, const std::vector<double> b )
{
	return( a = a << b );
}

VImage
operator>>( const VImage a, const VImage b )
{
	return( a.boolean( b, VIPS_OPERATION_BOOLEAN_RSHIFT ) );
}

VImage
operator>>( const VImage a, const double b )
{
	return( a.boolean_const( VIPS_OPERATION_BOOLEAN_RSHIFT,
		to_vector( b ) ) ); 
}

VImage
operator>>( const VImage a, const std::vector<double> b )
{
	return( a.boolean_const( VIPS_OPERATION_BOOLEAN_RSHIFT,
		b ) );
}

VImage &
operator>>=( VImage &a, const VImage b )
{
	return( a = a << b );
}

VImage &
operator>>=( VImage &a, const double b )
{
	return( a = a << b );
}

VImage &
operator>>=( VImage &a, const std::vector<double> b )
{
	return( a = a << b );
}

VIPS_NAMESPACE_END
