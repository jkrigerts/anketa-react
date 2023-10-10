import { MantineProvider, Text, Container, Title } from "@mantine/core";
import Form from "./Form";
import { Prism } from "@mantine/prism";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container mt="3rem">
        <Title align="center" mb="lg">
          Iemāci Jēkabam{" "}
          <Text
            span
            variant="gradient"
            gradient={{ from: "grape.5", to: "grape.9", deg: 45 }}
          >
            programmēt
          </Text>{" "}
        </Title>
        <Prism language="tsx" mb="lg">
          {`const [knowledge, setKnowledge] = useState("100%");`}
        </Prism>
        <Text>
          Priekšgalsistēmā (angļu v. <em>front-end</em>) <em>React</em>,
          aizmugursistēmā (angļu v. <em>back-end</em>) <em>Laravel</em>, pa vidu
          REST API. Izskatam <em>Tailwind CSS</em>, bet datu bāzei{" "}
          <em>Redis</em>. Un tam visam jāstrādā kopā <em>blazingly fast</em>?!
          Man noreiba galva... Varbūt <strong>trešdienu</strong> pēcpusdienās
          vēlies kopā saprast, kā būvēt mūsdienīgu tīmekļa sistēmu?
        </Text>
        <Text mb="xl" mt="md" c="dimmed">
          Paldies tiem, kas atvēra man acis un ļāva saprast, ka nemāku vēl
          programmēt!
        </Text>
        <Form />
      </Container>
    </MantineProvider>
  );
}
