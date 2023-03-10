import {Item, Header } from 'semantic-ui-react'
import Topics from '../components/Topics';
import React from 'react';
import firebase from '../utils/firebase';
import { Link } from 'react-router-dom';
import Post from '../components/Post';

function MyCollections() {
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        firebase.firestore().collection("posts").where("collectedBy", "array-contains", firebase.auth().currentUser.uid).get().then((collectionSnapshot) => {
            const data = collectionSnapshot.docs.map((docSnapshot) => {
                const id = docSnapshot.id;
                return {...docSnapshot.data(), id};
            })
            setPosts(data);
        })
    }, [])
    return (
        <>
            <Header>ζηζΆθ</Header>
            <Item.Group>
                {posts.map((post) => {
                    return <Post post={post} key={post.id}/>;
                })}
            </Item.Group>
        </>
    );
}

export default MyCollections;