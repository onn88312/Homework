const todos = [];

let nextId = 1;

const createTodo = (todos, text) => {
    const newTodo = { id: nextId++, text: text, isCompleted: false };
    todos.push(newTodo);
    return newTodo;
};

const completTodoById = (todos, todoId) => {
	const todo = todos.find((todo) => todo.id === todoId);
	if (todo === undefined) {
		console.error("Такого id не существует");
		return null;
	}
	todo.isCompleted = !todo.isCompleted;
	return todo;
};

const deleteTodoById = (todos, todoId) => {
    todos.splice(todoId - 1, 1);
    return todos;
};

const editTodobyId = (todos, todoId, newText) => {
    const todo = todos.find(todo => todo.id = todoId);
    todo.text = newText;
    return todo;
};
