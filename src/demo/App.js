/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import {ExampleComponent} from '../lib';
import {TextInput} from '../lib';
import {FoldEmpty} from '../lib';

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <ExampleComponent setProps={this.setProps} {...this.state} />
                <TextInput />
                <FoldEmpty
                    messagePrimary="primary"
                    messageSecondary="secondary"
                />
            </div>
        );
    }
}

export default App;
