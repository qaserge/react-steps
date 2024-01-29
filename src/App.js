import Steps from "./components/Steps";

const message = ["step 1", "step 2", "step 3"];

export default function App() {
  return (
    <div>
      <Steps message={message} />;
    </div>
  );
}
