import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import Parent from "./Parent";

function ErrorFallback({ error, componentStack, resetErrorBoundary }) {
  return (
    <div role="alert" className='alert-div'>
      
      <pre>You'll Need To Refresh The Website...</pre>
      <button className='refresh-btn' onClick={resetErrorBoundary}>Refresh The Website</button>
      <h6>why are you looking at the button color? it is what it is.</h6>
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Parent />
    </ErrorBoundary>
  </React.StrictMode>,
  rootElement
);
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', ()  => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);