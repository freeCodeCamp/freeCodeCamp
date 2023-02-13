export function CamperRole(role: 'camper' | 'honestCamper' | 'topContributor') {
  switch (role) {
    case 'camper':
      return { camper: 'Camper' } as const;
    case 'honestCamper':
      return { camper: 'HonestCamper' } as const;
    case 'topContributor':
      return { camper: 'TopContributor' } as const;
  }
}

/*
  type is const honestCamper: {
    readonly camper: "Camper";
} | {
    readonly camper: "HonestCamper";
} | {
    readonly camper: "TopContributor";
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
