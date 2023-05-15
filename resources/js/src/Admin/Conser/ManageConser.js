import React from "react";
import ReactDOM from "react-dom";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import CreateConser from "./Modals/CreateConser";
import UpdateConser from "./Modals/UpdateConser";
import { tableConser, deleteConser } from "../../Services/ConserServices";
import moment from "moment";
moment.locale('id');
import Axios from "axios";
import Swal from "sweetalert2";

class ManageConser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            modals: {
                create: { open: false, data: null },
                update: { open: false, data: null }
            },
            conser: { table: [] }
        }
        this.getConser = this.getConser.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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

    toggleModal(what, data = null) {
        let modals = this.state.modals;
        modals[what].open = !this.state.modals[what].open;
        if (data !== null) modals[what].data = data;
        this.setState({ modals });
    }

    handleUpdate(data) {
        let conser = this.state.conser;
        conser.table = data;
        this.setState({ conser });
    }

    handleDelete(data) {
        let message = 'Anda yakin ingin menghapus konser <b>' + data.label + '</b> ?';
        let formData = new FormData();
        formData.append('id', data.value);
        Swal.fire({
            title: "Perhatian !", html: message, icon: "question", showCancelButton: true, confirmButtonColor: "#FF9800",
            confirmButtonText: "Hapus", cancelButtonText: "Batalkan", cancelButtonColor: '#ddd', closeOnConfirm: false,
            showLoaderOnConfirm: true, allowOutsideClick: () => !Swal.isLoading(), allowEscapeKey: () => !Swal.isLoading(),
            preConfirm: (e) => {
                return Promise.resolve(Axios({ headers: { "Accept": "application/json" }, method: 'post', data: formData, url: window.origin + '/delete-conser' }))
                    .then((response) => {
                        if (response.data.params === null) {
                            Swal.showValidationMessage(response.data.message, true);
                            Swal.hideLoading();
                        } else {
                            Swal.close();
                            Swal.fire({
                                text: response.data.message,
                                icon: 'success',
                                title: 'success',
                            });

                            this.handleUpdate(response.data.params);
                        }
                    }).catch((error) => {
                        Swal.showValidationMessage(error.response.data.message, true);
                    });
            }
        });
    }

    render() {
        return (
            <>
                <UpdateConser handleClose={this.toggleModal} open={this.state.modals.update.open} update={this.handleUpdate} data={this.state.modals.update.data} />
                <CreateConser handleClose={this.toggleModal} open={this.state.modals.create.open} update={this.handleUpdate} />
                <Header />
                <Sidebar user={this.state.user} />
                <div className="content-wrapper">
                    <div className="content">
                        <h3>Manage Conser</h3>

                        <button className="btn btn-primary" onClick={() => {
                            this.toggleModal('create');
                        }}> <i className="fa fa-plus"></i> Tambah Conser </button>

                        <table className="table table-bordered table-hover table-striped">
                            <thead>
                                <tr>
                                    <td>Nama</td>
                                    <td>Kuota</td>
                                    <td>Tgl Mulai</td>
                                    <td>Tgl Selsai</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.conser.table.length > 0 ?
                                    this.state.conser.table.map((item, index) =>
                                        <tr key={index}>
                                            <td>{item.label}</td>
                                            <td>{item.meta.kuota}</td>
                                            <td>{moment(item.meta.tgl_mulai).format('DD MMMM YYYY HH:mm')}</td>
                                            <td>{moment(item.meta.tgl_selsai).format('DD MMMM YYYY HH:mm')}</td>
                                            <td>
                                                <span className="btn btn-primary mr-1" onClick={() => {
                                                    this.toggleModal('update', item);
                                                }}>Update</span>
                                                <span className="btn btn-danger" onClick={() => {
                                                    this.handleDelete(item);
                                                }}>Delete</span>
                                            </td>
                                        </tr>
                                    )
                                    :
                                    <tr>
                                        <td colSpan={5} className="text-center">No Data</td>
                                    </tr>
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

if (document.getElementById('content')) {
    ReactDOM.render(<ManageConser />, document.getElementById('content'));
}