import React, {Component} from 'react';
import {Text} from 'react-native';

const textStyle = textWeight => {
  var fontFamily = '';

  if (textWeight <= 100) {
    fontFamily = 'Raleway-Thin';
  } else if (textWeight >= 101 && textWeight <= 200) {
    fontFamily = 'Raleway-ExtraLight';
  } else if (textWeight >= 201 && textWeight <= 300) {
    fontFamily = 'Raleway-Light';
  } else if (textWeight >= 301 && textWeight <= 400) {
    fontFamily = 'Raleway-Regular';
  } else if (textWeight >= 401 && textWeight <= 500) {
    fontFamily = 'Raleway-Medium';
  } else if (textWeight >= 501 && textWeight <= 600) {
    fontFamily = 'Raleway-SemiBold';
  } else if (textWeight >= 601 && textWeight <= 700) {
    fontFamily = 'Raleway-Bold';
  } else if (textWeight >= 701 && textWeight <= 800) {
    fontFamily = 'Raleway-ExtraBold';
  } else if (textWeight >= 801 && textWeight <= 900) {
    fontFamily = 'Raleway-Black';
  }

  return {
    fontFamily: fontFamily,
  };
};

const CustomText = ({
  text,
  textColor,
  textSize,
  textWeight,
  style,
  ellippsizeMode,
  numberOfLines,
  children,
  textAlign,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellippsizeMode}
      style={[
        textWeight ? textStyle(textWeight) : 'Raleway-Regular',
        textSize ? {fontSize: textSize} : 25,
        textColor ? {color: textColor} : 'black',
        style,
      ]}>
      {text}
      {children}
    </Text>
  );
};

export {CustomText};
