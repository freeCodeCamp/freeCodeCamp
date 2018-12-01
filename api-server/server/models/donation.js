import { Observable } from 'rx';
import debug from 'debug';

import InMemoryCache from '../utils/in-memory-cache';

const log = debug('fcc:boot:donate');
const fiveMinutes = 1000 * 60 * 5;

export default function(Donation) {
  let activeDonationUpdateInterval = null;
  const activeDonationCountCacheTTL = fiveMinutes;
  const activeDonationCountCache = InMemoryCache(0);
  const activeDonationsQuery$ = () =>
    Donation.find$({
      // eslint-disable-next-line no-undefined
      where: { endDate: undefined }
    }).map(instances => instances.length);
  function cleanUp() {
    if (activeDonationUpdateInterval) {
      clearInterval(activeDonationUpdateInterval);
    }
    return;
  }

  process.on('exit', cleanUp);
  Donation.on('dataSourceAttached', () => {
    Donation.find$ = Observable.fromNodeCallback(Donation.find.bind(Donation));
    Donation.findOne$ = Observable.fromNodeCallback(
      Donation.findOne.bind(Donation)
    );
    activeDonationsQuery$().subscribe(count => {
      log('activeDonator count: %d', count);
      return activeDonationCountCache.update(() => count);
    });

    activeDonationUpdateInterval = setInterval(
      () =>
        activeDonationsQuery$().subscribe(count => {
          log('activeDonator count: %d', count);
          return activeDonationCountCache.update(() => count);
        }),
      activeDonationCountCacheTTL
    );
  });

  function getCurrentActiveDonationCount$() {
    return Observable.of(activeDonationCountCache.get());
  }

  Donation.getCurrentActiveDonationCount$ = getCurrentActiveDonationCount$;
}
