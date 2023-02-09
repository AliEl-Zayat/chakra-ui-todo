import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useState } from "react";
const AddTodo = ({ addTodo }) => {
  const [content, setContent] = useState("");
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      return toast({
        title: "Task Input Empty.",
        description: "You should enter the task.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
    const todo = {
      id: nanoid(),
      text: content,
    };
    addTodo(todo);
    setContent("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Type the task u wanna add"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add todo
        </Button>
      </HStack>
    </form>
  );
};
export default AddTodo;
