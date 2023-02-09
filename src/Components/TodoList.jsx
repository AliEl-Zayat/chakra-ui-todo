import { Badge, StackDivider, VStack } from "@chakra-ui/react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo }) => {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
        No Todos, Yay
      </Badge>
    );
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {<TodoItem todos={todos} deleteTodo={deleteTodo} />}
    </VStack>
  );
};
export default TodoList;
