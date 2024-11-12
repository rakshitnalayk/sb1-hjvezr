export const menuItems = {
  food: [
    {
      id: 1,
      name: "Classic Smash Burger",
      description: "Double smashed patties, aged cheddar, caramelized onions, special sauce",
      price: 349,
      category: "Burgers",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
      available: true,
      popular: true
    },
    {
      id: 2,
      name: "Truffle Mushroom Pizza",
      description: "Wild mushrooms, truffle oil, mozzarella, fresh herbs",
      price: 449,
      category: "Pizza",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500",
      available: true,
      popular: true
    },
    {
      id: 3,
      name: "Quinoa Buddha Bowl",
      description: "Mixed greens, roasted vegetables, avocado, tahini dressing",
      price: 299,
      category: "Bowls",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500",
      available: true,
      vegan: true
    },
    {
      id: 7,
      name: "Korean Fried Chicken",
      description: "Crispy chicken, gochujang glaze, sesame seeds, kimchi slaw",
      price: 399,
      category: "Mains",
      image: "https://images.unsplash.com/photo-1575932444877-5106bee2a599?w=500",
      available: true,
      spicy: true
    },
    {
      id: 8,
      name: "Loaded Nachos",
      description: "Tortilla chips, melted cheese, guacamole, pico de gallo, sour cream",
      price: 299,
      category: "Sharing",
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500",
      available: true
    },
    {
      id: 9,
      name: "Truffle Fries",
      description: "Hand-cut fries, truffle oil, parmesan, herbs",
      price: 199,
      category: "Sides",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500",
      available: true,
      vegetarian: true
    }
  ],
  drinks: [
    {
      id: 4,
      name: "Spiced Mango Mojito",
      description: "White rum, fresh mango, mint, lime, chili",
      price: 399,
      category: "Signature Cocktails",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500",
      available: true,
      alcoholic: true,
      popular: true
    },
    {
      id: 5,
      name: "Passion Fruit Spritz",
      description: "Fresh passion fruit, sparkling water, mint",
      price: 199,
      category: "Mocktails",
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=500",
      available: true,
      alcoholic: false
    },
    {
      id: 6,
      name: "Craft Beer",
      description: "Rotating selection of local craft beers",
      price: 349,
      category: "Beer",
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500",
      available: true,
      alcoholic: true
    },
    {
      id: 10,
      name: "Espresso Martini",
      description: "Vodka, fresh espresso, coffee liqueur",
      price: 449,
      category: "Signature Cocktails",
      image: "https://images.unsplash.com/photo-1545438102-799c3991ffb2?w=500",
      available: true,
      alcoholic: true
    },
    {
      id: 11,
      name: "Hibiscus Iced Tea",
      description: "House-made hibiscus tea, lemon, mint",
      price: 179,
      category: "Non-Alcoholic",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
      available: true,
      alcoholic: false
    },
    {
      id: 12,
      name: "Natural Wine",
      description: "Selection of organic and natural wines",
      price: 499,
      category: "Wine",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500",
      available: true,
      alcoholic: true
    }
  ]
};

export const mockOrders = [
  {
    id: "ORD001",
    table: "A1",
    status: "preparing",
    items: [
      { id: 1, name: "Classic Smash Burger", quantity: 2, price: 349 },
      { id: 4, name: "Spiced Mango Mojito", quantity: 2, price: 399 },
      { id: 9, name: "Truffle Fries", quantity: 1, price: 199 }
    ],
    total: 1695,
    timestamp: "2024-03-27T10:30:00Z",
    customerPhone: "+919876543210"
  },
  {
    id: "ORD002",
    table: "B3",
    status: "completed",
    items: [
      { id: 2, name: "Truffle Mushroom Pizza", quantity: 1, price: 449 },
      { id: 5, name: "Passion Fruit Spritz", quantity: 2, price: 199 }
    ],
    total: 847,
    timestamp: "2024-03-27T09:45:00Z",
    customerPhone: "+919876543211"
  },
  {
    id: "ORD003",
    table: "C2",
    status: "preparing",
    items: [
      { id: 7, name: "Korean Fried Chicken", quantity: 1, price: 399 },
      { id: 10, name: "Espresso Martini", quantity: 2, price: 449 },
      { id: 8, name: "Loaded Nachos", quantity: 1, price: 299 }
    ],
    total: 1596,
    timestamp: "2024-03-27T10:15:00Z",
    customerPhone: "+919876543212"
  }
];

export const mockAnalytics = {
  totalOrders: 256,
  totalRevenue: 189750,
  popularItems: [
    { name: "Classic Smash Burger", count: 85, revenue: 29665 },
    { name: "Spiced Mango Mojito", count: 78, revenue: 31122 },
    { name: "Truffle Mushroom Pizza", count: 62, revenue: 27838 },
    { name: "Korean Fried Chicken", count: 58, revenue: 23142 },
    { name: "Espresso Martini", count: 52, revenue: 23348 }
  ],
  peakHours: [
    { hour: "18:00", orders: 28 },
    { hour: "19:00", orders: 35 },
    { hour: "20:00", orders: 42 },
    { hour: "21:00", orders: 38 },
    { hour: "22:00", orders: 25 }
  ],
  dailyStats: [
    { day: "Monday", orders: 145, revenue: 24500 },
    { day: "Tuesday", orders: 132, revenue: 22100 },
    { day: "Wednesday", orders: 168, revenue: 28900 },
    { day: "Thursday", orders: 189, revenue: 32400 },
    { day: "Friday", orders: 256, revenue: 45800 },
    { day: "Saturday", orders: 278, revenue: 49200 },
    { day: "Sunday", orders: 234, revenue: 41500 }
  ]
};