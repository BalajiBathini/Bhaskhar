// App.js
import React, { useState, useEffect } from 'react';
import Avatar from './components/Avatar';
import SearchBar from './components/SearchBar';
import ResultArea from './components/ResultArea';
import ThemeToggle from './components/ThemeToggle';
import './index.css';


const AVATAR_IMAGES = {
    hi: "https://via.placeholder.com/150?text=Hi!",
    typing: "https://via.placeholder.com/150?text=Typing...",
    thinking: "https://via.placeholder.com/150?text=Thinking...",
    celebrate: "https://via.placeholder.com/150?text=Yay!",
    sad: "https://via.placeholder.com/150?text=Sad",
  };
  
const App = () => {
    const [theme, setTheme] = useState('light-theme');
    const [avatarSrc, setAvatarSrc] = useState(AVATAR_IMAGES.hi);
    const [introText, setIntroText] = useState("Hi! I'm Bhaskhar, happy to help!");
    const [resultText, setResultText] = useState("Your answers will appear here...");
    const [queryInput, setQueryInput] = useState("");

  useEffect(() => {
    document.body.classList = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'));
  };

  const typingAction = () => {
    setAvatarSrc(AVATAR_IMAGES.typing);
    setIntroText("Bhaskhar is listening...");
  };

  const submitQuery = () => {
    if (queryInput.trim() === "") {
      noResolutionAction();
      return;
    }
    processingAction();
    setTimeout(() => {
      if (queryInput.toLowerCase() === "happy") {
        resolutionAction();
      } else {
        noResolutionAction();
      }
    }, 2000);
  };

  const processingAction = () => {
      setAvatarSrc(AVATAR_IMAGES.thinking);
      setIntroText("Bhaskhar is thinking...");
      setResultText("Processing your query...");
  };
    
  const resolutionAction = () => {
    setAvatarSrc(AVATAR_IMAGES.celebrate);
      setIntroText("Query resolved! I'm happy to help!");
      setResultText("Here's your resolution: [Details Here]");
  };
  
  const noResolutionAction = () => {
      setAvatarSrc(AVATAR_IMAGES.sad);
      setIntroText("Sorry, I couldn't find a resolution.");
      setResultText("I couldn't resolve your query. Please try again.");
  };


  return (
    <div className="container">
        <ThemeToggle isLightTheme={theme === 'light-theme'} toggleTheme={toggleTheme} />
        <Avatar avatarSrc={avatarSrc} altText="Bhaskhar Avatar" />
        <h1>Bhaskhar</h1>
        <p className="intro" >{introText}</p>
      <SearchBar 
        queryInput={queryInput}
        onInputChange={(e) => {setQueryInput(e.target.value); typingAction()}}
        onSubmitQuery={submitQuery}
      />
      <ResultArea resultText={resultText} />
    </div>
  );
};

export default App;