import React, { memo, ReactElement } from 'react';
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react';

interface ITextInput {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  icon?: ReactElement;
}

const TextInput: React.FC<ITextInput> = ({
  icon,
  value,
  setValue,
  placeholder,
}) => {
  return (
    <InputGroup width="70%" _focusWithin={{ color: '#ED8936' }}>
      {icon && (
        <InputLeftElement
          height="100%"
          pointerEvents="none"
          children={icon}
          marginTop={-3}
        />
      )}
      <Input
        variant="outline"
        backgroundColor="gray.800"
        placeholder={placeholder}
        size="lg"
        focusBorderColor="orange.400"
        textColor="white"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        marginBottom={6}
      />
    </InputGroup>
  );
};

export default memo(TextInput);
