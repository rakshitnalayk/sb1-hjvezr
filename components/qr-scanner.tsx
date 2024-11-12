"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScanLine } from 'lucide-react';

// Mock table data - in a real app, this would come from QR codes
const MOCK_TABLES = ['A1', 'A2', 'B1', 'B2'];

export default function QRScanner() {
  const router = useRouter();
  const [scanning, setScanning] = useState(false);

  // Mock QR scanning - in production, use a proper QR scanning library
  const handleScan = () => {
    setScanning(true);
    // Simulate scanning by randomly selecting a table
    const randomTable = MOCK_TABLES[Math.floor(Math.random() * MOCK_TABLES.length)];
    setTimeout(() => {
      setScanning(false);
      router.push(`/auth?table=${randomTable}`);
    }, 1500);
  };

  return (
    <Card className="p-6">
      <div className="flex flex-col items-center gap-4">
        <div className="w-full aspect-square bg-black/5 dark:bg-white/5 rounded-lg flex items-center justify-center relative overflow-hidden">
          {scanning && (
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent animate-scan" />
          )}
          <ScanLine className={`w-16 h-16 ${scanning ? 'text-primary animate-pulse' : 'text-muted-foreground'}`} />
        </div>
        <Button 
          className="w-full" 
          size="lg"
          onClick={handleScan}
          disabled={scanning}
        >
          {scanning ? "Scanning..." : "Scan Table QR"}
        </Button>
      </div>
    </Card>
  );
}