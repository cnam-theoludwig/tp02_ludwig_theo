export const CUSTOMER_GENDERS = ["man", "woman", "other"] as const
export type CustomerGender = (typeof CUSTOMER_GENDERS)[number]

export interface Customer {
  firstName: string
  lastName: string
  address: string
  zipCode: string
  city: string
  phone: string
  gender: CustomerGender
  email: string
  password: string
  passwordConfirmation: string
}

export const CUSTOMER_MOCK: Customer = {
  firstName: "John",
  lastName: "Doe",
  address: "5 Rue d'Angular",
  zipCode: "12345",
  city: "Strasbourg",
  phone: "0712345678",
  gender: "man",
  email: "john@doe.com",
  password: "password",
  passwordConfirmation: "password",
}
