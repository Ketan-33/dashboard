// This file contains TypeScript type definitions for users and products.

export type User = {
    id:string;
    name: string;
    email: string;
    password: string;
    date: string;
    status:'Active' | 'Inactive'
  };

  