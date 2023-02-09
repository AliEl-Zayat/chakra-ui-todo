import { Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
const App = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        isRound
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300,blue.500)"
        bgClip="text"
        fontFamily="Quicksand"
        mb={8}
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
};
export default App;
