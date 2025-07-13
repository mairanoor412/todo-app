
const todoKey = "reactTodo"

export const getLocalStorageLocalData = () => {
   const rowTodos = localStorage.getItem(todoKey);
   if (!rowTodos) return [];

   return JSON.parse(rowTodos);
}


export const setLocalStorageLocalData = (items) => {
   return localStorage.setItem(todoKey, JSON.stringify(items));
}