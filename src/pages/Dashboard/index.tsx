import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

import { useAuth } from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user?.name}</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  }
})

export default Dashboard;