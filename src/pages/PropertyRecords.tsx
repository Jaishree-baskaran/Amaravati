import DashboardLayout from '@/components/DashboardLayout';
import { Download, Eye, Building2, MapPin, Calendar } from 'lucide-react';
import { GovButton } from '@/components/ui/gov-button';

const propertyData = [
  {
    id: 'PROP-2024-001',
    layoutNo: 'LP-456/2023',
    oldSurveyNo: '123/A/1',
    propertyTaxNo: 'PTX-789456',
    documentNo: 'DOC-2024-456',
    landArea: '2400 sq.ft',
    constructionType: 'RCC',
    buildingType: 'Residential',
    buildingName: 'Lakshmi Nilayam',
    builtUpArea: '1800 sq.ft',
    floors: 2,
    flatNo: '-',
    ownerName: 'Ramesh Kumar',
    fatherName: 'Venkat Rao',
    aadhaarNo: 'XXXX-XXXX-4567',
    locality: 'Gandhi Nagar, Street 5',
    wardName: 'Ward 12',
    ulbName: 'Municipal Corporation',
    revenueVillage: 'Kondapur',
    surveyorName: 'K. Suresh',
    surveyDate: '15-Jan-2024',
    additionalInfo: 'Corner plot with east facing',
  },
  {
    id: 'PROP-2024-002',
    layoutNo: 'RLP-789/2022',
    oldSurveyNo: '456/B/2',
    propertyTaxNo: 'PTX-123789',
    documentNo: 'DOC-2023-789',
    landArea: '1200 sq.ft',
    constructionType: 'Load Bearing',
    buildingType: 'Commercial',
    buildingName: 'Sri Sai Complex',
    builtUpArea: '1000 sq.ft',
    floors: 1,
    flatNo: 'Shop 3',
    ownerName: 'Ramesh Kumar',
    fatherName: 'Venkat Rao',
    aadhaarNo: 'XXXX-XXXX-4567',
    locality: 'Main Road',
    wardName: 'Ward 8',
    ulbName: 'Municipal Corporation',
    revenueVillage: 'Madhapur',
    surveyorName: 'P. Naidu',
    surveyDate: '10-Mar-2023',
    additionalInfo: 'Commercial property on main road',
  },
];

const PropertyRecords = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
              Property Records
            </h1>
            <p className="text-muted-foreground">
              View and download your property and land records
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {propertyData.map((property) => (
          <div key={property.id} className="gov-card">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-border mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent rounded-xl">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading font-semibold text-foreground text-lg">
                    {property.buildingName}
                  </h2>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {property.locality}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <GovButton size="sm" variant="outline">
                  <Eye className="w-4 h-4" />
                  View Details
                </GovButton>
                <GovButton size="sm">
                  <Download className="w-4 h-4" />
                  Download
                </GovButton>
              </div>
            </div>

            {/* Property Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[
                { label: 'Property ID', value: property.id },
                { label: 'Layout LP No/RLP/IPLP', value: property.layoutNo },
                { label: 'Old Survey No', value: property.oldSurveyNo },
                { label: 'Property Tax No', value: property.propertyTaxNo },
                { label: 'Document/PPB No', value: property.documentNo },
                { label: 'Land/Plot Area', value: property.landArea },
                { label: 'Construction Type', value: property.constructionType },
                { label: 'Building Type', value: property.buildingType },
                { label: 'Built-Up Area', value: property.builtUpArea },
                { label: 'Number of Floors', value: property.floors },
                { label: 'Flat Number', value: property.flatNo },
                { label: 'Owner Name', value: property.ownerName },
                { label: 'Father Name', value: property.fatherName },
                { label: 'Aadhaar Number', value: property.aadhaarNo },
                { label: 'Ward Name', value: property.wardName },
                { label: 'ULB Name', value: property.ulbName },
                { label: 'Revenue Village', value: property.revenueVillage },
                { label: 'Surveyor Name', value: property.surveyorName },
                { label: 'Date of Survey', value: property.surveyDate },
                { label: 'Additional Info', value: property.additionalInfo },
              ].map((field) => (
                <div key={field.label} className="p-3 bg-secondary rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">{field.label}</p>
                  <p className="font-medium text-foreground text-sm">{field.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default PropertyRecords;
