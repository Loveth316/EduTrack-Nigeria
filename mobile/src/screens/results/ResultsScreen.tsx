// src/screens/results/ResultsScreen.tsx
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

const ResultsScreen = () => {
  const results = [
    {
      id: '1',
      subject: 'Mathematics',
      score: 85,
      grade: 'A',
      term: 'Term 1',
    },
    {
      id: '2',
      subject: 'English Language',
      score: 78,
      grade: 'B',
      term: 'Term 1',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium" style={styles.title}>
          Results
        </Text>
      </View>

      {results.map((result) => (
        <Card key={result.id} style={styles.card}>
          <Card.Content>
            <View style={styles.resultItem}>
              <View>
                <Text variant="titleMedium">{result.subject}</Text>
                <Text variant="bodySmall" style={{ color: '#6b7280' }}>
                  {result.term}
                </Text>
              </View>
              <View style={styles.scoreContainer}>
                <Text variant="titleLarge" style={styles.score}>
                  {result.score}
                </Text>
                <Text
                  variant="titleMedium"
                  style={[styles.grade, { color: '#22c55e' }]}
                >
                  {result.grade}
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      ))}
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
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
  },
  score: {
    fontWeight: 'bold',
  },
  grade: {
    fontWeight: 'bold',
  },
});

export default ResultsScreen;