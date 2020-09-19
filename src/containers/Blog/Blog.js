import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom"; nav link provide some styling, the same functionlity as link
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from '../Blog/NewPost/NewPost';
import asyncComponent from "../../hoc/asyncComponent";
//use React.lazy in new version
const asyncNewPost = asyncComponent(() => {
    return import('../Blog/NewPost/NewPost')
})

class Blog extends Component {
    state = {
        auth: false
    }
    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* activeClassName
                        activeStyle */}
                            <li><NavLink to="/posts" activeClassName='active'>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                // pathname: this.props.match.url +  '/new-post', //relative path
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                            {/* relative path */}
                            {/* <Link to={props.match.url + '/new'}></Link> */}

                            {/* <li><Link to='/new-post'>New Post</Link></li> */}
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1>Home</h1>} />
                <Route path='/' render={() => <h1>Home2</h1>} /> */}
                {/* the order is important inside switch */}
                <Switch>
                    {/* {this.state.auth ? <Route path='/new-post' component={NewPost} /> : null} */}
                    {this.state.auth ? <Route path='/new-post' component={asyncNewPost} /> : null}

                    <Route path='/posts' component={Posts} />
                    <Route render={() => <h1>Not Found</h1>} />
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path='/' component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;