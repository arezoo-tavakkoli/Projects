
import ExpensesFilter from "./ExpensesFilter"
import {useState} from "react";
import "./Expenses.css"
import "./ExpensesFilter.css"
import Card from '../UI/Card'
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart"

function Expenses (props){
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangedHandler = (selectedyear) =>{
        setFilteredYear(selectedyear)
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div>           
            <Card className = "expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter= {filterChangedHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}
 export default Expenses;