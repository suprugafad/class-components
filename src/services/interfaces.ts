export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
  university: string;
  company: {
    name: string;
    title: string;
  };
  address: {
    city: string;
    country: string;
  };
}

export interface ApiResponse {
  users: User[];
}
