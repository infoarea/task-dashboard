import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Get All brand
export const getAllBrand = createAsyncThunk("product/getAllBrand", async () => {
  try {
    const response = await axios.get(
      "https://task-api-mopy.onrender.com/api/v1/brand"
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//Create brand
export const createBrand = createAsyncThunk(
  "product/createBrand",
  async (data) => {
    try {
      const response = await axios.post(
        "https://task-api-mopy.onrender.com/api/v1/brand",
        data
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Delete brand
export const deleteBrand = createAsyncThunk(
  "product/deleteBrand",
  async (id) => {
    try {
      const response = await axios.delete(
        `https://task-api-mopy.onrender.com/api/v1/brand/${id}`
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Update brand
export const updateBrand = createAsyncThunk(
  "product/updateBrand",
  async ({ id, data }) => {
    try {
      const response = await axios.put(
        `https://task-api-mopy.onrender.com/api/v1/brand/${id}`,
        data
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Update brand
export const updateBrandStatus = createAsyncThunk(
  "product/updateBrandStatus",
  async ({ id, status }) => {
    try {
      const response = await axios.put(
        `https://task-api-mopy.onrender.com/api/v1/brand/brand-status/${id}`,
        { status }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Create Product Tag
export const createProductTag = createAsyncThunk(
  "user/createProductTag",
  async (data) => {
    try {
      const response = await axios.post(
        "https://task-api-mopy.onrender.com/api/v1/tag",
        data
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Get All Product Tag
export const getAllProductTag = createAsyncThunk(
  "user/getAllProductTag",
  async () => {
    try {
      const response = await axios.get(
        "https://task-api-mopy.onrender.com/api/v1/tag"
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Delete Product Tag
export const deleteProductTag = createAsyncThunk(
  "user/deletProductTag",
  async (id) => {
    try {
      const response = await axios.delete(
        `https://task-api-mopy.onrender.com/api/v1/tag/${id}`
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Delete Product Tag
export const updateProductTag = createAsyncThunk(
  "user/updateProductTag",
  async ({ id, data }) => {
    try {
      const response = await axios.put(
        `https://task-api-mopy.onrender.com/api/v1/tag/${id}`,
        data
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Update Tag Status
export const updateTagStatus = createAsyncThunk(
  "product/updateTagStatus",
  async ({ id, status }) => {
    try {
      const response = await axios.put(
        `https://task-api-mopy.onrender.com/api/v1/tag/tag-status/${id}`,
        { status }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Get All Category
export const getAllCategory = createAsyncThunk(
  "product/getAllCategory",
  async () => {
    try {
      const response = await axios.get(
        "https://task-api-mopy.onrender.com/api/v1/category"
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Create Category
export const createCategory = createAsyncThunk(
  "product/createCategory",
  async (data) => {
    try {
      const response = await axios.post(
        "https://task-api-mopy.onrender.com/api/v1/category",
        data
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Category Delete
export const deleteCategory = createAsyncThunk(
  "product/deleteCategory",
  async (id) => {
    try {
      const response = await axios.delete(
        `https://task-api-mopy.onrender.com/api/v1/category/${id}`
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Update Category
export const updateCategory = createAsyncThunk(
  "product/updateCategory",
  async ({ id, data }) => {
    try {
      const response = await axios.patch(
        `https://task-api-mopy.onrender.com/api/v1/category/${id}`,
        data
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Get All brand
export const getAllTask = createAsyncThunk("product/getAllTask", async () => {
  try {
    const response = await axios.get(
      "https://task-api-mopy.onrender.com/api/v1/task"
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//Create Task
export const createTask = createAsyncThunk(
  "product/createTask",
  async (data) => {
    try {
      const response = await axios.post(
        "https://task-api-mopy.onrender.com/api/v1/task",
        data
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Delete Task
export const deleteTask = createAsyncThunk("product/deleteTask", async (id) => {
  try {
    const response = await axios.delete(
      `https://task-api-mopy.onrender.com/api/v1/task/${id}`
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//Update brand
export const updateTask = createAsyncThunk(
  "product/updateTask",
  async (data) => {
    try {
      const response = await axios.put(
        `https://task-api-mopy.onrender.com/api/v1/task/${data.id}`,
        data
      );

      console.log(response);

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Update brand
export const updateTaskStatus = createAsyncThunk(
  "product/updateTaskStatus",
  async ({ id, status }) => {
    try {
      const response = await axios.put(
        `https://task-api-mopy.onrender.com/api/v1/task/task-status/${id}`,
        { status }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
