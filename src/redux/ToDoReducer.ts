export function ToDoReducer(state: any, action: any) {
  if (typeof state === 'undefined') {
    return [];
  }
  if (action.type == 'ADD_TODO') {
    return [...state, action.payload];
  } else if (action.type == 'REMOVE_TODO') {
    return state.filter((q: any) => q?.id != action.payload);
  } else if (action.type == 'COMPLETE_TODO') {
    return state.map((q: any) => {
      if (q.id == action.payload) {
        if (q.completed) {
          q.completed = false;
        } else {
          q.completed = true;
        }
      }
      return q;
    });
  } else {
    return state;
  }
}
