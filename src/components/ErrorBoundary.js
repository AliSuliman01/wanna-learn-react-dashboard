import React from 'react';


class ErrorBoundary extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    render() {

        if (this.state.hasError)
            return <div> this component from error boundary</div>;
        else
            return this.props.children;
    }
}



export default ErrorBoundary;
