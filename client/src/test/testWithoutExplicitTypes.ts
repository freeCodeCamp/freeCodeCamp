export function CamperRole(role: 'camper' | 'honestCamper' | 'topContributor') {
  switch (role) {
    case 'camper':
      return { camper: 'averageCamper' };
    case 'honestCamper':
      return { camper: 'aGoodCamper' };
    case 'topContributor':
      return { camper: 'anAwesomeCamper' };
  }
}

/*
type is const honestCamper: {
    camper: string;
} 
*/
const honestCamper = CamperRole('honestCamper');

// we have to use if statements to check if something is an actual type
// aka

if ('honestCamper' in honestCamper) {
  honestCamper;
} else {
  undefined;
}

// to shut eslint
export function nice() {
  if (honestCamper) return 'nice';
}
