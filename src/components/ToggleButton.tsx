import { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import light from '../assets/images/light-mode-toggle-icon.svg';
import dark from '../assets/images/dark-mode-toggle-icon.svg';

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      type='button'
      onClick={toggleSwitch}
      className='fixed z-10 right-2 top-2 w-16 p-1 rounded-md'
    >
      {theme === 'dark' ? (
        <img src={dark} alt='Dark Mode' />
      ) : (
        <img src={light} alt='Light Mode' />
      )}
    </button>
  );
};

export default ToggleButton;
