// import { Modal } from '@freecodecamp/react-bootstrap';
// import React from 'react';
// import envData from '../../../../../config/env.json';
// import { TFunction, useTranslation } from 'react-i18next';

// const { apiLocation } = envData;
// const { t } = useTranslation();

// export interface SignOutProps {
//   i18n: Object;
//   t: TFunction;
//   hideModal: () => void;
//   isSignedOut?: boolean;
// }

// constructor(props: SignOutProps ){
//   this.handleMenuKeyDown = this.handleMenuKeyDown.bind(this);
//   this.handleBlur = this.handleBlur.bind(this);
// }

// function SignOutModal(
// ): JSX.Element {

//   const [show, setShow] = useState(false);
//   return (
//     <>
//      <button
//         className='nav-link nav-link-signout'
//         onClick={() => setShow(true)}
//       >
//         {t('buttons.sign-out')}
//       </button>
//     </li>
//     <Modal>
//       <Modal.Header closeButton />
//         <Modal.Body>
//           <p>
//             you will signout in 10 seconds
//           </p>
//           <a
//               className='nav-link nav-link-signout'
//               href={`${apiLocation}/signout`}
//               onBlur={this.handleBlur}
//               onKeyDown={this.handleMenuKeyDown}
//             >
//               {t('buttons.sign-out')}
//           </a>
//           <button>
//             Cansel Signing out
//           </button>
//        </Modal.Body>
//     </Modal>
//   </>
//   );
// }

// SignOutModal.displayName = 'SignOutModal';

// export default SignOutModal;
