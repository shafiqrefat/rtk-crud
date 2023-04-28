import { createSlice } from "@reduxjs/toolkit";
import { fakeData } from "../../DummyData/FakeDate";

const initailUserState = {
    value: fakeData
}

export const userSlice = createSlice({
    name: "user",
    initialState: initailUserState,
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((val) => val.id !== action.payload.id)
        },
        updateUser: (state, action) => {
            state.value.map((user) => {
                if (user.id === action.payload.id) {
                    user.username = action.payload.username
                }
            })
        }
    }
})
export default userSlice.reducer
export const { addUser, deleteUser, updateUser } = userSlice.actions