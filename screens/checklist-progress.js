import React from 'react'
import { View, Text, FlatList } from 'react-native'

data = [{
  day: new TimeRanges(),
  logTheDayNotes: "I did great today"
}]



const ChecklistProgress = () => {
  const renderData = (data, index) => {
    return (
      <View key={index}>
        <Text>{data.day}</Text>
        <Text>{data.logTheDayNotes}</Text>
        {console.log(data.day)}
        {console.log(data.logTheDayNotes)}
      </View>
    )
  }
  return (
    <View>
      <Text>HI</Text>
      <FlatList
        data={data}
        renderItem={renderData}
      />
    </View>
  )
}
export default ChecklistProgress