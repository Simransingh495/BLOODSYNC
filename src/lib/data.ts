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
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    role: 'donor',
    bloodType: 'O+',
    location: 'Delhi, IN',
    availability: 'Available',
    lastDonation: '2023-11-15',
    healthConditions: 'None',
    avatarUrl: avatar1,
  },
  {
    id: 'usr_002',
    name: 'Rohan Gupta',
    email: 'rohan.gupta@example.com',
    role: 'donor',
    bloodType: 'A-',
    location: 'Mumbai, IN',
    availability: 'Available',
    lastDonation: '2024-01-20',
    healthConditions: 'None',
    avatarUrl: avatar2,
  },
  {
    id: 'usr_003',
    name: 'Anjali Mehta',
    email: 'anjali.m@example.com',
    role: 'patient',
    bloodType: 'B+',
    location: 'Bangalore, IN',
    availability: 'Unavailable',
    lastDonation: 'N/A',
    healthConditions: 'Anemia',
    avatarUrl: avatar3,
  },
  {
    id: 'usr_004',
    name: 'Vikram Singh',
    email: 'vikram.s@example.com',
    role: 'donor',
    bloodType: 'AB+',
    location: 'Delhi, IN',
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
    name: 'Sneha Patel',
    email: 'sneha.p@example.com',
    role: 'donor',
    bloodType: 'O-',
    location: 'Delhi, IN',
    availability: 'Available',
    lastDonation: '2024-02-10',
    healthConditions: 'None',
    avatarUrl: avatar4,
  },
  {
    id: 'usr_007',
    name: 'Arjun Kumar',
    email: 'arjun.k@example.com',
    role: 'donor',
    bloodType: 'A+',
    location: 'Delhi, IN',
    availability: 'Available',
    lastDonation: '2023-12-25',
    healthConditions: 'High blood pressure',
    avatarUrl: avatar6,
  },
];

export const bloodRequests: BloodRequest[] = [
  {
    id: 'req_001',
    patientName: 'Aarav Desai',
    bloodType: 'B+',
    location: 'Bangalore, IN',
    urgency: 'High',
    status: 'Pending',
    createdAt: '2024-07-28',
  },
  {
    id: 'req_002',
    patientName: 'Ishaan Reddy',
    bloodType: 'O-',
    location: 'Hyderabad, IN',
    urgency: 'Medium',
    status: 'Fulfilled',
    createdAt: '2024-07-25',
  },
  {
    id: 'req_003',
    patientName: 'Myra Iyer',
    bloodType: 'A+',
    location: 'Chennai, IN',
    urgency: 'Low',
    status: 'Pending',
    createdAt: '2024-07-29',
  },
   {
    id: 'req_004',
    patientName: 'Vivaan Joshi',
    bloodType: 'AB-',
    location: 'Delhi, IN',
    urgency: 'High',
    status: 'Cancelled',
    createdAt: '2024-07-20',
  },
];

export const donations: Donation[] = [
  {
    id: 'don_001',
    donorId: 'usr_002',
    donorName: 'Rohan Gupta',
    bloodType: 'A-',
    donationDate: '2024-07-26',
    location: 'Hyderabad, IN',
  },
  {
    id: 'don_002',
    donorId: 'usr_001',
    donorName: 'Priya Sharma',
    bloodType: 'O+',
    donationDate: '2023-11-15',
    location: 'Delhi, IN',
  },
  {
    id: 'don_003',
    donorId: 'usr_004',
    donorName: 'Vikram Singh',
    bloodType: 'AB+',
    donationDate: '2024-05-01',
    location: 'Delhi, IN',
  },
];
