import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

export default class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
        this.hanldeCleared = this.hanldeCleared.bind(this);
    }

    hanldeCleared() {
        this.props.handleClose('ticket');
    }

    componentWillReceiveProps(props) {
        if (props.data !== null) {
            this.setState({ data: props.data }, () => console.log(this.state.data));
        }
    }

    render() {
        return (
            <>
                <Dialog
                    id="modal-ticket" fullWidth maxWidth="md"
                    open={this.props.open}
                    scroll="body">
                    <DialogTitle>Modals Ticket</DialogTitle>
                    <DialogContent>
                        {this.state.data !== null ?
                            <div className="card">
                                <div className="card-header">
                                    <h5>Ticket</h5>
                                </div>

                                <div className="card-body">
                                    <h3>Ticket : {this.state.data.ticket}</h3>
                                    <p>Nama : {this.state.data.name}</p>
                                    <p>Email : {this.state.data.email}</p>
                                    <p>Phone : {this.state.data.phone}</p>
                                </div>

                                <div className="card-footer">
                                    <h5 className="text-danger">Harap screenshoot card ini untuk digunakan saat konser mulai</h5>
                                </div>
                            </div>

                            : null}
                    </DialogContent>

                    <DialogActions>
                        <button type="button" onClick={() => this.hanldeCleared()} disabled={this.state.loadings} className="btn btn-outline-secondary btn-flat"><i className="fa fa-close" /> Tutup</button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}