import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TextInput } from 'react-native';

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
  const { contianerStyle, labelStyle, inputStyle } = styles;
  return (
    <View style={contianerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  contianerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
};

Input.PropTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChangeText: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool
};

export { Input };
