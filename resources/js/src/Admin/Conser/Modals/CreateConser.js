import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import moment from "moment";
import { createConser } from "../../../Services/ConserServices";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateConser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: '', kuota: 0, tgl_mulai: new Date(), tgl_selsai: new Date()
            }
        }
        this.hanldeCleared = this.hanldeCleared.bind(this);
        this.submitCreate = this.submitCreate.bind(this);
    }

    async submitCreate(e = null) {
        if (e !== null) {
            e.preventDefault();
        }

        try {
            let formData = new FormData();
            if (this.state.form.name !== '') formData.append('name', this.state.form.name);
            if (this.state.form.kuota !== 0) formData.append('kuota', this.state.form.kuota);
            if (this.state.form.tgl_mulai !== null) formData.append('tgl_mulai', moment(this.state.form.tgl_mulai));
            if (this.state.form.tgl_selsai !== null) formData.append('tgl_selsai', moment(this.state.form.tgl_selsai));

            let response = await createConser(formData);

            if (response.data.params === null) {
                Swal.fire({
                    text: response.data.message,
                    icon: 'error',
                    title: 'error',
                    target: document.getElementById('modal-create')
                });
            } else {
                Swal.fire({
                    text: response.data.message,
                    icon: 'success',
                    title: 'success',
                });
                this.props.update(response.data.params);
                this.hanldeCleared();
            }

        } catch (e) {
            Swal.fire({
                text: e.response.data.message,
                icon: 'error',
                title: 'error',
                target: document.getElementById('modal-create')
            });
        }
    }

    hanldeCleared() {
        let form = this.state.form;
        form.name = '';
        form.kuota = 0;
        form.tgl_mulai = new Date();
        form.tgl_selsai = new Date();
        this.props.handleClose('create');
    }

    render() {
        return (
            <>
                <Dialog
                    id="modal-create" fullWidth maxWidth="md"
                    open={this.props.open}
                    scroll="body">
                    <form onSubmit={this.submitCreate}>
                        <DialogTitle>Form Tambah Conser</DialogTitle>

                        <DialogContent>
                            <div className="form-group">
                                <label>Nama</label>

                                <input type="text" className="form-control" onChange={(e) => {
                                    let form = this.state.form;
                                    form.name = e.target.value;
                                    this.setState({ form });
                                }} />
                            </div>

                            <div className="form-group">
                                <label>Kuota</label>

                                <input type="number" className="form-control" onChange={(e) => {
                                    let form = this.state.form;
                                    form.kuota = e.target.value;
                                    this.setState({ form });
                                }} />
                            </div>

                            <div className="form-group">
                                <label>Tanggal Mulai</label>

                                <DatePicker style={{ width: "100%" }} className="form-control text-sm"
                                    locale="id" dateFormat="dd/MM/yyyy HH:mm" timeFormat="HH:mm" timeIntervals={15} timeCaption="Time"
                                    showTimeSelect
                                    selected={this.state.form.tgl_mulai} shouldCloseOnSelect={true}
                                    minDate={new Date()}
                                    onChange={(e) => {
                                        let form = this.state.form;
                                        form.tgl_mulai = e;
                                        this.setState({ form });
                                    }} />
                            </div>

                            <div className="form-group">
                                <label>Tanggal Selsai</label>

                                <DatePicker style={{ width: "100%" }} className="form-control text-sm"
                                    locale="id" dateFormat="dd/MM/yyyy HH:mm" timeFormat="HH:mm" timeIntervals={15} timeCaption="Time"
                                    showTimeSelect
                                    selected={this.state.form.tgl_selsai} shouldCloseOnSelect={true}
                                    minDate={new Date()}
                                    onChange={(e) => {
                                        let form = this.state.form;
                                        form.tgl_selsai = e;
                                        this.setState({ form });
                                    }} />
                            </div>
                        </DialogContent>

                        <DialogActions>
                            <button type="submit" disabled={this.state.loadings} className="btn btn-outline-primary btn-flat mr-1"><i className="fa fa-save mr-1" />Submit</button>
                            <button type="button" onClick={() => this.hanldeCleared()} disabled={this.state.loadings} className="btn btn-outline-secondary btn-flat"><i className="fa fa-close" /> Tutup</button>
                        </DialogActions>
                    </form>

                </Dialog>
            </>
        )
    }
}