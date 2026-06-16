// src/screens/assessments/AssessmentsScreen.tsx
import React from 'react';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Chip } from 'react-native-paper';

const AssessmentsScreen = () => {
  const assessments = [
    {
      id: '1',
      title: 'Mathematics Quiz',
      type: 'CA2',
      dueDate: '2024-06-20',
      status: 'pending',
    },
    {
      id: '2',
      title: 'English Essay',
      type: 'CA1',
      dueDate: '2024-06-15',
      status: 'submitted',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return '#f59e0b';
      case 'submitted':
        return '#22c55e';
      case 'graded':
        return '#0ea5e9';
      default:
        return '#6b7280';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium" style={styles.title}>
          Assessments
        </Text>
      </View>

      <FlatList
        data={assessments}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.cardHeader}>
                <Text variant="titleMedium">{item.title}</Text>
                <Chip
                  textStyle={{ color: 'white' }}
                  style={{ backgroundColor: getStatusColor(item.status) }}
                >
                  {item.status}
                </Chip>
              </View>
              <Text variant="bodySmall">Type: {item.type}</Text>
              <Text variant="bodySmall">Due: {item.dueDate}</Text>
            </Card.Content>
          </Card>
        )}
      />
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
  card: {
    margin: 16,
    backgroundColor: 'white',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
});

export default AssessmentsScreen;