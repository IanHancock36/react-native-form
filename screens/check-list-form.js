import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const CheckListForm = () => {
  const [checkedTask, setCheckedTask] = useState(false);
  const [dailyLog, setDailyLog] = useState("");

  function toggle(checkedTask) {
    return !checkedTask;
  }

  const submitTheDay = () => {
    set(ref(db, "/checklist"), {
      dailyLog: dailyLog,
      checkedTask: !checkedTask,
    })
      .then(() => {
        // Data saved successfully!
        Alert.alert("data updated!");
      })
      .catch((error) => {
        // The write failed...
        Alert.alert(error);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={{}}>
          <BouncyCheckbox
            style={{ marginVertical: 6 }}
            onPress={() => setCheckedTask(toggle)}
          />
          <BouncyCheckbox
            style={{ marginVertical: 6 }}
            onPress={() => setCheckedTask(toggle)}
          />
          <BouncyCheckbox
            style={{ marginVertical: 6 }}
            onPress={() => setCheckedTask(toggle)}
          />
          <BouncyCheckbox
            style={{ marginVertical: 6 }}
            onPress={() => setCheckedTask(toggle)}
          />
          <BouncyCheckbox
            style={{ marginVertical: 6 }}
            onPress={() => setCheckedTask(toggle)}
          />
          <BouncyCheckbox
            style={{ marginVertical: 6 }}
            onPress={() => setCheckedTask(toggle)}
          />
        </View>
        <View>
          <Text style={{ marginVertical: 10 }}>1. Spiritual </Text>
          <Text style={{ marginVertical: 10 }}>2. Mental </Text>
          <Text style={{ marginVertical: 10 }}>3. Physical </Text>
          <Text style={{ marginVertical: 10 }}>4. Reading </Text>
          <Text style={{ marginVertical: 10 }}>5. Water </Text>
          <Text style={{ marginVertical: 10 }}>6. Diet </Text>
        </View>
      </View>
      <TextInput
        onChangeText={(dailyLog) => {
          setDailyLog(dailyLog);
        }}
        value={dailyLog}
        placeholder="How was your day?"
        style={{
          width: "80%",
          height: 150,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 15,
          marginVertical: 10,
        }}
      />
      <Button title="Log Your Day" onPress={() => submitTheDay()} />
      <Button title="See Your Progress" />
    </View>
  );
};
