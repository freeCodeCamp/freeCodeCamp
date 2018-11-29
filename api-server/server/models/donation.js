import { Observable } from 'rx';

export default function(Donation) {
  Donation.on('dataSourceAttached', () => {
    Donation.find$ = Observable.fromNodeCallback(Donation.find.bind(Donation));
    Donation.findOne$ = Observable.fromNodeCallback(
      Donation.findOne.bind(Donation)
    );
  });

  function getCurrentActiveDonationCount$() {
    // eslint-disable-next-line no-undefined
    return Donation.find$({ where: { endDate: undefined } }).map(
      instances => instances.length
    );
  }

  Donation.getCurrentActiveDonationCount$ = getCurrentActiveDonationCount$;
}
