import DashboardLayout from '@/components/DashboardLayout';
import { FileText, Eye } from 'lucide-react';
import { GovButton } from '@/components/ui/gov-button';

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
              View your certificates and scheme enrollments
            </p>
          </div>
        </div>
      </div>

      {/* Only Residence Certificate */}
      <div className="max-w-md">
        <div className="gov-card">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent rounded-xl">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">
                  Residence Certificate
                </h3>
                <p className="text-sm text-muted-foreground">Municipal Corporation</p>
              </div>
            </div>
            <span className="text-xs font-medium text-primary bg-accent px-2 py-1 rounded-full">
              Valid
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="p-2 bg-secondary rounded-lg">
              <p className="text-xs text-muted-foreground">Issued Date</p>
              <p className="text-sm font-medium text-foreground">10-Jun-2024</p>
            </div>
            <div className="p-2 bg-secondary rounded-lg">
              <p className="text-xs text-muted-foreground">Valid Till</p>
              <p className="text-sm font-medium text-foreground">09-Jun-2025</p>
            </div>
          </div>
          
          <GovButton size="sm" className="w-full">
            <Eye className="w-4 h-4 mr-2" />
            View
          </GovButton>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Certificates;
