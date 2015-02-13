/**
 * Created by jason on 2/11/15.
 */

function nextSession () {
    var next = 'Our next session will be ';
    var today = moment().day(moment().day());
    if (today > moment().day(2)) {
        next += moment().day(9).format('dddd, MMMM Do YYYY') + ' at 9PM EST!';
    } else {
        next += moment().day('Tuesday').format('dddd, MMMM Do YYYY') + ' at 9PM EST!';
    }
    return next;


}
