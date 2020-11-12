import PropTypes from 'prop-types';
import React from 'react';

export default function Preview({value}) {
    // console.log("Preview "+props.value);
    // let d = props.value;
    // // console.log("Preview D: "+props.value);
    //
    // let data = typeof  props.value === 'object' ? props.value : (JSON.parse(props.value)) ;
    // // console.log("Preview data: "+data);
    return <div>
        <h1> From Preview </h1>
        {/*<p>{ data.id }</p>*/}
        {/*<p>{ data.type }</p>*/}

        <hr/>
        <pre> {JSON.stringify(value, null, 4)}</pre>
    </div>;
}

Preview.propTypes = {
    value: PropTypes.node,
};