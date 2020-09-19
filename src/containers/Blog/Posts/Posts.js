import React, { Component } from 'react';
import { Route } from "react-router-dom";

import axios from '../../../axios'
import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log('mmm');
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return { ...post, author: 'Eman' }
                });
                this.setState({ posts: updatedPosts });
            })
            .catch(error => {
                // this.setState({ error: true });
                console.log(error)
            });
    }

    postSelectedHandler = (id) => {
        //navigate programtically
        // this.props.history.push({pathname: 'posts/' + id});
        this.props.history.push('/posts/' + id);

    }

    render() {
        let posts = this.state.posts.map(
            post => {
                return (
                    // <Link to={'posts/' + post.id} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                    // </Link>
                );
            });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;