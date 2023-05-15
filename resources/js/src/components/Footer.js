import React from "react";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <footer className="main-footer">
                    <div className="float-right d-none d-sm-block">
                        <b>Version</b> 1.0.0
                    </div>
                    <strong> <a href="#">Galih SAP</a>.</strong> All rights reserved.
                </footer>
            </>
        )
    }
}