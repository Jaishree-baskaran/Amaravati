import DashboardLayout from '@/components/DashboardLayout';
import { GovButton } from '@/components/ui/gov-button';
import { GovInput } from '@/components/ui/gov-input';
import {
  User,
  MapPin,
  Phone,
  Lock,
  Settings,
  ChevronDown,
  ChevronRight,
  Edit2,
  Save,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type CategoryKey = 'personal' | 'address' | 'contact' | 'security' | 'preferences';

interface Category {
  id: CategoryKey;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  subtopics: {
    id: string;
    title: string;
    fields: { label: string; value: string; editable?: boolean }[];
  }[];
}

const categories: Category[] = [
  {
    id: 'personal',
    title: 'Personal Details',
    icon: User,
    subtopics: [
      {
        id: 'basic',
        title: 'Basic Information',
        fields: [
          { label: 'Full Name', value: 'Ramesh Kumar', editable: true },
          { label: 'Father Name', value: 'Venkat Rao' },
          { label: 'Date of Birth', value: '15-May-1986' },
          { label: 'Gender', value: 'Male' },
          { label: 'Aadhaar Number', value: 'XXXX-XXXX-4567' },
        ],
      },
      {
        id: 'identity',
        title: 'Identity Documents',
        fields: [
          { label: 'PAN Number', value: 'ABCDE1234F' },
          { label: 'Voter ID', value: 'ABC1234567' },
          { label: 'Driving License', value: 'TS07-20180012345' },
        ],
      },
    ],
  },
  {
    id: 'address',
    title: 'Address & Location',
    icon: MapPin,
    subtopics: [
      {
        id: 'current',
        title: 'Current Address',
        fields: [
          { label: 'House/Flat No', value: '12-3-456', editable: true },
          { label: 'Street/Colony', value: 'Gandhi Nagar, Street 5', editable: true },
          { label: 'Ward', value: 'Ward 12' },
          { label: 'City/Town', value: 'Hyderabad' },
          { label: 'District', value: 'Hyderabad' },
          { label: 'State', value: 'Telangana' },
          { label: 'Pincode', value: '500032', editable: true },
        ],
      },
      {
        id: 'permanent',
        title: 'Permanent Address',
        fields: [
          { label: 'Village/Town', value: 'Kondapur' },
          { label: 'Mandal', value: 'Serilingampally' },
          { label: 'District', value: 'Rangareddy' },
          { label: 'State', value: 'Telangana' },
        ],
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact & Communication',
    icon: Phone,
    subtopics: [
      {
        id: 'phone',
        title: 'Phone Numbers',
        fields: [
          { label: 'Primary Mobile', value: '+91 98765 43210', editable: true },
          { label: 'Alternate Mobile', value: '+91 87654 32109', editable: true },
          { label: 'Landline', value: '040-23456789' },
        ],
      },
      {
        id: 'email',
        title: 'Email Addresses',
        fields: [
          { label: 'Primary Email', value: 'ramesh.kumar@email.com', editable: true },
          { label: 'Alternate Email', value: 'ramesh.k@work.com', editable: true },
        ],
      },
    ],
  },
  {
    id: 'security',
    title: 'Security & Login',
    icon: Lock,
    subtopics: [
      {
        id: 'auth',
        title: 'Authentication',
        fields: [
          { label: 'Login Mobile', value: '+91 98765 43210' },
          { label: 'Last Login', value: '06-Feb-2026, 10:30 AM' },
          { label: 'Account Status', value: 'Active' },
        ],
      },
      {
        id: 'sessions',
        title: 'Active Sessions',
        fields: [
          { label: 'Current Device', value: 'Chrome on Windows' },
          { label: 'Location', value: 'Hyderabad, India' },
          { label: 'Session Started', value: '06-Feb-2026, 10:30 AM' },
        ],
      },
    ],
  },
  {
    id: 'preferences',
    title: 'Preferences & Language',
    icon: Settings,
    subtopics: [
      {
        id: 'language',
        title: 'Language Settings',
        fields: [
          { label: 'Preferred Language', value: 'English', editable: true },
          { label: 'Secondary Language', value: 'Telugu', editable: true },
        ],
      },
      {
        id: 'notifications',
        title: 'Notifications',
        fields: [
          { label: 'SMS Alerts', value: 'Enabled', editable: true },
          { label: 'Email Notifications', value: 'Enabled', editable: true },
          { label: 'Push Notifications', value: 'Disabled', editable: true },
        ],
      },
    ],
  },
];

const Profile = () => {
  const [expandedCategory, setExpandedCategory] = useState<CategoryKey | null>('personal');
  const [expandedSubtopic, setExpandedSubtopic] = useState<string | null>('basic');
  const [isEditing, setIsEditing] = useState(false);

  const toggleCategory = (categoryId: CategoryKey) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    setExpandedSubtopic(null);
  };

  const toggleSubtopic = (subtopicId: string) => {
    setExpandedSubtopic(expandedSubtopic === subtopicId ? null : subtopicId);
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
              Profile & Settings
            </h1>
            <p className="text-muted-foreground">
              Manage your personal information, preferences, and linked schemes
            </p>
          </div>
          <GovButton onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? (
              <>
                <Save className="w-4 h-4" />
                Save Changes
              </>
            ) : (
              <>
                <Edit2 className="w-4 h-4" />
                Edit Profile
              </>
            )}
          </GovButton>
        </div>
      </div>

      {/* Profile Card */}
      <div className="gov-card mb-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-primary" />
          </div>
          <div className="text-center md:text-left flex-1">
            <h2 className="text-xl font-heading font-bold text-foreground">Ramesh Kumar</h2>
            <p className="text-muted-foreground">S/o Venkat Rao</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3">
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Hyderabad, Telangana
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-accent rounded-xl">
            <span className="text-xs text-muted-foreground">Profile Completion</span>
            <span className="text-2xl font-heading font-bold text-primary">85%</span>
          </div>
        </div>
      </div>

      {/* Categories Accordion */}
      <div className="space-y-3">
        {categories.map((category) => {
          const isExpanded = expandedCategory === category.id;
          const Icon = category.icon;
          
          return (
            <div key={category.id} className="gov-card p-0 overflow-hidden">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-heading font-semibold text-foreground">
                    {category.title}
                  </span>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                )}
              </button>

              {/* Subtopics */}
              {isExpanded && (
                <div className="border-t border-border">
                  {category.subtopics.map((subtopic) => {
                    const isSubExpanded = expandedSubtopic === subtopic.id;
                    
                    return (
                      <div key={subtopic.id} className="border-b border-border last:border-0">
                        <button
                          onClick={() => toggleSubtopic(subtopic.id)}
                          className="w-full flex items-center justify-between p-4 pl-14 hover:bg-secondary/30 transition-colors"
                        >
                          <span className="text-sm font-medium text-foreground">
                            {subtopic.title}
                          </span>
                          {isSubExpanded ? (
                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                          )}
                        </button>

                        {/* Fields */}
                        {isSubExpanded && (
                          <div className="px-4 pb-4 pl-14">
                            <div className="grid md:grid-cols-2 gap-3">
                              {subtopic.fields.map((field) => (
                                <div key={field.label} className="p-3 bg-secondary rounded-lg">
                                  <p className="text-xs text-muted-foreground mb-1">{field.label}</p>
                                  {isEditing && field.editable ? (
                                    <GovInput
                                      defaultValue={field.value}
                                      className="h-9 text-sm"
                                    />
                                  ) : (
                                    <p className="font-medium text-foreground text-sm">{field.value}</p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
};

export default Profile;
