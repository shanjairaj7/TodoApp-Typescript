type Todo = {
    id:string;
    text: string;
    completed:boolean;
}

type addTodo = (todo:Todo) => void;

type toggleTodo = (selectedTodo:Todo) => void;

type showUpdateTodo = (todoToUpdate:Todo) => void;

type updateTodo = (todo:Todo) => void;

type deleteTodo = (deleteTodo:Todo) => void;