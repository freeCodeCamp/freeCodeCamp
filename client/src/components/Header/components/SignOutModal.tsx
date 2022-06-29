// import { Modal } from '@freecodecamp/react-bootstrap';
// import React, { useState } from 'react';
// import { TFunction, useTranslation } from 'react-i18next';
// import envData from '../../../../../config/env.json';

// const { apiLocation } = envData;

// export interface SignOutProps {
//   i18n: unknown;
//   t: TFunction;
//   hideModal: () => void;
//   isSignedOut?: boolean;
// }

// const SignOutModal: React.FunctionComponent<SignOutProps> = (blurArgument, menuKeyDownArgument ) =>  {
//     const { t } = useTranslation();
//     const [show, setShow] = useState(false);

//   return (
//     <li>
//      <button
//         className='nav-link nav-link-signout'
//         onClick={() => setShow(true)}
//       >
//         {t('buttons.sign-out')}
//       </button>
//     <Modal>
//       <Modal.Header closeButton />
//         <Modal.Body>
//           <p>
//             you will signout in 10 seconds
//           </p>
//           <a
//               className='nav-link nav-link-signout'
//               href={`${apiLocation}/signout`}
//               onBlur={blurArgument}
//               onKeyDown={menuKeyDownArgument}
//             >
//               {t('buttons.sign-out')}
//           </a>
//           <button>
//             Cansel Signing out
//           </button>
//        </Modal.Body>
//     </Modal>
//     </li>
//   );
// }

// SignOutModal.displayName = 'SignOutModal';

// export default SignOutModal;
