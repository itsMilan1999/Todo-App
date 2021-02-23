import Recat, { useState, useEffect } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import { InputLabel, FormControl, Input } from "@material-ui/core";
import Todo from "./Todo.js";
import db from "./firebase";
import firebase from "firebase"


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // load data from database when app start
  useEffect(() => {
    
    db.collection("todos"). orderBy('timestamp','desc') .onSnapshot( snapshot => {
      console.log("############" ,snapshot.docs.map( doc  => doc.data()));
      setTodos(snapshot.docs.map( doc  => ({id:doc.id ,todo: doc.data().todo})));
    });
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); //stop refreshing and maintain state
    db.collection("todos").add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]);
    setInput("");
   
  };

  return (
    <div className="App">
      <h1>Hello Milan </h1>
      <form>
        <FormControl>
          <InputLabel> 👉 Write a TODO </InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add TOdo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
          /* <li>{todo}</li> */
        ))}
      </ul>
    </div>
  );
}

export default App;
