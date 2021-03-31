import React from 'react'
import { Link, Route, useRouteMatch } from "react-router-dom"
import SinglePage from './SinglePage'

export default function About(props) {
    console.log(useRouteMatch())
    const { url, path } = useRouteMatch()
    return (
        <div className="about__content">
            <ul className="about__list">
                <li class="nav-item">
                    <Link to={`${url}/about-app`}>About App</Link>
                </li>
                <li class="nav-item">
                    <Link to={`${url}/about-author`}>About Author</Link>
                </li>
                
            </ul>
            
            <Route path={`${path}/:slug`}>
                <SinglePage />
            </Route>
        </div>
    )
}
