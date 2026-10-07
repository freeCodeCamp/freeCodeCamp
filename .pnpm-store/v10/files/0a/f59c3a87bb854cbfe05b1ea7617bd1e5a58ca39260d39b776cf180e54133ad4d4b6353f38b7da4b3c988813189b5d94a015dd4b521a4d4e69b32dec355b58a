// Object part of VRegion class

#ifdef HAVE_CONFIG_H
#include <config.h>
#endif /*HAVE_CONFIG_H*/

#include <vips/vips8>

#include <vips/debug.h>

VIPS_NAMESPACE_START

VRegion
VRegion::new_from_image( VImage image )
{
	VipsRegion *region;

	if( !(region = vips_region_new( image.get_image() )) ) {
		throw VError();
	}

	VRegion out( region );

	return( out );
}

VIPS_NAMESPACE_END
