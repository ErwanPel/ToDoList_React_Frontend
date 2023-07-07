import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function List({
  newTask,
  setNewTask,
  lists,
  setLists,
  finishTask,
  setFinishTask,
  searching,
  lightMode,
}) {
  // This function allow for save the writing of the task
  const handleTask = (event) => {
    let task = event.target.value;
    setNewTask((prev) => task);
  };

  // This function allow for put the task in taskBar to the array Lists
  const setOnList = () => {
    const newList = [...lists];
    newList.push(newTask);
    setLists(newList);
    setNewTask((prev) => "");
  };

  // This function allow for create a list who is match with the search
  const searchtoMap = (search) => {
    const reg = new RegExp(search, "i");
    const findList = [];
    lists.map((element) => {
      if (element.match(reg)) {
        findList.push(element);
      }
    });
    let map = [...findList];
    return map;
  };

  let toMap = "";
  let toMap2 = "";

  if (searching) {
    toMap = searchtoMap(searching);
    toMap2 = searchtoMap(searching);
  } else {
    toMap = lists;
    toMap2 = finishTask;
  }

  console.log("ici", toMap);
  return (
    <main>
      {" "}
      <div className="boxList">
        {/* This map function render the array Lists */}
        {toMap.map((element, index) => {
          return (
            <div
              className={
                // if the action toDo is in the array FinishTask, the line is undisplay
                finishTask.includes(element)
                  ? "unvisible lineList"
                  : "visible lineList"
              }
              key={index}
            >
              <div>
                <input
                  type="checkbox"
                  name="toDo"
                  id="element"
                  onChange={(event) => {
                    if (event.target.checked) {
                      // if checked is true, the action toDo is save in the array finishTask
                      const itemToRemove = [...finishTask];
                      itemToRemove.push(element);
                      setFinishTask((prev) => itemToRemove);
                    }
                  }}
                  checked={false}
                />
              </div>
              <div>
                <span style={{ color: lightMode ? "black" : "white" }}>
                  {element}
                </span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon="trash"
                  className="icon_trash"
                  onClick={() => {
                    // on click, the action toDo is delete from the array Lists and finishTask
                    if (
                      confirm(
                        "Voulez-vous supprimer cette action de la todo liste ?"
                      )
                    ) {
                      const newList = [...lists];
                      newList.splice(newList.indexOf(element), 1);
                      setLists((prev) => newList);
                      const itemToRemove = [...finishTask];
                      itemToRemove.splice(itemToRemove.indexOf(element), 1);
                      setFinishTask((prev) => itemToRemove);
                    }
                  }}
                  style={{ color: lightMode ? "black" : "white" }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="createTask">
        <input
          type="text"
          name="taskBar"
          id="taskBar"
          placeholder="new task ?"
          onChange={handleTask}
          value={newTask}
          onKeyUp={(event) => {
            event.code === "Enter" && setOnList();
          }}
        />
        <button onClick={setOnList}>Add task</button>
      </div>
      <div className="boxList">
        {/* This map function render the array finishTask */}
        {toMap2.map((element, index) => {
          console.log("finish", element);
          return (
            <div
              className={
                // if the action toDo is in the array FinishTask, the line is display
                finishTask.includes(element)
                  ? "visible lineList"
                  : "unvisible lineList"
              }
              key={index}
            >
              <div>
                <input
                  type="checkbox"
                  name="toDo"
                  id="element"
                  onChange={(event) => {
                    console.log(event.target.checked);
                    if (!event.target.checked) {
                      // if checked is false, the action toDo is remove from the array finishTask
                      const itemToRemove = [...finishTask];
                      itemToRemove.splice(itemToRemove.indexOf(element), 1);
                      setFinishTask((prev) => itemToRemove);
                    }
                  }}
                  checked={true}
                />
              </div>
              <div>
                <span
                  className="finish"
                  style={{ color: lightMode ? "black" : "white" }}
                >
                  {element}
                </span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon="trash"
                  className="icon_trash"
                  onClick={() => {
                    // on click, the action toDo is delete from the array Lists and finishTask
                    const newList = [...lists];
                    newList.splice(newList.indexOf(element), 1);
                    setLists((prev) => newList);
                    const itemToRemove = [...finishTask];
                    itemToRemove.splice(itemToRemove.indexOf(element), 1);
                    setFinishTask((prev) => itemToRemove);
                  }}
                  style={{ color: lightMode ? "black" : "white" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
