import { isAlphanumeric } from 'validator';

export default function promo(Promo) {
  Promo.getButton = function getButton(code, type = null) {

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
        code,
        type
      }
    };

    return Promo.findOne(query);
  };

  Promo.remoteMethod(
    'getButton',
    {
      description: 'Get button id for promocode',
      accepts: [
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
