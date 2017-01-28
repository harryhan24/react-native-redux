import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';//리액트와의 연결을 위
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = ()=>{
    return(
        //이렇게 할경우 하위 컴포넌트에서 따로 설정하지 않아도 store에 접근할 수 있다.
        <Provider store={createStore(reducers)}>
            <View style={{flex:1}}>
                <Header headerText="Tech Stack"/>
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;
