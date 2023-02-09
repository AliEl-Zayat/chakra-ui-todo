import { HStack, IconButton, Spacer, Text } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const TodoItem = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text fontFamily="Quicksand">{todo.text}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </div>
  );
};
export default TodoItem;
