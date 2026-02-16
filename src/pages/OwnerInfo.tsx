import DashboardLayout from '@/components/DashboardLayout';
import { Download, Eye, User, Users, Camera } from 'lucide-react';
import { GovButton } from '@/components/ui/gov-button';

const ownerData = {
  personal: {
    qualification: 'Graduate (B.Tech)',
    profession: 'Software Engineer',
    employmentStatus: 'Employed',
    monthlyIncome: '₹75,000',
    aadhaarNo: 'XXXX-XXXX-4567',
    insuranceAvailable: 'Yes',
    insuranceType: 'Government (Ayushman Bharat)',
    caste: 'OBC',
    motherTongue: 'Telugu',
    otherLanguages: 'Hindi, English',
    durationAtLocation: '5 Years',
    govtSchemes: 'PM Awas Yojana, Ayushman Bharat',
  },
  health: {
    bloodGroup: 'O+',
    bpStatus: 'Normal',
    sugarLevel: 'Normal',
    longTermDiseases: 'None',
  },
  spouse: {
    name: 'Lakshmi Devi',
    age: '35',
    qualification: 'Post Graduate (MBA)',
    profession: 'Bank Manager',
  },
};

const familyMembers = [
  { name: 'Ramesh Kumar', relation: 'Self', age: 38, aadhaar: 'XXXX-4567' },
  { name: 'Lakshmi Devi', relation: 'Spouse', age: 35, aadhaar: 'XXXX-7890' },
  { name: 'Arjun Kumar', relation: 'Son', age: 12, aadhaar: 'XXXX-1234' },
  { name: 'Priya Kumar', relation: 'Daughter', age: 8, aadhaar: 'XXXX-5678' },
];

const OwnerInfo = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
              Owner / Family Information
            </h1>
            <p className="text-muted-foreground">
              View personal, family, and health information records
            </p>
          </div>

        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {/* Owner Profile Card */}
        <div className="gov-card lg:col-span-1">
          <div className="text-center pb-4 border-b border-border mb-4">
            <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12 text-primary" />
            </div>
            <h2 className="font-heading font-semibold text-foreground text-xl">
              Ramesh Kumar
            </h2>
            <p className="text-muted-foreground">S/o Venkat Rao</p>
          </div>
          
          <div className="space-y-3">
            {[
              { label: 'Qualification', value: ownerData.personal.qualification },
              { label: 'Profession', value: ownerData.personal.profession },
              { label: 'Employment', value: ownerData.personal.employmentStatus },
              { label: 'Monthly Income', value: ownerData.personal.monthlyIncome },
              { label: 'Aadhaar', value: ownerData.personal.aadhaarNo },
            ].map((item) => (
              <div key={item.label} className="flex justify-between py-2 border-b border-border last:border-0">
                <span className="text-sm text-muted-foreground">{item.label}</span>
                <span className="text-sm font-medium text-foreground">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2 p-3 bg-accent rounded-lg">
              <Camera className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">Building Photo Available</span>
            </div>
          </div>
        </div>

        {/* Details Cards */}
        <div className="lg:col-span-2 space-y-6">
          {/* Language & Culture */}
          <div className="gov-card">
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Language & Cultural Information
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: 'Caste', value: ownerData.personal.caste },
                { label: 'Mother Tongue', value: ownerData.personal.motherTongue },
                { label: 'Other Languages', value: ownerData.personal.otherLanguages },
              ].map((item) => (
                <div key={item.label} className="p-3 bg-secondary rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-medium text-foreground text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Family Members */}
      <div className="gov-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-semibold text-foreground flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Family Members
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Relation</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Age</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Aadhaar</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {familyMembers.map((member) => (
                <tr key={member.name} className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors">
                  <td className="py-4 px-4 font-medium text-foreground">{member.name}</td>
                  <td className="py-4 px-4 text-muted-foreground">{member.relation}</td>
                  <td className="py-4 px-4 text-muted-foreground">{member.age}</td>
                  <td className="py-4 px-4 text-muted-foreground">{member.aadhaar}</td>
                  <td className="py-4 px-4 text-right">
                    <GovButton size="sm" variant="ghost">
                      <Eye className="w-4 h-4" />
                    </GovButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Spouse Information */}
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="font-heading font-semibold text-foreground mb-4">Spouse Information</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Spouse Name', value: ownerData.spouse.name },
              { label: 'Age', value: ownerData.spouse.age },
              { label: 'Qualification', value: ownerData.spouse.qualification },
              { label: 'Profession', value: ownerData.spouse.profession },
            ].map((item) => (
              <div key={item.label} className="p-3 bg-secondary rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="font-medium text-foreground text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OwnerInfo;
