// src/screens/dashboard/DashboardScreen.tsx
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium" style={styles.title}>
          Welcome to EduTrack Nigeria
        </Text>
      </View>

      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Your Results</Text>
            <Text variant="displaySmall" style={styles.statNumber}>
              A
            </Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Attendance</Text>
            <Text variant="displaySmall" style={styles.statNumber}>
              92%
            </Text>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.actionContainer}>
        <Button mode="contained" style={styles.button}>
          View Assessments
        </Button>
        <Button mode="outlined" style={styles.button}>
          View Report Card
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
    padding: 16,
    backgroundColor: '#22c55e',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
  cardContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
  },
  statNumber: {
    color: '#22c55e',
    marginTop: 8,
  },
  actionContainer: {
    padding: 16,
    gap: 12,
  },
  button: {
    paddingVertical: 8,
  },
});

export default DashboardScreen;