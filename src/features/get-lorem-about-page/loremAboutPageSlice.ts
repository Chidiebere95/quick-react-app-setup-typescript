import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
interface IinitialState {
  loremTextAboutPage: {
    status: string;
    data: Array<string>;
  };
}
const initialState: IinitialState = {
  loremTextAboutPage: {
    status: 'base',
    data: [],
  },
};

export const getLoremTextAboutPage = createAsyncThunk(
  'endpoint-name-in-about-folder',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://baconipsum.com/api/?type=tst');
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const loremSlice = createSlice({
  name: 'about-folder-name',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLoremTextAboutPage.pending, (state, action) => {
      state.loremTextAboutPage.status = 'loading';
      state.loremTextAboutPage.data = [];
    });
    builder.addCase(getLoremTextAboutPage.fulfilled, (state, action) => {
      state.loremTextAboutPage.status = 'successful';
      state.loremTextAboutPage.data = action.payload;
    });
    builder.addCase(getLoremTextAboutPage.rejected, (state, action: any) => {
      state.loremTextAboutPage.status = 'error';
      state.loremTextAboutPage.data = action.payload;
    });
  },
});
export default loremSlice.reducer;
