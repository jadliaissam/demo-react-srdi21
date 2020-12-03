import { render } from '@testing-library/react'
import React from 'react'
class User extends React.Component {

    render() {
        return <div style={{ display: "flex", margin: 10 }}>

            <img src={this.props.user.picture} width={150} height={150} />
            <div>
                <p> {this.props.user.firstName + " " + this.props.user.lastName} </p>
                <p> {this.props.user.email}</p>
                <button>More info</button>
            </div>
            <div>
                X
            </div>



        </div>


    }
}
class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [], isLoading: true, error: false }
    }
    componentDidMount() {
        fetch("https://dummyapi.io/data/api/user", {
            headers: {
                "app-id": "5fc80ff76a51134be378528e"
            }
        })
            .then(rest => rest.json())
            .then(data => this.setState({ data: data.data, isLoading: false, error: null }))
            .catch(err => this.setState({ data: [], isLoading: false, error: err }))

            ;
    }
    render() {
        return <div>
            {this.state.isLoading}
            {this.state.isLoading ? "Chargement en cours" : this.state.data.map(user => <User user={user} />)}
        </div>
    }
}
export default UserList
