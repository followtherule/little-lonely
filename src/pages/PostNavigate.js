import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import { Grid ,Container,} from 'semantic-ui-react';
import Post from './Post'
import Posts from './Posts'
import Topics from '../components/Topics';

function PostNavigate({ user }) {
  return (
    <Container>
         <Grid>
        <Grid.Row>
            <Grid.Column width={3}><Topics/></Grid.Column>
            <Grid.Column width={10}>
                <Routes>
                    <Route path="*" element={<Posts />} exact/>
                    <Route path=":postId" element={user ? <Post /> : <Navigate to="/posts" />} exact/>
                </Routes>
                </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
            </Grid.Row>
        </Grid>
    </Container> 
  )
}

export default PostNavigate;