import {useState} from 'react';
import TodoItem from './TodoItem';

function AddTodo(props) {
    const [state,setState] = useState("");
    const [todoitems,setTodoItems] = useState([]);

    const addTodoItem = ()=>{
        //In React Never Update Array or Object, we have to replace array and object
        var newItem = {
           title:state,
           status:true,
        }
        setTodoItems([...todoitems,newItem]);
    };

    const handleToggle = (index) => {
        var newArray = todoitems.map((item, i) => {
            return index === i ? { ...item, status: !item.status } : item;
        });
        setTodoItems(newArray);
    };

    const deleteItem = (index) => {
        var filteredData = todoitems.filter((item,i) => {
            return index != i;
        });
        setTodoItems(filteredData);
    };

    return (
        <div>
            <h2 style={{marginTop:"100px"}}>Todo List</h2>
            <input 
            value={state}
            type="text" 
            placeholder="Enter Some Text" 
            onChange={(e)=>{
                setState(e.target.value);
            }} />
            <button onClick={addTodoItem}>Add Item</button>
            <TodoItem todoitem={todoitems} deleteItem={deleteItem} handleToggle={handleToggle} />        
        </div>
    );
}

export default AddTodo;