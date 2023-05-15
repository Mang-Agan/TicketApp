import React from "react";
import ReactDOM from "react-dom";
import Select from 'react-select';
import { tableConser } from "../Services/ConserServices";
import Swal from "sweetalert2";
import { createParticipans } from "../Services/ParticipansServices";
import Ticket from "./Modals/Ticket";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            conser: {
                table: [],
            },
            form: {
                name: '', email: '', phone: '', conser: ''
            },
            modals: {
                ticket: { open: false, data: null }
            }
        }
        this.getConser = this.getConser.bind(this);
        this.submitCreate = this.submitCreate.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(what, data = null) {
        let modals = this.state.modals;
        modals[what].open = !this.state.modals[what].open;
        if (data !== null) modals[what].data = data;
        this.setState({ modals });
    }

    componentDidMount() {
        this.getConser();
    }

    async getConser() {
        try {
            let response = await tableConser();
            if (response.data.params === null) {
                Swal.fire({
                    text: response.data.message,
                    icon: 'error',
                    title: 'error',
                });
            } else {
                let conser = this.state.conser;
                conser.table = response.data.params;
                this.setState({ conser }, () => console.log(this.state.conser.table));
            }
        } catch (e) {
            Swal.fire({
                text: e.response.data.message,
                icon: 'error',
                title: 'error',
            });
        }
    }

    async submitCreate(e = null) {
        if (e !== null) {
            e.preventDefault();
        }

        try {
            let formData = new FormData();
            if (this.state.conser !== '') formData.append('conser', this.state.form.conser.value);
            if (this.state.name !== '') formData.append('name', this.state.form.name);
            if (this.state.email !== '') formData.append('email', this.state.form.email);
            if (this.state.phone !== '') formData.append('phone', this.state.form.phone);

            let response = await createParticipans(formData);
            if (response.data.params !== null) {
                this.toggleModal('ticket', response.data.params);
            }


        } catch (e) {
            Swal.fire({
                text: e.response.data.message,
                icon: 'error',
                title: 'error',
            });
        }
    }

    render() {
        return (
            <>
                <Ticket handleClose={this.toggleModal} data={this.state.modals.ticket.data} open={this.state.modals.ticket.open} />
                <div className="container">

                    <form onSubmit={this.submitCreate}>
                        <div className="form-group">
                            <label>Pilih Konser</label>

                            <Select options={this.state.conser.table} onChange={(e) => {
                                let form = this.state.form;
                                form.conser = e;
                                this.setState({ form });
                            }} />
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Nama</label>
                            <input type="text" className="form-control" onChange={(e) => {
                                let form = this.state.form;
                                form.name = e.target.value;
                                this.setState({ form });
                            }} />
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Email</label>
                            <input type="email" className="form-control" onChange={(e) => {
                                let form = this.state.form;
                                form.email = e.target.value;
                                this.setState({ form });
                            }} />
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">No HP</label>
                            <input type="text" className="form-control" onChange={(e) => {
                                let form = this.state.form;
                                form.phone = e.target.value;
                                this.setState({ form });
                            }} />
                        </div>

                        <div className="row">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>


                    <a href="/admin" style={{ listStyleType: 'none' }}>Member Area</a>
                </div>
            </>
        )
    }
}

if (document.getElementById("content")) {
    ReactDOM.render(<Home />, document.getElementById("content"));
}