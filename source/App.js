import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Loading from './Loading'

const loadableTestOne = Loadable({
    loader: () => import(/* webpackChunkName: "test" */'./TestOne'),
    loading: Loading
})

const loadableTestTwo = Loadable({
    loader: () => import(/* webpackChunkName: "test" */'./TestTwo'),
    loading: Loading
})

export default class App extends Component {
    render () {
        return <BrowserRouter>
            <Link to='/testone'>test one</Link>
            <br />
            <Link to='/testtwo'>test two</Link>
            <Route path='/testtwo' component={ loadableTestTwo } />
            <Route path='/testone' component={ loadableTestOne } />
        </BrowserRouter>
    }
}
