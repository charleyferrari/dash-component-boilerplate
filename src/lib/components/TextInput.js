import React, {Component} from 'react';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'default',
        };
    }

    render() {
        return <input />;
    }
}

export default TextInput;
