import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

interface IButton {
  label: string;
}

const ButtonComponent: React.FC<IButton> = ({ label }) => {
  return (
    <ButtonGroup
      size="lg"
      backgroundColor="#ED8936"
      textColor="white"
      width="70%"
      borderRadius="lg"
      marginTop={16}
    >
      <Button label={label} width="100%">
        {label}
      </Button>
    </ButtonGroup>
  );
};

export default ButtonComponent;
