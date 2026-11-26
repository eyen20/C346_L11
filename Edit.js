import React, {useState} from 'react';
import {View, Text, Button, TextInput, Alert} from 'react-native';
import {datasource} from './Data.js';

const Edit = ({navigation, route}) => {
    const [letter, setLetter] = useState(route.params.key);
    const [type, setType] = useState(route.params.type);

    return (
        <View>
            <Text>Letter: </Text>
            <TextInput value={letter} maxLength={1}
                       style={{borderWidth: 1, borderColor: "gray"}}
                       onChangeText={(text) => setLetter(text)} />
            <Button
                title="Save"
                onPress={() => {
                    let indexnum = 1;
                    if (route.params.type == "Vowels") {
                        indexnum = 0;
                    }
                    datasource[indexnum].data[route.params.index].key = letter;
                    navigation.navigate("Home");
                }}
            />
            <Button title='Delete' onPress={() => {
                let indexnum = 1;
                if (route.params.type === "Vowels") {
                    indexnum = 0;
                }
                Alert.alert('Confirm Delete', 'Are you sure?', [
                    {
                        text: 'Yes', onPress: () => {
                            datasource[indexnum].data.splice(route.params.index, 1);
                            navigation.navigate('Home');
                        }
                    },
                    {text: 'No'}
                ]);
            }} />
        </View>
    );
};

export default Edit;