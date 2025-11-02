import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function InventoryScreen() {
  const products = [
    { id: '1', nombre: 'Aceite 10W40', stock: 50, precio: 15.00 },
    { id: '2', nombre: 'Filtro de Aceite', stock: 30, precio: 8.00 },
    { id: '3', nombre: 'Pastillas de Freno', stock: 5, precio: 45.00 },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={[styles.card, item.stock <= 10 && styles.lowStock]}>
            <Text style={styles.name}>{item.nombre}</Text>
            <Text style={styles.info}>Stock: {item.stock} | ${item.precio}</Text>
            {item.stock <= 10 && <Text style={styles.alert}>⚠️ Bajo Stock</Text>}
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 15 },
  card: { backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 10 },
  lowStock: { borderLeftWidth: 4, borderLeftColor: '#FF5722' },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  info: { fontSize: 14, color: '#666' },
  alert: { fontSize: 12, color: '#FF5722', marginTop: 5 }
});
