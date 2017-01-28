import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    //reducer 생성
    libraries:LibraryReducer,
    selectedLibraryId: SelectionReducer
    //이렇게 되면 id에 해당 payload값이 들어감
});


// console.log(store.getStore());
// {libraries: []}