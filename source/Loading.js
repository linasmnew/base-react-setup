import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Loading extends Component {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        pastDelay: PropTypes.bool.isRequired,
        error: PropTypes.string.isRequired
    }

    render () {
        const {
            isLoading,
            pastDelay,
            error
        } = this.props

        if (isLoading && pastDelay) {
            return <p>Loading...</p>
        } else if (error && !isLoading) {
            return <p>Error!</p>
        } else {
            return null
        }
    }
}
