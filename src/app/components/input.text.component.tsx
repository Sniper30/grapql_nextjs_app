
import { useState } from 'react';
import { TextInput } from '@mantine/core';
import classes from './FloatingLabelInput.module.css';

export default function FloatingLabelInput({value,name}:{value:string, name:string}) {

  return (
    <TextInput
      label="Email"
      placeholder="Email"
      required
      classNames={classes}
      value={value}
      name={name}
    />
  );
}