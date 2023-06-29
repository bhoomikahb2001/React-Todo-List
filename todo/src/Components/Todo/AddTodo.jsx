import {useState} from 'react';
import TodoItem from './TodoItem';

function AddTodo(props) {
    var style = {
        width:"300px",
        padding:"30px",
        textAlign:"center",
        margin:"50px auto 20px",
        backgroundColor:"cadetblue",
        borderRadius:"10px"
    }
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
        <div style={style}>
            <h2 style={{marginTop:"10px", color:"darkblue"}}>Todo List</h2>
            <input style={{marginRight:"5px", height:"22px", fontSize:"15px"}}
            value={state}
            type="text" 
            placeholder="Enter Some Text" 
            onChange={(e)=>{
                setState(e.target.value);
            }} />
            <button style={{background:"lightgreen", borderRadius:"5px", fontSize:"15px"}} onClick={addTodoItem}>Add Item</button>
            <TodoItem todoitem={todoitems} deleteItem={deleteItem} handleToggle={handleToggle} />        
        </div>
    );
}

export default AddTodo;