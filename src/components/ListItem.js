import React, {Component} from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import {connect} from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

//* as action
// action.a, action.b


class ListItem extends Component {

    componentWillUpdate(){
        //업데이트 될때 마다 sptring
        LayoutAnimation.spring()
    }

    renderDescription() {
        const {library, expanded} = this.props;
        if (expanded) {
            return (

                <CardSection>
                    <Text style={{flex:1}}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {

        const {titleStyle} = styles;
        const {id, title} = this.props.library;


        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}


/**
 *  아래 action을 통해서 redux 를 통해 데이터가 변경된 경우 이를 다시
 *  Props로 넣어주기 위하여 메서드가 필요하다
 *
 */

// ownprops를 줄 경우
// ownprops == this.props
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId == ownProps.library.id;

    return {expanded};
    //return { selectedLibraryId: state.selectedLibraryId };
};
export default connect(mapStateToProps, actions)(ListItem);
/**
 *  이렇게 할경우 각각의 props 데이터에 selectLibrary가 붙게됨
 *  즉 actionCreate를 모든 각각의 섹션에 넣어주는 샘
 *  ListItem 하나하나에 actions를 인자로 갖는다.
 *  현재 index.js에서는 defualt 가 selectLibrary다
 *
 */