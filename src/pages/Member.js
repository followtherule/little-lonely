import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Grid ,Container,} from 'semantic-ui-react';
import Post from './Post'
import Posts from './Posts'
import Topics from '../components/Topics';
import MyMenu from "../components/MyMenu";
import MyPosts from './MyPosts';
import MyCollections from './MyCollections';
import MySettings from './MySettings';

function Member({ user }) {
  return (
    <Container>
         <Grid>
        <Grid.Row>
            <Grid.Column width={3}><MyMenu /></Grid.Column>
            <Grid.Column width={10}>
                <Routes>
                    <Route path="posts" element={<MyPosts/>} exact/>
                    <Route path="collections" element={<MyCollections/>} exact/>
                    <Route path="settings" element={<MySettings user={user} />} exact/>
                </Routes>
                </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
            </Grid.Row>
        </Grid>
    </Container> 
  )
}

export default Member;