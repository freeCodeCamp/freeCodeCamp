/* Object part of the VSource and VTarget class
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

VSource 
VSource::new_from_descriptor( int descriptor )
{
	VipsSource *input;

	if( !(input = vips_source_new_from_descriptor( descriptor )) )
		throw VError();

	VSource out( input ); 

	return( out ); 
}

VSource 
VSource::new_from_file( const char *filename )
{
	VipsSource *input;

	if( !(input = vips_source_new_from_file( filename )) )
		throw VError();

	VSource out( input ); 

	return( out ); 
}

VSource 
VSource::new_from_blob( VipsBlob *blob )
{
	VipsSource *input;

	if( !(input = vips_source_new_from_blob( blob )) )
		throw VError();

	VSource out( input ); 

	return( out ); 
}

VSource 
VSource::new_from_memory( const void *data, 
	size_t size )
{
	VipsSource *input;

	if( !(input = vips_source_new_from_memory( data, size )) )
		throw VError();

	VSource out( input ); 

	return( out ); 
}

VSource 
VSource::new_from_options( const char *options )
{
	VipsSource *input;

	if( !(input = vips_source_new_from_options( options )) )
		throw VError();

	VSource out( input ); 

	return( out ); 
}

VTarget 
VTarget::new_to_descriptor( int descriptor )
{
	VipsTarget *output;

	if( !(output = vips_target_new_to_descriptor( descriptor )) )
		throw VError();

	VTarget out( output ); 

	return( out ); 
}

VTarget 
VTarget::new_to_file( const char *filename )
{
	VipsTarget *output;

	if( !(output = vips_target_new_to_file( filename )) )
		throw VError();

	VTarget out( output ); 

	return( out ); 
}

VTarget 
VTarget::new_to_memory()
{
	VipsTarget *output;

	if( !(output = vips_target_new_to_memory()) )
		throw VError();

	VTarget out( output ); 

	return( out ); 
}

VIPS_NAMESPACE_END
