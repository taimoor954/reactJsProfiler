import React, { Component } from 'react'
import Card from '../../Components/Card/card'
export default class Details extends React.Component {
    state = { 
        users :[]
    }
    componentDidMount = async () => 
    {
        const id = this.props.match.params.id
        const data  =  await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json();
        this.setState({
            users:[...this.state.users, data]
        })
        console.log(this.state.users)
    }
    render() {
        return (
            <div>
                
                {this.state.users.map((user) => <Card key={user.id} user={user}/>)}

            </div>
        )
    }
}
