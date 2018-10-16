import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const items = [
    {
        name: "Developpement",
        id: 0,
        children: [{
            name: "Front",
            id: 10,
        },{
            name: "Back",
            id: 17,
        },{
            name: "full stack",
            id: 13,
        },{
            name: "Banana",
            id: 14,
        },{
            name: "Watermelon",
            id: 15,
        },{
            name: "Kiwi fruit",
            id: 16,
        }]
    },
    {
        name: "Marketing",
        id: 1,
        children: [{
            name: "Quartz",
            id: 20,
        },{
            name: "Zircon",
            id: 21,
        },{
            name: "Sapphire",
            id: 22,
        },{
            name: "Topaz",
            id: 23,
        }]
    },
    {
        name: "Design",
        id: 2,
        children: [{
            name: "Graphiste",
            id: 30,
        },{
            name: "designer",
            id: 31,
        },{
            name: "integrateur",
            id: 32,
        },{
            name: "Palm",
            id: 33,
        }]
    },
];

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            selectedItems: [],
        }
    }

    onSelectedItemsChange = (selectedItems) => {
        this.setState({ selectedItems });
    };

    render() {
        return (
                <View source={require('../assets/images/Connexion.png')} style={styles.buttonMulti}>
                    <SectionedMultiSelect style={styles.select}
                        items={items}
                        uniqueKey='id'
                        subKey='children'
                        selectText='Choisissez votre fiches !'
                        showDropDowns={true}
                        readOnlyHeadings={true}
                        onSelectedItemsChange={this.onSelectedItemsChange}
                        selectedItems={this.state.selectedItems}
                    />
                </View>
        );
    }
}
const styles = StyleSheet.create({
   buttonMulti: {
       marginTop: 50,
       backgroundColor: '#ffff',
   },

});