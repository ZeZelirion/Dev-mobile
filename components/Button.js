import { TouchableOpacity, View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import {COLORS, SIZES, SHADOWS, FONTS} from '../constants';

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
    style={{
        width:40,
        height:40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
    }} onPress={handlePress}>
        <Image
        source={imgUrl}
        resizeMode='contain'
        style= {{width:24, height:24}}>

        </Image>

    </TouchableOpacity>
  )
}

export const RectButton = ({minWidth, handlePress}) => {
    return (
      <TouchableOpacity
    style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small
    }} onPress={handlePress}>

      <Text style={{
        fontFamily: FONTS.semiBold,
        color: COLORS.white,
        textAlign: 'center'
      }}>Placez votre prix</Text>

    </TouchableOpacity>
    )
  }