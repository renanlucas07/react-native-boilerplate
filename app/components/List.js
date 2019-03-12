import React from 'react'
import { ListItem } from 'react-native-elements'
import { ScrollView, Text } from 'react-native'

const List = ({ wathers }) => (
  <ScrollView>
    {
      wathers.map((wather, i) => (
        <ListItem
          key={i}
          title={wather.name}
          subtitle={
            <Text numberOfLines={1}>
              R$ {wather.pricing} - {wather.description}
            </Text>
          }
          badge={{ value: wather.stock }}
        />
      ))
    }
  </ScrollView>
)

export default List;