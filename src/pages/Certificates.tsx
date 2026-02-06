import DashboardLayout from '@/components/DashboardLayout';
import { Download, FileText, Shield, CheckCircle } from 'lucide-react';
import { GovButton } from '@/components/ui/gov-button';

const certificates = [
  {
    id: 'CERT-001',
    type: 'Income Certificate',
    issuedBy: 'Revenue Department',
    issuedDate: '15-Jan-2024',
    validTill: '14-Jan-2025',
    status: 'Valid',
    icon: FileText,
  },
  {
    id: 'CERT-002',
    type: 'Caste Certificate',
    issuedBy: 'Social Welfare Department',
    issuedDate: '20-Mar-2023',
    validTill: 'Lifetime',
    status: 'Valid',
    icon: FileText,
  },
  {
    id: 'CERT-003',
    type: 'Residence Certificate',
    issuedBy: 'Municipal Corporation',
    issuedDate: '10-Jun-2024',
    validTill: '09-Jun-2025',
    status: 'Valid',
    icon: FileText,
  },
  {
    id: 'CERT-004',
    type: 'Birth Certificate',
    issuedBy: 'Registrar of Births',
    issuedDate: '15-May-1986',
    validTill: 'Lifetime',
    status: 'Valid',
    icon: FileText,
  },
];

const insuranceRecords = [
  {
    id: 'INS-001',
    type: 'Health Insurance',
    provider: 'Ayushman Bharat (Govt)',
    policyNo: 'AB-2024-789456',
    coverage: '₹5,00,000',
    validTill: '31-Mar-2027',
    status: 'Active',
  },
  {
    id: 'INS-002',
    type: 'Life Insurance',
    provider: 'LIC of India',
    policyNo: 'LIC-456789123',
    coverage: '₹10,00,000',
    validTill: '15-Jan-2035',
    status: 'Active',
  },
];

const Certificates = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
              Certificates & Schemes
            </h1>
            <p className="text-muted-foreground">
              View and download your certificates, scheme enrollments, and insurance records
            </p>
          </div>
          <GovButton variant="secondary">
            <Download className="w-4 h-4" />
            Download All
          </GovButton>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="mb-8">
        <h2 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          Government Certificates
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {certificates.map((cert) => (
            <div key={cert.id} className="gov-card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-accent rounded-xl">
                    <cert.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      {cert.type}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuedBy}</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-primary bg-accent px-2 py-1 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  {cert.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-2 bg-secondary rounded-lg">
                  <p className="text-xs text-muted-foreground">Issued Date</p>
                  <p className="text-sm font-medium text-foreground">{cert.issuedDate}</p>
                </div>
                <div className="p-2 bg-secondary rounded-lg">
                  <p className="text-xs text-muted-foreground">Valid Till</p>
                  <p className="text-sm font-medium text-foreground">{cert.validTill}</p>
                </div>
              </div>
              
              <GovButton size="sm" className="w-full">
                <Download className="w-4 h-4" />
                Download
              </GovButton>
            </div>
          ))}
        </div>
      </div>

      {/* Insurance Section */}
      <div>
        <h2 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          Insurance Records
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {insuranceRecords.map((insurance) => (
            <div key={insurance.id} className="gov-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {insurance.type}
                  </h3>
                  <p className="text-sm text-muted-foreground">{insurance.provider}</p>
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-primary bg-accent px-2 py-1 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  {insurance.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-2 bg-secondary rounded-lg">
                  <p className="text-xs text-muted-foreground">Policy Number</p>
                  <p className="text-sm font-medium text-foreground">{insurance.policyNo}</p>
                </div>
                <div className="p-2 bg-secondary rounded-lg">
                  <p className="text-xs text-muted-foreground">Coverage</p>
                  <p className="text-sm font-medium text-foreground">{insurance.coverage}</p>
                </div>
                <div className="p-2 bg-secondary rounded-lg col-span-2">
                  <p className="text-xs text-muted-foreground">Valid Till</p>
                  <p className="text-sm font-medium text-foreground">{insurance.validTill}</p>
                </div>
              </div>
              
              <GovButton size="sm" className="w-full">
                <Download className="w-4 h-4" />
                Download Policy
              </GovButton>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Certificates;
