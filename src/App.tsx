import "./App.css";
import reactLogo from "./assets/react.svg";
import { CoolMode } from "./components/magic-ui/cool-mode";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div className="bg-red-700">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Template for Telegram</h1>
      <CoolMode
        options={{
          particle:
            "https://pbs.twimg.com/profile_images/1782811051504885763/YR5-kWOI_400x400.jpg",
        }}
      >
        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
          Click Me!
        </button>
      </CoolMode>
    </>
  );
}

export default App;
