import React from "react";

function Alert(props) {
    const capitalize = (word) => {
        let text = word.toLowerCase();
        return text.charAt(0).toUpperCase() + text.slice(1);
    };
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`} role="alert">
            <strong>{capitalize(props.alert.type)}!</strong> {capitalize(props.alert.msg)}
            {/* <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            ></button> */}
        </div>
    );
}

export default Alert;
