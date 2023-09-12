import { fetchTodo } from '@/lib/fetchTodo';

export default function fetchTodo(id: string) {
    const res = await fetch(`http://127.0.0.1:3500/todos/${id}`)
    if(!res.ok) return undefined;

    const todo: Todo = res.json();

    return todo;
}