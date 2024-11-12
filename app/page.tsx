import QRScanner from '@/components/qr-scanner';

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">HabitatFood</h1>
          <p className="text-muted-foreground">Scan QR code to start ordering</p>
        </div>
        <QRScanner />
      </div>
    </main>
  );
}