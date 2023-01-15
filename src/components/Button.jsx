import className from 'classnames'

const Button = ({ 
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outlined,
  rounded,
  ...rest
}) => {
  const classes = className(rest.className, 'flex items-center px-5 py-1 border', {
    'border-blue-700 bg-blue-600 text-white': primary,
    'border-gray-900 bg-gray-900 text-white': secondary,
    'border-green-600 bg-green-600 text-white': success,
    'border-yellow-400 bg-yellow-400 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white': outlined,
    'text-blue-700': outlined && primary,
    'text-gray-900': outlined && secondary,
    'text-green': outlined && success,
    'text-yellow-400': outlined && warning,
    'text-red-500': outlined && danger
  });
  
  return (
    <button {...rest} className={classes} >{children}</button>
  )
}

// Button.propTypes = {
//   checkButtonVariety: ({ primary, secondary, success, warning, danger }) => {
//     const count = Number(!!primary)
//       + Number(!!secondary)
//       + Number(!!success)
//       + Number(!!warning)
//       + Number(!!danger)

//       if (count > 1) {
//         return new Error('Only one of primary, secondary, success, warning, danger may be true.');
//       }
//   } 
// }

export default Button;