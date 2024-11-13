import { MdDelete } from "react-icons/md";
import './index.css'

const TaskItem = (props) => {
    const {details, onDelete} = props
    const {id, newTaskTitle} = details

    const logout = () => {
        onDelete(id)
    }

    return (
        <li className="list-container">
            <div className="items">
                <div className="name-card">
                    <h1 className="name">{newTaskTitle}</h1>
                </div>
                <div>
                  <button type="button" className="del-btn" onClick={logout}>
                     <MdDelete  className="icon"/> <span className="span">Delete</span>
                  </button>
                </div>
            </div>
        </li>
    )
}

export default TaskItem
