import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { GovButton } from '@/components/ui/gov-button';
import { GovInput } from '@/components/ui/gov-input';
import { Phone, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const Login = () => {
  const [step, setStep] = useState<'mobile' | 'otp'>('mobile');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleMobileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length === 10) {
      setStep('otp');
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length >= 4) {
      setIsLoading(true);
      // Simulate verification delay
      setTimeout(() => {
        login(mobile);
        navigate('/dashboard');
      }, 800);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
            Government Portal
          </h1>
          <p className="text-muted-foreground">
            Secure access to your records and services
          </p>
        </div>

        {/* Login Card */}
        <div className="gov-card">
          {step === 'mobile' ? (
            <form onSubmit={handleMobileSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="gov-label">Mobile Number</label>
                <GovInput
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  icon={<Phone className="w-5 h-5" />}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  maxLength={10}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  We'll send an OTP to verify your number
                </p>
              </div>

              <GovButton
                type="submit"
                className="w-full"
                disabled={mobile.length !== 10}
              >
                Send OTP
                <ArrowRight className="w-4 h-4" />
              </GovButton>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div className="flex items-center gap-2 p-3 bg-accent rounded-lg mb-4">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-accent-foreground">
                  OTP sent to +91 {mobile}
                </span>
                <button
                  type="button"
                  onClick={() => setStep('mobile')}
                  className="text-sm text-primary font-medium ml-auto hover:underline"
                >
                  Change
                </button>
              </div>

              <div className="space-y-2">
                <label className="gov-label">Enter OTP</label>
                <GovInput
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  icon={<Shield className="w-5 h-5" />}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  maxLength={6}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Demo: Enter any 4+ digits to proceed
                </p>
              </div>

              <GovButton
                type="submit"
                className="w-full"
                disabled={otp.length < 4 || isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Verifying...
                  </>
                ) : (
                  <>
                    Verify & Login
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </GovButton>

              <button
                type="button"
                className="w-full text-sm text-primary font-medium hover:underline"
              >
                Resend OTP
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;
