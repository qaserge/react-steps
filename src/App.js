import Steps from "./components/Steps";

const message = [
  "This is the first step",
  "This is the second step",
  "This is the third step",
];

export default function App() {
  return (
    <div>
      <Steps message={message} />;
    </div>
  );
}
