import { ApiResponse } from './interfaces';

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error('VITE_API_URL is not defined');
}

export async function fetchUsers(
  searchTerm: string = '',
): Promise<ApiResponse> {
  try {
    const query = searchTerm
      ? `search?q=${encodeURIComponent(searchTerm)}`
      : '';

    const response = await fetch(`${API_URL}users/${query}`);

    if (!response.ok) {
      throw new Error(`Error fetching users: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}
