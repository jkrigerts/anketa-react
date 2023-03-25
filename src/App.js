import { MantineProvider, Text, Container, Title } from "@mantine/core";
import Form from "./Form";
import { Prism } from "@mantine/prism";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container mt="3rem">
        <Title align="center" mb="lg">
          <Text
            span
            variant="gradient"
            gradient={{ from: "grape.5", to: "grape.9", deg: 45 }}
          >
            React
          </Text>{" "}
          un citi ietvari
        </Title>
        <Prism language="tsx" mb="lg">
          {`const [knowledge, setKnowledge] = useState("100%");`}
        </Prism>
        <Text>
          Vai tev interesētu apmeklēt papildus nodarbības, lai apgūtu
          priekšgalsistēmu (angļu v. <em>front-end</em>) populārāko bibliotēku{" "}
          <em>React</em>? Varbūt vēlies apgūt arī citus tīmekļa izstrādē
          izmantotos ietvarus (angļu v. <em>frameworks</em>), bibliotēkas? Ja
          atbilde ir <strong>Jā!</strong>, tad spied uz pieteikšanās pogas!
        </Text>
        <Text mb="xl" mt="md" c="dimmed">
          Šīs interešu nodarbības nav saistītas ar <em>Draugiem Group</em>{" "}
          konkursu.
        </Text>
        <Form />
      </Container>
    </MantineProvider>
  );
}
