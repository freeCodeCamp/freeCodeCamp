---
title: Law of Cosines
---
## Law of Cosines

The Law of Cosines can be used to find the remaining sides or angles of a non-right triangle when given either the length of two sides and its included angle (SAS) or the lengths of the three sides (SSS).
The Law of Cosines states:
<img src="http://hyperphysics.phy-astr.gsu.edu/hbase/imgmth/lcos.gif">

This looks very similar to the Pythagorean Theorem, and if C was 90 degrees (a right triange), then cos(C) = 0 and the expression simplifies to the Pythagorean Thoerem. So, the Pythagorean Theorem is a special case of the Law of Cosines.

You can also switch the angle C with either A or B, but need to change the respective side (c) to a or b:

<p align='center'>
  a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc &middot; cos(A)<br />
  b<sup>2</sup> = a<sup>2</sup> + c<sup>2</sup> - 2ac &middot; cos(B)<br />
  c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> - 2ab &middot; cos(C)
</p>

For example, suppose we have a triangle as above, with b = 21, c = 32 and A = 40&deg;. Then we can find the length of the remaining side a as well as the angles B and C using the cosine law.

To start, let's find a. Since we know b, c and A, the first of the three formulas above will be best to use. We have

<p align='center'>
  a<sup>2</sup> = 21<sup>2</sup> + 32<sup>2</sup> - 2 &middot; 21 &middot 32 &middot; cos(40&deg;)
</p>

so simplifying and taking square roots we have a = sqrt(1465 - 1344 &middot; cos(40&deg;)) or approximately, a &approx; 20.87.

Similarly, if we want to find the angle B, we now have the length of all three sides so the second formula above will be helpful. Rearranging we have

<p align='center'>
  cos(B) = [a<sup>2</sup> + c<sup>2</sup> - b<sup>2</sup>]/(2ac)
</p>

and so taking the inverse cosine (or arccosine) of both sides gives the angle B. Plugging in the lengths of our sides (using the exact expression for a found above, and only simplyfing at the end) we find B is approximately 40.31&deg;.

Now to find C we have two approaches, either use the third formula above, or recall that the angles of our triangle should add up to 180 degrees, so if A is 40&deg; and B was found above, we have

<p align='center'>
  C = (180 - 40 - B)&deg; &approx; 99.69&deg;
</p>

(Checking with the cosine formula we get the same approximate answer, so we can rest easy knowing we haven't likely made a mistake in any of the calculations.)

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- https://www.varsitytutors.com/hotmath/hotmath_help/topics/law-of-cosines
- http://mathworld.wolfram.com/LawofCosines.html
