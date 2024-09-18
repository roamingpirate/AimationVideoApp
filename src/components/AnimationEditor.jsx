import { usePlayer } from "../hooks/usePlayer";
import { useState } from "react";

export const AnimationEditor = () => {

    const { setAnimationState, setVideoState, videoState} = usePlayer();

    const startAnimation = () => {
        setPlaying(true);
        setCurrentSpeechIndex(0);
    };

    const [paymentMethod, setPaymentMethod] = useState('fullView');

    const handlePaymentChange = (event) => {
        setPaymentMethod(event.target.value);
      setAnimationState(animationState => ({
        ...animationState, 
        currentView : event.target.value
      }))
    };

    return (
        <>
        <button onClick={() => {
            if(videoState != "playing"){
              setVideoState("Playing")
            }
        }}>Play</button>
        <button onClick={() => {
          setVideoState("Paused")
        }}>Pause</button>
        <button onClick={() => {
          setVideoState("Reset")
        }}>Reset</button>
    <form>
      <h3>Select View</h3>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="fullView"
            checked={paymentMethod === 'fullView'}
            onChange={handlePaymentChange}
          />
          Credit Card
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="speaker1View"
            checked={paymentMethod === 'speaker1View'}
            onChange={handlePaymentChange}
          />
          PayPal
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="speaker2View"
            checked={paymentMethod === 'speaker2View'}
            onChange={handlePaymentChange}
          />
          Bank Transfer
        </label>
      </div>
      <p>Selected Payment Method: {paymentMethod}</p>
    </form>
    </>
    )
}

