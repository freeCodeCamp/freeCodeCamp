import { Observable } from 'rx';

export default function(Donation) {
  Donation.on('dataSourceAttached', () => {
    Donation.findOne$ = Observable.fromNodeCallback(
      Donation.findOne.bind(Donation)
    );
    Donation.prototype.validate$ = Observable.fromNodeCallback(
      Donation.prototype.validate
    );
    Donation.prototype.destroy$ = Observable.fromNodeCallback(
      Donation.prototype.destroy
    );
  });
}
