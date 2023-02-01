import { View, Text, Image, Button } from 'react-native'

import { EthPrice } from './SubInfo';
import { COLORS, SIZES, FONTS} from '../constants';

const DetailsBid = ({bid}) => {
  return (
    <View style={{
      width:'100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: SIZES.base,
      paddingHorizontal: SIZES.base * 2,
    }}>
      <Image
        source={bid.image}
        resizeMode='contain'
        style={{
          borderRadius: 25,
          width: 48, height: 48
        }}
      />

      <View>
        <Text style={{fontFamily: FONTS.semiBold, fontSize: SIZES.small, color: COLORS.primary}}>
          Dernier prix placé par {bid.name}
        </Text>
        <Text style={{fontFamily: FONTS.regular, fontSize: SIZES.small - 2, color: COLORS.secondary, marginTop: 3,}}>
          Dernier prix placé par {bid.date}
        </Text>
      </View>

      <EthPrice price={bid.price}/>
    </View>
  )
}

export default DetailsBid