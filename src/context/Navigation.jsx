import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  // This piece of state is only used for re-rendering componenents during back and forth navigation
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Handle when the user is navigating back and forth between address pathways using pushState
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    }
  }, []);

  const navigate = (to) => {
    // to === '/wherever'
    window.history.pushState({}, '', to);

    setCurrentPath(to);
  }

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  )
}

export { NavigationProvider };
export default NavigationContext;