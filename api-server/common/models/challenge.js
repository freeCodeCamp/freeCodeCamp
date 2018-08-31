import { Observable } from 'rx';

export default function(Challenge) {
  Challenge.on('dataSourceAttached', () => {
    Challenge.findOne$ =
      Observable.fromNodeCallback(Challenge.findOne, Challenge);
    Challenge.findById$ =
      Observable.fromNodeCallback(Challenge.findById, Challenge);
    Challenge.find$ =
      Observable.fromNodeCallback(Challenge.find, Challenge);
  });
}
