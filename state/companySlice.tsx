import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchCompany = createAsyncThunk(
    "company/fetchCompany",
    async (id: string) => {
        console.log(id)
        const response = await fetch(`http://139.59.35.127/production/propsoft-api/public/api/get-all-companys${id}`);
        return await response.json();
    }
);

export const companySlice = createSlice({
    name: "company",
    initialState: {
        company: {},
        status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCompany.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchCompany.fulfilled, (state, action) => {
                state.status = "idle";
                state.company = action.payload;
            })
            .addCase(fetchCompany.rejected, (state, action) => {
                state.status = "failed";
            });
    },
});

export default companySlice.reducer;
