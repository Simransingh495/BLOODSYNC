export type HospitalData = {
    name: string;
    address: string;
    lat: number;
    lng: number;
};

export const hospitals: HospitalData[] = [
    // Delhi
    {
        name: "AIIMS, Delhi - Blood Bank",
        address: "All India Institute of Medical Sciences, Ansari Nagar, New Delhi, Delhi 110029",
        lat: 28.5663,
        lng: 77.2115
    },
    {
        name: "Sir Ganga Ram Hospital Blood Bank",
        address: "Rajinder Nagar, New Delhi, Delhi 110060",
        lat: 28.6366,
        lng: 77.1738
    },
    {
        name: "Indraprastha Apollo Hospitals",
        address: "Sarita Vihar, Delhi Mathura Road, New Delhi, Delhi 110076",
        lat: 28.5376,
        lng: 77.2882
    },
    // Mumbai
    {
        name: "Tata Memorial Hospital - Blood Bank",
        address: "Dr Ernest Borges Rd, Parel East, Parel, Mumbai, Maharashtra 400012",
        lat: 19.0068,
        lng: 72.8427
    },
    {
        name: "KEM Hospital Blood Bank",
        address: "Acharya Donde Marg, Parel, Mumbai, Maharashtra 400012",
        lat: 19.0055,
        lng: 72.8422
    },
    {
        name: "Lilavati Hospital & Research Centre",
        address: "A-791, Bandra Reclamation, Bandra West, Mumbai, Maharashtra 400050",
        lat: 19.0600,
        lng: 72.8300
    },
    // Bangalore
    {
        name: "Narayana Institute of Cardiac Sciences",
        address: "258/A, Bommasandra Industrial Area, Anekal Taluk, Bengaluru, Karnataka 560099",
        lat: 12.8272,
        lng: 77.6698
    },
    {
        name: "Manipal Hospital, Old Airport Road",
        address: "98, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560017",
        lat: 12.9610,
        lng: 77.6499
    },
    {
        name: "Indian Red Cross Society Blood Bank",
        address: "Race Course Rd, High Grounds, Bengaluru, Karnataka 560001",
        lat: 12.9863,
        lng: 77.5898
    },
     // Chennai
    {
        name: "Government General Hospital - Blood Bank",
        address: "Grand Southern Trunk Rd, Park Town, Chennai, Tamil Nadu 600003",
        lat: 13.0843,
        lng: 80.2755
    },
    {
        name: "Apollo Hospitals, Greams Road",
        address: "21, Greams Lane, Off Greams Road, Thousand Lights, Chennai, Tamil Nadu 600006",
        lat: 13.0610,
        lng: 80.2570
    },
    // Kolkata
    {
        name: "Central Blood Bank, Kolkata",
        address: "205, A.J.C. Bose Road, Kolkata, West Bengal 700017",
        lat: 22.5448,
        lng: 88.3524
    },
    {
        name: "Apollo Gleneagles Hospitals",
        address: "58, Canal Circular Rd, Kadapara, Phool Bagan, Kankurgachi, Kolkata, West Bengal 700054",
        lat: 22.5746,
        lng: 88.3977
    }
];
