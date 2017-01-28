//복잡해질 수록 로직이 복잡해짐


export const selectLibrary = (libraryId) => {
    return {
        //액션creator은 액션이름과 데이터를 반환하는 함수이다.
        //
        type: 'select_library',
        payload: libraryId
    };
};