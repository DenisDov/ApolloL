import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
// import EStyleSheet from 'react-native-extended-stylesheet';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { LoaderInset } from '../components/Loader';
import PostItem from '../components/PostItem/PostItem';

// const styles = EStyleSheet.create({});

class PostScreen extends React.Component {
  static navigationOptions = {
    title: 'Post',
  };

  render() {
    const { Post, loading } = this.props;
    if (loading) return <LoaderInset />;
    return (
      <ScrollView style={{ flexGrow: 1 }}>
        <PostItem title={Post.title} description={Post.description} img={Post.imgUrl} />
      </ScrollView>
    );
  }
}

const READ_MORE = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      date
      title
      imgUrl
      description
    }
  }
`;

export default graphql(READ_MORE, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      id: navigation.state.params.id,
    },
  }),
})(PostScreen);

PostScreen.propTypes = {
  Post: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};
