import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {Picker} from "@react-native-picker/picker";
import {datasource} from './Data.js';

const Add = ({navigation}) => {
    const [letter, setLetter] = useState('');
    const [type, setType] = useState('');

    return (
        <View>
            <Text>Letter: </Text>
            <TextInput maxLength={1}
                       style={{borderWidth: 1, borderColor: "gray"}}
                       onChangeText={(text) => setLetter(text)} />
            <Picker onValueChange={(text) => setType(text)}>
                <Picker.Item label={'Vowels'} value='Vowels' />
                <Picker.Item label={'Consonants'} value='Consonants' />
            </Picker>
            <Button title="Submit"
                    onPress={() => {
                        let item = {key:letter};
                        let indexnum = 1;
                        if (type=="Vowels") {
                            indexnum = 0;
                        }
                        datasource[indexnum].data.push(item);
                        navigation.navigate("Home")
                    }
            }
            />
        </View>
    );
};

export default Add;


