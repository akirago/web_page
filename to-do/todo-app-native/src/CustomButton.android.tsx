import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Button,
  Alert,
  Text,
  View,
} from 'react-native'
// functional conponent 
    const CustomButton = () => {
    return(
        <Button
          title="Press me"
          onPress={() => Alert.alert('Androidやで')}
          color={'#ffaa99'}
        />
    );
};

export default CustomButton;
