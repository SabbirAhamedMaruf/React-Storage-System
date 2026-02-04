import "./App.css";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useRef } from "react";
import { getState } from "./hook/useStore";
import { useDispatch } from "./hook/useDispatch";

function randomString(length = 8) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  return result;
}

function App() {
  const store = getState();
  const dispatch = useDispatch();

  console.log({ store, dispatch });

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [store]);

  return (
    <div className="editor-wrapper">
      <pre className="editor-preview">
        <code ref={ref} className="language-javascript">
          {JSON.stringify(store, null, 2)}
        </code>
      </pre>
      <div class="editor-controller">
        <button
          onClick={() =>
            dispatch({
              type: "editor/handleSidebarOpen",
              value: Math.random() < 0.5,
            })
          }
          className="editor-action"
        >
          Open Sidebar
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "editor/handleGSOpen",
              value: Math.random() < 0.5,
            })
          }
          className="editor-action"
        >
          Open Global Settings
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "animation/handleAddAnimation",
              value: [
                ...store.animation.allAnimation,
                { title: randomString(10), data: Math.random() < 0.5 },
              ],
            })
          }
          className="editor-action"
        >
          Add Animation
        </button>
      </div>
    </div>
  );
}

export default App;
