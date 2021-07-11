import React from 'react';
import { Grid, Flex, Box, Image, Heading } from '@chakra-ui/react';

import LoginForm from './components/LoginForm';

function App(): JSX.Element {
  return (
    <Grid
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
    >
      <Flex gridArea="logo" flexDir="column" justifyContent="center">
        <Box>
          <Image
            d="inLine"
            w={6}
            h={6}
            marginBottom={1}
            src={`${process.env.PUBLIC_URL}/apple.svg`}
          />
          <Heading d="inline" paddingInlineStart={2} size="md">
            Palais des Fous
          </Heading>
        </Box>

        <Heading size="2xl" lineHeight="shorter" marginTop={2}>
          Faça o login na plataforma
        </Heading>
      </Flex>

      <LoginForm area="form" />
    </Grid>
  );
}

export default App;
