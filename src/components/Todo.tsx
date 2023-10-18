import { useState } from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
// import NewTodo from './newTodo';
//import sanitizeHtml from "sanitize-html"
import ContentEditable from 'react-contenteditable';

interface TodoProps {
  todos: string[];
  todoC: string[];
  title: string;
  status: string;
  completeTodoHandlerReducer: (todo: number) => void;
  completeAddTodoHandlerReducer: (todo: string) => void;
  //time: number;
  //setTodoVisible: (todoVisible: boolean) => void;
  //todoVisible: boolean;
}

function Todo({
  title,
  status,
  todos,
  todoC,
  completeTodoHandlerReducer,
  completeAddTodoHandlerReducer,
}: //time,
//setTodoVisible,
//todoVisible,
TodoProps) {
  const [todoVisible, setTodoVisible] = useState(true);
  //const [todoArr, settodoArr] = useState([]);
  //const [todoIndex, settodoIndex] = useState(0);
  const [toTitle, setToTitle] = useState<string>(title);
  const [completedtodoArr, setCompletedtodoArr] = useState([]);
  let completedtodoArr2 = [];
  //toTitle = title;
  function onInputHandler(event) {
    setToTitle(event.target.innerText);
  }
  function completeTodoHandler(event) {
    //setTodoVisible(false);
    // const todos = todoArr.filter((todo, todoIndex) => {
    //   return todoIndex !== index;
    // });
    // settodoArr(todos);
    //let newtodos = [...todos];
    //settodoIndex(event.target);
    let index = todos.indexOf(event.target.title);
    completeTodoHandlerReducer(index);
    //alert(index);
    //todos.splice(index, 1);
    //setCompletedtodoArr([...completedtodoArr, event.target.title.toString()]);
    //console.log('the arr is: ', completedtodoArr);
    //completedtodoArr2.push(event.target.title.toString());
    //console.log('the new array is: ', completedtodoArr2);
    completeAddTodoHandlerReducer(event.target.title);
    console.log(index);
    // var array = [...todoArr]; // make a separate copy of the array
    // var index = array.indexOf(e.target.value);
    // if (index !== -1) {
    //   array.splice(index, 1);
    //   settodoArr({ todoArr: array });
    // }

    // settodoArr(todoArr.filter((el) => el !== name));
  }
  return (
    <>
      {todoVisible && [
        <p
          style={{
            borderStyle: 'ridge',
            borderRadius: 5,
            borderWidth: 1.6,
            borderColor: 'white',
            height: 65,
            position: 'relative',
          }}
        >
          {/* <div contentEditable dangerouslySetInnerHTML={{ __html: title }} /> */}

          <div
            contentEditable="true"
            //dangerouslySetInnerHTML={{ __html: title }}
            onInput={onInputHandler}
            style={{
              fontSize: 25,
              msTransform: 'translateY(25%)',
              transform: 'translateY(25%)',
              float: 'left',
              marginLeft: 20,
            }}
          >
            {toTitle}
          </div>

          {/* <ContentEditable
              innerRef={this.contentEditable}
              html={this.state.html} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
            /> */}

          <button
            style={{
              msTransform: 'translateY(25%)',
              transform: 'translateY(25%)',
              float: 'right',
              marginRight: 20,
            }}
            type="button"
            className="btn btn-success align-middle redy"
            onClick={completeTodoHandler} //add (index)
            title={title} //maybe change to time
          >
            {status}
          </button>
        </p>,
      ]}
      {/* {todos.length == 0 && [
        <p style={{ textAlign: 'center' }}>No Todos Yet!</p>,
      ]} */}

      {/* {completedtodoArr2 && completedtodoArr2.length > 0 ? (
        [<p style={{ textAlign: 'center' }}>No jdsfjdsfk</p>]
      ) : (
        <p style={{ textAlign: 'center' }}>No Completed Todos Yet!</p>
      )} */}
    </>
  );
}

export default Todo;
