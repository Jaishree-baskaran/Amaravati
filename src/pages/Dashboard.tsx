import DashboardLayout from '@/components/DashboardLayout';
import {
  Building2,
  Users,
  FileText,
  Settings,
  TrendingUp,
  Bell,
  Calendar,
  Download,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  {
    to: '/property-records',
    icon: Building2,
    title: 'Property Records',
    description: 'View your land and property details',
    count: '3 Properties',
  },
  {
    to: '/owner-info',
    icon: Users,
    title: 'Owner/Family Info',
    description: 'Family and personal information',
    count: '4 Members',
  },
  {
    to: '/certificates',
    icon: FileText,
    title: 'Certificates & Schemes',
    description: 'Download certificates and documents',
    count: '8 Documents',
  },
  {
    to: '/profile',
    icon: Settings,
    title: 'Profile Settings',
    description: 'Manage your account preferences',
    count: '2 Pending',
  },
];

const recentActivities = [
  {
    icon: Download,
    title: 'Property Tax Receipt Downloaded',
    date: '2 hours ago',
  },
  {
    icon: FileText,
    title: 'Income Certificate Applied',
    date: 'Yesterday',
  },
  {
    icon: Bell,
    title: 'PM Awas Yojana Status Updated',
    date: '3 days ago',
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
          Welcome Ramesh!
        </h1>
        <p className="text-muted-foreground">
          Access your government records and services from one place
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Properties', value: '3', icon: Building2, trend: '+1 new' },
          { label: 'Schemes', value: '5', icon: TrendingUp, trend: 'Active' },
          { label: 'Notifications', value: '4', icon: Bell, trend: 'Unread' },
        ].map((stat) => (
          <div key={stat.label} className="gov-card">
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 bg-accent rounded-lg">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-primary bg-accent px-2 py-1 rounded-full">
                {stat.trend}
              </span>
            </div>
            <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Links Grid */}
      <div className="mb-8">
        <h2 className="text-lg font-heading font-semibold text-foreground mb-4">Quick Access</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="gov-card group hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <link.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{link.description}</p>
                  <span className="text-xs font-medium text-primary">{link.count}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="gov-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-heading font-semibold text-foreground">
              Recent Activity
            </h2>
            <button className="text-sm text-primary font-medium hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center gap-3 py-2">
                <div className="p-2 bg-secondary rounded-lg">
                  <activity.icon className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming */}
        <div className="gov-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-heading font-semibold text-foreground">
              Important Dates
            </h2>
            <Calendar className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="space-y-3">
            {[
              { title: 'Property Tax Due', date: 'March 31, 2026', status: 'Upcoming' },
              { title: 'Scheme Renewal', date: 'April 15, 2026', status: 'Pending' },
              { title: 'Survey Scheduled', date: 'May 1, 2026', status: 'Confirmed' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-secondary rounded-lg"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>
                <span className="text-xs font-medium text-primary bg-accent px-2 py-1 rounded-full">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
