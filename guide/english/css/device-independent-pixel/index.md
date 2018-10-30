---
title: Device Independent Pixel
---
## Device Independent Pixel

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/device-independent-pixel/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
##### References:
 http://developer.android.com/guide/practices/screens_support.html#dips-pels
 http://blogs.msdn.com/b/text/archive/2009/12/11/wpf-text-measurement-units.aspx

A device-independent pixel (also: density-independent pixel, dip, dp) is a physical unit of measurement based on a coordinate system held by a computer and represents an abstraction of a pixel for use by an application that an underlying system then converts to physical pixels.

A typical use is to allow mobile device software to scale the display of information and user interaction to different screen sizes. The abstraction allows an application to work in pixels as a measurement, while the underlying graphics system converts the abstract pixel measurements of the application into real pixel measurements appropriate to the particular device. For example, on the Android operating system a device-independent pixel is equivalent to one physical pixel on a 160 dpi screen,[1] while the Windows Presentation Foundation specifies one device-independent pixel as equivalent to 1/96th of an inch.[2]

As dp is a physical unit it has an absolute value which can be measured in traditional units, e.g. for Android devices 1 dp equals 1/160 of inch or 0.15875 mm.

While traditional pixels only refer to the display of information, device-independent pixels may also be used to measure user input such as input on a touch screen device.
