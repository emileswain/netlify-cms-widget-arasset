import PropTypes from 'prop-types';
import React from 'react';

export default class Control extends React.Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        forID: PropTypes.string,
        value: PropTypes.object,
        classNameWrapper: PropTypes.string.isRequired,
    }

    static defaultProps = {
        value: '',
    }

    render() {
        let {
            forID,
            value,
            onChange,
            classNameWrapper,
        } = this.props;

       let currentProps = JSON.parse(value ? value : '{"id":"", "type":""}' );

        let handleChange =(e) => {
            console.log("handleChange "+e);
            onChange(JSON.stringify(e));
        }

        return (
            <div id={forID} >
                <label >ID of AR asset</label>
                <input id="vid" type="text"
                         className={classNameWrapper}
                        value={value ? value.id : '--a'}
                        onChange={(e) => { console.log("id: "+e.target.value);currentProps.id = e.target.value; handleChange(currentProps);}} />
                <label >Type of </label>
                        <input id="vtype" type="text" className={classNameWrapper}
                       value={value ? value.type : '--b'}
                    onChange={(e) => { console.log("type: "+e.target.value); currentProps.type = e.target.value; handleChange(currentProps);}} />
            </div>
        );
    }
}