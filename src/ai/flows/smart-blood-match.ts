// This is an auto-generated file from Firebase Studio.
'use server';

/**
 * @fileOverview This file defines a Genkit flow for smart blood matching.
 *
 * The flow intelligently suggests a short list of nearby donors with compatible blood types in critical situations.
 * The LLM acts as a tool, determining whether to include or exclude users from a proposed blood donation match based on up-to-date donor profiles.
 *
 * @exported
 * - `smartBloodMatch` - A function that initiates the smart blood matching process.
 * - `SmartBloodMatchInput` - The input type for the `smartBloodMatch` function.
 * - `SmartBloodMatchOutput` - The output type for the `smartBloodMatch` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartBloodMatchInputSchema = z.object({
  patientBloodType: z
    .string()
    .describe('The blood type of the patient (e.g., A+, B-, O+).'),
  patientLocation: z
    .string()
    .describe('The location of the patient (e.g., city, state).'),
  donorProfiles: z.array(
    z.object({
      donorId: z.string().describe('The unique identifier of the donor.'),
      donorName: z.string().describe('The name of the donor.'),
      donorBloodType: z.string().describe('The blood type of the donor.'),
      donorLocation: z.string().describe('The location of the donor.'),
      lastDonationDate: z
        .string()
        .describe('The date of the donor\'s last donation (YYYY-MM-DD).'),
      healthConditions: z
        .string()
        .describe('Any relevant health conditions of the donor.'),
      availability: z.string().describe('The availability of the donor.'),
    })
  ).describe('An array of potential donor profiles.'),
});

export type SmartBloodMatchInput = z.infer<typeof SmartBloodMatchInputSchema>;

const SmartBloodMatchOutputSchema = z.object({
  suggestedDonors: z.array(
    z.object({
      donorId: z.string().describe('The unique identifier of the suggested donor.'),
      reason: z.string().describe('The reason for suggesting this donor.'),
    })
  ).describe('A list of suggested donor IDs and reasons for suggesting them.'),
});

export type SmartBloodMatchOutput = z.infer<typeof SmartBloodMatchOutputSchema>;

async function smartBloodMatch(input: SmartBloodMatchInput): Promise<SmartBloodMatchOutput> {
  return smartBloodMatchFlow(input);
}

const bloodMatchPrompt = ai.definePrompt({
  name: 'bloodMatchPrompt',
  input: {schema: SmartBloodMatchInputSchema},
  output: {schema: SmartBloodMatchOutputSchema},
  prompt: `You are an AI assistant specialized in suggesting suitable blood donors for patients in urgent need.

  Given the patient's blood type ({{{patientBloodType}}}) and location ({{{patientLocation}}}), and a list of potential donor profiles, your task is to intelligently suggest a short list of nearby donors with compatible blood types.  The list of donors should be in the 'suggestedDonors' array.

  Consider the following factors when suggesting donors:
  - **Blood Type Compatibility:** Ensure the donor's blood type is compatible with the patient's.
  - **Location:** Prioritize donors who are nearby the patient.
  - **Last Donation Date:**  Exclude donors who have donated recently.
  - **Health Conditions:**  Exclude donors with health conditions that may affect blood quality.
  - **Availability:**  Consider the donor's current availability.

  Here are the potential donor profiles:
  {{#each donorProfiles}}
  - Donor ID: {{{donorId}}}, Name: {{{donorName}}}, Blood Type: {{{donorBloodType}}}, Location: {{{donorLocation}}}, Last Donation Date: {{{lastDonationDate}}}, Health Conditions: {{{healthConditions}}}, Availability: {{{availability}}}
  {{/each}}
  `,
});

const smartBloodMatchFlow = ai.defineFlow(
  {
    name: 'smartBloodMatchFlow',
    inputSchema: SmartBloodMatchInputSchema,
    outputSchema: SmartBloodMatchOutputSchema,
  },
  async input => {
    const {output} = await bloodMatchPrompt(input);
    return output!;
  }
);

export {smartBloodMatch};

