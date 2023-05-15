import React from "react";

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
    }

    componentWillReceiveProps(props) {
        if (props.user !== null) {
            this.setState({ user: props.user });
        }
    }

    render() {
        return (
            <>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <a href="/" className="brand-link">
                        <img src={window.origin + '/theme/adminlte/dist/img/AdminLTELogo.png'} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '0.8' }} />
                        <span className="brand-text font-weight-light">Ticket App</span>
                    </a>

                    <div className="sidebar">
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                {this.state.user !== null ?
                                    this.state.user.foto === null ?
                                        <img src={window.origin + '/avatar/avatar5.png'} className="img-circle elevation-2" alt="User Image" />
                                        :
                                        <img src={window.origin + '/avatar/' + this.state.user.foto} className="img-circle elevation-2" alt="User Image" />
                                    : null}
                            </div>

                            <div className="info">
                                <a href="/profil" className="d-block">{this.state.user === null ? 'Alexander Pierce' : this.state.user.name}</a>
                            </div>
                        </div>

                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item">
                                    <a href="/admin" className="nav-link">
                                        <i className="nav-icon fas fa-tachometer-alt"></i>
                                        <p>Dashboard</p>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a href="/manage-conser" className="nav-link">
                                        <i className="nav-icon fas fa-tachometer-alt"></i>
                                        <p>Manage Conser</p>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a href="/logout" className="nav-link">
                                        <i className="nav-icon fas fa-door-closed"></i>
                                        <p>Logout</p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </>
        )
    }
}