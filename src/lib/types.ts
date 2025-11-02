export type User = {
  id: string;
  name: string;
  email: string;
  role: 'donor' | 'patient' | 'admin';
  bloodType: string;
  location: string;
  availability: 'Available' | 'Unavailable';
  lastDonation: string;
  healthConditions: string;
  avatarUrl: string;
};

export type BloodRequest = {
  id: string;
  patientName: string;
  bloodType: string;
  location: string;
  urgency: 'Low' | 'Medium' | 'High';
  status: 'Pending' | 'Fulfilled' | 'Cancelled';
  createdAt: string;
};

export type Donation = {
  id: string;
  donorId: string;
  donorName: string;
  bloodType: string;
  donationDate: string;
  location: string;
};

export const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
