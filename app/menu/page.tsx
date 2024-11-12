"use client";

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, Plus, Minus, Flame, Leaf, 
  Sparkles, Wine, Coffee, Cocktail 
} from 'lucide-react';
import { menuItems } from '@/lib/mock-data';
import Image from 'next/image';

export default function Menu() {
  const searchParams = useSearchParams();
  const table = searchParams.get('table') || 'A1';
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  };

  const getTotalAmount = () => {
    let total = 0;
    [...menuItems.food, ...menuItems.drinks].forEach(item => {
      if (cart[item.id]) {
        total += item.price * cart[item.id];
      }
    });
    return total;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Wine':
        return <Wine className="w-4 h-4" />;
      case 'Signature Cocktails':
        return <Cocktail className="w-4 h-4" />;
      case 'Non-Alcoholic':
        return <Coffee className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const MenuCard = ({ item }: { item: any }) => (
    <Card className="menu-card">
      <div className="relative h-56">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
        <div className="image-overlay" />
        <div className="absolute top-2 right-2 flex gap-1">
          {item.alcoholic && (
            <Badge variant="secondary" className="bg-black/50 text-white border-0 backdrop-blur-sm">
              21+
            </Badge>
          )}
          {item.popular && (
            <Badge className="bg-accent text-accent-foreground border-0">
              <Sparkles className="w-3 h-3 mr-1" />
              Popular
            </Badge>
          )}
          {item.spicy && (
            <Badge variant="destructive" className="border-0">
              <Flame className="w-3 h-3 mr-1" />
              Spicy
            </Badge>
          )}
          {item.vegan && (
            <Badge variant="secondary" className="bg-green-500 text-white border-0">
              <Leaf className="w-3 h-3 mr-1" />
              Vegan
            </Badge>
          )}
        </div>
        <div className="category-badge flex items-center gap-2">
          {getCategoryIcon(item.category)}
          {item.category}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-lg tracking-tight">{item.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="font-semibold text-lg">₹{item.price}</span>
          <div className="flex items-center gap-2">
            {cart[item.id] ? (
              <>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-medium">{cart[item.id]}</span>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => addToCart(item.id)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <Button onClick={() => addToCart(item.id)}>Add to Cart</Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Habitat Menu</h1>
              <p className="text-sm text-muted-foreground mt-1">Table {table}</p>
            </div>
          </div>
          <Tabs defaultValue="food" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="food">Food Menu</TabsTrigger>
              <TabsTrigger value="drinks">Drinks Menu</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="food" className="w-full">
          <TabsContent value="food" className="mt-0">
            <div className="menu-grid">
              {menuItems.food.map(item => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="drinks" className="mt-0">
            <div className="menu-grid">
              {menuItems.drinks.map(item => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {getTotalItems() > 0 && (
        <div className="fixed bottom-0 left-0 right-0 glass-effect p-4">
          <div className="max-w-7xl mx-auto">
            <Button className="w-full" size="lg">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Checkout ({getTotalItems()} items) - ₹{getTotalAmount()}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}