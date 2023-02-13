// Using function overload to handle type casting
// but it's possible to return the wrong type based on the input

type Camper = { camper: string };
type HonestCamper = {
  readonly camper: 'HonestCamper';
  something: boolean;
  numberOfTypes: 100;
};
type TopContributor = { camper: string };

export function CamperRole(role: 'camper'): Camper;
export function CamperRole(role: 'honestCamper'): HonestCamper;
export function CamperRole(role: 'topContributor'): TopContributor;
export function CamperRole(
  role: 'camper' | 'honestCamper' | 'topContributor'
): Camper | HonestCamper | TopContributor {
  switch (role) {
    case 'camper':
      return { camper: 'Hello' };
    case 'honestCamper':
      return { camper: 'topContributor' } as const;
    case 'topContributor':
      return { camper: 'honestCamper' };
  }
}

// type is const honestCamper: HonestCamper, although the value is topContributor
// still the same type as const honestCamper: HonestCamper
const honestCamper = CamperRole('honestCamper');

// to shut eslint
export function nice() {
  if (honestCamper) return 'nice';
}
