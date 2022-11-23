import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const handleUpClick = () => {
        // convert text into upper case and save in newText
        let newText = text.toUpperCase();
        // set new text value into text through setText
        setText(newText);
        props.showAlert('converted to upper case','success');
    };

    const handleLoClick = () => {
        // convert text into lower case and save in newText
        let newText = text.toLowerCase();
        // set new text value into text through setText
        setText(newText);
        props.showAlert('converted to lower case','success');
    };

    const handleClearText = () => {
        // convert text into clear text and save in newText
        let newText = '';
        // set new text value into text through setText
        setText(newText);
        props.showAlert('cler text','danger');
    };

    let boldText = '';

    // onChange event for write in text area
    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const getSelect = () => {
        let textSel = window.getSelection().toString();
        boldText = textSel;
        console.log(boldText)
    };

    //Remove extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('removed extra spaces','success');
    };

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        // console.log('copied');
        props.showAlert('text copied','success');
    };

    // const changeTextColor = (e) => {
    //     setColor({
    //         color: e.target.value
    //     });
    // };

    const [text, setText] = useState("");
    const [colors, setColor] = useState({
        color: 'black'
    });

    return (
        <>
            <div className="container">
            <h1 className="text-capitalize">{props.heading}</h1>
            <div className="my-3">
                <p>Choose Text Color</p>
                {/* <input type='color' onChange={changeTextColor}/> */}
            </div>
            <div className="my-3">
                <textarea
                className="form-control"
                style={{backgroundColor: props.mode==='dark'? 'black':'white', color: props.mode==='dark'? 'white':'black'}}
                onChange={handleOnChange}
                onMouseUp={getSelect}
                value={text}
                id="myBox"
                rows="6"
                >
                </textarea>
            </div>
            <div className="w-100 col-lg-5 col-md-5 col-12">
                <button className="btn btn-primary mb-1" onClick={handleUpClick}>
                    convert to UpperCase
                </button>
                <button className="btn btn-primary ms-3 mb-1" onClick={handleLoClick}>
                    convert to LowerCase
                </button>
                <button className="btn btn-primary ms-3 mb-1" onClick={handleExtraSpaces}>
                    Remove extra spaces
                </button>
                <button className="btn btn-primary ms-3 mb-1" onClick={handleCopyText}>
                    Copy Text
                </button>
                <button className="btn btn-danger ms-3 mb-1" onClick={handleClearText}>
                    Clear Text
                </button>
            </div>
            </div>
            
            <div className="container my-3">
                <h1 className="text-capitalize">your text summury</h1>
                <p>Number of words {text.split(" ").filter((el)=>{return el.length !== 0}).length} and Number of character {text.length}</p>
                <p><b>{(0.008 * text.split(" ").length).toFixed(3)} Minuts read</b></p>
                <h2>Preview</h2>
                <p style={{colors, color: props.mode==='dark'? 'white':'black'}}>{text}</p>
            </div>
        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
};
