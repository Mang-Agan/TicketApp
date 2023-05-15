import React from "react";
import ReactDOM from "react-dom";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <Header />
                <Sidebar user={this.state.user} />
                <div className="content-wrapper">
                    <div className="content">
                        <h3>Dashboard</h3>
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>150</h3>

                                        <p>New Orders</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>150</h3>

                                        <p>Bounce Rate</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>150</h3>

                                        <p>User Registration</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>150</h3>

                                        <p>Visitor</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

if (document.getElementById('content')) {
    ReactDOM.render(<Dashboard />, document.getElementById('content'));
}