import {  useState, useEffect  } from 'react'
import './App.css';


function useStorage(key, iniVal) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key) || sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : iniVal;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function App() {
  const [text, setText] = useStorage('text', '');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
    <div>
      <input type="text" value={text} onChange={handleChange} />
    </div>
    </>
  );
}

export default App
