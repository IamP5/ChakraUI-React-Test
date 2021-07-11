import React from 'react';
import { Flex, SystemProps, } from '@chakra-ui/react';

export interface ILoginForm {
  area: SystemProps['gridArea'];
}

const LoginForm: React.FC<ILoginForm> = ({ area }) => {
  return (
    <Flex
      backgroundColor="gray.700"
      borderRadius="lg"
      flexDir="column"
      alignItems="center"
      paddingTop={32}
      gridArea={area}
    />
  );
};

export default LoginForm;