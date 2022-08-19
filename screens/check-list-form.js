import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity, TextInput, Alert } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const CheckListForm = () => {
    const [checkedTask, setCheckedTask] = useState(false)
    const [text, onChangeText] = useState("")


    function toggle(value) {
        return !value;
    }
    // OnPress for Log day needs condition to send alert if not all boxes are checked all must be checked before
    // submission 
    const submitTheDay = () => {
        if (!checkedTask && text) {
            Alert.alert("You Did it! ")
        } else {
            Alert.alert("finish filling this form out")
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{}}>
                    <BouncyCheckbox style={{ marginVertical: 6 }} onPress={() => setCheckedTask(toggle)} />
                    <BouncyCheckbox style={{ marginVertical: 6 }} onPress={() => setCheckedTask(toggle)} />
                    <BouncyCheckbox style={{ marginVertical: 6 }} onPress={() => setCheckedTask(toggle)} />
                    <BouncyCheckbox style={{ marginVertical: 6 }} onPress={() => setCheckedTask(toggle)} />
                    <BouncyCheckbox style={{ marginVertical: 6 }} onPress={() => setCheckedTask(toggle)} />
                    <BouncyCheckbox style={{ marginVertical: 6 }} onPress={() => setCheckedTask(toggle)} />
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
                onChangeText={onChangeText}
                value={text}
                placeholder="How was your day?"
                style={{
                    width: "80%", height: 150,
                    borderColor: 'gray', borderWidth: 1,
                    borderRadius: 15, marginVertical: 10
                }}
            />
            <Button title='Log Your Day' onPress={() => submitTheDay()} />
        </View>
    )
}

