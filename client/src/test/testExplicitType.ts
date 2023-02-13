// Using function overload to handle type casting

type Camper = { camper: string };
type HonestCamper = { camper: string };
type TopContributor = { camper: string };

export function CamperRole(role: 'camper'): Camper;
export function CamperRole(role: 'honestCamper'): HonestCamper;
export function CamperRole(role: 'topContributor'): TopContributor;
export function CamperRole(
  role: 'camper' | 'honestCamper' | 'topContributor'
): Camper | HonestCamper | TopContributor {
  switch (role) {
    case 'camper':
      return { camper: 'Camper' };
    case 'honestCamper':
      return { camper: 'HonestCamper' };
    case 'topContributor':
      return { camper: 'TopContributor' };
  }
}
// type is const honestCamper: HonestCamper

const honestCamper = CamperRole('honestCamper');

// to shut eslint
export function nice() {
  if (honestCamper) return 'nice';
}
