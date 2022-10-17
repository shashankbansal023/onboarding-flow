import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import CreateWorkspace from './components/Workspace/Workspace';
import WorkspacePlans from './components/Plans/Plans';
import Launch from './components/Launch/Launch';
import Header from './components/Header/Header';
import StartOnboarding from './components/LoginDetails/StartScreen';
import ProgressBar from './components/ProgressBar/ProgressBar';
import React , { useState } from 'react';



function App() {

  const [progressState , setProgressState ] = useState(0);

  const handleProgressState = (state) =>{
    setProgressState(state);
  }

  const router = createBrowserRouter([{
    path: "/",
    element: (
      <StartOnboarding handleProgressState={handleProgressState} />
    )
  },
  {
    path: "/workspace",
    element : (
      <CreateWorkspace handleProgressState={handleProgressState}/>
    )
  },
  {
    path: "/plans",
    element: (
      <WorkspacePlans handleProgressState={handleProgressState} />
    )
  },
  {
    path: "/launch",
    element: (
      <Launch handleProgressState={handleProgressState}/> 
    )
  }
  
  ])
  return (
    <div className="app">
      <Header name="Eden" />
      <ProgressBar stage={progressState}/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
