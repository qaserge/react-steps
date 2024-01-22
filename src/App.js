const message = ["step 1", "step 2", "step 3"];

export default function App() {
  const step = 1;

  function handleBackStep() {
    alert("back");
  }

  function handleNextStep() {
    alert("next");
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">{message[step - 1]}</p>

      <div className="buttons">
        <button className="button" onClick={handleBackStep}>
          Back
        </button>
        <button className="button" onClick={handleNextStep}>
          Next
        </button>
      </div>
    </div>
  );
}
