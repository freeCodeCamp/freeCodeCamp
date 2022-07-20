// import React from 'react';

// import { FormContext } from "../form-context/index"
// import { ControlLabel } from "../control-label/index"
// import { FormGroupProps } from './types';

// // need to change htmlInputElement
// // formgroup should be label not input, as far as I know
// // in react-bootstrap formgroup treated more like fieldset element without legend element

// const FormGroup =  React.forwardRef<HTMLLabelElement, FormGroupProps>(
//         ({ className, validationState, bsSize, bsClass }): JSX.Element => {
//             // it isn't giving me error even though, I didn't assign mb-3.5 in tailwind
//           const defaultClasses = 'mb-3.5'
//           const classes = [defaultClasses, className].join('');

//           return(
//           <FormContext.Provider>
//             <FormGroup>
//             <ControlLabel></ControlLabel>
//             </FormGroup>
//           </FormContext.Provider>
//           )
//         }
//       );

//       FormGroup.displayName = 'FormGroup';
//       export { FormGroup };

// //  How it's implemented

// {/*

//  <FormGroup>
//     {type === 'hidden' ? null : (
//         <ControlLabel htmlFor={key}>{label}</ControlLabel>
//     )}
//     <FormControl
//         componentClass={type === 'textarea' ? type : 'input'}
//         id={key}
//         name={name}
//         onChange={onChange}
//         placeholder={placeholder}
//         required={required.includes(name)}
//         rows={4}
//         type={type}
//         value={value as string}
//     />
//     {nullOrWarning(
//         value as string,
//         !pristine && error,
//         isURL,
//         name
//     )}
// </FormGroup>

// */}
