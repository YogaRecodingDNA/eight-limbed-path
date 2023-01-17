import classNames from 'classnames';

const Panel = ({ children, className, ...rest }) => { 
  // Receive className as a prop to append those classes to the Panel's set list of classes
  const panelClassNames = classNames('border rounded p-3 shadow bg-white w-full', className);
  
  return ( // Receive the {rest} of the props
  <div {...rest} className={panelClassNames}>{children}</div>
  )
}

export default Panel;

// The Panel Component is simply a div with some default classnames applied to it..
// It's a container component for any {children} components/jsx elements who share too many of the same styling classes... it's an opportunity to bundle those into a separate component
// EXTREMELY IMPORATANTLY It provides consistent styling across the application