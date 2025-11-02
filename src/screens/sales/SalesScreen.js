import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SalesScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>📷 Escanear QR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
        <Text style={styles.buttonText}>✍️ Agregar Manual</Text>
      </TouchableOpacity>
      <View style={styles.cart}>
        <Text style={styles.cartTitle}>Carrito vacío</Text>
        <Text style={styles.cartSubtitle}>Escanea un producto para comenzar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 15 },
  button: { backgroundColor: '#007AFF', padding: 20, borderRadius: 10, marginBottom: 10, alignItems: 'center' },
  buttonSecondary: { backgroundColor: '#34C759' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  cart: { flex: 1, backgroundColor: 'white', borderRadius: 10, padding: 30, justifyContent: 'center', alignItems: 'center' },
  cartTitle: { fontSize: 18, color: '#999', marginBottom: 5 },
  cartSubtitle: { fontSize: 14, color: '#ccc' }
});
