import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useTasksStore } from "../store/zustand";

export default function Lab4_1() {
  const tasks = useTasksStore((state) => state.tasks);
  const toggleTaskStatus = useTasksStore((state) => state.toggleTaskStatus);

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.taskText}>{item.name}</Text>
        <Text style={styles.statusText}>
          Статус: {item.completed ? "Завершено" : "В процессе"}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.statusButton}
        onPress={() => toggleTaskStatus(item.id)}
      >
        <Text style={styles.buttonText}>
          {item.completed ? "Сделать активным" : "Завершить"}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Список задач</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTaskItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  taskContainer: {
    flexDirection: "row", // Расположим текст и кнопку по горизонтали
    alignItems: "center", // Выравнивание по центру по вертикали
    height: 60,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "black", // Цвет границы
    borderRadius:5
  },
  textContainer: {
    flex: 1, // Занимает все пространство слева
    marginRight: 20, // Отступ между текстом и кнопкой
  },
  taskText: {
    fontSize: 16,
    color: "black", // Цвет текста
    fontWeight: "bold",
    marginLeft: 10,
  },
  statusText: {
    fontSize: 16,
    color: "black",
    marginLeft: 10,
    color: "black",
  },
  statusButton: {
    width: 150, // Ширина кнопки
    height: 40, // Высота кнопки
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange", // Цвет фона кнопки
    marginRight: 10, // Отступ от правой границы
    borderRadius:5,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",

  },
});