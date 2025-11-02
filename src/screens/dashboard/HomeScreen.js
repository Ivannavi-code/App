import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const menuItems = [
    { title: 'Inventario', icon: '📦', screen: 'Inventory', color: '#4CAF50' },
    { title: 'Ventas', icon: '🛒', screen: 'Sales', color: '#2196F3' },
    { title: 'Clientes', icon: '👥', color: '#9C27B0' },
    { title: 'Reportes', icon: '📊', color: '#607D8B' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.stats}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>$1,250</Text>
          <Text style={styles.statLabel}>Ventas Hoy</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>15</Text>
          <Text style={styles.statLabel}>Productos Bajo Stock</Text>
        </View>
      </View>
      
      <View style={styles.menu}>
        {menuItems.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.menuItem, { backgroundColor: item.color }]}
            onPress={() => item.screen && navigation.navigate(item.screen)}
          >
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <Text style={styles.menuTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  stats: { flexDirection: 'row', padding: 15, gap: 10 },
  statCard: { flex: 1, backgroundColor: 'white', padding: 15, borderRadius: 10, alignItems: 'center' },
  statValue: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  statLabel: { fontSize: 11, color: '#666', textAlign: 'center' },
  menu: { flexDirection: 'row', flexWrap: 'wrap', padding: 15, gap: 15 },
  menuItem: { width: '47%', aspectRatio: 1, borderRadius: 15, padding: 20, justifyContent: 'center', alignItems: 'center' },
  menuIcon: { fontSize: 48, marginBottom: 10 },
  menuTitle: { fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center' }
});
