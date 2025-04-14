import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

// Interceptor untuk tambah token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getContents = async () => {
  try {
    const response = await api.get("/content");
    return response.data;
  } catch (error) {
    return {
      data: [
        { _id: "1", title: "Sample News", body: "Content here.", status: "published" },
        { _id: "2", title: "Another Post", body: "More content.", status: "published" },
      ],
    };
  }
};
export const getContentById = (id: string) => api.get(`/content/${id}`);
export const createContent = (data: any) => api.post("/content", data);
export const updateContent = (id: string, data: any) =>
  api.put(`/content/${id}`, data);
export const deleteContent = (id: string) => api.delete(`/content/${id}`);
export const uploadMedia = (formData: FormData) =>
  api.post("/media", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const login = (credentials: { email: string; password: string }) =>
  api.post("/users/login", credentials);