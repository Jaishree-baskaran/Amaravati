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
    if (otp.length === 4) {
      setIsLoading(true);
      setTimeout(() => {
        login(mobile);
        navigate('/dashboard');
      }, 800);
    }
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* LEFT HALF - ONLY IMAGE (Full Height) */}
      <div className="hidden lg:flex lg:w-1/2 relative h-screen">
        <img 
          src="/future city.png" 
          alt="Amaravathi Capital City"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Simple title on image */}
        <div className="absolute bottom-12 left-0 right-0 text-center text-white px-8">
          <h1 className="text-3xl font-bold mb-2">అమరావతి దిగిసేవ</h1>
          <p className="text-lg opacity-90">Amaravati Digital Services Portal</p>
          <p className="text-sm opacity-80 mt-2">Future Capital of Andhra Pradesh</p>
        </div>
      </div>

      {/* RIGHT HALF - Logos + Login Form */}
      <div className="w-full lg:w-1/2 h-screen flex flex-col overflow-hidden">
        {/* Container that centers everything */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* TOP: Two BIG Logos - One on left, one on right */}
          <div className="flex-shrink-0 flex items-center justify-between px-6 md:px-10 pt-8 md:pt-10">
            
          {/* Logo 1 - LEFT SIDE (Big) */}
            <div className="h-56 md:h-60 w-88 overflow-hidden">
              <img 
                src="/logos.png" 
                alt="Government Logo"
                className="w-full h-full object-contain"
                style={{ objectPosition: 'left center' }}
              />
            </div>
            {/* Logo 2 - RIGHT SIDE (Big) */}
            <div className="h-24 md:h-28 w-48 overflow-hidden">
              <img 
                src="/redbay.png" 
                alt="Amaravathi Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Centered Login Form - Takes available space */}
          <div className="flex-1 flex items-center justify-center p-4 md:p-6 min-h-0">
            <div className="w-full max-w-md mx-auto scale-150">
              <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  Amaravati citizen portal
                </h1>
                <p className="text-gray-600 text-sm">
                  Secure access to your records and services
                </p>
              </div>

              <div className="gov-card p-5 md:p-6">
                {step === 'mobile' ? (
                  <form onSubmit={handleMobileSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="gov-label text-sm">Mobile Number</label>
                      <GovInput
                        type="tel"
                        placeholder="Enter 10-digit mobile number"
                        icon={<Phone className="w-4 h-4" />}
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
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </GovButton>
                  </form>
                ) : (
                  <form onSubmit={handleOtpSubmit} className="space-y-4">
                    <div className="flex items-center gap-2 p-2 bg-accent rounded-lg mb-3 text-xs">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-accent-foreground">
                        OTP sent to +91 {mobile}
                      </span>
                      <button
                        type="button"
                        onClick={() => setStep('mobile')}
                        className="text-primary font-medium ml-auto hover:underline"
                      >
                        Change
                      </button>
                    </div>

                    <div className="space-y-2">
                      <label className="gov-label text-sm">Enter OTP</label>
                      <GovInput
                        type="text"
                        placeholder="Enter 4-digit OTP"
                        icon={<Shield className="w-4 h-4" />}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                        maxLength={4}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        Enter exactly 4 digits to proceed
                      </p>
                    </div>

                    <GovButton
                      type="submit"
                      className="w-full"
                      disabled={otp.length !== 4 || isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Verifying...
                        </>
                      ) : (
                        <>
                          Verify & Login
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </>
                      )}
                    </GovButton>

                    <button
                      type="button"
                      className="w-full text-xs text-primary font-medium hover:underline"
                    >
                      Resend OTP
                    </button>
                  </form>
                )}
              </div>

              <p className="text-center text-xs text-muted-foreground mt-4 px-2">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
