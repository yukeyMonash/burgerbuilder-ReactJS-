import React, {Fragment, Component} from 'react';
import Modal from '../../component/UI/Modal/Modal'

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {
        state= {
            error: null
        }

        componentDidMount () {
            this.reqInterceptor=axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });
            this.resInterceptor=axios.interceptors.response.use(res => res,  error => {
                this.setState({error: error});
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render() {
            return (
                <Fragment>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message: null}
                    </Modal>
                    <WrapperComponent {...this.props}/>
                </Fragment>
            )
        }
    }
}

export default withErrorHandler;