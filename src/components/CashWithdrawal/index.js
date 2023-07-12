// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
    state={amount:2000,
          denominations: denominationsList}

    deducte = (id) => {
           const {denominations} = this.state 
          
           this.setState(prevState => ({amount:prevState.amount - denominations.value}))
        }     
  
    
    render() {
        const name = 'Sailaxmi'
        const slice = name.slice(0,1)
        const {amount,denominations} = this.state
        const minusAmount = denominations.map((each) => (
            each
        ))

        return (
            <div className="bg-container">
              <div className="card">
                <div className="profile-container">
                  <p className="h1"> {slice} </p>
                  <h1 className="h2">{name}</h1>
                </div>
              <div className="cashContainer">
                   <p className="balance">
                      Your Balance 
                   </p> 
                   <p className="amount">
                      {amount}
                   </p>
              </div>
                    <p className="heading">Withdraw</p> 
                    <p className="minus"> 
                    CHOOSE SUM (IN RUPEES)
                    </p>
              <ul>
                   {minusAmount.map((each) => (
                        <DenominationItem item={each} key={each.id} deducte={this.deducte}/>
                   ))}
              </ul>
              </div>
            </div>
        )
    }
}

export default CashWithdrawal