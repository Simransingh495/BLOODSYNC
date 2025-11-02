import { PlaceHolderImages } from './placeholder-images';
import type { User, BloodRequest, Donation } from './types';

const avatar1 = PlaceHolderImages.find(img => img.id === 'avatar-1')?.imageUrl || '';
const avatar2 = PlaceHolderImages.find(img => img.id === 'avatar-2')?.imageUrl || '';
const avatar3 = PlaceHolderImages.find(img => img.id === 'avatar-3')?.imageUrl || '';
const avatar4 = PlaceHolderImages.find(img => img.id === 'avatar-4')?.imageUrl || '';
const avatar5 = PlaceHolderImages.find(img => img.id === 'avatar-5')?.imageUrl || '';
const avatar6 = PlaceHolderImages.find(img => img.id === 'avatar-6')?.imageUrl || '';
const adminAvatar = PlaceHolderImages.find(img => img.id === 'avatar-admin')?.imageUrl || '';

export const users: User[] = [
  {
    id: 'usr_001',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'donor',
    bloodType: 'O+',
    location: 'New York, NY',
    availability: 'Available',
    lastDonation: '2023-11-15',
    healthConditions: 'None',
    avatarUrl: avatar1,
  },
  {
    id: 'usr_002',
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'donor',
    bloodType: 'A-',
    location: 'Los Angeles, CA',
    availability: 'Available',
    lastDonation: '2024-01-20',
    healthConditions: 'None',
    avatarUrl: avatar2,
  },
  {
    id: 'usr_003',
    name: 'Emily Johnson',
    email: 'emily.j@example.com',
    role: 'patient',
    bloodType: 'B+',
    location: 'Chicago, IL',
    availability: 'Unavailable',
    lastDonation: 'N/A',
    healthConditions: 'Anemia',
    avatarUrl: avatar3,
  },
  {
    id: 'usr_004',
    name: 'Michael Brown',
    email: 'michael.b@example.com',
    role: 'donor',
    bloodType: 'AB+',
    location: 'New York, NY',
    availability: 'Unavailable',
    lastDonation: '2024-05-01',
    healthConditions: 'None',
    avatarUrl: avatar5,
  },
  {
    id: 'usr_005',
    name: 'Admin User',
    email: 'admin@bloodsync.com',
    role: 'admin',
    bloodType: 'N/A',
    location: 'Remote',
    availability: 'Available',
    lastDonation: 'N/A',
    healthConditions: 'N/A',
    avatarUrl: adminAvatar,
  },
    {
    id: 'usr_006',
    name: 'Sarah Wilson',
    email: 'sarah.w@example.com',
    role: 'donor',
    bloodType: 'O-',
    location: 'New York, NY',
    availability: 'Available',
    lastDonation: '2024-02-10',
    healthConditions: 'None',
    avatarUrl: avatar4,
  },
  {
    id: 'usr_007',
    name: 'David Lee',
    email: 'david.l@example.com',
    role: 'donor',
    bloodType: 'A+',
    location: 'New York, NY',
    availability: 'Available',
    lastDonation: '2023-12-25',
    healthConditions: 'High blood pressure',
    avatarUrl: avatar6,
  },
];

export const bloodRequests: BloodRequest[] = [
  {
    id: 'req_001',
    patientName: 'Alice Williams',
    bloodType: 'B+',
    location: 'Chicago, IL',
    urgency: 'High',
    status: 'Pending',
    createdAt: '2024-07-28',
  },
  {
    id: 'req_002',
    patientName: 'Robert Garcia',
    bloodType: 'O-',
    location: 'Houston, TX',
    urgency: 'Medium',
    status: 'Fulfilled',
    createdAt: '2024-07-25',
  },
  {
    id: 'req_003',
    patientName: 'Linda Martinez',
    bloodType: 'A+',
    location: 'Phoenix, AZ',
    urgency: 'Low',
    status: 'Pending',
    createdAt: '2024-07-29',
  },
   {
    id: 'req_004',
    patientName: 'James Rodriguez',
    bloodType: 'AB-',
    location: 'New York, NY',
    urgency: 'High',
    status: 'Cancelled',
    createdAt: '2024-07-20',
  },
];

export const donations: Donation[] = [
  {
    id: 'don_001',
    donorId: 'usr_002',
    donorName: 'John Smith',
    bloodType: 'A-',
    donationDate: '2024-07-26',
    location: 'Houston, TX',
  },
  {
    id: 'don_002',
    donorId: 'usr_001',
    donorName: 'Jane Doe',
    bloodType: 'O+',
    donationDate: '2023-11-15',
    location: 'New York, NY',
  },
  {
    id: 'don_003',
    donorId: 'usr_004',
    donorName: 'Michael Brown',
    bloodType: 'AB+',
    donationDate: '2024-05-01',
    location: 'New York, NY',
  },
];
