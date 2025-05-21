// Define MajorCredits interface with brand to differentiate
export interface MajorCredits {
  credits: number;
  brand: 'major';  // unique identifier for MajorCredits
}

// Define MinorCredits interface with brand to differentiate
export interface MinorCredits {
  credits: number;
  brand: 'minor';  // unique identifier for MinorCredits
}

// Function to sum two MajorCredits values and return a MajorCredits type
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',
  };
}

// Function to sum two MinorCredits values and return a MinorCredits type
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',
  };
}
