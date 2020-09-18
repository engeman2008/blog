import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom"; nav link provide some styling, the same functionlity as link
import { Route, NavLink } from "react-router-dom";

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';

class Blog extends Component {
    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                        {/* activeClassName
                        activeStyle */}
                            <li><NavLink exact to="/" activeClassName='active'>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                // pathname: this.props.match.url +  '/new-post', //relative path
                                hash : '#submit',
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
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' exact component={NewPost} />
            </div>
        );
    }
}

export default Blog;