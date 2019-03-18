import React from 'react'
import { ListItem } from 'react-native-elements'
import { ScrollView, Text } from 'react-native'

const List = ({ items }) => (
  <ScrollView>
    {
      items.map((item, i) => (
        <ListItem
          key={i}
          title={item.name}
          subtitle={
            <Text numberOfLines={1}>
              R$ {item.pricing} - {item.description}
            </Text>
          }
          badge={{ value: item.stock }}
        />
      ))
    }
  </ScrollView>
)

export default List;