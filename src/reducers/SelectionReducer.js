//reducer에 등록된 데이터는 모두 action과 state값을 받는다.

//데이터가 하나도 없을경우에 대비하여 state = null
export default (state=null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};