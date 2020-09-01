export class User {
  id: number
  name: string
  email: string
  phone: string
  address: string
  role: string
}

export class Ad {
  id: number
  title: string
  description: string
  price: number
  created_at: string
  user: User
}
