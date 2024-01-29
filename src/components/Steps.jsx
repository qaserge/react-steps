import { useState } from "react";
import Button from "./Button";
import StepMessage from "./StepMessage";

export default function Steps({ message }) {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleBackStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNextStep() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {message[step - 1]}
            {/* bed practice: */}
            <span dangerouslySetInnerHTML={{ __html: `&#12852${step};` }} />
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#3a2a6d" textColor="#fff" onClick={handleBackStep}>
              <span>&#11164;</span>Back
            </Button>
            <Button bgColor="#3a2a6d" textColor="#fff" onClick={handleNextStep}>
              Next<span>&#11166;</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
