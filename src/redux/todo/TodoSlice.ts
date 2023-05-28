import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit';

interface todoState {
  data: [];
  loading: boolean;
  error: string;
}

const initialState: todoState = {
  data: [],
  loading: false,
  error: '',
};

export const getAllTodo = createAsyncThunk('todo/getAllTodo', async () => {
  const response = await axios.get(
    'https://646dbeb69c677e23218a5678.mockapi.io/todos',
  );
  return response.data;
});

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (id: string) => {
    await axios.delete(
      `https://646dbeb69c677e23218a5678.mockapi.io/todos/${id}`,
    );
    return id;
  },
);

export const addTodoThunk = createAsyncThunk(
  'todo/addTodo',
  async (todo: any) => {
    const response = await axios.post(
      'https://646dbeb69c677e23218a5678.mockapi.io/todos',
      todo,
    );
    return response.data;
  },
);

export const completeTodo = createAsyncThunk(
  'todo/completeTodo',
  async (item: any) => {
    const response = await axios.put(
      `https://646dbeb69c677e23218a5678.mockapi.io/todos/${item.id}`,
      {completed: !item.completed},
    );
    return response.data;
  },
);

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllTodo.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllTodo.rejected, (state, action) => {
      state.error = action.error.message || '';
      state.loading = false;
    });
    builder.addCase(deleteTodo.pending, (state, action) => {});
    builder.addCase(deleteTodo.fulfilled, (state: any, action) => {
      state.data = state.data.filter((todo: any) => todo.id !== action.payload);
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.error = action.error.message || '';
    });
    builder.addCase(addTodoThunk.pending, (state, action) => {});
    builder.addCase(addTodoThunk.fulfilled, (state: any, action) => {
      state.data.push(action.payload);
    });
    builder.addCase(addTodoThunk.rejected, (state, action) => {
      state.error = action.error.message || '';
    });
    builder.addCase(completeTodo.pending, (state, action) => {});
    builder.addCase(completeTodo.fulfilled, (state: any, action) => {
      const index = state.data.findIndex(
        (todo: any) => todo.id === action.payload.id,
      );
      state.data[index] = action.payload;
    });
    builder.addCase(completeTodo.rejected, (state, action) => {
      state.error = action.error.message || '';
    });
  },
});

export const todoReducer = todoSlice.reducer;
export const todoAction = {
  getAllTodo,
  deleteTodo,
};
