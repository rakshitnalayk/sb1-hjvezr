"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Phone } from 'lucide-react';

export default function Auth() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 10) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return;
    }
    setStep('otp');
    // Mock OTP send
    toast({
      title: "OTP Sent",
      description: "Use any 6-digit code to proceed",
    });
  };

  const handleOTPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive",
      });
      return;
    }
    // Mock OTP verification
    const table = searchParams.get('table') || 'A1';
    router.push(`/menu?table=${table}`);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2">Welcome to HabitatFood</h1>
          <p className="text-sm text-muted-foreground">
            {step === 'phone' 
              ? "Enter your phone number to continue" 
              : "Enter the OTP sent to your phone"}
          </p>
        </div>

        {step === 'phone' ? (
          <form onSubmit={handlePhoneSubmit} className="space-y-4">
            <div className="flex gap-2">
              <div className="flex-shrink-0 flex items-center px-3 border rounded-md bg-muted">
                <Phone className="h-4 w-4" />
                <span className="ml-2">+91</span>
              </div>
              <Input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                className="flex-1"
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Continue
            </Button>
          </form>
        ) : (
          <form onSubmit={handleOTPSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="text-center text-2xl tracking-widest"
            />
            <Button type="submit" className="w-full" size="lg">
              Verify OTP
            </Button>
            <Button
              type="button"
              variant="link"
              className="w-full"
              onClick={() => setStep('phone')}
            >
              Change phone number
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}