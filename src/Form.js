import { useState } from "react";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Group,
  TextInput,
  Autocomplete,
  Checkbox,
  MultiSelect,
  Text,
  Textarea,
  Flex,
} from "@mantine/core";

import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase/clientApp";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const form = useForm({
    initialValues: {
      id: uuidv4(),
      firstName: "",
      lastName: "",
      group: "",
      time: [],
      frameworks: [],
      comment: "",
    },
    validate: {
      firstName: (value) =>
        value.length < 2 ? "Vismaz 2 simbolu garš vārds ir jāievada" : null,
      lastName: (value) =>
        value.length < 2 ? "Vismaz 2 simbolu garš uzvārds ir jāievada" : null,
    },
  });

  const handleSubmit = (values) => {
    const addData = async () => {
      setLoading(true);
      console.log(values);
      await setDoc(doc(db, "form", `${values.id}`), {
        ...values,
      });
      setLoading(false);

      setFormSubmitted(true);
    };

    addData();
  };

  let statusBtn;
  if (loading) {
    statusBtn = <Text>Sekundi...</Text>;
  } else if (formSubmitted) {
    statusBtn = <Text>Pieteikums saņemts!</Text>;
  } else {
    statusBtn = (
      <Button variant="outline" color="grape.8" type="submit">
        Pieteikties
      </Button>
    );
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Pieteikšanās anketa">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Flex gap="md" justify="space-between">
            <TextInput
              label="Vārds"
              placeholder="Jēkabs"
              withAsterisk
              {...form.getInputProps("firstName")}
            />
            <TextInput
              label="Uzvārds"
              placeholder="Krīgerts"
              withAsterisk
              {...form.getInputProps("lastName")}
            />
          </Flex>
          <Autocomplete
            label="Grupa"
            placeholder="Izvēlies..."
            data={["IP20", "IPa21", "IPb21", "IPa22", "IPb22"]}
            mt="md"
            {...form.getInputProps("group")}
          />
          <Textarea
            placeholder="Jautājumi, rekomendācijas"
            label="Vieta komentāriem"
            mt="lg"
            {...form.getInputProps("comment")}
          />
          <Group position="center" mt="xl">
            {statusBtn}
          </Group>
        </form>
      </Modal>

      <Group position="center">
        <Button onClick={open} color="grape.8">
          Pieteikties
        </Button>
      </Group>
    </>
  );
}

export default Form;
