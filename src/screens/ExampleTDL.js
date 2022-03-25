import { Box, Center, Checkbox, Heading, HStack, IconButton, Input, VStack } from "native-base";
import React, { useState } from "react";

export default function ExampleTDL() {
  const instState = [];
  const [list, setList] = useState(instState);
  const [inputValue, setInputValue] = useState("");

  const addItem = title => {
    setList([...list, {
      title: title,
      isCompleted: false
    }]);
  };

  const handleDelete = index => {
    const temp = list.filter((_, itemI) => itemI !== index);
    setList(temp);
  };

  const handleStatusChange = index => {
    const temp = list.map((item, itemI) => itemI !== index ? item : {
      ...item,
      isCompleted: !item.isCompleted
    });
    setList(temp);
  };

  return <Center w="100%">
    <Box maxW="300" w="100%">
      <Heading mb="2" size="md">
        Wednesday
      </Heading>
      <VStack space={4}>
        <HStack space={2}>
          <Input flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Add Task" />
          <IconButton borderRadius="sm" variant="solid" icon={<Icon as={Feather} name="plus" size="sm" color="warmGray.50" />} onPress={() => {
            addItem(inputValue);
            setInputValue("");
          }} />
        </HStack>
        <VStack space={2}>
          {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
            <Checkbox isChecked={item.isCompleted} onChange={() => handleStatusChange(itemI)} value={item.title}>
              <Text mx="2" strikeThrough={item.isCompleted} _light={{
                color: item.isCompleted ? "gray.400" : "coolGray.800"
              }} _dark={{
                color: item.isCompleted ? "gray.400" : "coolGray.50"
              }}>
                {item.title}
              </Text>
            </Checkbox>
            <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
          </HStack>)}
        </VStack>
      </VStack>
    </Box>
  </Center>;
};