import axios from 'axios';
import { Comment } from './commentTypes';

const API_URL = 'http://localhost:3000/api/comments';

export const getComments = async (): Promise<Comment[]> => {
  const response = await axios.get<Comment[]>(API_URL);
  return response.data;
};

export const getCommentById = async (id: string): Promise<Comment> => {
  const response = await axios.get<Comment>(`${API_URL}/${id}`);
  return response.data;
};

export const createComment = async (comment: Comment): Promise<Comment> => {
  const response = await axios.post<Comment>(API_URL, comment);
  return response.data;
};

export const updateComment = async (id: string, comment: Comment): Promise<Comment> => {
  const response = await axios.put<Comment>(`${API_URL}/${id}`, comment);
  return response.data;
};

export const deleteComment = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
