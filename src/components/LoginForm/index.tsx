import React, { useState, useMemo } from 'react';
import { Flex, SystemProps } from '@chakra-ui/react';
import { EmailIcon, LockIcon, ViewIcon } from '@chakra-ui/icons';

import TextInput from '../TextInput';
import ButtonComponent from '../ButtonComponent';

export interface ILoginForm {
  area: SystemProps['gridArea'];
}

const LoginForm: React.FC<ILoginForm> = ({ area }) => {
  const [user, setUser] = useState<string>('');
  const [passWord, setPassWord] = useState<string>('');

  const emailIcon = useMemo(() => <EmailIcon />, []);
  const passWordIcon = useMemo(() => <LockIcon />, []);
  const viewPWIcon = useMemo(() => <ViewIcon />, []);

  return (
    <Flex
      backgroundColor="gray.700"
      borderRadius="lg"
      flexDir="column"
      alignItems="center"
      paddingTop={32}
      gridArea={area}
    >
      <TextInput
        icon={emailIcon}
        placeholder="Usuário"
        value={user}
        setValue={setUser}
      />

      <TextInput
        icon={passWordIcon}
        placeholder="Senha"
        value={passWord}
        setValue={setPassWord}
      />

      <ButtonComponent label="Login" />
    </Flex>
  );
};

export default LoginForm;
