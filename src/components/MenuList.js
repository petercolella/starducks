/**
 * @name MenuList
 * @description React component that returns a FlatList from React Native
 *
 * @description This will take a list of items as props
 *
 */
import { FlatList, Text } from 
import menuItems from '../fixtures/menuItems'
import MenuItem from './MenuItem'

 export default class Menulist extends
    Component {
        render() {
            return (
                <Flatlist
                    data={menuItems}
                    keyExtractor={item => item.id}
                    renderItem={value => <MenuItem item={value.item} />}
                />
            )
        }
    }