import React from 'react'
// import {connect} from 'react-redux'
    
import Card from '../../Components/Card/card'

class Details extends React.Component {
   state = { 
       users: []
   }

   async componentDidMount()
   {
    const data  =  await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    this.setState({
        users : [...this.state.users, ...data]
    })
    console.log(this.state.users)
}

    render = () => {
        // console.log(this.state.users)
        return (
            <div className='profiles'>
                <div>
                    {this.state.users.map((user) => <Card key={user.id} user={user}/>)}
                </div>
            </div>
        )
    }
    
}
export default Details

