import React from 'react';

const AppleLogo = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <svg
    id='apple-logo'
    viewBox='450 0 500 650'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    fill='var(--quaternary-color)'
    role='img'
    aria-labelledby='apple-logo-label'
    {...props}
  >
    <title id='apple-logo-label'>Apple</title>
    <g>
      <path d=' M 856.091 303.9 C 855.442 231.513 915.212 196.762 917.915 195.068 C 884.281 145.861 831.938 139.12 813.265 138.327 C 768.744 133.82 726.35 164.534 703.784 164.534 C 681.217 164.534 646.321 138.975 609.407 139.697 C 560.813 140.417 516.076 167.923 491.058 211.398 C 440.625 298.889 478.188 428.558 527.287 499.575 C 551.332 534.29 579.955 573.403 617.59 571.961 C 653.855 570.519 667.554 548.529 711.318 548.529 C 755.081 548.529 767.41 571.961 805.73 571.276 C 844.7 570.519 869.429 535.804 893.294 500.981 C 920.835 460.678 932.227 421.673 932.876 419.618 C 932.01 419.257 856.884 390.454 856.091 303.9 Z ' />
      <path d=' M 784.1 91.348 C 804.071 67.159 817.553 33.524 813.839 0 C 785.07 1.155 750.249 19.179 729.592 43.368 C 711.099 64.746 694.877 98.991 699.273 131.833 C 731.358 134.32 764.125 115.501 784.1 91.348' />
    </g>
  </svg>
);

AppleLogo.displayName = 'AppleLogo';

export default AppleLogo;
