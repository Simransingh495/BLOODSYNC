// This is an auto-generated file from Firebase Studio.
'use server';

import { smartBloodMatch } from '@/ai/flows/smart-blood-match';
import { users } from '@/lib/data';
import type { SmartBloodMatchInput } from '@/ai/flows/smart-blood-match';

export async function findSmartMatch(patientBloodType: string, patientLocation: string) {
  const donorProfiles = users
    .filter(u => u.role === 'donor')
    .map(donor => ({
      donorId: donor.id,
      donorName: donor.name,
      donorBloodType: donor.bloodType,
      donorLocation: donor.location,
      lastDonationDate: donor.lastDonation || '2023-01-01',
      healthConditions: donor.healthConditions || 'None',
      availability: donor.availability,
    }));

  const input: SmartBloodMatchInput = {
    patientBloodType,
    patientLocation,
    donorProfiles,
  };

  try {
    const result = await smartBloodMatch(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in smartBloodMatch flow:', error);
    return { success: false, error: 'Failed to find matches. Please try again later.' };
  }
}
