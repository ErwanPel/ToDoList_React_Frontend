import { useState } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import List from "./components/List";
library.add(faListCheck, faTrash, faLightbulb, faMoon);

function App() {
  // This state stock the action toDo
  const [lists, setLists] = useState([
    "Manger des sushis",
    "faire la vaisselle",
    "ranger la vaisselle",
  ]);
  // this state save the task in writting in the taskBar
  const [newTask, setNewTask] = useState("");

  // this state stock the action toDo finish by checking
  const [finishTask, setFinishTask] = useState([]);

  // this state stock the search from the searchBar
  const [searching, setSearching] = useState("");

  const [lightMode, setLightMode] = useState("true");

  return (
    <>
      <Header
        searching={searching}
        setSearching={setSearching}
        lightMode={lightMode}
        setLightMode={setLightMode}
      />
      <main
        style={{ backgroundColor: lightMode ? "white" : "rgb(30, 30, 30)" }}
      >
        <List
          newTask={newTask}
          setNewTask={setNewTask}
          lists={lists}
          setLists={setLists}
          finishTask={finishTask}
          setFinishTask={setFinishTask}
          searching={searching}
          lightMode={lightMode}
        />
      </main>
    </>
  );
}

export default App;
