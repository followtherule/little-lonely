import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import firebase from "./utils/firebase";
import Header from "./Header";
import Signin from "./pages/Signin";
import Posts from "./pages/Posts";
import NewPost from "./pages/NewPosts";
import Post from "./pages/Post";
import PostNavigate from "./pages/PostNavigate";
import Member from "./pages/Member";


function App() {
    const [user, setUser] = React.useState(null);
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
    }, []);
    return (
        <BrowserRouter>
            <Header user={user} />    
            <Routes>
                <Route path="/posts/*" element={<PostNavigate user={user} />}></Route>
                <Route path="/my/*" element={user ? <Member user={user} /> : <Navigate to="/posts" />}></Route>
                <Route path="/signin" element={user ? <Navigate to="/posts" /> : <Signin/>}></Route>
                <Route path="/new-post" element={user ? <NewPost/> : <Navigate to="/posts" />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;