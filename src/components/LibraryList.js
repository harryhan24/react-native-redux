import React, { Component } from 'react';
import { ListView } from 'react-native';
import {connect} from 'react-redux'; //react와 redux 를 연결시키기 위한 메서드 이렇게하면 데이터를 따로 가져올 필요가 없다.
import ListItem from './ListItem';

class LibraryList extends Component {

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2)=> r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(library){
        return <ListItem library={library} />;
    }

    render() {
        return(
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )

    }
}

//get state를 props로 옮김
//즉 변동된 데이터를 실시간으로 바꾸어주기 위함

const mapStateToProps = state => {
    return { libraries: state.libraries };
};
export default connect(mapStateToProps)(LibraryList);


//데이터를  import로 가져오는게 아닌 redux를 사용해야 한다