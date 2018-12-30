const PR = require('../models/pr.js');
const { getPRs } = require('../../sweeper/get-prs/index');
const { getCount, getRange } = require('../../sweeper/get-prs/pr-stats');
const prPropsToGet = ['number', 'labels', 'username', 'updated_at', 'filenames', 'title'];


module.exports.requestPrs = async function requestPrs(cb) {
	//(totalPRs, firstPR, lastPR, prPropsToGet)
	const totalPRs = await getCount().then(data => data);
	
	const data = await getRange().then(data => data);
	const firstPR = data[0];
	const lastPR = data[1];
	await getPRs(totalPRs, firstPR, lastPR, prPropsToGet)
	.then((results) => {
		console.log(results)
		if (results.openPRs.length) {
			results.openPRs.forEach((result) => {
				const pr = new PR(result);
				pr.save((err) => {
					if (err) console.log(err)
				})
			})
			cb(null, results)
		} else {
			cb(null, [])
		}
	})
	.catch((err) => {
		cb(err)
	});
	
	
}