/**
 * @name MenuItem
 * @description React component that returns an item in the FlatList
 *
 * @description This will take an item as props
 *
 */
import React, { Component } from 'react'
import { Imagr, Text, View } from
    'react-native'

export default class MenuItem extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'blue', margin: 20 }}>
                <Text style={{ color: 'white' }}>{this.props.MenuItem.title}</Text>
                <Image source={{ uri: this.props.item.imageSource }} style={{ width: '100%', height: 10, }}
        )
    }
}