// Write your code here
import './index.css' 

const DenominationItem = props => {
    const {item,deducte} = props 
    const {id, value} = item
    const deleteAmount = () => {
        deducte(id)
    }
    
    return (
        <li className="denomination" onClick={deleteAmount}>
            <button className="value" type="button">{value}</button> 
            
        </li>
    )
}

export default DenominationItem