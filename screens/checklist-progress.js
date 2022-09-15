import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { View, Text, FlatList } from "react-native";

const ChecklistProgress = () => {
  const [dailyTasks, setDailyTasks] = useState([]);

  useEffect(() => {
    const retrieveMyDailyLogs = query(
      collection(db, "tasks"),
      orderBy("created", "desc")
    );
    onSnapshot(retrieveMyDailyLogs, (querySnapshot) => {
      setDailyTasks(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View key={item}style={{ flexDirection: "row", marginVertical: 10 }}>
        <Text>{item.id}</Text>
        <Text>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ marginTop: 100 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};
export default ChecklistProgress;
