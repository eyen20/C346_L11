import React from 'react';
import Navigation from './Navigation.js';

const datasource = [
    {data:[
            {key: 'a'},
            {key: 'e'},
        ],
        title:"Vowels", bgcolor:"skyblue"},
    {data:[
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
        ],
        title:"Consonants", bgcolor:"khaki"}
];

const App = () => {
    return (
        <Navigation />
    );
};

export default App;