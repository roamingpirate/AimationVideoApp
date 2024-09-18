import { Children, createContext, useContext, useEffect, useState } from "react";
import scriptD from "../data/script.js"
import script from "../data/script.js";
import { twoSpeakersPodcastProject, oneSpeakerProject } from "../data/projectData.js";
const PlayerContext = createContext();

export const PlayerController = ({ children }) => {
  const [script, setScript] = useState();
  const [animationState, setAnimationState] = useState();
  const [videoState, setVideoState] = useState("Paused");
  //const [playerAudio, setPlayerAudio] = useState();
  //const []
  const projectData = oneSpeakerProject;

  //console.log(projectData);

  const getScript = () => {
    const scriptData = scriptD.Script
    setScript(scriptData);
    const animationStateObj = {
      currentSpeechIndex: 0,
      speechLength: scriptData.length,
      currentDialogIndex: 0,
      currentDialogsLength: scriptData[0].Speech.length,
      currentDialogs: scriptData[0].Speech,
      currentSpeakers: scriptData[0].Speaker,
      isplaying: false,
      currentView: "fullView",
    }
    console.log(animationStateObj);
    setAnimationState(animationStateObj);
  }

  const next = () => {
    console.log("kello")
    console.log(animationState);
    var nextDialogIndex = animationState.currentDialogIndex + 1;
    var nextSpeechIndex = animationState.currentSpeechIndex;
    var nextDialogs = animationState.currentDialogs;
    var nextDialogLength = animationState.currentDialogs.length;
    var nextSpeaker = animationState.currentSpeakers;
    var isPlayingV = animationState.isplaying;
    var nextCurrentView  = animationState.currentView;

    if(animationState.currentSpeechIndex === animationState.speechLength)
    {
      //console.log('stop');
        //isPlayingV = false;
    }

    if(animationState.currentDialogIndex === (animationState.currentDialogsLength-1))
    {
        nextSpeechIndex = (animationState.currentSpeechIndex+1)%animationState.speechLength;
        nextDialogs = script[nextSpeechIndex].Speech;
        nextDialogLength= nextDialogs.length;
        nextSpeaker= script[nextSpeechIndex].Speaker;
        nextDialogIndex=0;
        nextCurrentView= script[nextSpeechIndex].viewType;

    }
    else{
      nextDialogIndex=animationState.currentDialogIndex + 1;
    }


    setAnimationState(animationState => ({
      ...animationState, 
      currentDialogs: nextDialogs, 
      currentDialogIndex: nextDialogIndex, 
      currentDialogsLength: nextDialogs.length,
      currentSpeechIndex : nextSpeechIndex,
      currentSpeakers : nextSpeaker,
      isplaying : isPlayingV,
      currentView: nextCurrentView
    }))
  }



  useEffect(() => {
    getScript();
    
  },[]);



  return (
    <PlayerContext.Provider
      value={{
        script,
        animationState,
        setAnimationState,
        next,
        projectData,
        videoState,
        setVideoState,
        getScript
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () =>
{
    const context = useContext(PlayerContext);
    return context
}
