import PropTypes from 'prop-types';
import React from 'react';
import {ARAssetPreview} from "./index";


export default {
    // Internal id of the component
    id: "ARmdx",
    // Visible label
    label: "AR Asset",
    // Fields the user need to fill out when adding an instance of the component
    fields: [
        {name: 'id', label: 'Asset ID', widget: 'string'},
        {name: 'type', label: 'Asset Type', widget: 'string'}],
    // Pattern to identify a block as being an instance of this component
    // Looks like match is always the full match, i.e. whatever calls it sends the full match
    // regards of any none matching groups.
    pattern: /(?:<AR data=')(.[^']+)(?:.*?>)(.*)(?:<\/AR>)/gms,
    // Function to extract data elements from the regexp match
    fromBlock: function(match) {
        console.log("fromBlock(match) : "+match);
        var data = match[0];
        var r = RegExp(/(?:<AR data=')(.[^']+)(?:.*?>)(.*)(?:<\/AR>)/gms)
        data = r.exec(data);
        data = data[1];
        data = JSON.parse((decodeURI(data)));
        console.log("fromBlock(data) : "+JSON.stringify(data));

        // Some validation.
        if (data == null)
        {
            data = {id:"none", type:"none"}
        }else{
            !data.hasOwnProperty("id") ? data.id = "none" : null;
            !data.hasOwnProperty("type") ? data.type = "none" : null;
        }
        console.log("fromBlock()  data validated : "+JSON.stringify(data));
        return data;
    },
    // Function to create a text block from an instance of this component
    toBlock: function(obj) {
        const data = JSON.stringify({
            id: obj.id || "none",
            type: obj.type || "none",
        });
        console.log("toBlock()  Data:" + JSON.stringify(obj));
        return `<AR data='${encodeURI(data)}'>
<p>something</p>
</AR>`
    },

    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function(obj) {
        return (
            // '<div>AR Asset ID : '+JSON.stringify(obj)+' </div>'
           <ARAssetPreview value={obj}> </ARAssetPreview>
        );
    }
}