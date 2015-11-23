import { isAlphanumeric, isHexadecimal } from 'validator';
import debug from 'debug';

const log = debug('freecc:models:promo');

export default function promo(Promo) {
  Promo.getButton = function getButton(id, code, type = 'isNot') {
    const Job = Promo.app.models.Job;
    if (!id || !isHexadecimal(id)) {
      return Promise.reject(new Error(
        'Must include job id'
      ));
    }

    if (
      !isAlphanumeric(code) &&
      type &&
      !isAlphanumeric(type)
    ) {
      return Promise.reject(new Error(
        'Code or Type should be an alphanumeric'
      ));
    }

    const query = {
      where: {
        and: [{
          code: type === 'isNot' ? type : 'isHighlighted'
        },
        {
          type: type.replace(/^\$/g, '')
        }]
      }
    };

    return Promo.findOne(query)
      .then(function(promo) {
        return Job.updateAll({ id: id }, { promoCodeUsed: code })
          .then(function({ count = 0 } = {}) {
            log('job', count);
            if (count) {
              return promo;
            }
            return Promise.reject(new Error(
              `Job ${id} not found`
            ));
          });
      });
  };

  Promo.remoteMethod(
    'getButton',
    {
      description: 'Get button id for promocode',
      accepts: [
        {
          arg: 'id',
          type: 'string',
          required: true
        },
        {
          arg: 'code',
          type: 'string',
          required: true
        },
        {
          arg: 'type',
          type: 'string'
        }
      ],
      returns: [
        {
          arg: 'promo',
          type: 'object'
        }
      ]
    }
  );
}
