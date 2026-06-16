// src/screens/profile/ProfileScreen.tsx
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, Avatar } from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Text size={80} label="JD" style={{ backgroundColor: '#22c55e' }} />
        <Text variant="headlineSmall" style={styles.name}>
          John Doe
        </Text>
        <Text variant="bodyMedium" style={styles.admission}>
          Admission: ADM/2024/001
        </Text>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Class Information</Text>
          <View style={styles.info}>
            <Text variant="bodyMedium">Class: Primary 5A</Text>
            <Text variant="bodyMedium">Level: Primary</Text>
            <Text variant="bodyMedium">Gender: Male</Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Academic Performance</Text>
          <View style={styles.info}>
            <Text variant="bodyMedium">Current Grade: A</Text>
            <Text variant="bodyMedium">Class Position: 3rd</Text>
            <Text variant="bodyMedium">Attendance: 92%</Text>
          </View>
        </Card.Content>
      </Card>

      <View style={styles.buttonContainer}>
        <Button mode="contained" style={styles.button}>
          Edit Profile
        </Button>
        <Button mode="outlined" style={styles.button}>
          Logout
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    padding: 24,
    backgroundColor: '#22c55e',
    alignItems: 'center',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 12,
  },
  admission: {
    color: '#ecfdf5',
    marginTop: 4,
  },
  card: {
    margin: 16,
    backgroundColor: 'white',
  },
  info: {
    marginTop: 12,
    gap: 8,
  },
  buttonContainer: {
    padding: 16,
    gap: 12,
  },
  button: {
    paddingVertical: 8,
  },
});

export default ProfileScreen;