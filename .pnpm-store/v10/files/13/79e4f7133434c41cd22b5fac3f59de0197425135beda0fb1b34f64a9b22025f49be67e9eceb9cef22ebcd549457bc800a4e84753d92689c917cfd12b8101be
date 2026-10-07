/* Object part of VInterpolate class
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

VInterpolate 
VInterpolate::new_from_name( const char *name, VOption *options )
{
	VipsInterpolate *interp;

	if( !(interp = vips_interpolate_new( name )) ) {
		delete options; 
		throw VError(); 
	}
	delete options; 

	VInterpolate out( interp ); 

	return( out ); 
}

VIPS_NAMESPACE_END
